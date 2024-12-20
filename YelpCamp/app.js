const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError");
const { campgroundSchema } = require("./schemas.js");
const ejsMate = require("ejs-mate");
const morgan = require("morgan");
const catchAsync = require("./utils/catchAsync");

const Review = require("./models/review.js");
const Campground = require("./models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

const validateCampground = (req, res, next) => {
	//server-side validations
	const { error } = campgroundSchema.validate(req.body);
	if (error) {
		const msg = error.details.map((el) => el.message).join(",");
		throw new ExpressError(msg, 400);
	} else {
		next();
	}
};

app.get("/", (req, res) => {
	// res.send("Hello  From YelpCamp");
	res.render("home");
});

app.get(
	"/campgrounds",
	catchAsync(async (req, res) => {
		const campgrounds = await Campground.find({});
		res.render("campgrounds/index", { campgrounds });
	})
);

app.get("/campgrounds/new", (req, res) => {
	res.render("campgrounds/new");
});

app.post(
	"/campgrounds",
	validateCampground,
	catchAsync(async (req, res) => {
		// if (!req.body.campground)
		// 	throw new ExpressError("Invalid Campground Data", 400);
		const campground = new Campground(req.body.campground);
		await campground.save();
		res.redirect(`/campgrounds/${campground._id}`);
	})
);

app.get(
	"/campgrounds/:id",
	catchAsync(async (req, res) => {
		const campground = await Campground.findById(req.params.id);
		res.render("campgrounds/show", { campground });
	})
);

app.get(
	"/campgrounds/:id/edit",
	catchAsync(async (req, res) => {
		const campground = await Campground.findById(req.params.id);
		res.render("campgrounds/edit", { campground });
	})
);

app.put(
	"/campgrounds/:id",
	validateCampground,
	catchAsync(async (req, res) => {
		const { id } = req.params;
		const campground = await Campground.findByIdAndUpdate(id, {
			...req.body.campground,
		});
		res.redirect(`/campgrounds/${campground._id}`);
	})
);

app.delete(
	"/campgrounds/:id",
	catchAsync(async (req, res) => {
		const { id } = req.params;
		await Campground.findByIdAndDelete(id);
		res.redirect("/campgrounds");
	})
);

app.post(
	"/campgrounds/:id/reviews",
	catchAsync(async (req, res) => {
		const campground = await Campground.findById(req.params.id);
		const review = new Review(req.body.review);

		campground.reviews.push(review);
		await review.save();
		await campground.save();

		res.redirect(`/campgrounds/${campground._id}`);
	})
);
// app.use((req, res) => {
// 	res.status(404).send("NOT FOUND!");
// });

app.all("*", (req, res, next) => {
	next(new ExpressError("Page Not Found", "404"));
});

app.use((err, req, res, next) => {
	const { message = "Something went wrong", statusCode = 500 } = err;
	if (!err.message) err.message = "Oh no! Something went wrong";
	res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
	console.log("Serving on port 3000");
});

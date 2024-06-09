const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Campground = require("./models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	// res.send("Hello  From YelpCamp");
	res.render("home");
});

app.get("/campgrounds", async (req, res) => {
	const campgrounds = await Campground.find({});
	res.render("campgrounds/index");
});

// app.get("/makecampground", async (req, res) => {
// 	const camp = new Campground({
// 		title: "My Backyard",
// 		description: "cheap camping",
// 	});
// 	await camp.save();
// 	res.send(camp);
// });

app.listen(3000, () => {
	console.log("Serving on port 3000");
});

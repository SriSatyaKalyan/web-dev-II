const express = require("express");
const app = express();
const path = require("path");

//Please use the middleware to parse the request body as encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
	{
		username: "Todd",
		comment: "funny man!",
	},
	{
		username: "Skyler",
		comment: "I am super offended",
	},
];

app.get("/comments", (req, res) => {
	res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
	res.render("comments/new");
});

app.post("/comments", (req, res) => {
	console.log(req.body);
	const { username, comment } = req.body;
	comments.push({ username, comment });
	// res.send("It worked!");
	res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
	res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
	console.log(req.body);
	const { meat, qty } = req.body;
	res.send(`POST /tacos response with meat ${meat} and quantity ${qty}`);
});

app.listen(3000, () => {
	console.log("On port 3000!");
});

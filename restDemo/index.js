const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override");

const { v4: uuid } = require("uuid");
uuid();

//Please use the middleware to parse the request body as encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
	{
		id: uuid(),
		username: "Todd",
		comment: "funny man!",
	},
	{
		id: uuid(),
		username: "Skyler",
		comment: "I am super offended",
	},
	{
		id: uuid(),
		username: "Sk8erboi",
		comment: "Gotcha use those sk8essss",
	},
	{
		id: uuid(),
		username: "wormyblob",
		comment: "There are no wurmms heyar",
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
	comments.push({ username, comment, id: uuid() });
	// res.send("It worked!");
	res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/show", { comment });
});

app.get("/tacos", (req, res) => {
	res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
	console.log(req.body);
	const { meat, qty } = req.body;
	res.send(`POST /tacos response with meat ${meat} and quantity ${qty}`);
});

app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;

	const newCommentText = req.body.comment;
	const foundComment = comments.find((c) => c.id === id);
	foundComment.comment = newCommentText;
	res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
	const { id } = req.params;
	// const foundComment = comments.find((c) => c.id === id);
	comments = comments.filter((c) => c.id !== id);
	res.redirect("/comments");
});

app.listen(3000, () => {
	console.log("On port 3000!");
});

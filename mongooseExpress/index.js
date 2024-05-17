const express = require("express");
const app = express();
const path = require("path");
const Product = require("./models/product");
const mongoose = require("mongoose");
mongoose
	.connect("mongodb://127.0.0.1:27017/farmStand")
	.then(() => console.log("Mongo Connected!"))
	.catch((err) => {
		console.log("Oh no! Mongo not connected");
		console.log(err);
	});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (req, res) => {
	res.send("Woof!");
});

app.listen(3000, () => {
	console.log("App is listening on port 3000");
});

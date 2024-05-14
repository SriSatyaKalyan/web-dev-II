const mongoose = require("mongoose");
mongoose
	.connect("mongodb://127.0.0.1:27017/movieApp")
	.then(() => console.log("Connected!"))
	.catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
	title: String,
	score: Number,
	year: Number,
	rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({
	title: "Amadeus",
	score: 9,
	year: 1986,
	rating: "R",1
});

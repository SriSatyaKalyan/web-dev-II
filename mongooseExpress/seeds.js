const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose
	.connect("mongodb://127.0.0.1:27017/farmStand")
	.then(() => console.log("Mongo Connected!"))
	.catch((err) => {
		console.log("Oh no! Mongo not connected");
		console.log(err);
	});

// const p = new Product({
// 	name: "Ruby Grapefruit",
// 	price: 1.99,
// 	category: "fruit",
// });

// p.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const seedProducts = [
	{
		name: "Fairy Eggplant",
		price: 1.0,
		category: "vegetable",
	},
	{
		name: "Organice Goddess Melon",
		price: 4.99,
		category: "fruit",
	},
	{
		name: "Organic Mini Seedless Watermelon",
		price: 3.99,
		category: "fruit",
	},
	{
		name: "Organice Celery",
		price: 1.5,
		category: "vegetable",
	},
	{
		name: "Chocolate Whole Milk",
		price: 2.69,
		category: "dairy",
	},
];

Product.insertMany(seedProducts)
	.then((p) => {
		console.log(p);
	})
	.catch((e) => {
		console.log(e);
	});

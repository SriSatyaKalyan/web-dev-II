
mongoose
	.connect("mongodb://127.0.0.1:27017/shopApp")
	.then(() => console.log("Connected!"))
	.catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 20,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
	onSale: {
		type: Boolean,
		default: false,
	},
	categories: [String],
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
	name: "Mountain Biker",
	price: 59,
	categories: ["Cycling", "Adventure"],
});
bike.save()
	.then((data) => {
		console.log("It worked!");
		console.log(data);
	})
	.catch((err) => {
		console.log("Oh no error!!");
		console.log(err);
	});

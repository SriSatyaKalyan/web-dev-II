const express = require("express");
const app = express();
// console.dir(app);

//Template response
// app.use(() => {
// 	console.log("We got a new request");
// });

//Adding a request and response
// app.use((req, res) => {
// 	console.log("We got a new request");
// 	// res.send("This is a RESPONSE!");

// 	//Sending a JSON response
// 	res.send({ color: "red" });
// });

app.get("/", (req, res) => {
	res.send("HOMEPAGE!!");
});

app.get("/r/:subreddit", (req, res) => {
	// console.log(req.params);
	const { subreddit } = req.params;
	res.send(`This is a ${subreddit} subreddit`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
	// console.log(req.params);
	const { subreddit, postId } = req.params;
	res.send(`Viewing postId: ${postId} on the ${subreddit} subreddit`);
});

app.get("/cats", (req, res) => {
	// console.log("Cats Request");
	res.send("MEOW!!");
});

//QUERY PARAMS
app.get("/search", (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send("Nothing found");
	} else {
		res.send(`Searching for query param ${q}`);
	}
});

app.get("/dogs", (req, res) => {
	res.send("WOOF!!");
});

app.post("/cats", (req, res) => {
	res.send("POST REQUEST for /cats");
});

app.get("*", (req, res) => {
	res.send("NO ROUTE!!");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

const getStarWarsPerson = async (id) => {
	try {
		const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
		console.log(res.data);
	} catch (e) {
		console.log("Error", e);
	}
};

// getStarWarsPerson(1);
// getStarWarsPerson(4);

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
	const jokeText = await getDadJoke();
	// console.log(jokeText);

	const newLI = document.createElement("LI");
	newLI.append(jokeText);
	jokes.append(newLI);
};

const getDadJoke = async () => {
	const config = { headers: { accept: "application/json" } };
	const res = await axios.get("https://icanhazdadjoke.com/", config);

	return res.data.joke;
};

button.addEventListener("click", addNewJoke);

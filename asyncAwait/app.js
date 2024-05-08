async function hello() {
	console.log("hello!");
}

const sing = async () => {
	throw "PROBLEM!!";
	return "LA LA LA!";
};

// sing()
// 	.then((data) => {
// 		console.log("Promise resolved with: " + data);
// 	})
// 	.catch((err) => {
// 		console.log("Promise rejected!");
// 		console.log(err);
// 	});

const login = async (username, password) => {
	if (!username || !password) throw "Missing Credentials";
	if (password === "corgifeet") return "Welcome";
	throw "Invalid creds!";
};

login("rattata", "corgifeet")
	.then((msg) => {
		console.log("LOGGED IN!");
		console.log(msg);
	})
	.catch((err) => {
		console.log("ERROR");
		console.log(err);
	});

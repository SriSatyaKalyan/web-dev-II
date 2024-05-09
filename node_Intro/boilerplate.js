const fs = require("fs");
// console.log(fs);
const folderName = process.argv[2] || "Project";

// fs.mkdir("dogs", { recursive: true }, (err) => {
// 	console.log("in the callback");
// 	if (err) throw err;
// });

try {
	fs.mkdirSync(folderName);
} catch (e) {
	console.log("The error is: " + e);
}

// console.log("I come after mkdir");

//Creating files inside the folder
try {
	fs.writeFileSync(`${folderName}/index.html`, "");
	fs.writeFileSync(`${folderName}/app.js`, "");
	fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (e) {
	console.log("something went wrong");
	console.log(e);
}

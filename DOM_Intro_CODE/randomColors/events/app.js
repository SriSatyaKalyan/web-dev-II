const makeRandColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
	button.addEventListener("click", function () {
		button.style.backgroundColor = makeRandColor();
	});
}

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log(input.value);
	const catName = input.value;

	const newLI = document.createElement("LI");
	newLI.innerText = catName;
	list.append(newLI);
});

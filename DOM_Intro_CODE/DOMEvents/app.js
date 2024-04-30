const btn = document.querySelector("#v2");

btn.onclick = function () {
	console.log("YOU CLICKED ME!");
};

function scream() {
	console.log("AAAAA");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
	alert("CLICKED!");
});

function twist() {
	console.log("TWIST");
}

function shout() {
	console.log("SHOUT");
}

const tasButton = document.querySelector("#tas");

tasButton.onclick = twist;
tasButton.onclick = shout;

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);

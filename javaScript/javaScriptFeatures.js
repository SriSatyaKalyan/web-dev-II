//DE-STRUCTURING ARRAYS
//de-structuring params
const user = [
	{
		firstName: "Harvey",
		lastName: "Milky",
	},
];

function fullName(user) {
	const { firstName, lastName } = user;
	return `${firstName} ${lastName}`;
}

function fName({ firstName, lastName = "Zilla" }) {
	return `${firstName} ${lastName}`;
}

// const scores = [23, 34, 32, 54, 21];
// const [firstScore, secondScore, ...otherScores] = scores;

//REST
// function sum(...nums) {
// 	return nums.reduce((total, el) => total + el);
// }

// console.log(sum(2, 3, 4));

//SPREAD
//in obj literals
// const feline = { legs: 4, family: "felidae" };
// const canine = { isFurry: true, family: "caninae" };
// const catDog = { ...canine, ...feline };

//in arr literals
// const cats = ["Blue", "Rusty", "Shakespeare"];
// const dogs = ["Doggy", "Doordoodle"];
// const allPets = [...cats]; //copies cats into allPets
// const allPetsTwo = [...cats, ...dogs]; // copies dogs and cats into allPets

// in functions
nums = [1, 2, 3, 4];
// console.log(nums); //prints array
// console.log(...nums); //prints individual elements in nums

// new way to default params
// function rollDie(numSides = 6) {
// 	return Math.floor(Math.random() * numSides) + 1;
// }

// old way to default params
// function rollDie(numSides) {
// 	if (numSides === undefined) numSides = 6;
// 	return Math.floor(Math.random() * numSides) + 1;
// }

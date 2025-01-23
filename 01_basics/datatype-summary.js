// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// const bigNumber = 3456789765526788899n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Hanuman", "Shaktiman",  "Spiderman"]
let myObj = {
    name: "Shivraj",
    age: 25,
}

const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof heros);

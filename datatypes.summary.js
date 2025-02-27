// based on how data is stored and accessed from memory.

// primitive(Call by Value)
// String, Number,Boolean, null,undefined,symbol,BigInt
// Non primitive(call by refrence)
// Array,Object,Function

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

let myYouTubeName = "ManishKumar"
anotherName = "I am switching Job in march 2025"

let user ={
    email
}
// for primitive we receive a copy so if we change the copy the original one remains intact while in 
// non primitive refrence to heap is given so any change in copy is reflected to original value as well.

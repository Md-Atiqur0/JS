//  primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 55455459994245454n


//  Reference (Non primitive)

//  Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Atik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)


//   stack (primitive), Heap (Non-Primitive)

let myGmail = "mdatiqurrahman@gmail.com"
anotherGmail = "jkhrukreh"

console.log(myGmail);
console.log(anotherGmail);
// prefer ecmaScript // types of Operator
// link https://262.ecma-international.org/5.1/#sec-11.4.3
// primitive  
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3  // output number

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = symbol('123')
const anotherId = symbol('123')   // dataTypes: symbol
console.log(id === anotherId);

const bigNumber = 1235485901n  // n for number

// refereance types (nonprimitive)
// Array, Objects, Fumctions 

const heros = ["shaktiman", "naagraj", "amrishpuri"]; // array
// object
letmyObj = 
{
     name: "vishal",
     age: 22,
}

const myFunction = function(){    // dataTypes : function
     console.log("hello world");
}

console.log(typeof bigNumber);  // undefined
console.log(typeof outsideTemp); // object
//primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const value = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; //undefined value 

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber = 234235234536352345n;

//reference type or non- primitive type

//array, objects, functions

const heros = ["shaktiman","superman","perman"];
{
    let myObj = {
        name:"siddharth",
        age:22,
    }

}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myfunction);
console.log(typeof id);




/* javascript is dynamically typed which maeans that the data types
of variables are determined by their values at runtime and can change 
thoughout the program */

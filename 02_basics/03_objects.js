/* A singleton object in JavaScript is a design pattern that ensures a 
class has only one instance throughout the application and provides 
a global point of access to that instance. */

//object literals

// Object.create //constructor method 

const mySym = Symbol("key1")

const JsUser = {
    name:"siddharth",
    "full_name":"siddharthbisht",
    [mySym]:"mykey1",//use square brackets to identify symbol
    age:18,
    location:"Jaipur",
    email:"siddhu123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}
console.log(JsUser.email); // one way to access 
console.log(JsUser["email"]); //second way to access give email in string format
console.log(JsUser["full_name"]);
console.log(JsUser[mySym]);

JsUser.email = "siddhu212@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "siddhu@emailme.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
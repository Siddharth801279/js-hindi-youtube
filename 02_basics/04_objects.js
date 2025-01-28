// how can we declare objects with the help of constructor?

// const tinderUser = new Object(); //its a singleton object


const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.anem = "Somu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularuser = {
    email:"somu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Somu",
            lastname:"don"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2);//assign an empty curly parentheis to store the value otherwise the value will be stored in obj1 its not compulsary refer to mdn docs
//or

const obj3 = {...obj1, ...obj2} //mostly used

console.log(obj3);

//imp
console.log(tinderUser);

console.log(Object.keys(tinderUser));//returns array can be used in looping discuss ahead 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
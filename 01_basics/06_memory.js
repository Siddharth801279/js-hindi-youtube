//Stack memory is used in (primitive datatypes) 
//stack memory means whatever variable you have declared u will get a copy of it.

let myYoutubename = "sidonactionyt";

let anothername = myYoutubename;
anothername = "somukabaap";

console.log(anothername);
console.log(myYoutubename);

// heap memory is used in (non-primitive datatypes)
// the memory defined in heap gives reference of original value 

let userOne = {
    email:"siddhu@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email = "siddhu123@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

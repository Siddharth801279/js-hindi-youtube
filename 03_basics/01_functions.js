// function definition 

function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

//reference execution
sayMyName();


// function addTwoNumbers(num1, num2){ //parameters
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){ //parameters
    // let result = num1+num2;
    // return result;
    // console.log("siddhu"); //function will execute nothing after return statement it will print siddhu its unreachable code  
    //direct method 
    return num1 + num2;  
}
addTwoNumbers(4,7);
addTwoNumbers(4,"7");
addTwoNumbers(3 +"a");
addTwoNumbers(3,null); //arguments

const result = addTwoNumbers(4,7);

// console.log("Result:", result);

//function loginUserMesasge(username = "sid") then it will never execute if statement and it will take sid as default value 
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("siddhu"));
// console.log(loginUserMessage()); // if value is empty


//rest operator 
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500));
// console.log(calculateCartPrice(2));

const user = {
    username: "siddhu",
    price: 199
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username:"sid",
    price:399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
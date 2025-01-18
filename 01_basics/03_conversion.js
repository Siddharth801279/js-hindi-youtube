let score = "82abc";
let zero = null;
console.log(typeof score);
console.log(typeof (score)); // both methods are correct 

let valueInNumber = Number(score); // this line makes sure that score is converted to number datatype 
let valueInZero = Number(zero);
console.log(typeof valueInNumber);
console.log(valueInNumber); //output: NaN
console.log(typeof valueInZero);
console.log(valueInZero);//output: 0 

//boolean values : true => 1 or false =>0
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=>true; 0=>false
//"" => false
//"hitesh"=>true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//*********operations**************/

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello "
let str2 = " siddharth"
let str3 = str2 + str1;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);
console.log(+"");

let num1,num2,num3;

num1 = num2 = num3 =2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
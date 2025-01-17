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
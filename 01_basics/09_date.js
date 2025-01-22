// Dates 

let myDate = new Date()
console.log(myDate.toString()); // day, date and time sccordinf to indian standard time
console.log(myDate.toISOString());
console.log(myDate.toDateString()); //day and time
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());//only date 
console.log(myDate.toLocaleString()); //date and time 

console.log(typeof myDate); //object


// to create custom dates

//let myCreateddate =  new Date(2023, 0, 23);
//let myCreateddate =  new Date(2023, 0, 23, 5, 3);
//let myCreateddate =  new Date("2023-01-14");
let myCreateddate =  new Date("01-14-2023");
//console.log(myCreateddate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate); 
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default',{
    weekday:"long", //more customized format
    day:"numeric" 
})

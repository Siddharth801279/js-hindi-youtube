const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batmamn"];

// marvel_heroes.push(dc_heroes);//array ke andar another array merge ho jaegi 

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// concat method 
// const allheroes = marvel_heroes.concat(dc_heroes);
// console.log(allheroes);


//spread method
const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("siddahrth"));
console.log(Array.from("siddhu"));
console.log(Array.from({name: "siddhu"}));//interesting it can't convert it to array intead it gives an empty array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
const name = "siddhu";
const repoCount = 50;

// console.log(name + repoCount + "Value"); outdated syntax

console.log(`hello my name us ${name} and my repocount is ${repoCount}`);

const gameName = new String('sidd-har-th');
console.log(gameName[7]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "  siddharthbisht  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://siddhu.com/sid%20bisht";

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));
console.log(url.includes('siddhu'));

console.log(gameName.split('-'));



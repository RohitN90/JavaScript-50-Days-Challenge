//Arrays Methods and Functions

const marvel = ["spiderMan","ironMan"];
const dc = ["BatMan","SuperMan"];

// marvel.push(dc);

//The push method will consider the variable as a single element so that we are getting the array in array.
// console.log(marvel);

//To avoid the problem we use the concat funvtion or method. and it will returns new array
const allHeros = marvel.concat(dc);

console.log(allHeros);

//There is another method to merge or concat two arrays.
const new_Hero = [...marvel, ...dc];

console.log(new_Hero);

const arr = [1,2,3,[4,5,6],7,8,9,[5,6,9,[5,6,1,2]],6,3,2];

const newArr = arr.flat(Infinity);

console.log(newArr);

//To convert any dataType into array we use Array.from
console.log(Array.from("Rohit VArdhan"));
console.log(Array.from({name : "Rohit"}));

//If you want to create an array with elements or variables we use of method.
let r = "Rohit";
let a = "Akki";
let j = "Jaswanth i";
let t = "Tarun";
let s = "Slice Sreemonth";

console.log(Array.of(r,a,j,t,s));
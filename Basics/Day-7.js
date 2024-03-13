//Today i am learning strings.

//One way of declareing string
let name = "Rohit";

//Useing new Keyword.
let newName = new String("Hello");

let age = 21;

console.log(name + age);// This type of code is right but not looking good.
// Or outdated.

//For morden code use backTics ` ` <-- like this (before 1 key).

console.log(`my name is ${name} and Age is ${age}`); // Look's better than adding " + " icon in between.

const gname = "My-name-is-rohit-vardhan-90";
//To access the keys use [] after variable name.

console.log(name[2]);

//The function of the string are in the proto its means in the object.

console.log(name.__proto__); // print this in the google console.

console.log(name.toUpperCase());// This function in the string prototypes or {}.

console.log(name.toLowerCase());

console.log(name.charAt(3)); // Used to find the character at which index.

console.log(name.indexOf("h"));// Used to find the index of the character.

//used to create a new string from existing string.
const sname = name.substring(0,3);// Here the end value is not included in the variable.
console.log(sname);

const userName = "      teena       ";
console.log(userName);

//Used to eleminate the white spaces and new line spaces in the string.
console.log(userName.trim());

const url = "www.rohit.in/name:rohit%age:30"

//used to replace the value in the string.
console.log(url.replace(':', '-')); // Two parameters (what character to replace, replace value)

//We can ask question like any value/keyword is there in the string.
console.log(url.includes("rohit"));// Return true if there.

console.log(gname.split('-'));

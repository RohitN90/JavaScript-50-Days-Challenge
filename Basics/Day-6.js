//Today i am learning about Data Types summery and Memorys.

//There are two types of sata types like :  1.premitive data type  2.Non premitive data type.

//Premitive Data Type : String, Number, Null, Boolean, undefined, Symbole, BigInt.

const num = 100;
const flo = 10.9;
const name = "Name";
const active = true;
const temp = null;
let i;
const id = Symbol("1234");
const anotherId = Symbol("1234");

console.log(id === anotherId);

const bigInt = 21654984531984n;

// Non-Premitive DataType : Array, Objects, Functions

// JavaScript is a Dynamic Language.

const heros = ["superMan", "SpiderMan"]; // Array

const AboutMe = {
    Name : "Rohit",
    Age : 20,
    Collage : "Lendi"
}; // Object


const newFun = function(){
    console.log('Hello WOrld !');
};// The type of the function is a object-Function in Non-permitive DataType.


//Remember that the type of null is a object. And the type of the array is also is a object.


// <<-------------------------------------------------------------------------------------------------------->>

//There are two types of memory  1.Stack  and  2. Heap memory

//Stack Memory : All permitive DataTypes are uses the Stack Memeory.

let Fname = "Rohit"; // This variable added into the stack.

let Lname = Fname; // Here its create's a copy of the fname in lname.

Lname = "Vardhan"; // Here the lname is decleard as Vardhan.

// When we print the result the two variable have different values as per Stack Memory.

console.log(Fname);
console.log(Lname);

// Heap Memory : All Non-permitive DataType are uses the Heap Memory.

let obj = {
    email : "rohit@gmail.com",
    pas : 1234
}; // Here the values are stored in the heap memory and the variable is declared in stack memory.

let obj1 = obj; // Now the "obj2" will take the reference of the obj from the heap.

obj1.email = "Vardhan@gmail.com"; // we have declared the new value for the obj1.

/* 
But when we print the values of these two variables they have same email. Because it takes the values from the 
heap memory by taking the reference of the "obj" variable.
change in one variable will lead to chaneg in heap memory as well as the values also.

*/

console.log(obj.email);
console.log(obj1.email);

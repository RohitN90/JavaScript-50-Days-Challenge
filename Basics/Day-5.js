//Today I am learning about opearation and comparison in js.

let value = 34;
let negValue = -value;

console.log(negValue);

//These are some common artematic operation :

/*
console.log(2 + 2);
console.log(2 - 1);
console.log(10 / 5);
console.log(2 * 9);
console.log(2**2);
console.log(2 % 3);
*/


let str1 = "Hello ";
let str2 = "Rohit";

let str = str1 + str2;

// console.log(str);

//The string has high priority when we adding string to any number.
console.log("1" + 3);
console.log(1 + "3");
console.log("1" + 3 + 3);

//In this case the number is added first and then add's the string next.
console.log(1 + 3 + "3");

console.log("-------------------------------------------------------------------------");

//These are some comparison we know.

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);
// console.log(2 == 1);

//Now when it come to compari the two different dataType it will blow your mind.

console.log("2" > 1);
console.log("02" > 1);

//When we compare with null.

console.log(null > 0);// return false
console.log(null == 0); // return false

//Here the null is converted into number when we use comparetors with equal sign.
console.log(null >= 0); // It return true.

//Now we are using "===" know as strict check.

console.log("2" == 2); // It will return true. But

// Here the "===" will check weather the two data Type are equal as well as values also.
console.log("2" === 2); // It will return false.

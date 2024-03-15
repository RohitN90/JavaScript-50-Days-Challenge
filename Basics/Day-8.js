//Number and Maths.

//Use Google console to inspect the n no.of method with respective the name.

const score = 900;

const balance = new Number(34);

console.log(score);
console.log(balance);

//used to convert the string to integer or number.
console.log(balance.toString());

console.log(typeof balance.toString());// return type of the value "string"

//used for banking application for decimal values with fixed points.
console.log(balance.toFixed(2));

const otherNum = 25.826;

console.log(otherNum);
//used to round of the value.
console.log(otherNum.toPrecision(2));

const hum = 100000;

//used to visual number with ',' comma.
console.log(hum.toLocaleString('en-IN'));


//<<----------------------------------------------------Math-------------------------------------------------->>

//Math it self is a Object and it has many properties as well as function as shown in console.
//type in google console.
console.log(Math);

//used to get absolute value from negative value
console.log(Math.abs(-34));

//used to get round value from decimal value.
console.log(Math.round(2.56));

//used to get round value from decimal value above 5 decimal point.
console.log(Math.ceil(3.2));

//used to get round value from decimal value below 5 decimal point.
console.log(Math.floor(6.6));

//used to get maximun and minimum value from an array or list of numbers.
console.log(Math.min(5,5,9,6,1));
console.log(Math.max(5,5,9,6,1));

console.log("<<--------------------------------------------------->>");

//used to get random values from 0 to 1.
console.log(Math.random());

//If we multiply with 10 we can have 10 random numbers.
console.log(Math.random() * 10);
console.log(Math.random() * 10);

//But to avoid the number 0 in random we add +1 end od the random() method.
console.log((Math.random() * 10) + 1);

//while making a game or anthing used floor and ceil mathods to get accurate value.
//And make sure to add 1 to avoid 0 number.
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
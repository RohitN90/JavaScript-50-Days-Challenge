//Today i am learning about conversion or opeartion in js.

let height = "34";

console.log(typeof height);

let hValue = Number(height);
console.log(typeof hValue);
console.log(hValue);


let age = "45";

console.log(age);
console.log(typeof age); // It will print you 'string' in console

//To conver the string into number this method is used.
let value = Number(age);

console.log(value);


//But what if the variable contains both string and number?
let score = "34ak";
let val = Number(score);//It will convert the string into number.

console.log(typeof score); // But It's will show 'NaN' in the console.


//When you convert the 'null' into number it will print '0' in the console.
let cp = null;

let cpValue = Number(cp);
console.log(typeof cpValue);
console.log(cpValue);

//In javascript when you convert the number into boolean it will give you 'true' or 'false' respect to 1 or 0.
let v = 1;

console.log(typeof v);// Prints Number.

let vNum = Boolean(v);
console.log(typeof vNum); // Prints Boolean.
console.log(vNum);// Prints true.

//What happens with String lets check.

let name = "" // If it is an empty string.

console.log(typeof name); // retuen string

let nameB = Boolean(name);
console.log(typeof nameB); // return boolean
console.log(nameB); // false


let fullName = "rohit";

console.log(typeof fullName); // Prints String

let fName = Boolean(fullName); 

console.log(typeof fName); // Return boolean
console.log(fName); //Prints True.


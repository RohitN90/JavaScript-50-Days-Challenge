//Learning about Arrays.

//collection of elements in a single variable. And array is a Object.
//And array is resizable.
//Array are start with 0 aslo called as 0 based indexed.
const myarray = [1,2,3,4,5];
const heros = ['Rohit', 'Kartik','chaitanya'];
const newArr = new Array(1,5,9,8,6,3,2);

// we use variableName followed by [] is used to assess the elements in array as shown below.
console.log(myarray[3]);
console.log(heros[2]);
console.log(newArr[2]);

//Array Methods.

//Append element at the end of the array.
heros.push("Ichigo");
heros.push("Byakuya");

console.log(heros);

//used to delete or remove last element in array.
heros.pop();
console.log(heros);

//Used to add or append element at the starting of the arrya.
//But it don't use because of the time Complexity.
heros.unshift("Heriko");
heros.unshift("Zoro");
console.log(heros);

//Used to remove or delete the element at the starting of the arrya.
heros.shift();
console.log(heros);

//Used to find element weither it is present in the array or not.
console.log(heros.includes("Zara")); //Return in boolean

console.log(heros.indexOf("Zara")); //return in number if false : -1.
console.log(heros.indexOf("Ichigo")); //return in number if true = return position of the element.


//Add's all the elemets into the string type with comma seperated.
const arr = heros.join();

console.log(typeof heros);
console.log(heros);
console.log(typeof arr);
console.log(arr);

//returns or copy the sction part and don't include the end range.Like 4th element as given below.
//It will not change the orginal arrqy.
const myn = heros.slice(1,4);

console.log("A ",heros);
console.log(myn);

//It will remove the range between the start and end index and return remining elements.
//It will change the orginal array.
console.log("B ",heros);
const myn1 = heros.splice(1,4);
console.log("C ",heros);

console.log(myn1);
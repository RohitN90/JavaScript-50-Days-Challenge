//Days and Time.

let myDate = new Date();

//Date is a Object type.
//Months are start with 0 to 11.
console.log(typeof myDate);

console.log(myDate);

//Prints all date and time info.
console.log(myDate.toString());

//Its returns the day, month, and year.
console.log(myDate.toDateString());

//It's returns Date and time.
console.log(myDate.toLocaleString());

//We can create customize date like.
// parameters are year, month, date, hours and min.
let newDate = new Date(3020, 3, 12,9,17);

//we can declare also like this.
let updatedDate = new Date("10-10-2026");
console.log(newDate.toLocaleString());

console.log(updatedDate.toLocaleString());

//Now we will talk about timeStamps.

let stamp = Date.now();

//The time stamp return in milli seconds.
console.log(stamp.toString());

//If you want to convert into seconds. 
console.log(Math.floor(stamp/1000));

//we can customize the date with localString.

let newstamp = newDate.toLocaleString('default',{
    weekday : "long"
});

console.log(newstamp);
//Here we List the Data Types summary


//In JavaScript We mainly have two Different Data Types 1) Primitive 2) Non Primitive Data Types


//Primitive Data Types
//1) String 2)Number 3)Boolean 4) Null 5) Undefined 6)Symbol 7) Big Int

let fname='Rohit';
let age=45;
let isUserRegisterd=false;
let gender;
let aadharNumber=null;
let accountNumber=2353453453455345n;

console.log('Data and its Data Types',fname,typeof(fname));
console.log('Data and its Data Types',age,typeof(age));
console.log('Data and its Data Types',isUserRegisterd,typeof(isUserRegisterd));
console.log('Data and its Data Types',gender,typeof(gender));
console.log('Data and its Data Types',aadharNumber,typeof(aadharNumber));
console.log('Data and its Data Types',accountNumber,typeof(accountNumber));

//Non Primitve 1) Array 2) Object 3) Functions

const fnames=["Rohit","Raj","Rakesh"];
let phone={
    make:"Nokia",
    model:2330
};
const myFunction=function() {
    return 2+2;
}
console.log('Data and its Data Types',fnames,typeof(fnames))
console.log('Data and its Data Types',phone,typeof(phone))
console.log('Data and its Data Types',myFunction,typeof(myFunction))
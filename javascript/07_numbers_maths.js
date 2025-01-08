const balance=100;

const accBalance= new Number(56544);

console.log(balance);
console.log(accBalance);

console.log(accBalance.toString().length); // Converts Number to String and prints the length of String

const price=189.6589
console.log(price.toPrecision(3)); // Gives the precison values of entered value

const dollar=10000000;
console.log(dollar.toLocaleString('en-IN')); // Converts to local string with specifed language and country

const itemPrice=1986.668
console.log(itemPrice.toFixed(2)) // decimal Digits fix to 2

const no=Math.PI;
console.log(no);

const no2=Math.ceil(Math.PI,1);
console.log(no2);


const no3=Math.round(3.876);
console.log(no3);

const min=10;
const max=20;
const randomNumber = Math.floor(Math.random() * (max-min +1)) +min;
console.log('s',randomNumber);
//In this we will see how to use Strings

let name="Ram";
let count=100;
console.log(`The value of the ${name} is${count}`);

let str1="Beautiful-flower";



console.log(str1);
console.log(str1.length);               //Gives the length of String with white spaces if included
console.log(str1.substring(0,2));       //Gives the substring with 0 and 2 position
console.log(str1.replace('-','%'));     //Gives the string with replaced characters in the string
console.log(str1.slice(0,2));           //
console.log(str1.split('%'));               //Gives the array after spliting into specific string else it returns whole string as one array
console.log(str1.trim());                       // Gives the string after removing white space
console.log(str1.includes('etf'));         //Returns true if it finds the characters mentioned else false
console.log(str1.indexOf('z'));         //Returns the position if present else -1 if not present
console.log(str1.concat('z'));         //Returns the new string with the added string
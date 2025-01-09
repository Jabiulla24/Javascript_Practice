//In this we will learn about Arrays

const myArray=[0,1,2,3,4,"Ram",true];

console.log(myArray);

//Array Functions

let myArr=[3,4,5,6,7];
myArr.push(9)
console.log(myArr);   //==> [ 3, 4, 5, 6, 7, 9 ]
myArr.pop()
console.log(myArr); //==>[ 3, 4, 5, 6, 7 ]
myArr.unshift(10)
console.log(myArr); //==>[ 10, 3, 4, 5, 6, 7 ]
myArr.shift()
console.log(myArr); //==>[ 3, 4, 5, 6, 7 ]


let arr=[1,2,3,4,5,6]
const a=arr.slice(0,3);
console.log('Init',arr);
console.log('After slice',a,arr);      // Original Array is not changed [1,2,3,4,5,6]
const b=arr.splice(0,3); 
console.log('After splice',b,arr);    // Original Array is changed [4,5,6]


// Array Menthos for Combining & Creating Array

let aArray=[10,20,30];
let bArray=[40,50,60];
//aArray.push(bArray);
console.log(aArray);   //10,20,30,[40,50,60]

let cArray=aArray.concat(bArray);
console.log(cArray);  //10,20,30,40,50,60

let dArray=[...aArray,...bArray];
console.log('spread opertor',dArray); //10,20,30,40,50,60


console.log(Array.isArray(dArray));

const aff=Array.from("Hello World");
console.log('aff',aff);

const newArr1={fname:"Abc",age:45};
const m=Array.from(newArr1.age);
console.log(m);
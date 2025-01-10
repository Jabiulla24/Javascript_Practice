//Here we are going to learn about functions

// function functioname(parameters){
//     function body executin
//     return statement
// }

function addTwoNumbers(num1,num2){
    let sum=num1+num2;
    return sum;
    console.log('The result is',sum)//This will not execture as there is return statement the execution will be returned 
}

console.log("Addtion of the numbers are",addTwoNumbers(3,4));  //7
console.log("Addtion of the numbers are",addTwoNumbers(3,"4")); // 34 as type conversion 
console.log("Addtion of the numbers are",addTwoNumbers(3,"4a")); //34a as type conversion
console.log("Addtion of the numbers are",addTwoNumbers());       //NaN no numbers are send 

function addTwoNumbers2(num1=20,num2=30){
    return num1+num2
}
console.log("Addtion of the numbers are",addTwoNumbers2());       //Ans is 50 as we are passing undefined default values are assinged to num1 and num2
console.log("Addtion of the numbers are",addTwoNumbers2(3,4));  // 7 if values are sent defaults values are replaced


//Passing Argumnets as Objects & Arrays

function getUsername(userObj){
    return userObj.username
}

const userInfo={username:"Gigya",pwd:"#4223!"}

console.log(getUsername(userInfo));

function getLenArray(myArr){
    return myArr.length;
}
const mynewArr=[10,20,30];
console.log(getLenArray(mynewArr));
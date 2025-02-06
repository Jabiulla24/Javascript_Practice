//In this We learn about Prototype

//Prototype is methods which are available and its parent methods additionally in next level

//Suppose we need to create our own function for String,Object and function we can create using Prototype

//Creating a prototype function to return both upper case and lower case string in one function

let str='Hello';

String.prototype.getAllCases= function (){
    console.log(`Both Upper case and Lower case values are ${this.toLowerCase()} ${this.toUpperCase()}`)
}

str.getAllCases();

// We can apply this to Object but id we apply any prototype in object we can even access to String

const user={
    username:'Ram',
    price:30
}

Object.prototype.getInfo=function(){
    console.log(`You are referering to the context:${this.username}`) 
}

user.getInfo(); // Here we get the result as Ram
str.getInfo(); // Here we get the result as undefined as this is applie only to object
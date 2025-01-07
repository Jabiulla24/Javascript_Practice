// DataTypes in JavaScript

//Type 1 Primitive DataTypes
let name="Ram";// Here Datatype used is String
let age=25;//Here Datatype used is Number
let isLogin=false;//Here Dataype used is boolean

let email=null;//Here Null is the datatype
console.log(typeof null);//Output will be Object
let phone;
console.log(typeof phone);//Output will be undefined

//BigInt is also used if more number to be stored
//Type 2 Non Primitive DataTypes
let obj={
    name:"Harish",
    age:25
};
console.log(typeof obj);//Output will be Object if we want to access individual then obj.name or obj.age

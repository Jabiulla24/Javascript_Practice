//In this we will discuss regarding the memory allocation in Javascript 
// 1.Stack 2.Heap

let myName="Raj"
let myNametwo=myName
myNametwo="Ramesh"
console.log(myName,myNametwo);//myNmae=> Raj myNmaetwo => Ramesh both are different



let myDetailsObj1={
    email:'abcd@gmail.com',
    age:45
}
let myDetailsObj2=myDetailsObj1
myDetailsObj2.email='efgh@gmail.com'
console.log(myDetailsObj1.email,myDetailsObj2.email);// both myDetailsObj1.email,myDetailsObj2.email give same output efgh@gmail.com as they are referenced

//Added Image in this Repositery for Reference by Name Javascript Memory Alllocation
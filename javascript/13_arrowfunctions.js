//In this we will discuss this keyword and arrow functions

//This is used to refer the current context

const user={

    username:"Rajesh",
    price:100,

    welcome:function (){
       // console.log(`Welcome user ${username}`) // Username is not defined
       console.log(`Welcome user ${this.username}`) // This keyword gives me value of current context
       console.log(this);
       
    }
    
}
user.welcome();
console.log(this); // It will be Empty in Node JS but in browser it is windows object

// In Browser the global this context refers to Window Object

//Arrow Functions introduced in ES6 in 2015 

const myFunc= function(){
    console.log(this);                        //This will print all the values which present
    console.log('My funcion created');
}


const myFunc2= ()=>{
    console.log(this);                    // This will be empty
    console.log('My funcion created using arrow');
}

myFunc();
myFunc2();

//In Arrow function we cannot use this as it gives empty




const sum =(num1,num2)=>{
    return num1+num2
}
console.log(sum(5,6));
//Implicit Arrow function in which return keyword not required
const sum2=(num1,num2)=>num1+num2
console.log('implicit',sum2(5,6));

const sum3=(num1,num2)=>(num1+num2)
console.log('implicit',sum3(5,6));

//If we want to return object it shpuld be wraped under parenthesis in arrow function
const myInfo={
    username:'ram',
    price:100
}

const myObjName = (userinfo)=>({userinfo:myInfo.username})
console.log(myObjName())



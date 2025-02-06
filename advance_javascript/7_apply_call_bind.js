const user={
    username:'Rahul',
    age:34
}
function printName(city,state,country){
    console.log(this.username+city+state+country)
}

const usertwo={
    username:'Raj',
    age:35
}

printName.call(usertwo,'Banglore','Karnataka','India');  //Passing Values Individual
printName.apply(user,['Banglore','Karnataka','India']); //Passing Values as Array List


//Bind Returns the function
const s=printName.bind(usertwo,'Banglore','Karnataka','India');
console.log(s); // Here the function will be printed
s();//Actual Result will be printed


//Find Max in Array
//Method using apply

const arr=[5,1,3,19,2];
console.log(Math.max.apply(null,arr));
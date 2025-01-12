//In this we learn about If,If Else,Switch,Truthy,Nullish Coalesing Operator , Ternary Operator

//If Condition in this only one condition is checked
const score=800;
if(score >500){
    console.log('Score is Greater than 500')
}

//If Else Condition

const score2=300;
if(score2>500){
    console.log('Score is greater')
}else{
    console.log('Score is lesser')
}

// If Else If condition

const score3=1200;
if(score3<500){
    console.log('Score is less then 500')
}else if(score3<800){
    console.log('Score is less then 800')
}else if(score3<1000){
    console.log('Score is less then 1000')
}else{
    console.log('Score is greater then 1000 ')
}

//Switch Condition

// switch (key){
//     case a:
//     break;
//     case b:
//     break;
//     default:
//     break;   
// }

const month=3;
switch(month){
    case 1:
    console.log('Month is Jan');
    break;
    case 2:
    console.log('Month is Feb');
    break;
    
    default:
    console.log('Default Month');
    break;
}

//Truthy & Falsy Values

//False Values=> False,0,0n,'',null,undefined,NaN

//Truth Values=>"0",'false'," ",[], {}

//Nullish Coalesing Operator(??)

let val=null;
val=10??20;
console.log('V',val);

//Ternary Operator (?)

let val1=15;
let val2=val1>15?10:5
console.log('val2 is',val2);
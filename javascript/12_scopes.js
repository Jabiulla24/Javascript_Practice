//In this we will learn about global scope and block level scope

//Major Difference in Let,Var,Const

//Var is a type of variable whose values can be changed in block level

//Let & Constis a type of variable whose values will be in block level. They will be treated as different varaible compared to global scope

let a=10;
const b=20;
var c=30;

function checkScopes(){
    let a=40;
    const b=50;
    c=60;
}
checkScopes()
console.log('C',c); // c will be 60 because var is used and changed from 30 to 60 in function scopes
console.log('A',a); // A will be 10
console.log('B',b); // B will be 20


function one(){
    const username="Ram";
    function two(){
        const hobby="Cricket"
        console.log(`${username} hobby is ${hobby}`)
    }
    //console.log(`${username} hobby is ${hobby}`) // gives error as hobby is defined inside two block scope
    two()
}
one()


//Methods to define function

diff(5,10);
function diff(num1,num2){
return num2-num1;

}
//differce(5,20) // This gives error as differce(5,20) is not initilize so we need to call after declare in this method of function
const differce=function(num1,num2){
return num2-num1
}
console.log('The difference value is',differce(5,20))

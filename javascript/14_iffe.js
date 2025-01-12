//In this we learn about Immediately Invoked Function Expression

//In some cases we need to call the function immediately after function is decalred there we use IIFE to avoid Global Variable polllution


(function addTwoNo(){
 console.log('Addition of Nos');
})();

const myFunc= (function addTwoNo(){
    console.log('Addition of Nos');
})();

//the Above two are named IIFE as function has names

//Below id normal IIFE

((name)=>{console.log(`welcome ${name}`)})('John')
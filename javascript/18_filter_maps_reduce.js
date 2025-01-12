//In this we learn about Filter Map and Reduce Functions mainly used in Arrays
//These are highly used in Industry


// Filter returns the filtereed values from the array
const numbers=[1,2,3,4,5,6,7,8,9,10];

const evenNUmbers=numbers.filter((num)=>{
    return num%2===0;
})
const oddNumers=numbers.filter((num)=> num%2!==0);
console.log('even numbers',evenNUmbers);
console.log('odd numbers',oddNumers);


//Map->IF we want to alter/modify the all objects in array we use map function

const numbersmapping=[1,2,3,4,5,6,7,8,9,10];
const numsmaped=numbersmapping.map((nums)=>nums+10);
console.log(numsmaped)

//We can call many map functions and filter functions this concept is called chaining
const numbers1mapping=[1,2,3,4,5,6,7,8,9,10];
const numsmaped1=numbers1mapping.map((nums)=>nums+10).map((nums)=>nums*2).filter((num)=>num>10);
console.log(numsmaped1)


// Reduce Function to reduce the function with Accumalator and current value
//Initial Value of accumulator need to set
const buyCourse=[
    {
        courseName:'Javascript',
        price:1000
    },
    {
        courseName:'Java',
        price:2000
    },
    {
        courseName:'Php',
        price:4000
    }
]
const totalPrice=buyCourse.reduce((acc,currvalue)=>acc+currvalue.price,0);
console.log('v',totalPrice)

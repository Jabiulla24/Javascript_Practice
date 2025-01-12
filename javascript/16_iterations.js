//In this tutorail we learn about For Loop
//Mainly For loop is used to iteratore over an array

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log('Elemts',i);    
}

//Loop inside Loops

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++) {
       console.log(`${i}*${j}=`+i*j);
        
    }
}

//Break and Continue

//If we want to break the loop and come out we can use break statement

for (let i = 0; i < 10; i++) {
   if(i==5){
    console.log('5 Destination Reached');
    break
   }
   console.log('El',i)
    
}

//If we want to skip one value or condition we can use continue statment

for (let i = 0; i < 10; i++) {
    if(i==5){
     console.log('5 Destination Reached');
     continue
    }
    console.log('El',i)
     
 }


 //While Loop and Do While loop

//  while(condition){

//  }

let score=10;
while(score<10){
    console.log(`Score is ${score}`) // This will be not printed even once
}
// do{

// }while(condition)

let doscore=11;
do{
    console.log(`Score is ${score}`) // THis willl be printed as printing is done first and then condition check
}while(score<10)

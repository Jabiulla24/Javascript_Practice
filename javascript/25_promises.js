//In this we learn about promises and its useful

//Promises are object representation of Eventual Completion of an async opertation

const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({"username":"Raj","password":'2345'})
        }
        else{
            reject('Something Went Wrong')
        }        
    },1000) 
})

promiseOne.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Finally Called")
})

// Now we learn about async await

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({"username":"Micheal","password":'2345'})
        }
        else{
            reject('Network issue')
        }        
    },1000) 
})
async function promiseResolved(){
   try {
    const response=await promiseTwo
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}
promiseResolved();
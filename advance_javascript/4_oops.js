//In this we learn about OOPS concepts in Javascript which is nothing but Object Oriented
//We learn mainly class,constructo function,prototyoe,instances


const user={
    username:'Ram',
    loginCount:10,
    isLogginedIn:true,

    greetings:function(){
        console.log(`Welcome User: ${this.username}`)
    }
};

function User(username,loginCount,isLogginedIn){
    this.username=username,
    this.loginCount=loginCount,
    this.isLogginedIn=isLogginedIn
    return this;
}

console.log(user);
console.log(user.greetings()); // As function need to call it

// const userone= User('Abcd',14,true);

// const usertwo=User('Efgh',12,false); 
//console.log(userone); // Here the values of Abcd are replaced by Efgh old values will be replaced so we use new Keyword

// By Using New Keyword it creates an Empty Object and calls constructor and assigns values and then return the object

const userone= new User('Abcd',14,true);

 const usertwo= new User('Efgh',12,false); 
 console.log(userone);
 console.log(usertwo);
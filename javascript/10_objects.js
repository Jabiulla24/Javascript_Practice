//In this we will learn about Objects

//Singleton Object 
//Object created using Constructor are Singleton object
//let a=Object.create() is singleton
 

//Object created other than constructor are Literals

const mysmb= Symbol('key1');
let userinfo={
    fname:'Raj',
    email:'raj@gmail.com',
    "Full Name":'Raj Kumar',
    age:34,
    [mysmb]:'Key2'
}

//How to access the Object values as they will be key value pair access with . or [""] 

//Eg to access fname use .
//To access Full name we cannot use . we can use [""]

const fname=userinfo.fname;//Raj
console.log(fname);
//const ffullname=user.full Name;// Error

const fullname=userinfo["Full Name"];//Raj Kumar
console.log(fullname);

console.log(userinfo);
//To add functions in Object

userinfo.greetings=function(){
    console.log(`Hi Welcome user ${this.fname}`);
}
console.log(userinfo.greetings());

//If we want to lock Object for further modification we can do using freeze

Object.freeze(userinfo);
userinfo.email="raj@gg.com"
console.log('User infor after freeze',userinfo);

//Assign in Objects & Spread Operator

const user1={1:'a',2:'b',3:'c'}
const user2={4:'a',5:'d'}

//let user3=Object.assign(user1,user2);
//console.log('us1',user1) => Now if we do like this user 1 has all the elements so we give {} as first params


let user3=Object.assign({},user1,user2);
console.log('us1',user1)
console.log('us3',user3);

let user4={...user1,...user2};
console.log('spre',user4)

console.log('keys',Object.keys(user4));

console.log('values',Object.values(user4));

console.log(user4.hasOwnProperty(10));

//Study About Destructor
const course={
    coursname:"React",
    price:100,
    channelname:'chairaurcode'
}

const {channelname}=course;           //Instead of course.channelname we destructor this way
console.log('ch name',channelname);

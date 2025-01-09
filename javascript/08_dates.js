//In this we are studying about dates

let myDate= new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());


let newDate= new Date();
console.log(newDate.toDateString());

console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMonth());


let hijariDate= new Date();
const options={
    year:'numeric',
    month:'long',
    date:'numeric'
}
console.log(hijariDate.toLocaleString('en-u-ca-islamic',options))

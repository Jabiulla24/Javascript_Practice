//In this we learn about ForIn For Of and for Each


//For In loops through the enumerable properties of an object

let person = {
    firstName: "GeeksforGeeks",
    lastName: "A Computer Science Portal for Geeks",
    rank: 43
};

//For In best for Objects
for (const key in person) {
    console.log(person[key])
}

//For Of best for Arrays etc
let text = [
    "GeeksforGeeks",
    " A Computer Science Portal for Geeks ",
    "43"
];

// for (const element of person) {
//     console.log(element)     // This gives error as person is not iterable in for of in object
// }

for (const element of text) {
    console.log(element)
}


//For Each is mainly to iterate over array as well as array of objects widely used in industry
const myArrObj=[
    {
        langName:'Javascript',
        langCode:'js'
    },
    {
        langName:'Java',
        langCode:'java'
    },
    {
        langName:'PHP',
        langCode:'php'
    },
    
    
]
myArrObj.forEach((ele,index,arr) => {
    console.log(ele,index,arr);
    
});

//Index Stores index values
//Arr stores the array values
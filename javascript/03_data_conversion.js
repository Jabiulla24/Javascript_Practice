//Here we discuss on DataType conversion of Number,String and Boolean and their conversion values

//Number we use class name as Number(value)

let score="33";
let scoreInNumber= Number(score);
console.log('Value adn DataType',scoreInNumber, typeof(scoreInNumber));

let scoretwo="33abc";
let scoretwoInNumber= Number(scoretwo);
console.log('Value adn DataType',scoretwoInNumber, typeof(scoretwoInNumber));

let scorethree=true;
let scorethreeInNumber= Number(scorethree);
console.log('Value adn DataType',scorethreeInNumber, typeof(scorethreeInNumber));

let scorefour=null;
let scorefourInNumber= Number(scorefour);
console.log('Value adn DataType',scorefourInNumber, typeof(scorefourInNumber));

let scorefive=undefined;
let scorefiveInNumber= Number(scorefive);
console.log('Value adn DataType',scorefiveInNumber, typeof(scorefiveInNumber));


//Notes

//"33"=>33
//"33abc"=>Nan (Not a Number)
//"true"=>1;"false"=>0
//null=>0
//undefined=>Nan

//Boolean

let isLogined=true;

let isLoginedinBoolean=Boolean(isLogined);
console.log('Value & Type',isLoginedinBoolean,typeof(isLoginedinBoolean));

let isLogined1=1;

let isLoginedinBoolean1=Boolean(isLogined1);
console.log('Value & Type',isLoginedinBoolean1,typeof(isLoginedinBoolean1));

let isLogined2=null;

let isLoginedinBoolean2=Boolean(isLogined2);
console.log('Value & Type',isLoginedinBoolean2,typeof(isLoginedinBoolean2));

//Notes
//true=>true
//1=>true;0=>false
//325 or Abcd => true and data type will be boolean
//undefined=> false
//null=>false

//String

let fname=undefined;
let nameinString=String(fname);
console.log('a',nameinString,typeof(nameinString));

//Note
//33=>33
//1=>1
//undefined=>undefine
//null=>null

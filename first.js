console.log("hello world");

//numbers
let firstNumber=10;
let lastnumber=50;
let result=firstNumber+lastnumber;
console.log(`addition of two numbers ${result}`);

result=firstNumber-lastnumber
console.log(`subtraction of two numbers ${result}`);

result=firstNumber*lastnumber;
console.log(`mutiplication of two numbers ${result}`);

result=firstNumber+lastnumber;
console.log(`division of two numbers ${result}`);

result=firstNumber%lastnumber;
console.log(`modulus of two numbers ${result}`);
console.log(typeof result);

//string

firstNumber="Sravani";
result=firstNumber/lastnumber
console.log(typeof result)
console.log(result)
lastnumber="annameni";

result=firstNumber+" "+lastnumber;
console.log(`concatination of two string is ${result}`)
console.log(typeof result)

//boolan

firstNumber="shravani";
lastnumber=true;
console.log(firstNumber+lastnumber);
console.log(typeof firstNumber);
console.log(typeof lastnumber);

if(lastnumber){
    console.log(`${firstNumber} is beautiful lady`);
}else{
    console.log(`${firstNumber} is pretty girl`);
}

//null

let userName=null;
console.log(typeof userName);

userName="Sravani";
console.log(typeof userName);

// undefind
let value;
console.log(`value of${value}`);
console.log(typeof value);
value=20;
console.log(typeof value )

//objects

const person={
    user:"Ranjith",
    age:24
}
console.log(person);
console.log(typeof person);

//dot notation
console.log(person.user);
console.log(typeof person.user)
console.log(person.age);
console.log(typeof person.age)

const arr=["shravani","Ranjith","Rakesh","Lucky","Advaith"]
console.log(arr);
console.log(typeof arr);

//lose equality

let a=10;
let b=10;
let c="10"
console.log(`it is lose equality result of same data type ${a==b}`)
console.log(`it is lose equality result of two different data types ${a==c}`)


//strict eqality
console.log(`strict equality result of same data type ${a===b}`)
console.log(`it is strict  equality of two different data types result
${a===c}`)

//function
const pi=3.17;

function area(radius){
    console.log('this function is going to find area of circle');
    console.log("the area of the circle is :")
    return  radius*radius*pi;
}
let areaOfCircle=area(10);
console.log(areaOfCircle)

//Arrow functions 
//if one param we can we paranthesis
const square=(side)=>{
    return side*side
}
console.log(`using paranthisis  ${square(20)}`);

//if one param we no need to use paranthesis
const square1=side=>{
    return side*side
}
console.log(`with outbusing paranthisis  ${square1(30)}`);

//with out return statement we no need to use paranthesis
const square2=side=>{
    return side*side
}
console.log(`with out return statement ${square(10)}`);

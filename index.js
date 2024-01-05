//console.log("Hello")
//console.log("i like pizza")
//document.getElementById("myH1").textContent="Hello"
//document.getElementById("myP").textContent="I like Pizza!"
/*let fullName="shravani Annemeni";
let age=24;
let enrolled=false;
document.getElementById("p1").textContent=`You fallName is ${fullName}`
document.getElementById("p2").textContent=`You are ${age} old age`
document.getElementById("p3").textContent=`You are enrolled : ${enrolled}` 

let username;
username=window.prompt("what is your name");
console.log(username);
*/
/*let username
document.getElementById("muButton").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);

}
*/
/*let age=window.prompt("How old are you ?");
//converting string to integer
age=Number(age);
age+=1;
console.log(age); 
*/
/*let radius;
const PI=3.14; 
let circumference;

document.getElementById("myButton").onclick=function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference=PI*2*radius;
   
   document.getElementById("myH3").textContent=circumference;


}*/
//COUNTER PROGRAM

let increamentBtn=document.getElementById("increaseBtn");
let decreamentBtn=document.getElementById("decreaseBtn");
let restBtn=document.getElementById("resetBtn");
let countlable=document.getElementById("countLable");
let count=0;

increamentBtn.onclick=function(){
count++;
countlable.textContent=count;

}
decreamentBtn.onclick=function(){
    count--;
    countlable.textContent=count;
}
restBtn.onclick=function(){
        count=0;
        countlable.textContent=count;
}
//RANDOM DICES

let min=1;
let max=6;
let cubeValue1=document.getElementById("myCube1");

cubeValue1.onclick=function(){
    result = Math.floor(Math.random()*max)+min;
    cubeValue1.textContent=result;
}
let cubeValue2=document.getElementById("myCube2");

cubeValue2.onclick=function(){
    result = Math.floor(Math.random()*max)+min;
    cubeValue2.textContent=result;
}
let cubeValue3=document.getElementById("myCube3");
cubeValue3.onclick=function(){
    result = Math.floor(Math.random()*max)+min;
    cubeValue3.textContent=result;
}
let cubeValue4=document.getElementById("myCube4");

cubeValue4.onclick=function(){
    result = Math.floor(Math.random()*max)+min;
    cubeValue4.textContent=result;
}
//IF CONDITION
const agetext=document.getElementById("agetext");
const agebutton=document.getElementById("ageButton");
const resultAge=document.getElementById("resulttext")
let age;
agebutton.onclick=function(){
    age=agetext.value;
    age=Number(age);
    if(age>=100){
        resultAge.textContent="you are too old enough to enter this site";
    }
    else if(age>=18){
        resultAge.textContent="you are  old enough to enter this site";
    }
    else if(age==0){
        resultAge.textContent="you can't enter because you just born";
    }
    else if(age<0){
        resultAge.textContent="age can't be below 0";
    }
    else{
        resultAge .textContent="you must be 18+ to enter the site";
 
    }

}
//CHECKBOX AND RADIOBUTTON

const mycheckBox=document.getElementById("mycheckBox");
const myVisa=document.getElementById("myVisa");
const myMaster=document.getElementById("myMaster");
const myPayPal=document.getElementById("myPayPal");
const paymentButton=document.getElementById("paymentButton");
const checkResult=document.getElementById("checkResult");
const radioResult=document.getElementById("radioResult");

paymentButton.onclick=function(){
    if(mycheckBox.checked){
        checkResult.textContent="you are a subscriber "
    }
    else{
        checkResult.textContent="you are not a subscriber "
    }
    if(myVisa.checked){
        radioResult.textContent="you are paid with Visa card "
    }
    else if(myMaster.checked){
        radioResult.textContent="you are paid with Master card "
    }
    else if(myPayPal.checked){
        radioResult.textContent="you are paid with Paypal card "
    }
    else{
        radioResult.textContent="you are payment is pending"
    }
}
//NUMBER GUESSING

/*const minimum=1;
const maximum=100;
const answer=Math.floor(Math.random()*(maximum-minimum+1))+minimum;

let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess the number between ${minimum}-${maximum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`${guess} is not a number please enter the number`);
    }
    else if(guess>100 ||guess<1){
        window.alert("please enter the valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("TOO LOW! try again");
        }
        else if(guess>answer){
            window.alert(`TOO HIGH! try again`);
        }
        else{
            window.alert(`CORRECT!! The answer is ${answer} to guessed in ${attempts} attempt`);
            running=false;
        }
    }
}
*/
const textBox=document.getElementById("textBox");
const fahrenheit=document.getElementById("fahrenheit");
const celcius = document.getElementById("celcius")
const resulttemp = document.getElementById("resulttemp")
let temptrue;

function convert(){
    if(fahrenheit.checked){
        temptrue=Number(textBox.value);
        temptrue=temptrue*9/5+32;
        resulttemp.textContent=temptrue.toFixed(1)+"F";

    }
    else if(celcius.checked){
        temptrue=Number(textBox.value);
        temptrue=(temptrue-32)*(5/9);
        resulttemp.textContent=temptrue.toFixed(1)+"C";
    }
    else{
        resulttemp.textContent="Select a unit"
    }
}





const names=["shraani","Ranjith","Rakesh","Lucky","Advaith"]
let size=names.length;
console.log(`the size of the array is ${size}`)

//join operation
console.log(`array list before adding pop the element ${names.join("_")}`)

//pop operation
names.pop();
console.log(`array list after poping the element from array ${names.join("-")}`);

//push operation
names.push("Advaith");
names.push("Kavitha")
console.log(`Array list after pushing new elements ${names.join("+")}`)

//shift operation
names.shift();
console.log(`Array list  after shift operation ${names.join("*")}`)

//unshifting operation
names.unshift("Kavitha")
console.log(`After unshift operation array is ${names}`);
//document.getElementById("demo").innerHTML=names.toString

//delete operation
const fruites=["Apple","grapes","orange","kiwi"]
console.log(`list of fruites ${fruites}`);
delete fruites[0];
console.log(`After deleting apple the list is ${fruites}`);

//concate operation
const mergeArray=names.concat(fruites);
console.log(`After merging two arrays  ${mergeArray}`);

//splice operation
names.splice(1,0,"Shravani")
console.log("After splice operation "+names )

//slice operation
const users=names.slice(6);
console.log("After slice opeartion "+names);
console.log("After slice opeartion "+users);

//sorting operation

names.sort()
console.log(`after sorting the array ${names}`);

//reverse sorting
names.sort();
names.reverse();
console.log(`after reverse sorting ${names}`)

//array map function
 const maparray=[40,14,25,78,9,45];
 const resultArray = maparray.map(mapbyfunfuction);
 console.log("After map operation "+resultArray);
 function mapbyfunfuction(value,index,array){
    console.log(`${index},${array}`)
    return value*2
 }

 //flatmap example
 const flatmapArray =[12,13,14,15,16,17,18,19];
 const resutlOfFlatMap = flatmapArray.flatMap(value=>value*2);
 console.log(`after flatMap operation ${resutlOfFlatMap}`);

 //fliter operation
 const numbers=[12,13,14,15,16,17,18,19,20];
 const evenNumbers = numbers.filter(evenFunction);
 console.log(`Even numbers are ${evenNumbers}`)
 function evenFunction(value){
    if(value%2==0){
        return value;
    }
 }

 // reduce method
const reduceArray=[1,3,6,10,78,34];
const reduceResultArray = reduceArray.reduce(reduceFunction);
function reduceFunction(total,value,index,array){
    console.log(reduceArray);
    console.log(`${total},${value}`)
    return total*value
}
//constArray scope
const constArray=["sdf","fghj","hjkl"];
console.log(constArray[1]);
{
    const constArray=["hj","hjk","ghj"];
    console.log(constArray[2]);
}
console.log(constArray[2]);

//var array scope
var varArray=["sdf","fghj","hjkl"];
console.log(varArray[1]);
{
    var varArray=["hj","hjk","ghj"];
    console.log(varArray[2]);
}
console.log(varArray[2]);

//Date methods

const date = new Date();
date.getUTCDate();
console.log(`${date}`)
date.toDateString();
console.log(`${date}`);
date.toISOString();
console.log(`${date}`)


//letArray
let letArray =[1,2,3,4,5,6,7];
console.log(letArray[3]);
{
    letArray = [67890,647,567,76];
    console.log(letArray[2]);
}
console.log(letArray[0]);

//strict mode

"use strict"
console.log(strictMethod())
function strictMethod(){
    let x;
    return x;
}

let arrywithDuplicates = [1,2,4,4,56,7,7,2]
let index=0;
let newArray=[];
let length = arrywithDuplicates.length;
let afterRemovingDuplicates = findDuplicates();
console.log(afterRemovingDuplicates);
function findDuplicates(arra){
    for(let i=0;i<length;i++)
    {
        for(let j=i+1;j<length;j++){
            if(arrywithDuplicates[i]===arrywithDuplicates[j]){
                newArray[index]=arrywithDuplicates[i];
                index++
            }
        }
    }
    return newArray;
}





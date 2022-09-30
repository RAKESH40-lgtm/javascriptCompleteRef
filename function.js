//function->do a particular task which is again and again call it will work when it invoke then only can return without print it to make reuse we use parameter in it and function call has argument (undefined+undefined=NAN) based on number of parameter add those argument otherwise it will give "NAN" and can return any data type
function greeting(){
    console.log("hey bro")
}
greeting()//calling function can call many times

//function expression:nothing but assigning the function to variable so it can call and shown as below which is called as annonymous function.
const greet=function(){
    console.log("hey bro")
}
greet()
function twoPlusFour(){
    return 2+3
}
// console.log(twoPlusFour());//while calling it can store to variable or print it
// dry :don't repeat it
function sumtwonum(a,b){
   return a+b;
}
console.log(sumtwonum(2,4))
function sumthree(a,b,c){
    return a+b+c;
}
console.log(sumthree(2,3,4))
// function odd or even iseven true or false
function isEven(num){
    if(num%2===0){
        return true
    }
    // else{
    //     return false
    // }
    return false
    
}
console.log(isEven(2))
console.log(isEven(3))
// function input:string output:firstcharacter
function firstChar(str){
     return str[0]
}
console.log(firstChar("hello"))
console.log(firstChar("Ravi"))
// function input:array EventTarget(num) output:index of target in array present
// [2,5,9,27,6] 9 output 2 not -1
function findIndex(arr,target){
    for(let i=0;i<arr.length;i++){
          if(arr[i]===target){
            return i;
          }
    }
    return -1;
}
console.log(findIndex([1,2,3,4,5],5))
console.log(findIndex([1,2,3,4,5],7))
//arrow function:very important 
const greet1=()=>{
 console.log("hey arrow")
}
greet1()//will give undefined if we console this without return stmt in it 
const isOdd=num=>num%2===1;//also arrow function
console.log(isOdd(5))

//hoisting

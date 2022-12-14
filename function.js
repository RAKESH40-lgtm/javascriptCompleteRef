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
hello();//function hosting before declaration but this is not applicable through function expression and arrow  function
function hello(){
    console.log("hello")
}
hello();
console.log(hello);//create undefined in cases of var but const and let gives a cannot access before initialization.
// console.log(hi)
// console.log(greetMe)
var hello="hello"
let hi="Hi"
const greetMe="greets"

//function inside function:can be anything kind of declare 
const app=()=>{
    const myFunc=()=>{
        console.log("hello")
    }
    const addTwo=(num1,num2)=>{
        return num1+num2
    }
    console.log("inside app")
    myFunc()
    console.log(addTwo(2,3))
}
// app()

//lexical scope:it sees inside the function for variable if not present it checks in lexical envt which where it's defined then it print that ,like a global declaration kind .,which is called as lexical scope chaining
const myVar="value1"
function myFunc(){
    // const myVar="value1"
    function empty(){
        // const myVar=69;
        console.log("inside empty",myVar)
    }
    const myempty=()=>{
        console.log(myVar)
    }
    
    console.log(myVar)
    empty()
    myempty()
}
myFunc()
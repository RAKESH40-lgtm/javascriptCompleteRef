//block scope vs function scope
// let and const are function scope but same variable can  be defined in block wise 
//var can be accessed any where in file 
{
    let var1="block1"

    console.log(var1)
}
// console.log(var1)//as block of let will not be accessed outside block
// {
//   const var1="block2"
// }
// console.log(var1)//same in const as let 
const sidi="garima"
console.log(sidi)
//default parameter:before ES6 we were check b===undefined then assigned the value of b
// function addTwo(a,b){
//     if(typeof b===undefined){
//         b=10  //this case was doing before ES6
//     }
//     return a+b;
// }
function addTwo(a,b=2){
    //here in ES6 b=1 is default parameter if no argument of that is passed
    return a+b;
}
// console.log(addTwo(3,2))
console.log(addTwo(3))
//rest parameters is ...para_name is rest and it will come as array
function addThree(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log("c is",c)
}
addThree(2,4,3)//it takes correspond value to the parameter
addThree(2,4,3,5,6,7);//if all the rest need to access in function without explicitly adding those as parameter and it can add like array by using ... which is rest parameter
//make function addALl(many things) and sum it all
function addAll(...c){
    let sum=0
    for(let i of c){
        sum=sum+i
    }
    return sum;
}
console.log(addAll(2,3,4,3,4,4,6))
//param destructuring:which will uses as object it's usefull in react
const person={
    name:"raj",
    gender:"male",
    age:78
}
function printDetail(obj){
    console.log(obj.name)
    console.log(obj.gender)
    console.log(obj.age)
}
printDetail(person)
console.log("using obj destructuring in parameter")
function printDetail({name,gender,age})//this is obj destructuring as parameter which can be do as we know it will be coming
{
    console.log(name)
    console.log(gender)
    console.log(age)
}
printDetail(person)

//callback function:calling one function as the argument to the function and do pass this without () and can call that function inside the passed argument
function myFunc2(name){
    console.log("calling")
    console.log(`you're name is ${name}`)
}
function myFunc(a){
    console.log("hello there iam a fun i can call callback ")
    a("rav")
    
}
myFunc(myFunc2)

//function returning function: can return any data type and  also function
function myFunc(){
    // function hello(){
    //     // console.log( "hello world")
    //     return "hello World"
    // }
    // return hello;
}
let ans =myFunc()
// console.log(ans)
console.log(ans())
// input+return or both -higher order function

//Primitive datatypes
//  string->"hello"
//  number->2
//  boolean->true
//  undefined
//  null
//  BigInt
//  Symbol
let age=18
console.log(typeof age)//know the type of variable whether number or other typeof "str"

// number to String
// age=age+""//just add ""at the end
age=String(age)//method used to change into str

//string to number
let mystr="34"
mystr=+"34"//just add +at the start
Number(mystr)//method used to change into number

//undefined
let val;
typeof val;// give as undefined as it's not undefined for only let and var not with const as we need to initial a value with it
val="assigned"//if we check typeof it will give its type
//null
let myVal=null;
// typeof myVal -> null give as object

//BigInt
// number has limit of Number.MAX_SAFE_INTEGER
// let myNumber=BigInt(12020200202022)//to store large number 120n also valid
// can perform any operation with BigInt and cannot operate with other type 
//boolean has two value true or false by comparing
let num1=2
let num2=5
// num1>num2->false
// num1===num2->true
// num1<num2->false
// num1==num2//check equality of two values 
// num1===num2//checks both datatype and val
// num1!=num2//check diff value and return true and iff datatyoe change then return false
// num1!==num2//return true and check the type 
//truthy and falsy value

//when to use falsy value
// false
// ""
// null
// undefined
// 0

//primitivetype:don't change the assigned variable are follows stack which has pointer contain address for it and create two memory for that and not change any other variable. due to allocate different memory for them
// let num=7//primitive 
// let num_1=num
// console.log(num)
// console.log(num_1)
// num++//it affects only num
// console.log(num)
// console.log(num_1)

//reference type:changes the variable value on changing every thing ,has stack and heap store values in heap which has its address which don't change the address of the heap varaible
// let arr1=["item1","item2"]
// let arr2=arr1//store the address of arr1
// console.log(arr1)
// console.log(arr2)
// arr1.push("item3")//push the data to its pointer
// console.log("after pushing")
// console.log(arr1)
// console.log(arr2)
//arrays are reference type 
//arrays are used to store multiple values which is ordered collection (index) elements or items can store any type of data-type,are muttable 

// let fruits=["apple","mango","grapes"]
// console.log(fruits)
// console.log(fruits[0])//array indexing access through index
// console.log(fruits[1])
// console.log(fruits[2])

// let numbers=[1,2,3,4]
// console.log(numbers)

// let mixed=[1,2,"string",null,undefined]
// console.log(mixed)

// let fruits=["apple","mango","grapes"]
// console.log(fruits)

// fruits[1]="Banana"//change the array at particular index
// console.log(fruits)
// console.log(typeof fruits)//gives object as data type as it's reference type
// console.log(Array.isArray(fruits))//to check the object is array or not

//reference type are all object in js

//Arrays basic methods
let fruits=["apple","mango","grapes"]
console.log(fruits)
// fruits.push("banana")//add ele at last of array 
// console.log(fruits)
// let removed=fruits.pop()//remove the last ele of an array and return the removed element
// console.log(removed)
// console.log(fruits)

fruits.unshift("banana")//adds ele at starting of array can unshift many time 
console.log(fruits)
let shifted=fruits.shift()//removes element from starting of array and return it
console.log(shifted)
console.log(fruits)

//push and pop are fast due to adding at last

//clone array
let arr=["item1","itme2"]
// let arr2=arr;//arr2 pointing the address of arr which is another address
console.log(arr===arr2)//checks if the both array are some
//to avoid arr reflecting (which is called  as cloned arr)with other we need to add values to both instead of assign other
// let arr2=arr.slice(0)//cloning the array using slice and store seperaten array and it's fast
// let arr2=[].concat(arr)//clone all  element sin new array by creating new arr and not reflect if we change previous 
let arr2=[...arr]//spread the arr to arr2 by using spread operator and return the false due to it will not affect the cloned on changing original array mostly used and in react and clone n nu,ber of array
//task

//in clonedARR clone newArr and add extra items
let newArr=["val1","val2"]
// let clonedAdd=newArr.slice(0).concat(["val3","val4"])
// console.log(clonedAdd)
// let clonedAdd=[].concat(newArr,["val3","val4"])
// console.log(clonedAdd)
// let clonedAdd=[...newArr,"item1","item2"]
// console.log(clonedAdd)
let oneArr=["item3"]

//array can be defined by const
//cannot add through using = but can alter using array method which is most prefered
const fruity=["apple","mango"]
fruity.push("ban")
console.log(fruity) 

//Array destructuring
const myArr=["value1",'value2',"value3"]
// need to make two variable store two value of myArr
// let myArr1=myArr[0]
// let myArr2=myArr[1]
// console.log(myArr1)
// console.log(myArr2)
//Array destructure
// let [variable to get through array and it can be maany and those array ele will destructure to this variables]=arrayName 
let [myArr1, ,myArr2]=myArr;//to get another value skip that index
console.log(myArr1)
console.log(myArr2)
//to create newArr and get from destructuring by using ...newArr which is creating newArr and assign other values in array
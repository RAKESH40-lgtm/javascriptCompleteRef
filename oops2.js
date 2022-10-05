//oops 
// const user={
//     fname:"ra",
//     lnameL:"v",
//     email:"r@gmail.com",
//     age:3,
//     address:"105 ,colony,bangalre",
//     about(){
//         console.log(`${this.fname} and age is ${this.age}`)
//     },
//     is18(){
//      return this.age>=18
//     }
// }
// const aboutUser=user.about()//we're storing retun value to the variable
//suppose we need 1M of user like this we cannot make this approach and need to use alternate for this  kind of approach  for this we will make a function and take input of sufficient details and return the object (that function create object and return the key:value pair return that object )
// function createUser(fname,email,age,address){
//     const user={}//create an empty object of desired and add by below shown
//     user.fname=fname;//using dot operator add the key value pair as shown
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         console.log(`${this.fname} and age is ${this.age}`)
//     }
//     user.is18=function(){
//         return this.age>=18
//     }//while creating object as passing function it must not be passed as parameter just written as expression with user. not require any passing parameter
//     return user //this must be return user if not then object will not be created.
// }
// const user1=createUser('rak','rak@gmail.com',17,'bangalore')
// console.log(user1)
// console.log(user1.is18())
// user1.about()
//suppose if we create mutliple user then it'll be creating all method for such users and lot of memory will be creating by above way and changing in the shown below
const userMethod={
    about:function(){
        return `${this.fname} and age is ${this.age}`;
    },
    is18:function(){
        return this.age>=18;
    }
}
// function createUser(fname,email,age,address){
//     const user={}
//     user.fname=fname;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=userMethod.about
//     user.is18=userMethod.is18//instead of adding explicitily this methods in object if we create a seperate object and add here  by reference it in req placed then it will be add the method once in memory which is reference of methods
//     return user 
// }
// const user1=createUser('rak','rak@gmail.com',17,'bangalore')
// console.log(user1)
// console.log(user1.is18())
// console.log(user1.about())
//suppose in user if has multiple method in it and it make clumsy and if we forget it to avoid that we use  object.create() while creating empty obj which shown from line:84
// const obj1={
//     key1:"val1",
//     key2:"val2",
// }
// const obj2={
//     key3:"val3",
//     key4:"val4", 
// }
// console.log(obj1.key)
// console.log(obj2.key1)//if we define here it will return undefined as it's not ,but js must search for key in any object and print and in another scenario 
// const obj3={}//we can add key:val by creating empty obj
// obj3.key5="value5"
// console.log(obj3.key5)
// const obj4=Object.create(obj1)//way to create a empty object it return a empty object but in argument it has obj1 which will be help us to search the desired key:value and it will go there and seacrh if there it gonna print it by js which is created by Object.create() and it'll create proto(set the reference of passed obj) of referencing which is called as chaining
// console.log(obj4)
// obj4.key6="value6"
// obj4.key2="unique"
// console.log(obj4.key6)
// console.log(obj4.key2)//it searched based on heirarchy of appearing in it object and prints it
// console.log(obj4)//if we print obj4  which has Proto which has reference of another obj and search there and prints
//__proto__=[[prototype]] are same
// in js which has prototype which is different
// console.log(obj4.__proto__)//this will print the ref of obj1
// obj2.__proto__//dunder which is and another prototype property has this which is different 
function createUser(fname,email,age,address){
    const user=Object.create(userMethod)//js search from its protype and prints so we don't need to add that property  here so space will be reduced and creating chaining
    user.fname=fname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user 
}
const user1=createUser('rak','rak@gmail.com',17,'bangalore')
console.log(user1)
console.log(user1.is18())
console.log(user1.about())
//in js function can be treated as object+function
function hello(){
    console.log("hello worls")
}
console.log(hello.name);//property name will give the name of function
hello.myOwnProperty="very unique value"//which is created by us that to create a object kind 
console.log(hello.myOwnProperty);
//function provide more usefull property call,bind ,apply. when we create function it  provide free space which is called as object which is called prototype .
hello.prototype//is a  empty object given by function which should use by us we can add key:value to prototype of function
console.log(hello.prototype)//we will get constructor object and it has same function as value and we can use that prototype and which is provide by only function which means it will not provide by array,object and other
if(hello.prototype){
    console.log("prototype is present")
}else{
    console.log("protype is not present")
}
hello.prototype.abc="abc"//which add abc prototype by this we can create any key:value with methods to it
console.log(hello.prototype)
hello.prototype.xyz="xyz"
console.log(hello.prototype)
hello.prototype.greets=function(){
    return "dude"
}
console.log(hello.prototype.greets())
//proto is a reference which creates chaining and prototype create an empty object from function,we can create a connect between proto and prototype by this can view in another file oops_part3.
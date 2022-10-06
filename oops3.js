// const userMethod={
//     about:function(){
//         return `${this.fname} and age is ${this.age}`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(fname,email,age,address){
//     const user=Object.create(createUser.prototype)//js search from its protype and prints so we don't need to add that property  here so space will be reduced and creating chaining and in proti we have to add instead of another obj add createuser.protype
//     user.fname=fname;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     return user
// }
// const user1=createUser('rak','rak@gmail.com',17,'bangalore')
// console.log(user1)
// console.log(user1.is18())
// console.log(user1.about())
// console.log(createUser.prototype)//we recieve an empty object which is protottype ,instead of writing a create a another obj of usermethod instead of this we can add methods to prototype
// createUser.prototype.about=function(){
//     return `${this.fname} and age is ${this.age}`;
// }
// createUser.prototype.is18=function(){
//     return this.age>=18;
// }
// const user1=createUser('rak','rak@gmail.com',17,'bangalore')
// console.log(user1)
// console.log(user1.is18())
// console.log(user1.about())
//new keyword:
// function createUser(fname,age){
//     this.fname=fname//by this js automatic will create a prototype by itself as  and not require to chaining it by Object.create() with the help of new
//     this.age=age
// }
// const user1=new createUser("rak",9)//call function by new
// console.log(user1)//it creates a object with the help of new as we defined this in above function which is this={}
//as it has prototype we can add methods to it
// createUser.prototype.about=function(){ return `${this.fname} and ${this.age}`}
/*here new keyword doing creating empty by value this={} and handle by new,add this.key=values
return this object
which we are creating a function which gives protottype and by that we can add object to it*/
// console.log(user1.about())
// function CreateUser(fname,age,address){
//      this.fname=fname;
//      this.age=age;
//      this.address=address
// }//constructor function:for our convention to use new in function we need to capital first letter
// CreateUser.prototype.about=function(){ return `${this.fname} and ${this.age}`}
// const user1=new CreateUser('rak','rak@gmail.com',17,'bangalore')
// const user1=createUser('rak','rak@gmail.com',17,'bangalore')
// console.log(user1)//if we miss the new keyword it'll be undefined and proto will not be reference
// console.log(user1.about())
//hasownproperty
// for(let key in user1){
//     // console.log(key)//it will give the key property of include protype key
//     if(user1.hasOwnProperty(key)){
//         console.log(key)
//     }
//     //by user1.hasOwnProperty(key) it prints only the key of function not prototype
// }
//more about prototype:which gives
// let num=[1,2,3]//internally it will create constructor as in lone65
// let num=new Array(1,2,3)//as we know about new it'll create a prototype
// console.log(Array.prototype)
// console.log(Object.getPrototypeOf(num))//by default prototype is in object
// console.log(num)
//Class :
// Before ES6 we were creating constructor by above later from ES6 will create by class keyword which is fake in js but internally it's doing same as above
// class CreateUser {
//   //here constructor function is creates object which is same as  shown while creating function from line45-53
//   constructor(fname, age, address) {
//     console.log("constructor call")
//     this.fname = fname;
//     this.age = age;
//     this.address = address;
//   }
//   //by default prototype will be add it
//   about() {
//     return `${this.fname} and ${this.age}`;
//   }
//   func(a){//can be pass the argument same as in prototype
//     console.log(a)
//   }
// }
// const user1=new CreateUser("rak",12,"Bangalore")
// console.log(user1.fname)
// console.log(user1.age)
// console.log(user1.address)
// console.log(user1.about())
// console.log(Object.getPrototypeOf(user1))
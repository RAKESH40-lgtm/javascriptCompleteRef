//methods:function inside object is called as methods
// const person={
//     fname:"hith",
//     age:18,
//     about:function(){
//     //  console.log(`person name is ${this.fname} and ${this.age}`)
//     console.log(this)
//     }
// }//by this way of adding method in object will not change its dynamics so by template literal we do to access inside the function we need to access variable by using this keyword instead of this if we try to add variable it give reference error (as undefined) so we have to use this  this keyword is used at run time ,this is a object which is called by the function
// console.log(person.about)
// person.about()//person is calling the about where this become object and get the variable through this and using dot operator to get value
// function personInfo() {
//   console.log(`userName:${this.fname},age:${this.age}`); //will return undefined of object which isn't called though object which useless right now
// }
// const person1 = {
//   fname: "hith",
//   age: 18,
//   about: personInfo, //setting function
// };
// const person2 = {
//   fname: "nith",
//   age: 28,
//   about: personInfo,
// };
// const person3 = {
//   fname: "mith",
//   age: 19,
//   about: personInfo,
// };
// console.log(person1.about);
// person1.about();
// person2.about();
// person3.about();
//this keyword
// console.log(this); //print the window object this and window is equal and which is window object
// "use strict" //with use strict this will be  printing undefined if not undefined it'll print the window obj
// function myfunc() {
//   console.log(this);
// }
// myfunc();

//call,apply and bind methd
// function myfunc(){
//     console.log("Hello world")
// }
// myfunc()
// myfunc.call()//can call be call method and will give same output as line 46
function about(hobby,favMusic){
    console.log(this.fname,this.age,hobby,favMusic)
}
const user1={
    fname:"raki",
    age:8,
    // about:function(){
    //     console.log(this.fname,this.age)
    // }
    // about:function(hobby,favMusic){
    //     console.log(this.fname,this.age,hobby,favMusic)
    // }
}
//to use about in user2 borrow from user1 we use call() in user1 like user1.about.call(user2) and here we are binding user2 to user1 if not any this is not defined inside call() it'll print undefined
const user2={
    fname:"rakis",
    age:8,
    
}
// user1.about.call(user2)//call is used to call this obj for particular object defined which this will be defined and by this this can be defined as per needed by us and it must call which is defined that  and we're binding here value to this
// user1.about.call(user2,"guitar","vijay prakash")//while using call we can pass argument to it as we changed parameter in above about()
// about.call(user1,"guitar","SPB")
// about.call(user2,"flute","call")//here if we define function outside then we can use call() by binding its this object
// about.apply(user1,["guitar","apply"])//if we use apply to pass it works similar to call()but here we pas argument in array format
const func=about.bind(user2,"guitar","bind")//it return the function which work like call but don't print but it return bind a function and can be call in future
// func()//as we know to call this in future when we use bind.

//warning:to be avoid
// const user={
//     fname:"Hs",
//     age:8,
//     about1:function(){
//         console.log(this.fname,this.age)
//     }
// }
// const myfunc=user.about1
// myfunc()//this wii return undefined as we're referncing it  and to avoid this we need to use bind like below
// const myfunc=user.about1.bind(user)//when we need to reference the obj function then we have to bind it.
// myfunc()
//arrow function:
const user={
    fname:"Hs",
    age:8,
    about1:()=>{
        console.log(this.fname,this.age)
    }//arrow func doesn't have this obj it'll be taken by surroundings up and here this will be window object and this cannot be changed
}
// user.about1()
//short syntax of method inside object look like bellow which should be written in object are same :
// about(){
//     console.log(this.fname,this.age) 
// }
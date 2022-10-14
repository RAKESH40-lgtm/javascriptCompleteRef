//synchronous and asynchronous:
//synchronous prg:all pr till now are synchronous in this it run line by line and waits till the line by line completes,which is blocking code.
//Is Javascript a synchronous or asynchronous programming language ? js is a synchronous single threaded
// console.log("script started")
// for(let i=0;i<10000;i++){
//     console.log("inside for loop")
// }
// console.log("script end")
//asynchronous :it jumps execution to next line till the duration which is handled by browser in which call back function  which is unblock process
//setTimeout: setTimeout(function can be anything,delay which is in ms) what ever the delay is 0 or > then it waits till global execution context become none by call stack return the id and store to variaable it executes after the time stamp
// function hello(){
//     console.log("Hello world")
// }
// console.log("script start")
// const id=setTimeout(()=>{
// console.log("inside time out")
// },0)
// for(let i=0;i<100;i++){
// console.log(".....")
// }
// console.log(`settimeout id :${id}`)
// console.log("clearing time out")
// clearTimeout(id)//to clear the timeout and it avoids the running of setTimeout
// console.log("script end")
//setinterval:will do the repetitive thing after some time
// console.log("script start")
// setInterval(()=>{
//     for(let i=0;i<10000000;i++){
//         continue
//     }
//     console.log(Math.random())
// },500)
// console.log("script end")
//understand Callback:call back is used most in asynchronous in general callback is an argument passed to myfunc which 
// function myfunc(callback){
//     console.log("function is doing  task1")
//     callback()
// }
// function myfunc2(){
//     console.log("function is doing task2")
// }this array can directly write as anonymous function
// myfunc(function(){
//     console.log(2+2)
// })
// function getNumAndAdd(num1,num2,onsuccess,onfailure){
//     if(typeof num1 ==="number" && typeof num2==="number"){
//         onsuccess(num1,num2)//while doing operation pass the arguments
//     }else{
//          onfailure()
//     }
// }
// getNumAndAdd(2,3,function(number1,number2){
//     console.log(number1+number2)
// },function(){
//     console.log("enter number only")
// })
//call back in asynchronous:
// const classH1=document.querySelector(".heading1")
// const classH2=document.querySelector(".heading2")
//to change content of 7 h1 in order  we cannot explicitly do with every time it affects in order as shown below with delay and delay time must be explicitly write by adding to its corresponds, in real world if we fetch user through online and checks there uname and pwd for this first we need to fetch it and then checks to make in order we can use nested setTimeout() to make in order
// setTimeout(()=>{
//     classH1.textContent="h1"
//     classH1.style.color="red"

// },1000)
// setTimeout(()=>{
//     classH2.textContent="h1"
//     classH2.style.color="orange"

// },2000)
//to make in order we do settimeout in nested order which is callbackhell as in this it confuses developer to mkae simplify this we use promises
// const classH1 = document.querySelector(".heading1")
// const classH2 = document.querySelector(".heading2")
// const classH3 = document.querySelector(".heading3")
// const classH4 = document.querySelector(".heading4")
// const classH5 = document.querySelector(".heading5")
// const classH6 = document.querySelector(".heading6")
// const classH7 = document.querySelector(".heading7")
// setTimeout(() => {
//     classH1.textContent = "one"
//     classH1.style.color = "violet"
//     setTimeout(() => {
//         classH2.textContent = "two"
//         classH2.style.color = "purple"
//         setTimeout(() => {
//             classH3.textContent = "three"
//             classH3.style.color = "red"
//             setTimeout(() => {
//                 classH4.textContent = "four"
//                 classH4.style.color = "pink"
//                 setTimeout(() => {
//                     classH5.textContent = "five"
//                     classH5.style.color = "green"
//                     setTimeout(() => {
//                         classH6.textContent = "six"
//                         classH6.style.color = "blue"
//                         setTimeout(() => {
//                             classH7.textContent = "seven"
//                             classH7.style.color = "brown"
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             })
//         }, 1000)
//     }, 2000)
// }, 1000)
//use function instead of using callback  in asynch we can do with function
//in js library we use to callback on failure
// const classH1 = document.querySelector(".heading1")
// const classH2 = document.querySelector(".heading2")
// const classH3 = document.querySelector(".heading3")
// function changeText(element, text, color, time, onSuccess,onFailure) {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text
//             element.style.color = color
//             if (onSuccess) {
//                 onSuccess()
//             }else {
//                 if(onFailure){
//                    onFailure()
//                 }
//             }
//         } else {
//             console.log("You're elememt doesn't exist")
//         }
//     }, time)
// }
//here we're calling success callback repeatedly as we're doing in above setTimeout() based on our requirement this kind of callback with function form a pyramid of dom/callbackhell
// changeText(classH1, "one", "pink", 1000, () => {
//     changeText(classH2, "two", "pink", 2000, () => {
//         changeText(classH3, "three", "red", 4000, () => {

//         }, () => {
//             console.log("choose properly")
//         })
//     }, () => {
//         console.log("choose properly")
//     })
// }, () => {
//     console.log("choose properly")
// })
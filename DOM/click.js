// const btn1 = document.querySelectorAll(".my-buttons button")//this will select the class mybutton inside button so we're specifying it
// btn1.addEventListener("click",function(){
//     console.log("clicked")
// })
// for(let i=0;i<btn1.length;i++){
//     let button=btn1[i]
//     button.addEventListener("click",function(){
//         console.log("button clicked")
//         console.log(this.textContent)
//     })
// }
// for (let buttons of btn1) {
//     buttons.addEventListener("click", function () {
//         console.log("button clicked")
//         console.log(this.textContent)
//     })
// }
// Array.from(btn1)
// btn1.forEach((buttons) => {
//     buttons.addEventListener("click", function () {
//         console.log("button clicked")
//         console.log(this.textContent)
//     })
// })
//event Object
// const btn1=document.querySelector("#first")
// btn1.addEventListener("click",function(event){
//     console.log(this.textContent)
//     console.log(event)
// })
//when we addeventListener on element jsengine will execute line by line and browser has jsengine+extra feature like web API (which gives information about event listened) and when browser knows that event has been listened browser works with web API and 1)store the information of callback function will gives to js engine and executes it,2) in addition of callback function that'll give the information about that event which is in the form of object  we can recieve that info of object by passing as argument to function in the event and event can be pass to arrow function in that info contains two important property i.e currenttarget (in which eventlistener is triggered)and target(which even target is targetted)
// const btn1 = document.querySelectorAll(".my-buttons button") 
// btn1.forEach((buttons) => {
//     buttons.addEventListener("click", function (event) {
//         console.log("button clicked")
//         console.log(this.textContent)
//         console.log(event.target)
//     })
// })
//event behind scene:when we do eventlisten on any element this works in sequence way with the help of event loop event will work
// console.log("script start")
// const allbutton=document.querySelectorAll(".my-buttons button")
// console.log(allbutton)
// allbutton.forEach((button)=>{
// button.addEventListener("click",(e)=>{
// let num=0
// for(let i=0;i<=100000000;i++){
// num+=i
// }//by this loop to take a delay to 
// console.log(e.currentTarget.textContent,num)
// })
// })
// let outerVal=0
// for(let i=0;i<10000000;i++){
// outerVal+=i
// }
// console.log(` outer val${outerVal}`)
// console.log("script end")
//little practice with event:onclicking to the button then change bg to yellow and color grey
// const allBtns = document.querySelectorAll(".my-buttons button")
// console.log(allBtns)
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//         e.target.style.background = "yellow"
//         e.target.style.color = "grey"
//     })
// })
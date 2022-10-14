//promises has  a value which gives a future value it has status:pending(value=undefined),fullfilled(value=completed),rejected (value=it'll be giving message) are asynchronous call
// console.log("script start")
// const bucket = ["cofee", "chips", "vegetable", "salt", "rice"]
//promise is created with the help of new constructor Promise include the executor function which has two argument resolve and reject and calling resolve(can be any type) and reject(error can be created by new Errror(msg)) ny this promise produced which is object store by js and it can be function expression
// const friedRice = new Promise((resolve, reject) => {
//     if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
//         resolve({ value: "friedRice" })
//     } else {
//         // reject("items are missed")
//         reject(new Error("something is missed"))
//     }
// })
//promise consume:promise_name.then((input call back function which can be data recieve from promise)=>{},(error)=>{})it works when this resolve for this which two callback that is .then(()=>{},()=>{}) if we skip anything it will be are resolve and reject  instead of pssing two callback funct we can do chaining .catch
// friedRice.then((myfriedRice)=>{
//     console.log("lets eat",myfriedRice)
// },(err)=>{
//     console.log(err)
// })
//consume should be write like line 18-23 which has .then.catch and browser consume and wait till script end and this promise will store in the microtask queue which has higher priority and to know more open images in folder images
// friedRice.then((myfriedRice) => {
//     console.log("lets eat", myfriedRice)
// }).catch((err) => {
//     console.log(err)
// })
// for(let i=0;i<100;i++){
//     console.log(Math.random(),i)
// }
// setTimeout(()=>{
//     console.log("set timeout")
// })
// console.log("script end")
//function returning promise means return the promise which we create earlier
// function ricePromise(){
//     const bucket = ["cofee", "chips", "vegetable", "salt", "rice"]
//     return  new Promise((resolve, reject) => {
//             if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
//                 resolve({ value: "friedRice" })
//             } else {
//                 // reject("items are missed")
//                 reject(new Error("something is missed"))
//             }
//         })
// }
//function return promise can be get through below line 45-49
// ricePromise().then((myfriedRice) => {
//     console.log("lets eat", myfriedRice)
// }).catch((err) => {
//     console.log(err)
// })
//promise and setTimeout:we can pass setTimeout() inside the promise with ms as shown in line 55-61
//i want to resolve /reject promise after 2sec
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const val=true
//         setTimeout(()=>{
//            if(val){
//             resolve("resolved")
//            }else{
//             reject(new Error("rejected"))
//            }
//         },4000)
//     })
// }
// myPromise().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
//promise.resolve and chaining:always resolve the promise .then() always return promisewhich is resolve by which we can make promise chaining 
// Promise.resolve(5).then((data)=>{
//     console.log(data)
// })
// function myPromise(){
//     return new Promise((res,rej)=>{
//        res("foo")
//     })
// }
// myPromise().then(data=>{
//     console.log(data)
//     data+="bar"
//     return data
// return Promise.resolve(data)//return like this
//internal js return promise so we can create promise chaining by this we can say that when we update its value in .then() and return it'll update the value and return promise instead of value as line 70 so chaining can be do and we cannot do chaining in string other than promise if we do .then() without return then it resturn undefined internally
// }).then((val)=>{
//     console.log(val)
//     val+="added"
//     return val
// }).then((data)=>{
//     console.log(data)
// })
// "rakesj".then((val)=>{console.log(val)})//cannot use .then in string
// callback hell to flat code by promise
// const classH1 = document.querySelector(".heading1")
// const classH2 = document.querySelector(".heading2")
// const classH3 = document.querySelector(".heading3")
// const classH4 = document.querySelector(".heading4")
// const classH5 = document.querySelector(".heading5")
// const classH6 = document.querySelector(".heading6")
// const classH7 = document.querySelector(".heading7")
// function changeText(element, text, color, time) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (element) {
//                 element.textContent = text
//                 element.style.color = color
//                 res()//by resolve we can make chaining and here it resolve after changing the element text and color if element found
//             } else {
//                 rej()
//             }
//         }, time)

//     })
// }
//as callback in then return the promise resolve here return the changed value //thorugh promise and promise.resolve and chaining we can make pyramid DOM to flat code if it reject early then it catches error if we forget to return then .then()chaining is not possible
// changeText(classH1, "one", "red", 1000)
// .then(() => {
//     return changeText(classH2, "two", "blue", 2000)
// })
// .then(() => {
//     return changeText(classH3, "three", "red", 3000)
// })
// .then(() => {
//     return changeText(classH4, "four", "voilet", 1000)
// })
// .then(() => {
//     return changeText(classH5, "five", "orange", 1000)
// })
// .then(() => {
//     return changeText(classH6, "six", "yellow", 3000)
// })
// .then(() => {
//     return changeText(classH7, "seven", "pink", 1000)
// }).catch((err)=>{
//     alert(err)
// })
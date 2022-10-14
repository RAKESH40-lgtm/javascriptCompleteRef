//Basic Theory:
//AJAX:asynchronous javascript and XML is a set of "web development techniques" using many web technologies on the "client-side" to create asynchronous web applications.
/* with Ajax,web applications can send and  retrieve,data from a server asynchronously(in the background) without interfering with the display and behaviour of the existing page 
and we don't use data in XML format anymore ,we use json now
we have 3 most common to create and send request to server:
1)xmlHTTPRequest(old way of doing)
2)fetch API (new way of doing)
3)axios(this third party library) */
//need to make HTTP request or API request or API call so that communication between server and client (browser do this using js) and server can be any program language by creating API which is developed by backend it consist of http routes like (GET->to read the data from server,POST->to post the data to the server,DELETE->to delete the data from server,PUT->to update the data from server(override the exist data),PATCH->update the chunk of data from server) and path 
/*
when we inspect the site at network we get someusefull tab in that header are send while we make this request/response  in header it has ((General which consist of Request URL:,Request Method:,status code:,(Response Header:which consist of meta information when which we got when we do http request),(Request Headers:consist of metainformation about what request we made it consist of authority,method ,path and other)),in Respoonse we get json(javascript object notation:almost similar to js objet diff is double quotes at key:val and val can be anything but not method)Browser by default do the request (any http verb) 
 */
//create a object using http request
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr = new XMLHttpRequest()//using this we can request to server
// console.log(xhr)//it will show property of HTTPrequest of xhr which will do request through API which consist of URL 
//using XHR object we need make request through configuring it
//steps to configure request:
/*
step1:using openmethod open("requestcode","URL")
step2:then using property onload passing function
step3:send() send request
 */
/*readyState val:
    value          state              Description
    0              UNSENT          client has been created,open not called yet
    1              Opened          open() has been called
    2              Header_Recived  send() has been called ,and header and status are available
    3              Loading         Downloading,response Text hold partial data
    4              DONE            The operation is complete
    and response is recieved when status code is 4
 */
/*HTTP status code:defines status of our request
 status code(series)       status                Description
 100                      informational res     the request was recieved,continuing process
 200                      successfull           the req was successful recieved,understand and accepted
 300                      redirection           further action need to be taken inorder to complete the request
 400                      clientErr             the request contain bad syntax or cannot be fullfilled
 500                      serverErr             the server failed to fulfil can apparently valid request
*/
// console.log(xhr.readyState)//recieve 0 code when it's not open
// xhr.open("GET", URL)//this will do browser by asynchronous
// console.log(xhr.readyState)//recieve 1 code when it's open
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState===4){
//         // console.log(xhr.readyState)
//         // console.log(xhr)//it'll give complete xhr request of http request
//         // console.log(xhr.response)//it'll give response of request on completing it
//         // console.log(typeof xhr.response)//it'll give string
//         // const response=xhr.response//store response to convert into json
//         console.log(xhr.status)
//         // const data=JSON.parse(response)//convert string to json (parsing)
//         // console.log(data)
//         // console.log(typeof data)

//     }
// }//this function is called by browser when readyState changes
//instead of above we can do by using onload it's work when readystate is 4
// xhr.onload = function () {
//     console.log(xhr.readyState)
//     const response = xhr.response
//     console.log(xhr.status)
//     const data = JSON.parse(response)//parse string to json
//     console.log(data)
// }
// xhr.send()//need to send request 
// const URL = "https://jsonplaceholder.typicode.com/posts"
// const xhr=new XMLHttpRequest()
// xhr.open("GET",URL)
// xhr.onload=function(){
//     if(xhr.status>=200 && xhr.status<300){
//         const response=xhr.response
//         const data=JSON.parse(response)//to convert string to json
//         const id=data[3].id
//         const URL1=`https://jsonplaceholder.typicode.com/posts/${id}`//if we need to do nested route then we need to make nested here xhr nothing but callbackhell
//         const xhr2=new XMLHttpRequest()
//         xhr2.open("GET",URL1)
//         xhr2.onload=()=>{
//             if(xhr.status>=200 && xhr.status<300){
//                 const response=xhr2.response
//                 const data1=JSON.parse(response)
//                 console.log(data1)
//             }
//         }
//         xhr2.send()
//         console.log(data)
//     }
// }
// //if we disconnect the internet to handle that we use
// xhr.onerror=()=>{
//     console.log("network error")
// }
// xhr.send()
//xhr using promise:to avoid call back hell we use xhr promise
// const URL = "https://jsonplaceholder.typicode.com/posts"
// function newRequest(method,url){
//     return new Promise((resolve,reject)=>{
//             const xhr=new XMLHttpRequest()
//             xhr.open(method,url)
//             xhr.onload=()=>{
//                 if(xhr.status>=200 && xhr.status<300){
//                     resolve(xhr.response)
//                 }else{
//                     reject(new Error("something went wrong"))
//                 }
//             }
//             xhr.onerror=()=>{
//                 console.log(404)
//             }
//             xhr.send()
//     })
// }
// newRequest("GET",URL).then((res)=>{
//     const data=JSON.parse(res)
//     return data
// }).then((data)=>{
//     const URL2=`${URL}/${data[3].id}`
//     newRequest("GET",URL2).then((res)=>{
//         const data1=JSON.parse(res)
//         console.log(data1)
//     })
// }).catch((err)=>{
//     console.log(err)
// })
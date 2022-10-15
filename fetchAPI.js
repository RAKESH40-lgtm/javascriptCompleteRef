//making htttp request using fetch API
//fetch:easy to fetch similar to the xhrHTTPrequest() is a builtin which does every thing as we did in xhrHTTPrequest and by default it will be get request As fetch return promise we can do chaining as shown below
const URL = "https://jsonplaceholder.typicode.com/posts"
//in fetch it will do all process from background as it done by xhrHTTPRequest() first it return  response which can be convert to json() which is another promise so chaining can be done to get the data as shown below 
// console.log(fetch(URL))//return a response
//default get method .catch()cannot be 
// fetch(URL).then((response)=>{
//     if(response.ok){
//         return response.json()//is method to parse the data which is in header resopnse
//     }else{
//         throw new Error("Something went wrong")
//     }

// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })//catch will not run here untill it reject which is caused due to network error but then will work and it can check by ok to catch by throwing it
//post http request:creates a post in server has two argument one is URL,object which consist of method:"",inside body:JSON.stringify() which helps in getting json from string and header: here catch block works when network connection failed and to get catch we need to through the error
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',//method to post create
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',//inside body what it needs to contain with the help of JSON.strinfy() converts string to json
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },//also need to include header i.e content-type:'application/json;ccharset=UTF-8'
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
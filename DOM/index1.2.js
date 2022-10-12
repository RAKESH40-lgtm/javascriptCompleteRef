//if we use below then if to change the element then also it must select that and repeat so innerhtml and its method are prefer
// const todo1=document.querySelector(".todo-list")
// todo1.insertAdjacentHTML("beforeend","<li>added through insert adjacent html</li>")//with the help of .insertAdjacentHTML("position","html elements") positions like beforeend(append),afterbegin(prepend),beforebegin(before),afterend(after)
// const ul=document.querySelector(".todo-list")
// const li=document.createElement("li")
// li.textContent="Hello"
// const li2=li.cloneNode()//by this method it'll clone a node here it's not adding clone completely so do like below alternative of clone is creating new one and prepend it.
// const li2=li.cloneNode(true)//by this method it'll clone a node here and to completely do clone we have to pass true as para
// ul.append(li)
// ul.prepend(li2)//it takes as specicity to do both task we need to do clone and both must be there
//some methods aren't support in  IE here we have some
// const ul=document.querySelector(".todo-list")
// const li=document.createElement("li")
// const refer=document.querySelector(".first-todo")
// li.textContent="Hello"
// ul.appendChild(li)//it's work in IE
// ul.insertBefore(li,refer)
// const ul=document.querySelector(".todo-list")
// const li=document.createElement("li")
// const refer=document.querySelector(".first-todo")
// li.textContent="Hello"
// ul.replaceChild("li","refer")//replacing refer to li
// ul.removeChild(refer)
//staticlist or livelist 
//querySelectorALl are static list which doesn't change nodelist on adding it  and but prefer this queryselector, getElementbysomething will give htmlcollection and which is livelist
// const listItem=document.querySelectorAll(".todo-list li")
// const list=document.getElementsByTagName("li")//this will search in entire document
// const list=ul.getElementsByTagName("li")//this will search in ul and give
// const sixthli=document.createElement("li")
// sixthli.textContent="item 6"
// const ul=document.querySelector(".todo-list")
// ul.append(sixthli)
// console.log(listItem)//it show nodelist of conatining 5 as it's static list and it will not reflect
// console.log(list)//it show htmlcollection of conatining 6 as it's live list which will update it
//how to get dimension of element
// to see height and width
// const section=document.querySelector(".todo-section")
// const info=section.getBoundingClientRect()//gives object of all dimension,it changes on window size
// const info=section.getBoundingClientRect().height//gives object of all dimension,it changes on window size and by . its dimension
// console.log(info)
//intro to events:is an activity on which action is performed such as click,buttonpress,hower mouse vents and keyboard and mouse events first need to select the event and make the action 
/*ways to add events:
1)add in html to that element  by attribute not use this 
2)in js select that button and assign events and function expression,by this way we can't assign click event not more than one time
3)method addeventListener syntax:btn.addeventListener("events",function can be any ways like function,arrow funct)
*/
// const btn=document.querySelector(".btn-headLine")
// console.log(btn)
// btn.onclick=function(){
//     console.log("clicked")
// }
// const btn=document.querySelector(".btn-headLine")
// function clickMe(){
//     console.log("clicked")
// }
// btn.addEventListener("click",clickMe)
// btn.addEventListener("click",function(){
//     console.log("clicked")
// })
//this event inside  eventListener:when we use function(){} here this will be that button itself but in arrow function it'll be window object
// const btn=document.querySelector(".btn-headLine")
// btn.addEventListener("click",function(){console.log(this)
// })//in this function it will give that button itself
// btn.addEventListener("click",()=>{console.log(this)
// })//in this function it will give the window obj 
//click events on multiple buttons is on another file
//to know the button pressed by keyPressevent
// const body = document.body
// const btnhover = document.querySelector(".btn-headLine")
// console.log(btnhover)
// body.addEventListener("keypress", (e) => {
//     // console.log(e)s
//     console.log(e.key)//.key is a property which gives the pressed key value
// })
// btnhover.addEventListener("mouseover",()=>{
    // console.log("mouseower event occur")
// })//this event occur when mouseower it
// btnhover.addEventListener("mouseleave",()=>{
    // console.log("mouseleave event occur")
// })//this event occur when it leaves it
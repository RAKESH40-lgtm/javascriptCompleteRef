/*link to html:
first way:in head by script src :when open in browser it parse it and when check the js in head and load it while this parse will stop and not read htmlafter load it execute js line by line and through err as it not load html file.
second way:adding at the above of ending body first it parse the html and then goes to the js link and loads the js file and execute it beecause as it already parse the html file problem it will execute take lot of time while loading due to parse,load and execute site it's based on synchronous
third way:adding script to the head and add async to it like this 
<script src="./index.js" async></script>
browser do parse and when see js which is async which does both parse and load at same time which load first full js file and stop parse and do execute but as parse stopped in middle it may execute with error so it's not also suited.
forthway:like third way instead of async write defer like this
<script src="./index.js" defer></script> browser parse till script found in head of html and do simultaneously of parse and loading when loading complete and first it parse entire file and then it execute the loaded file and it's best approach to link*/
//document object model:browser recueve html file and parse it which consist of html -head (title,meta) body-header,section  and creates an object of html which is called as document and browser add this document object to the window obj in key property by document obj in window it's showing by this we can alter it   and document has many methods in order to select the particular one in a site ,events are nothing but acticities can be done with the help of document
// console.log(window.document)//which shows represent human readable 
// console.dir(window.document) //shows by js view which has many property which we aren't used and we can write like without window. i.e document 
// console.log(document.getElementById("main-heading"))//to search the element by ID and return the object which is the element
// console.log(typeof document.getElementById("main-heading"))//which type as object which is elements i.e object of it and with its related object 
// console.dir(document.getElementById("main-heading"))//this is actual representaion we can utililize it later
// const mainheading=document.querySelector("#main-heading")//by queryselector we can select id(#),class(.) or tag and id must be one of that name
// console.log(mainheading)
// const header=document.querySelector(".header")
// console.log(header)
// const navItem=document.querySelector(".nav-item")//if multiple class selects from queryselector will be get first element of that class and it won't check further
// const navItem=document.querySelectorAll(".nav-item")//by query all it will search all elements whose class is nav-itemit print all navitem class with nodelist which looks like array but it's not array
// console.log(navItem) 
// const mainheading=document.getElementById("main-heading")//as we know this document.getelementbyid() will return the object which contains many properties and method 
// console.log(mainheading.textContent)//text content is property by which we can print the content of that element as we do in object and this will console even which display is none
// mainheading.textContent="hello"//here as we change values in object through dot same we are doing here in dom property
// console.log(mainheading.innerText) //another property will show only which is displaying in site
// const mainheading=document.querySelector("div.headline h2")//can select first ele of its tag and can select like css as shown 
// console.log(mainheading)
// console.log(mainheading.style)//by selecting through document it gives many property even which has style object and further have property by which can change any css through js
// mainheading.style.color="blue" //which has furtherproperty by that we can add css through js and here instead of - we have to use camelCase here
// mainheading.style.border="2px solid red"
// const link=document.querySelector("a")
// console.log(link)
// console.log(link.getAttribute("href"))//method of document which gives the value of attribute of given  tag
// const input=document.querySelector(".form-todo input")
// console.log(input.getAttribute("type"))
// const link=document.querySelector("a")
// link.setAttribute("href","https://facebook.com")//by setattribute we can change the value of attribute to given
// console.log(link.getAttribute("href").slice(1))//to avoid first character we use slice()
//multipleele can be select by .getElementbyClass or queryselectorAll
// const navItem=document.getElementsByClassName("nav-item")
// console.log(navItem)//it gives array like html collection but cannot use array method but we can use indexing console.log(navItem[0]console.log(navItem[1]) console.log(navItem[2])
// const navItem1=document.querySelectorAll(".nav-item")//it gives nodeList of items and which is array like object which has length and indexing can be done as same as byclassname
// console.log(navItem1)
// const navItem=document.getElementsByClassName("nav-item")
// let navItem=document.getElementsByTagName("a")
// console.log(navItem)
/**can use simple for loop and fo of but not forEach in HTMLCollection */
/*for(let i=0;i<navItem.length;i++){
    // console.log(navItem[i])
    navItem[i].style.backgroundColor="white"
    navItem[i].style.color="green"//doen't affect since it's in the a tag
    navItem[i].style.fontWeight="bold"
}//simple for loop*/
/*for(let navItems of navItem){
    navItems.style.backgroundColor="white"
    navItems.style.color="green"
    navItems.style.fontWeight="bold"
} forof loop*/
// navItem=Array.from(navItem)//with the using Array.from()we're converting the htmlcollection to array and then we can use all array method
// console.log(Array.isArray(navItem))
/*navItem.forEach((navItems)=>{
    navItems.style.backgroundColor="white"
    navItems.style.color="green"
    navItems.style.fontWeight="bold"
});//cannot use forEach to */
// const navItem1=document.querySelectorAll("a")
// console.log(navItem1)//with this we will be getting nodlist in which we can apply all type of for loop
// Array.from(navItem1)//can be change nodelist to array
/** the container which has other element then it's called as innerhtml */
// const headline=document.querySelector(".headline")
// console.log(headline.innerHTML)//by this .innerhtml can print the inner elements of that main container  and we can change its elements as shown in line 72-73
// headline.innerHTML="<h1>inner Html</h1>"
// headline.innerHTML+="<button class=\"btn\">Learn more</button>"
// console.log(headline.innerHTML) 
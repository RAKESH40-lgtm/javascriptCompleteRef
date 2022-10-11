//event bubling/propogation,capturing and delegation
// const grandParent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")
// child.addEventListener("click",()=>{
//     console.log("you clicked on child")
// })
// parent.addEventListener("click",()=>{
//     console.log("you clicked on parent")
// })
// grandParent.addEventListener("click",()=>{
//     console.log("you clicked on grandParent")
// })
// document.body.addEventListener("click",()=>{
//     console.log("you clicked on body")
// })//(normal event not capturing event)
//when click on child it console the both child and parentbecause browser checks if parent also has same event and call that function by browser which is from heirachy level which is called event bubbling/propogation
//capturing event:in addventListener("event",()=>{},boolean) 
// child.addEventListener("click",()=>{
//     console.log("you captured on child")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("you captured on parent")
// },true)
// grandParent.addEventListener("click",()=>{
//     console.log("you captured on grandParent")
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("you captured on body")
// },true)
// this bubbling and capturing will cycles on every cycle based on event trigger it continues for every but on selected event
//eventDelegation:when we click on child of a container it takes a event bubbling and due to event bubbling it consider event on gp and will print it adn its benefits from one event adding it don't need explicitly to add event listening it'll work by bubbling and to get particular clicked we can use event object to get the particular val ,due to relation on child,parent ,grand parent it works when click to particular and gives that related box
// const grandParent=document.querySelector(".grandparent")
// grandParent.addEventListener("click",(e)=>{
//     console.log(e.target.textContent)
//     console.log("You clicked something")
// })
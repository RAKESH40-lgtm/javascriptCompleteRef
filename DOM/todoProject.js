const formtodo = document.querySelector(".form-todo")
const forminput = document.querySelector(".form-todo input[type='text']")
const todolistContain = document.querySelector(".todo-list")
// console.log(forminput)
// console.log(formtodo )//submit is done by enter or clicking that
//submit event
formtodo.addEventListener("submit", (e) => {
    e.preventDefault();//to prevent tha page to refresh
    console.log(forminput.value)
    const newli = document.createElement("li")
    const newLihtml = `
        <span class="text">${forminput.value}</span>
        <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>`
    forminput.value = ""
    newli.innerHTML = newLihtml
    todolistContain.append(newli)
    // console.log(newli)
    // console.log(uladded.textContent)
})
todolistContain.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
    //check if user clicked on done or remove button by classslist where we can get that class
    // console.log(e.target.classList) will gives the classList
    if(e.target.classList.contains("done")){
        console.log("done")
        const liSpan=e.target.parentNode.previousElementSibling
        console.log(liSpan)
        liSpan.style.textDecoration="line-through"
    }
    if(e.target.classList.contains("remove")){
        console.log("Are you want to remove?")
        const targetedli=e.target.parentNode.parentNode
        targetedli.remove()
        console.log(targetedli)
    }
})
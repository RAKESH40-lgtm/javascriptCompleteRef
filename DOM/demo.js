//onclick the button its body will change any bgcolor which will be randomly
const mainBtn = document.querySelector(".container button")
const body = document.body//in order to change color define all contain which is to be come Math.floor(Math.random()*10)=will generate the random number between 1-10
const changed = document.querySelector(".changing")//to add the changing content 
function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}
console.log(mainBtn)
mainBtn.addEventListener("click", function () {
    body.style.background = randomColorGenerator()
    changed.textContent = randomColorGenerator()//by textContent we can add the content of it
})
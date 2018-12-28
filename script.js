let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button")
    btn.innerHTML = " dodaj 10 elementów do listy"
    btn.style.fontSize = "30px"
    document.body.appendChild(btn)
    const ul = document.createElement("ul")
    document.body.appendChild(ul)
    btn.addEventListener("click", createLiElements)
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li")
        li.innerHTML = `element nr ${orderElement++}`
        document.querySelector("ul").appendChild(li)
    }

}

init()
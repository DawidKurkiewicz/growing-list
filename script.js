let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button")
    const reset = document.createElement("button")

    btn.innerHTML = " dodaj 10 elementów do listy"
    reset.innerHTML = "reset"

    btn.style.fontSize = "30px"
    reset.style.fontSize = "30px"

    document.body.appendChild(btn)
    document.body.appendChild(reset)

    const ul = document.createElement("ul")
    ul.style.listStyle = "none"
    document.body.appendChild(ul)
    btn.addEventListener("click", createLiElements)
    reset.addEventListener("click", cleanList)

}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li")
        li.innerHTML = `element nr ${orderElement++}`
        li.style.fontSize = `${size++}px`
        document.querySelector("ul").appendChild(li)
    }
}

const cleanList = () => {
    document.querySelector("ul").innerHTML = ""
    size = 10
    orderElement = 1

}

init()
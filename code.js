let inpbox=document.querySelector("input[type=text]")
let butt=document.getElementById("button1")
butt.addEventListener("click",() => {
        let temp = document.createElement("li")
        let txt = document.createTextNode(inpbox.value)
        temp.appendChild(txt)
        document.getElementById("list").appendChild(temp)

    })

let inpbox=document.querySelector("input[type=text]")
let butt=document.getElementById("button1")
butt.addEventListener("click",() => {
    if (inpbox.value=="") {alert("i know you are are a lazy motherfucker but you have to write something")}
    else{   
       let flag= document.createElement("input")
         let temp = document.createElement("li")
         flag.setAttribute("type","checkbox")
        flag.setAttribute("id","check")
        temp.appendChild(flag)
        let txt = document.createTextNode(inpbox.value)
        temp.appendChild(txt)
        document.getElementById("list").appendChild(temp)
        inpbox.value=""
    }

    })

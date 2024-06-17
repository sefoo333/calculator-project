let result = document.querySelector(".result");
let items = document.querySelectorAll("#num");
let arr = []
let output = ""


items.forEach((e) => {
    e.onclick = function () {
        result.value += e.textContent
        output += e.getAttribute("data-value")
    }
})


document.querySelector("#equal").addEventListener("click", () => {
    if (result.value === "") {
        output = "0"
        result.value = "0"
    } else if (eval(output) == "Infinity") {
        result.value = "Error value";
        setTimeout(() => {
            output = "0"
            result.value = "0"
        }, 1000)
    } else {
        localStorage.setItem("result", eval(output))
        arr.push(eval(output))
        result.value = eval(output)
        let div = document.createElement("div");
        div.className = "w";
        let h3 = document.createElement("h3");
        windoww.appendChild(div)
        div.appendChild(h3)
        localStorage.setItem("results", JSON.stringify(arr))
        for (i = 0; i < arr.length; i++) {
            let res = JSON.parse(localStorage.getItem("results"))
            h3.innerText = res[i]
        }
    }

})


document.querySelector("#delete").addEventListener("click", function () {
    output = output.slice(0, -1)
    result.value = result.value.slice(0, -1)
})

document.querySelector("#ans").addEventListener("click", function () {
    if (localStorage.getItem("result") === "undefined" || localStorage.length <= 0) {
        output += 0
        result.value += 0
    } else {
        output += localStorage.getItem('result')
        result.value += localStorage.getItem('result')
    }
})


let windoww = document.querySelector(".window")
let close = document.querySelector(".cancel ion-icon");

close.addEventListener("click", function () {
    windoww.classList.toggle("hide")
})
document.querySelector(".storage").addEventListener("click", function () {
    windoww.classList.toggle("hide")

})

let dataa = localStorage.length > 0 ? JSON.parse(localStorage.getItem("results")) : 0


for (a = 0; a < dataa.length; a++) {
    let div = document.createElement("div");
    div.className = "w";
    let h3 = document.createElement("h3");
    h3.innerText = dataa[a]
    windoww.appendChild(div)
    div.appendChild(h3)
}


let clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
    location.reload();
    localStorage.clear();
})
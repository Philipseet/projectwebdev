function myfunc() {
    let div = document.body.getElementsByClassName("signin-up")[0]
    let div2 =document.body.getElementsByClassName("mainflow")[0]
    div.classList.remove("opc1")
    div.classList.add("opc2")
    div2.classList.add("dhue")
}
function close() {
    let div = document.body.getElementsByClassName("signin-up")[0]
    let div2 =document.body.getElementsByClassName("mainflow")[0]
    div.classList.remove("opc2")
    div.classList.add("opc1")
    div2.classList.remove("dhue")
    console.log("hi")
}
function myfunc2() {
    let div = document.body.getElementsByClassName("signin")[0]
    div.classList.remove("opc1")
    div.classList.add("opc2")
    console.log("chlra hu")
}
document.body.getElementsByClassName("toppara")[0].addEventListener("click", close) 
document.body.getElementsByClassName("cross")[0].addEventListener("click", close)

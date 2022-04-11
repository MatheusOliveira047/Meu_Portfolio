function menu(){
    let header = document.querySelector(".header")
    let me = document.querySelector(".menu")
    let fechar = document.querySelectorAll(".nav-list li a")
    fechar.forEach((a)=>{
        a.classList.toggle("active")
    })
    me.classList.toggle("active")
    header.classList.toggle("active")
}
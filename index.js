let bars=document.getElementsByClassName("bars")[0];
let nav=document.querySelector("header");
let click=document.querySelector(".click");

document.addEventListener("scroll",()=>{
    if(window.scrollY>250){
        nav.classList.add("shadow")
    }else{
        nav.classList.remove("shadow")
    }
});

bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})
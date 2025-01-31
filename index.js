const burger = document.querySelector("#humburger-menu")
const header = document.querySelector("header")
burger.addEventListener("click",()=>{
    header.classList.toggle("open-menu");
    // burger.classList.toggle("active");
})

console.log("hiii")
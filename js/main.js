const btn = document.querySelector('.nav_button');
const nav = document.querySelector('.nav');

btn.addEventListener("click", ()=>{
    nav.classList.toggle("menu-open");
});
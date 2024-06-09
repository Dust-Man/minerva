const boton = document.querySelector("#menu-button");
console.log(boton);
const menu = document.querySelector("#menu");
console.log(menu);
const carret = document.querySelector("#nav-caret");
boton.addEventListener("click",mostrarMenu);



function mostrarMenu(){
    console.log("Clickeado");
    menu.classList.toggle("menu-show");
    menu.classList.toggle("menu-hidden");
    carret.classList.toggle("fa-caret-down");
    carret.classList.toggle("fa-caret-up");
}
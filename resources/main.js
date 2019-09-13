function toggleMenu(){
    let element = document.querySelector("nav");
    element.classList.toggle("menu-hidden");
    element = document.querySelector(".fade-layer");
    element.classList.toggle("hidden");
}

let element = document.querySelector("#menu-btn");
element.addEventListener("click", toggleMenu)
element = document.querySelector(".fade-layer");
element.addEventListener("click", toggleMenu)


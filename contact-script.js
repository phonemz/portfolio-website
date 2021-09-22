document.querySelector("#moon-about").onclick = function(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    
    
}
document.querySelector("#menu").onclick = function () {
    const page = document.querySelector(".container-contact");
    page.classList.toggle("blur");

    const overflow = document.querySelector(".overflow-menu");
    overflow.classList.toggle("show");   
}
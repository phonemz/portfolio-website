document.querySelector("#moon-about").onclick = function(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    
    
}
document.querySelector("#menu").onclick = function () {
    const page = document.querySelector(".container-about-me");
    page.classList.toggle("blur");

    const overflow = document.querySelector(".overflow-menu");
    overflow.classList.toggle("show");

    const body = document.querySelector(".container-about-me");
    body.classList.toggle("stop");    
}




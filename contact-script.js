document.querySelector("#moon-about").onclick = function(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    
    const span = document.querySelector("#change-theme-text-about");
    if (span.textContent === "the dark knight rises")
    {
        span.textContent= "let there be light"
    }
    else
    {
        span.textContent= "the dark knight rises"
    }
}
document.querySelector("#menu").onclick = function () {
    const page = document.querySelector(".container-contact");
    page.classList.toggle("blur");

    const overflow = document.querySelector(".overflow-menu");
    overflow.classList.toggle("show");   
}
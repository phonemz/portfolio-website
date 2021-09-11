
document.querySelector("#moon").onclick = function () {
    const element = document.body;
    element.classList.toggle("dark-mode");
    
    const span = document.querySelector("#change-theme-text");
    if (span.textContent === "the dark knight rises")
    {
        span.textContent= "let there be light"
    }
    else
    {
        span.textContent= "the dark knight rises"
    }
}


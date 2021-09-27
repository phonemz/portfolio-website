
document.querySelector("#moon").onclick = function () {
    const element = document.body;
    element.classList.toggle("dark-mode");
    
    const moonicon = document.querySelector("#moon");
    moonicon.classList.toggle("invert")
    
}


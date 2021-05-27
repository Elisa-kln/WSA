window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("change",window.scrollY > 0);
})
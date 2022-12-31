(function () {
    const openingBtn = document.querySelector(".sidebar__hamburger");
    const closingBtn = document.querySelector(".sidebar__close");
    const sitebar = document.querySelector(".sidebar");
    
    openingBtn.addEventListener("click", function() {
        sitebar.classList.add('sidebar--opened');
    })
    
    closingBtn.addEventListener("click", function() {
        sitebar.classList.remove ('sidebar--opened');
    })
}())

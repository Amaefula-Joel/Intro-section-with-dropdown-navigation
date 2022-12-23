const sideBar = document.querySelector("#mobile_side_nav");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

openMenu.addEventListener("click", function () {
    sideBar.classList.add("active");
});

closeMenu.addEventListener("click", function () {
    sideBar.classList.remove("active");
});

dropdownBtns.forEach(function (dropdownBtn) {
    dropdownBtn.addEventListener("click", function(e){
        e.preventDefault();
        // $(this).siblings(".dropdown").toggleClass("show");
        this.nextElementSibling.classList.toggle("show");
        
    });
});

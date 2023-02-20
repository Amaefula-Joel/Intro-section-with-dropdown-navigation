const sideBar = document.querySelector("#mobile_side_nav");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
// const dropdownContent = document.querySelectorAll(".dropdown-content");

openMenu.addEventListener("click", function () {
    sideBar.classList.add("active");
});

closeMenu.addEventListener("click", function () {
    sideBar.classList.remove("active");

    dropdownHide();
});

dropdownBtns.forEach(function (dropdownBtn) {
    dropdownBtn.addEventListener("click", function(e){
        e.preventDefault();

        // checks to know if the dropdown below it has been clicked
        if (window.innerWidth >= 800) {
            if (!this.parentElement.classList.contains("show")) {
                dropdownHide();
            }
        }
        
        this.parentElement.classList.toggle("show");
        // console.log(this.parentElement);
        
    });
});

function dropdownHide() {
    // hides all the dropdown content
    dropdown.forEach(function (item) {
        item.classList.remove("show");
    });
}

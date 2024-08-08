const menu1 = document.querySelector(".header-hamburger-list");
const menuItems = document.querySelectorAll(".header-hamburger-item");
const hamburger = document.querySelector(".header-hamburger-button");
const hamburgerClose = document.querySelector(".header-hamburger-close");
const hamburgerOpen = document.querySelector(".header-hamburger-open");


function toggleMenu() {
	if (menu1.classList.contains("show-menu")) {
		menu1.classList.remove("show-menu");
		// hamburgerClose.style.display = "none";
		hamburgerOpen.style.display = "block";
	} else {
		menu1.classList.add("show-menu");
		// hamburgerClose.style.display = "block";
		hamburgerOpen.style.display = "none";
	}
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
	function(menuItem) { 
		menuItem.addEventListener("click", toggleMenu);
	}
)

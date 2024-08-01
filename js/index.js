const menu_button = document.getElementsByClassName("menu-button");
const menu = document.getElementsByClassName("our-daily");

const about_us_button = document.getElementsByClassName("about-us-button");
const about_us = document.getElementsByClassName("our-story")


menu_button[0].addEventListener('click', e => {
	menu[0].scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

menu_button[1].addEventListener('click', e => {
	menu[0].scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

about_us_button[0].addEventListener('click', e => {
	about_us[0].scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

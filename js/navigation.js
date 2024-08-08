const menu_button = document.getElementsByClassName("menu-button");
const menu = document.getElementsByClassName("our-daily")[0];

const about_us_button = document.getElementsByClassName("about-us-button");
const about_us = document.getElementsByClassName("our-story")[0];

const testimonial_button = document.getElementsByClassName("testimonial-button");
const testimonial = document.getElementsByClassName("testimonial")[0];


menu_button[0].addEventListener('click', e => {
	menu.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

menu_button[1].addEventListener('click', e => {
	menu.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

menu_button[2].addEventListener('click', e => {
	console.log("hui")
	menu.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

about_us_button[0].addEventListener('click', e => {
	about_us.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

about_us_button[1].addEventListener('click', e => {
	about_us.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

testimonial_button[0].addEventListener('click', e => {
	testimonial.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

testimonial_button[1].addEventListener('click', e => {
	testimonial.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});

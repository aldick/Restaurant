const $button = document.getElementsByClassName("header-text-button");
const $menu = document.getElementsByClassName("our-daily");

$button[0].addEventListener('click', e => {
	$menu[0].scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
});
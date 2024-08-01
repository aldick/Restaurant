const slider = document.querySelector('.testimonial-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.testimonial-slide'));
const slideCount = slides.length;
let slideIndex = 0;

const firstPoint = document.querySelector('.testimonial-point1');
const secondPoint = document.querySelector('.testimonial-point2');
const thirdPoint = document.querySelector('.testimonial-point3');
const point = `
	width: 15px; 
	height: 15px; 
	border-radius: 50%; 
	background: #c4c4c4;
`;
const pointActive = `
	width: 18px;
	height: 18px;
	border: 3px solid orange;
	border-radius: 50%; 
`


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	updateSlider();
}
  
function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount;
	updateSlider();
}
  
function updateSlider() {
	slides.forEach((slide, index) => {
		if (index === slideIndex) {
			slide.style.display = 'flex';
	  	} else {
			slide.style.display = 'none';
	  	}
	});

	if (slideIndex == 0) {
		firstPoint.style.cssText = pointActive;
		secondPoint.style.cssText = thirdPoint.style.cssText = point;
	} else if (slideIndex == 1) {
		secondPoint.style.cssText = pointActive;
		firstPoint.style.cssText = thirdPoint.style.cssText = point;
	} else {
		thirdPoint.style.cssText = pointActive;
		secondPoint.style.cssText = firstPoint.style.cssText = point;
	}
}
  
updateSlider();
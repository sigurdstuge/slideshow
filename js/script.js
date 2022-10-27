// Querry selectors
const slides = document.querySelectorAll('.slideshow__slide');
const buttonLeft = document.querySelector('.slideshow__button-left');
const buttonRight = document.querySelector('.slideshow__button-right');

// Eventlisteners 
buttonLeft.addEventListener('click', handleButtonLeftClick);
buttonRight.addEventListener('click', handleButtonRightClick);

// Handlers
function handleButtonLeftClick() {
	decreaseIndex();
	displaySlide();
	
}

function handleButtonRightClick() {
	increaseIndex();
	displaySlide();
}
// Variables
let currentSlideIndex = 0; 


// Functions 
function decreaseIndex() {
	if (currentSlideIndex !== 0) {
		currentSlideIndex = currentSlideIndex - 1;
	} else {
		currentSlideIndex = slides.length - 1;
	}
}

function increaseIndex() {
	if (currentSlideIndex !== slides.length - 1) {
		currentSlideIndex = currentSlideIndex + 1;
	} else {
		currentSlideIndex = 0;
	}
}

function displaySlide() {
	for(let index = 0; index < slides.length; index += 1) {
		slides[index].classList.remove('slideshow__slide--active');
	}

	slides[currentSlideIndex].classList.add('slideshow__slide--active');
}

displaySlide();







console.log(slides.length);
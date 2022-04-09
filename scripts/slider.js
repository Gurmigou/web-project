const carouselSlide = document.getElementById('carousel__slide');
const carouselImages = document.querySelectorAll('#carousel__slide img');

// Buttons
const prevBtn = document.getElementById("prev__btn");
const nextBtn = document.getElementById("next__btn");

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// performNextClick();

function performNextClick() {
    if (counter < carouselImages.length - 1) {
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
}

function performPrevClick() {
    if (counter > 0) {
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }  
}

// Button listeners
nextBtn.addEventListener('click', () => {
    performNextClick();
});

prevBtn.addEventListener('click', () => {
    performPrevClick();
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last__clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'first__clone') {
      carouselSlide.style.transition = 'none';
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

// setInterval(performNextClick, 5000);
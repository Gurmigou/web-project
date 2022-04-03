const carouselSlide = document.getElementById('carousel__slide');
const carouselImages = document.querySelectorAll('#carousel__slide img');

// Buttons
const prevBtn = document.getElementById("prev__btn");
const nextBtn = document.getElementById("next__btn");

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter < carouselImages.length - 1) {
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        carouselSlide.style.transition = 'transform 1s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }  
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
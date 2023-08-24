
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        }
    } else if (event.deltaY < 0) {
        // Scrolling up
        if (currentSlide > 0) {
            currentSlide--;
        }
    }
    
    window.scrollTo({
        top: slides[currentSlide].offsetTop,
        behavior: 'smooth'
    });

    event.preventDefault();
}, { passive: false });

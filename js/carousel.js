// Manipula el DOM con envento enlistando
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    //Función que actualiza el carrusel
    function updateCarousel() {
        const slideWidth = cards[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});

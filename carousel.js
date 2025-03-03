

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentSlide = 0;

// Adjust the width dynamically based on the number of visible items
const visibleItems = 3; // Number of items to display
const itemWidth = track.getBoundingClientRect().width / visibleItems;

// Set each item's width
items.forEach(item => {
    item.style.flex = `0 0 ${itemWidth}px`;
});

// Move to a specific slide
function moveToSlide(index) {
    const totalSlides = Math.ceil(items.length / visibleItems);
    currentSlide = (index + totalSlides) % totalSlides; // Wrap around slides
    track.style.transform = `translateX(-${currentSlide * itemWidth * visibleItems}px)`;
}

// Event Listeners
nextButton.addEventListener('click', () => moveToSlide(currentSlide + 1));
prevButton.addEventListener('click', () => moveToSlide(currentSlide - 1));


progressBars.forEach((bar, index) => {
    const skillLevel = bar.getAttribute("data-skill-level");
    setTimeout(() => {
        bar.style.width = `${skillLevel}%`;
    }, index * 300); // Delays each bar by 300ms
});


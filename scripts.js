// JavaScript code to cycle through images every second
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/bg_image/resiged/9.jpg",
        "assets/bg_image/resiged/24.jpg", // Add your second image path here
        "assets/bg_image/resiged/17.jpg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/web-dev/1.jpeg",
        "assets/web-dev/2.jpeg", // Add your second image path here
        "assets/web-dev/3.jpeg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image-web');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/soft-dev/1.jpeg",
        "assets/soft-dev/2.jpeg", // Add your second image path here
        "assets/soft-dev/3.jpeg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image-soft');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/android-dev/1.jpeg",
        "assets/android-dev/2.jpeg", // Add your second image path here
        "assets/android-dev/3.jpeg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image-android');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/digital-mark/1.jpeg",
        "assets/digital-mark/2.jpeg", // Add your second image path here
        "assets/digital-mark/3.jpeg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image-digital');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/uiux/1.jpeg",
        "assets/uiux/UI_UX.jpeg", // Add your second image path here
        "assets/uiux/3.jpeg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image-uiux');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});


const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

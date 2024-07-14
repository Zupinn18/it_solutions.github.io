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


// JavaScript code to cycle through images every second
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "assets/bg_image/6386.jpg_wh860.jpg",
        "assets/bg_image/social-media-business-intelligence.jpg", // Add your second image path here
        "assets/bg_image/pngtree-hand-gesture-business-team-cooperation-win-win-photograph-with-picture-business-image_7.jpg"  // Add your third image path here
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('card-image');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 1000);
});


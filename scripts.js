// JavaScript code to cycle through images every second

const joinUsBtn = document.getElementById('join-us-btn');
const popupForm = document.getElementById('popup-form');
const closePopupBtn = document.getElementById('close-popup-btn');

joinUsBtn.addEventListener('click', () => {
  popupForm.style.display = 'block';
});

closePopupBtn.addEventListener('click', () => {
  popupForm.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach(item => {
      const navLink = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.dropdown-content');
  
      navLink.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(dd => {
          if (dd !== dropdown) {
            dd.style.display = 'none';
          }
        });
  
        // Toggle the clicked dropdown
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Close dropdown if clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown-content').forEach(dd => {
          dd.style.display = 'none';
        });
      }
    });
  });
  

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


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// portfolio filter js

  document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    // Function to filter cards
    function filterCards(category) {
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Initial display of all cards
    filterCards('all');

    // Add click event listeners to buttons
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        filterCards(category);
      });
    });
  });
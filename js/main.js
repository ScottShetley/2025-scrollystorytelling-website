document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Scroll to the top of the page on load

    // Initialize Fancybox for the design gallery
    $('[data-fancybox="gallery"]').fancybox();
    $('[data-fancybox="design-gallery"]').fancybox(); // Add this line to initialize Fancybox for the design gallery

    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    const heroOverlay = document.createElement('div');
    heroOverlay.classList.add('hero-overlay');
    document.querySelector('.hero').appendChild(heroOverlay);
    const aboutMeSection = document.querySelector('#about-me'); // Ensure the "About Me" section has an ID

    heroText.addEventListener('mouseover', function() {
        heroImage.style.transition = 'transform 3s ease-out, filter 0.3s ease-out';
        heroImage.style.transform = 'scale(1)';
        heroImage.style.filter = 'blur(0)';
    });

    heroText.addEventListener('mouseout', function() {
        heroImage.style.transition = 'transform 3s ease-out, filter 0.3s ease-out';
        heroImage.style.transform = 'scale(1.5)';
        heroImage.style.filter = 'blur(5px)';
    });

    heroText.addEventListener('click', function() {
        heroImage.style.transition = 'transform 0.3s ease-out, filter 0.3s ease-out';
        heroImage.style.transform = 'translateX(-100%)';
        heroImage.style.filter = 'blur(20px) brightness(0.5)';
        heroOverlay.style.opacity = 1; // Show the overlay
        setTimeout(function() {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
            heroOverlay.style.opacity = 0; // Hide the overlay after transition
        }, 300); // Match the duration of the transition
    });

    // Handle image loading for fade-in effect
    const images = document.querySelectorAll('.bento-item img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        // For cached images
        if (img.complete) {
            img.classList.add('loaded');
        }
    });

    // Handle random rotation on hover
    const designImages = document.querySelectorAll('.reverse-bento-item img');
    designImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            const randomRotation = Math.random() > 0.5 ? 3 : -3; // Randomly choose between 3deg and -3deg
            img.style.transform = `scale(1.05) rotate(${randomRotation}deg)`;
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1) rotate(0deg)'; // Reset the transform on mouse out
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
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
        setTimeout(function() {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Match the duration of the transition
    });
});
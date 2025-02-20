document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
});

document.querySelector('.hero-text').addEventListener('mouseover', function() {
    const hero = document.querySelector('.hero');
    const heroText = document.querySelector('.hero-text');
    if (!hero.classList.contains('focused')) { // Ensure flash happens only once
        hero.classList.add('focused');
        heroText.classList.add('hidden'); // Hide the text

        setTimeout(() => {
            heroText.classList.add('hidden-complete'); // Remove text after transition

            // Show the compass icon after 3 seconds
            setTimeout(() => {
                document.querySelector('.fa-regular.fa-compass').style.opacity = '1';
            }, 3000);
        }, 90); // Duration set to 90ms
    }
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

document.querySelector('.fa-regular.fa-compass').addEventListener('click', function() {
    const transitionOverlay = document.createElement('div');
    transitionOverlay.classList.add('full-screen-transition');
    document.body.appendChild(transitionOverlay);

    setTimeout(() => {
        transitionOverlay.classList.add('active');
    }, 10);

    setTimeout(() => {
        document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            transitionOverlay.remove();

            // Trigger the fade-in effect for the bio paragraph
            const bio = document.querySelector('#about-me .bio');
            const sentences = bio.innerText.split('. ');
            bio.innerHTML = sentences.map(sentence => `<span>${sentence}.</span>`).join(' ');
            const spans = bio.querySelectorAll('span');
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('visible');
                }, index * 1000); // Fade in each sentence one by one
            });
        }, 500); // Duration of the fade effect
    }, 500); // Duration of the transition
});
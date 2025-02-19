document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
    document.body.style.overflow = 'hidden'; // Lock user to hero section on load
});

document.querySelector('.hero-text').addEventListener('mouseover', function() {
    const hero = document.querySelector('.hero');
    const heroText = document.querySelector('.hero-text');
    if (!hero.classList.contains('focused')) { // Ensure flash happens only once
        const flash = document.createElement('div');
        flash.classList.add('flash');
        hero.appendChild(flash);
        hero.classList.add('flash-active');
        heroText.classList.add('hidden'); // Hide the text

        setTimeout(() => {
            hero.classList.remove('flash-active');
            hero.classList.add('focused');
            flash.remove();
            heroText.classList.add('hidden-complete'); // Remove text after transition

            // Show the compass icon after 3 seconds
            setTimeout(() => {
                document.querySelector('.fa-regular.fa-compass').style.opacity = '1';
            }, 3000);
        }, 90); // Flash duration set to 90ms
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
            document.body.style.overflow = 'auto'; // Enable scrolling after transition
            transitionOverlay.remove();
        }, 1000); // Duration of the fade effect
    }, 2000); // Duration of the transition
});
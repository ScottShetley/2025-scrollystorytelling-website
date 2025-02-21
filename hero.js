document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Scroll to the top of the page on load

    // Reset the hero section to its initial state
    const hero = document.querySelector('.hero');
    const heroText = document.querySelector('.hero-text');
    const compassIcon = document.querySelector('.fa-regular.fa-compass');

    hero.classList.remove('focused');
    heroText.classList.remove('hidden', 'hidden-complete');
    compassIcon.style.opacity = '0';

    // Add event listener for mouseover on hero text
    heroText.addEventListener('mouseover', function() {
        if (!hero.classList.contains('focused')) { // Ensure flash happens only once
            hero.classList.add('focused');
            heroText.classList.add('hidden'); // Hide the text

            setTimeout(() => {
                heroText.classList.add('hidden-complete'); // Remove text after transition

                // Show the compass icon after 2.5 seconds
                setTimeout(() => {
                    compassIcon.style.opacity = '1';
                }, 2500);
            }, 90); // Duration set to 90ms
        }
    });

    // Add event listener for compass icon click
    compassIcon.addEventListener('click', triggerTransition);

    // Add event listener for scroll
    window.addEventListener('scroll', function() {
        if (!transitionTriggered) {
            triggerTransition(); // Trigger the transition as soon as the user starts scrolling
        }
    });

    // Function to trigger the transition
    let transitionTriggered = false; // Flag to track if the transition has been triggered

    function triggerTransition() {
        if (transitionTriggered) return; // Prevent the transition if it has already been triggered

        transitionTriggered = true; // Set the flag to true to indicate the transition has been triggered

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
            }, 500); // Duration of the fade effect
        }, 500); // Duration of the transition
    }
});
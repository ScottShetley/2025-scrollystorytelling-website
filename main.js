document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Scroll to the top of the page on load

    const sentences = document.querySelectorAll(".about-me-text span");
    let currentSentence = 0;

    function showNextSentence() {
        console.log("Showing sentence:", currentSentence);
        if (currentSentence > 0) {
            sentences[currentSentence - 1].classList.remove("visible");
        }
        if (currentSentence < sentences.length) {
            sentences[currentSentence].classList.add("visible");
            console.log("Added visible class to sentence:", currentSentence);
            currentSentence++;
            setTimeout(showNextSentence, 4000); // Adjust the timing as needed
        } else {
            currentSentence = 0;
            setTimeout(showNextSentence, 4000); // Restart the cycle
        }
    }

    const aboutMeSection = document.getElementById('about-me');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log("Intersection Observer entry:", entry);
            if (entry.isIntersecting) {
                console.log("About Me section is in view");
                showNextSentence();
                observer.unobserve(aboutMeSection); // Stop observing after the animation starts
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold to 0.5 to ensure the section is partially in view

    observer.observe(aboutMeSection);
    console.log("Observer set up for About Me section");
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

document.querySelector('.fa-regular.fa-compass').addEventListener('click', triggerTransition);

window.addEventListener('scroll', function() {
    if (!transitionTriggered) {
        triggerTransition(); // Trigger the transition as soon as the user starts scrolling
    }
});
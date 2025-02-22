document.addEventListener('DOMContentLoaded', function() {
    // Select all span elements within the about-me-text class
    const sentences = document.querySelectorAll(".about-me-text span");
    let currentSentence = 0;

    // Function to show the next sentence
    function showNextSentence() {
        console.log("Showing sentence:", currentSentence);
        if (currentSentence > 0) {
            // Remove the visible class from the previous sentence
            sentences[currentSentence - 1].classList.remove("visible");
        }
        if (currentSentence < sentences.length) {
            // Add the visible class to the current sentence
            sentences[currentSentence].classList.add("visible");
            console.log("Added visible class to sentence:", currentSentence);
            currentSentence++;
            // Set a timeout to show the next sentence after 4 seconds
            setTimeout(showNextSentence, 4000); // Adjust the timing as needed
        } else {
            // Reset the current sentence index and restart the cycle
            currentSentence = 0;
            setTimeout(showNextSentence, 4000); // Restart the cycle
        }
    }

    // Select the about-me section
    const aboutMeSection = document.getElementById('about-me');
    // Create an IntersectionObserver to observe when the about-me section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log("Intersection Observer entry:", entry);
            if (entry.isIntersecting) {
                console.log("About Me section is in view");
                // Start showing sentences when the about-me section is in view
                showNextSentence();
                // Stop observing after the animation starts
                observer.unobserve(aboutMeSection);
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold to 0.5 to ensure the section is partially in view

    // Start observing the about-me section
    observer.observe(aboutMeSection);
    console.log("Observer set up for About Me section");
});
document.addEventListener('DOMContentLoaded', function() {
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
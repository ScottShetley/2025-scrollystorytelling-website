document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Scroll to the top of the page on load

    // Example button click event
    document.getElementById('myButton').addEventListener('click', function() {
        alert('Button was clicked!');
    });

    // Initialize Fancybox for the design gallery
    $('[data-fancybox="gallery"]').fancybox();
    $('[data-fancybox="design-gallery"]').fancybox(); // Add this line to initialize Fancybox for the design gallery
});
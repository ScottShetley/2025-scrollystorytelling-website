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
        }, 90); // Flash duration set to 90ms
    }
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
document.addEventListener('scroll', function() {
    const element = document.querySelector('.header');
    if (window.scrollY > 50) {
        element.classList.add('scrolled');
    } else {
        element.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

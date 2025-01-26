//прилипший хедер

document.addEventListener('scroll', function() {
    const element = document.querySelector('.header');
    if (window.scrollY > 50) {
        element.classList.add('scrolled');
    } else {
        element.classList.remove('scrolled');
    }
});

//плавный скролл

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'auto'
        });
    });
});

//перепрыгивание по секциям

const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

document.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    const sectionOffsets = Array.from(sections).map(section => section.offsetTop);

    if (currentScroll > sectionOffsets[currentSectionIndex] + sections[currentSectionIndex].offsetHeight / 1.5) {
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (currentScroll < sectionOffsets[currentSectionIndex] - sections[currentSectionIndex].offsetHeight / 1.5) {
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
});


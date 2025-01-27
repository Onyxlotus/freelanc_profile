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

    if (currentScroll > sectionOffsets[currentSectionIndex] + sections[currentSectionIndex].offsetHeight / 2) {
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else if (currentScroll < sectionOffsets[currentSectionIndex] - sections[currentSectionIndex].offsetHeight / 2) {
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
});

//слайдер

let slider = document.querySelector('.slider'),
  sliderList = slider.querySelector('.slider-list'),
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slide'),
  arrows = slider.querySelector('.slider-arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posFinal = 0,
  posThreshold = slideWidth * .35,
  trfRegExp = /[-0-9.]+(?=px)/,
  slide = function() {
    sliderTrack.style.transition = 'transform .5s';
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;


    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  } 

  arrows.addEventListener('click', function() {
    let target = event.target;
  
    if (target === next) {
      slideIndex++;
    } else if (target === prev) {
      slideIndex--;
    } else {
      return;
    }
  
    slide();
  });
  
  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);
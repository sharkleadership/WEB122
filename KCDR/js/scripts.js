// Dropdown-Menu hamburger open/close

const hamburgers = document.querySelectorAll('.dropdown-menu__hamburger');

hamburgers.forEach((hamburger) => {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-open');
        const navMenu = hamburger.nextElementSibling;
        navMenu.classList.toggle('is-open');
    });
});

// Change scrolling margins depending on header size

const header = document.querySelector('.body-header');
const root = document.documentElement;

const updateHeaderHeight = () => {
    const height = header.offsetHeight;
    root.style.setProperty('--header-height', `${height}px`);
};

window.addEventListener('resize', updateHeaderHeight);

updateHeaderHeight();

// Animate back to top button in on scroll

let hasButtonAppeared = false;

const backToTop = document.querySelector('.back-to-top');

backToTop.addEventListener('click', (e) => {
    if (window.scrollY === 0) {
        backToTop.classList.remove('has-appeared');
        hasButtonAppeared = false;
    }
});

window.addEventListener('scroll', (e) => {
    if (!hasButtonAppeared && window.scrollY > 150) {
        backToTop.classList.add('has-appeared');
        hasButtonAppeared = true;
    }
    if (window.scrollY === 0) {
        backToTop.classList.remove('has-appeared');
        hasButtonAppeared = false;
    }
});
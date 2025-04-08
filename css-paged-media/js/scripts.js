"use strict";

// Dropdown module

const hamburger = document.querySelector('.dropdown__hamburger');
const menu = document.querySelector('.dropdown__menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    menu.classList.toggle('is-open');
});

menu.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    menu.classList.remove('is-open');
});

// Change scrolling margins depending on header size

const header = document.querySelector('header');
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

window.addEventListener('scroll', (e) => {
    // console.log(window.scrollY)
    if (!hasButtonAppeared && window.scrollY > 150) {
        backToTop.classList.add('has-appeared');
        hasButtonAppeared = true;
    }
    if (window.scrollY === 0) {
        backToTop.classList.remove('has-appeared');
        hasButtonAppeared = false;
    }
});

// Open and close colophon modal

const colophon = document.querySelector('.colophon');
const openColophonButton = document.querySelector('.open-colophon');
const closeColophonButton = document.querySelector('.colophon__close');

openColophonButton.addEventListener('click', () => {
    colophon.showModal();
});

closeColophonButton.addEventListener('click', () => {
    colophon.close();
});

colophon.addEventListener('click', (e) => {
    const dimensions = colophon.getBoundingClientRect();

    if (
            e.clientX <= dimensions.left || 
            e.clientX >= dimensions.right || 
            e.clientY <= dimensions.top ||
            e.clientY >= dimensions.bottom
        ) {
            colophon.close();
        }
});

// Polyfill printing styles

window.PagedConfig = {
    auto: false
};

window.addEventListener('beforeprint', (e) => {
    window.PagedPolyfill.preview();
});

window.addEventListener('afterprint', () => {
    location.reload();
});

// window.PagedPolyfill.preview();
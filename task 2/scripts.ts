// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Smooth scroll for navigation
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!email || !message) {
            event.preventDefault();
            alert('Please fill in all fields');
        } else {
            alert('Form submitted successfully!');
        }
    });
});

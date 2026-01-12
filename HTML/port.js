// Smooth year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Simple dark / light theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const light = body.classList.contains('light-mode');
        themeToggle.textContent = light ? '☀' : '☾';
    });
}

// Form handling
const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        statusText.textContent = 'Sending...';

        setTimeout(() => {
            statusText.textContent = 'Message sent successfully!';
            form.reset();
            setTimeout(() => (statusText.textContent = ''), 2500);
        }, 800);
    });
}

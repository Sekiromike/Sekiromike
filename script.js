console.log("Portfolio loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Fade-ins
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // 2. Typing Effect for Hero Name
    const nameElement = document.querySelector('.hero-title .text-accent');
    if (nameElement) {
        const textToType = "Rushath"; // The text is already there, we might want to animate it or just leave it static.
        // Let's animate a cursor blinking or a slide-up effect for the hero text instead content replacement for smoother load.

        // Actually, let's make the "Machine Learning" and "Biology" text highlight sequentially.
        setTimeout(() => {
            document.querySelector('.hero-subtitle').style.opacity = '1';
        }, 500);
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

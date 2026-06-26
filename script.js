document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        console.log('Form submitted:', formData);

        alert('Dziękuję za wiadomość! Odezwę się wkrótce.\n\nNote: To connect a real form backend, you can use:\n- Formspree (free tier available)\n- Netlify Forms (if hosting on Netlify)\n- EmailJS\n- Your own backend API');

        contactForm.reset();
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

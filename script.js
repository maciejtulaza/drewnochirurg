document.addEventListener('DOMContentLoaded', function() {
    // Fix hero padding based on header height
    function adjustHeroPadding() {
        const header = document.querySelector('header');
        const hero = document.querySelector('.hero');
        if (header && hero && window.innerWidth <= 768) {
            const headerHeight = header.offsetHeight;
            hero.style.paddingTop = (headerHeight + 20) + 'px';
        } else if (hero) {
            hero.style.paddingTop = '';
        }
    }

    adjustHeroPadding();
    window.addEventListener('resize', adjustHeroPadding);

    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    let isExpanded = false;

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;

            hiddenItems.forEach(item => {
                if (isExpanded) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });

            if (isExpanded) {
                showMoreBtn.textContent = 'Pokaż mniej';
            } else {
                showMoreBtn.textContent = 'Zobacz wszystkie (39 zdjęć)';
            }
        });
    }

    // Copy email to clipboard
    const emailCards = document.querySelectorAll('[data-email]');
    emailCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                // Shake animation
                this.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);

                // Show toast notification
                const toast = document.createElement('div');
                toast.className = 'toast-notification';
                toast.textContent = '✓ Email skopiowany do schowka!';
                document.body.appendChild(toast);

                setTimeout(() => {
                    toast.classList.add('show');
                }, 10);

                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(toast);
                    }, 300);
                }, 2500);
            }).catch(() => {
                window.location.href = this.href;
            });
        });
    });

    // Lightbox for gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="">
        <div class="lightbox-nav">
            <button class="lightbox-prev">‹</button>
            <button class="lightbox-next">›</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;
    const images = Array.from(galleryItems);

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    galleryItems.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

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


if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


if ('IntersectionObserver' in window) {
  const fadeElements = document.querySelectorAll('.carrousel__item, .other-projects__item, .article__image');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));
}


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = this.querySelector('input[name="name"]');
    const email = this.querySelector('input[name="email"]');
    const message = this.querySelector('textarea[name="message"]');
    
    if (!name || !name.value.trim()) {
      alert('Veuillez entrer votre nom / Please enter your name');
      e.preventDefault();
      return;
    }
    if (!email || !email.value.includes('@')) {
      alert('Veuillez entrer un email valide / Please enter a valid email');
      e.preventDefault();
      return;
    }
    if (!message || !message.value.trim()) {
      alert('Veuillez entrer un message / Please enter a message');
      e.preventDefault();
      return;
    }
  });
}

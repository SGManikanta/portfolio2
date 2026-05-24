// Nav scroll border
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Hamburger
const hamburger = document.getElementById('hamburger');
const overlay   = document.getElementById('mobileOverlay');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  overlay.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
overlay.querySelectorAll('.mob-link').forEach(l => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// Fade-up hero on load
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-up').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 80);
  });
});

// Scroll reveal for everything else
const revealEls = document.querySelectorAll(
  '.section-num, .section-heading, .body-text, ' +
  '.exp-entry, .edu-entry, .proj-entry, ' +
  '.skill-col, .contact-email, .contact-socials'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

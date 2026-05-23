/* ─── Custom Cursor ─────────────────────────────── */
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = -100, mouseY = -100;
let ringX  = -100, ringY  = -100;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
  cursor.classList.add('visible');
  cursorRing.classList.add('visible');
});

;(function animateRing() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

document.addEventListener('mouseleave', () => {
  cursor.classList.remove('visible');
  cursorRing.classList.remove('visible');
});

document.querySelectorAll('a, button, .music-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
    cursorRing.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorRing.classList.remove('active');
  });
});

/* ─── Navigation ────────────────────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─── Scroll Reveal ─────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = parseInt(entry.target.dataset.delay) || 0;
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Stagger delay for grid children */
document.querySelectorAll('.stagger').forEach(parent => {
  parent.querySelectorAll('.reveal').forEach((child, i) => {
    child.dataset.delay = i * 70;
  });
});

/* ─── Marquee Duplicate ──────────────────────────── */
const track = document.querySelector('.marquee-track');
if (track) {
  const clone = track.innerHTML;
  track.innerHTML = clone + clone;
}

/* ─── Smooth anchor scroll ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ─── Cursor: hide over iframes ─────────────────────── */
document.querySelectorAll('.reel-reelcrafter, .reel-video, .vo-video').forEach(wrap => {
  wrap.addEventListener('mouseenter', () => {
    cursor.classList.remove('visible');
    cursorRing.classList.remove('visible');
  });

  wrap.addEventListener('mouseleave', () => {
    cursor.classList.add('visible');
    cursorRing.classList.add('visible');
  });
});

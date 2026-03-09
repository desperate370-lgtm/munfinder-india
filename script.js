const navbar = document.getElementById('navbar');
const heroContent = document.getElementById('heroContent');
const configCar = document.getElementById('configCar');
const revealTargets = document.querySelectorAll('.reveal');
const parallaxTargets = document.querySelectorAll('.parallax-item');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 32);

  const scrollY = window.scrollY;
  parallaxTargets.forEach((el, idx) => {
    const speed = 0.02 + idx * 0.005;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach((el) => revealObserver.observe(el));

window.addEventListener('mousemove', (event) => {
  if (!heroContent) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  heroContent.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

document.querySelectorAll('.swatch').forEach((swatch) => {
  swatch.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach((el) => el.classList.remove('active'));
    swatch.classList.add('active');

    const selectedColor = swatch.dataset.color || '#C00000';
    configCar.style.background = `radial-gradient(circle at 30% 30%, ${selectedColor} 0, ${selectedColor} 35%, #210000 80%)`;
  });
});

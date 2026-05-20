window.addEventListener('load', () => {

  const loader = document.querySelector('.loader');

  loader.style.opacity = '0';

  setTimeout(() => {
    loader.remove();
  }, 600);

});

const glow = document.getElementById('cursorGlow');

window.addEventListener('mousemove', (e) => {

  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';

});

window.addEventListener('scroll', () => {

  const scrollTop = document.documentElement.scrollTop;

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;

  document.getElementById('progressBar').style.width = scrolled + '%';

});

new Typed('#typing', {

  strings: [
    'Developer',
    'Designer',
    'Creative Builder',
    'Frontend Engineer'
  ],

  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 1400,
  loop: true

});

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {

  const icon = themeToggle.querySelector('i');

  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {

    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-sun-fill');

    localStorage.setItem('theme', 'light');

  } else {

    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-stars-fill');

    localStorage.setItem('theme', 'dark');

  }

});

function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString();

  document.getElementById('liveClock').innerHTML = time;

}

setInterval(updateClock, 1000);

updateClock();

let seconds = 0;

function updateTimeSpent() {

  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  let display = '';

  if (hrs > 0) {
    display += hrs + 'h ';
  }

  if (mins > 0 || hrs > 0) {
    display += mins + 'm ';
  }

  display += secs + 's';

  document.getElementById('timeSpent').innerHTML = display;

}

setInterval(updateTimeSpent, 1000);

ScrollReveal().reveal('.hero-text', {
  distance: '60px',
  duration: 1200,
  origin: 'left',
  opacity: 0
});

ScrollReveal().reveal('.hero-card', {
  distance: '60px',
  duration: 1200,
  origin: 'right',
  opacity: 0
});

ScrollReveal().reveal('.skill-card,.project-card,.stat-card,.contact-box', {
  interval: 200,
  distance: '40px',
  duration: 1000,
  origin: 'bottom',
  opacity: 0
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }

  });

});

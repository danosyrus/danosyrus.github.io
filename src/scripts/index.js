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
    'UI/UX Designer',
    'Student',
    'Creative Builder',
    'Freelancer',
    'Martial Artist',
    "Gamer/Esports"
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


const customizeBtn =
  document.getElementById("customizeBtn");

const customizerPanel =
  document.getElementById("customizerPanel");

const closeCustomizer =
  document.getElementById("closeCustomizer");

const accentPicker =
  document.getElementById("accentPicker");

const bgPicker =
  document.getElementById("bgPicker");

const textPicker =
  document.getElementById("textPicker");

const cardPicker =
  document.getElementById("cardPicker");

customizeBtn.addEventListener("click", () => {

  customizerPanel.classList.add("active");

});

closeCustomizer.addEventListener("click", () => {

  customizerPanel.classList.remove("active");

});

accentPicker.addEventListener("input", (e) => {

  document.documentElement
    .style
    .setProperty("--accent", e.target.value);

});

bgPicker.addEventListener("input", (e) => {

  document.body.style.background =
    e.target.value;

});

textPicker.addEventListener("input", (e) => {

  document.body.style.color =
    e.target.value;

});

cardPicker.addEventListener("input", (e) => {

  document.querySelectorAll(
    ".hero-card, .skill-card, .project-card, .info-card, .stat-card, .contact-box"
  ).forEach(card => {

    card.style.background =
      e.target.value;

  });

});

const notifyBox =
  document.getElementById("notifyBox");

const randomMessages = [

  "Hi 👋",
  "How are you?",
  "Game okke kalik machuu",
  "Hope you're having a great day 🚀",
  "Play the mini game 🎮",
  "Game okke kalik machuu",
  "Stay strong 💪"

];

function showNotification() {

  const randomText = randomMessages[
    Math.floor(Math.random() * randomMessages.length)
  ];

  notifyBox.innerText = randomText;

  notifyBox.classList.add("show");

  setTimeout(() => {

    notifyBox.classList.remove("show");

  }, 5000);

}

setInterval(showNotification, 7000);

showNotification();

fetch("src/config/config.json")
  .then(res => res.json())
  .then(data => {
    for (const key in data) {
      const element = document.getElementById(key);
      if (element) {
        element.href = data[key];
      }
    }
  });

window.onload = function () {
  document.body.classList.add("loaded");
};


const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.classList.replace('bi-moon-fill', 'bi-moon-fill');
  themeLabel.textContent = 'Dark Mode';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');

  themeIcon.classList.toggle('bi-moon-fill', isLight);
  themeIcon.classList.toggle('bi-sun-fill', !isLight);
  themeLabel.textContent = isLight ? 'Dark Mode' : 'Light Mode';

  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

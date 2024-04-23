const texts = [
  "Full Stack Developer",
  "Web Designer",
  "Programmer",
  "Tech Enthusiast"
];

let index = 0;
const textElement = document.getElementById("bio");

function changeText() {
  textElement.classList.remove("show");
  setTimeout(() => {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
    textElement.classList.add("show");
  }, 500);
}

changeText();
setInterval(changeText, 3000);

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

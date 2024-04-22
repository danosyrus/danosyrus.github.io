var texts = [
  "Full Stack Developer",
  "Web Designer",
  "Programmer",
  "Tech Enthusiast"
];

var index = 0;
function changeText() {
  var textElement = document.getElementById("bio");
  textElement.classList.remove("show");

  setTimeout(function () {
    textElement.textContent = texts[index];
    index++;
    if (index >= texts.length) {
      index = 0;
    }

    textElement.classList.add("show");
  }, 500);
}

changeText();
setInterval(changeText, 3000);

fetch("src/config/config.json")
  .then((res) => {
    return res.json();
  })
  .then(data => {
    const entries = Object.entries(data);
    for (let [key] of entries) {
      var res = document.getElementById(key);
      res ? res.href = data[key] : null;
    }
  });

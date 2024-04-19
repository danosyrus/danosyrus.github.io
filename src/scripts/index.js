var texts = [
    "Full Stack Developer",
    "Web Designer",
    "Intermediate Programmer",
    "Tech Enthusiast"
  ];
  
  var index = 0;
  function changeText() {
    var textElement = document.getElementById("bio");
    textElement.classList.remove("show");
  
    setTimeout(function() {
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
  

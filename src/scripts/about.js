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

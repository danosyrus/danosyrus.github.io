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
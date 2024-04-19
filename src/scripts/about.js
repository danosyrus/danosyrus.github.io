var modal = document.getElementById("modal");
window.onclick = function(event) {
  if (event.target == modal) {
    window.alert(modal)
    modal.style.display = "none";
  };
};

let input = document.getElementById("montoEspeci");
input.addEventListener("input", function () {
  if (this.value.length > 10) this.value = this.value.slice(0, 10);
});

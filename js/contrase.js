let input = document.getElementById("pass");
input.addEventListener("input", function () {
  if (this.value.length > 4) this.value = this.value.slice(0, 4);
});

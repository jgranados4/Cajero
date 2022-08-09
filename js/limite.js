var input = document.getElementById("monto");
input.addEventListener("input", function () {
  if (this.value.length > 3) this.value = this.value.slice(0, 3);
});


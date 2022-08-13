let Cuenta = document.getElementById("cuenta");
let Cedula = document.getElementById("cedula");
let Valordepos = document.getElementById("valordepos");

Cuenta.addEventListener("input", function () {
  if (this.value.length > 10) this.value = this.value.slice(0, 10);
});
Cedula.addEventListener("input", function () {
  if (this.value.length > 10) this.value = this.value.slice(0, 10);
});
Valordepos.addEventListener("input", function () {
  if (this.value.length > 10) this.value = this.value.slice(0, 10);
});

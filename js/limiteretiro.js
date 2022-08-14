let Monto =document.getElementById('Monto')
let input = document.getElementById("montoEspeci");
input.addEventListener("input", function () {
  if (this.value.length > 10) this.value = this.value.slice(0, 10);
});
const Habilitar = () => {
  let val = 0;
  if (input.value == "") {
    val++;
  }
  if (Monto.value == "") {
    val++;
  }
  if (val === 0) {
    document.getElementById("guardar").disabled = false;
  } else {
    document.getElementById("guardar").disabled = true;
  }
};
input.addEventListener("keyup", Habilitar);
Monto.addEventListener("change", Habilitar);

//Guardar
const forma=document.getElementById('formulario');
const Guardar = document.getElementById("guardar");
const monto = document.getElementById("Monto");
const MontoEspecifico = document.getElementById("montoEspeci");
//
monto.addEventListener("change", function () {
  var selectedOption = this.options[select.selectedIndex];
  console.log(selectedOption.value + ": " + selectedOption.text);
});
let Retiros = [];
//guardar al local storage
 function guardarlocal(a) {
  localStorage.setItem("Retiros", JSON.stringify(a));
}

Guardar.onclick = () => {
  let datos = {
    Montos: monto.value,
    MontoEspecificos: MontoEspecifico.value,
  };
  Retiros.push(datos);
  guardarlocal(Retiros);
  forma.reset();
  location='retiGracias.html';
};

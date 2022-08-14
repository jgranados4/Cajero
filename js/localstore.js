//Guardar
const forma = document.getElementById("formulario");
const Guardar = document.getElementById("guardar");
const cuenta = document.getElementById("cuenta");
const cedula = document.getElementById("cedula");
const valordepos = document.getElementById("valordepos");
//
let factura = [];
let arreglodetalle = [];
//guardar al local storage
function guardarlocal(a) {
  localStorage.setItem("facturas", JSON.stringify(a));
}
Guardar.onclick = (e) => {
  let datos = {
    Cuenta: cuenta.value,
    Cedula: cedula.value,
    ValorDepos: valordepos.value,
  };
  factura.push(datos);
  guardarlocal(factura);
  forma.reset();
  location = "deposito2.html";
};


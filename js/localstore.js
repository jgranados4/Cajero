//Guardar
const forma=document.getElementById('formulario')
const Guardar = document.getElementById("guardar");
const cuenta = document.getElementById("cuenta");
const cedula = document.getElementById("cedula");
const valordepos = document.getElementById("valordepos");
//
let factura = [];
let arreglodetalle = [];
Guardar.onclick = () => {
  let datos = {
    Cuenta: cuenta.value,
    Cedula: cedula.value,
    ValorDepos: valordepos.value,
  };
  console.log(datos);
  factura.push(datos);
  localStorage.setItem("facturas", JSON.stringify(factura));
};

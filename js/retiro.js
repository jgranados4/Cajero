//Guardar
const forma=document.getElementById('formulario');
const Guardar = document.getElementById("guardar");
const Monto = document.getElementById("monto");
const MontoEspecifico = document.getElementById("montoEspeci");
//
let factura = [];
let arreglodetalle = [];
//guardar al local storage
 function guardarlocal(a) {
  localStorage.setItem("facturas", JSON.stringify(a));
}
//obtener 
function obtener(b) {
  
}
Guardar.onclick = () => {
  let datos = {
    Cuenta: cuenta.value,
    Cedula: cedula.value,
    ValorDepos: valordepos.value,
  };
  factura.push(datos);
  guardarlocal(factura);
  forma.reset();
  location='deposito2.html';
};

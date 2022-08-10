//Guardar
const forma=document.getElementById('formulario');
const Guardar = document.getElementById("guardar");
const Monto = document.getElementById("monto");
const MontoEspecifico = document.getElementById("montoEspeci");
//
let factura = [];
//guardar al local storage
 function guardarlocal(a) {
  localStorage.setItem("facturas", JSON.stringify(a));
}

Guardar.onclick = () => {
  let datos = {
    Montos: Monto.value,
    MontoEspecificos: MontoEspecifico.value,
  };
  factura.push(datos);
  guardarlocal(factura);
  forma.reset();
  location='retiGracias.html';
};

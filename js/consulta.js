//Guardar
const forma=document.getElementById('formulario');
const Guardar=document.getElementById('guardar');
const saldo =document.getElementById('total');
saldo.innerHTML=12;

const restar =()=>{
  let total =parseFloat(saldo.innerHTML);
  saldo.innerHTML=total-0.50;
}
console.log(restar())

let factura = [];
let arreglodetalle = [];
//guardar al local storage
 function guardarlocal(a) {
  localStorage.setItem("Saldos", JSON.stringify(a));
}
//obtener 
function obtener(b) {
  
}
Guardar.onclick = (e) => {
  let datos = {
    Salto:salto.textContent,
  };
  factura.push(datos);
  guardarlocal(factura);
  location='consulta2.html';
  e.preventDefault();
};


const Datos = document.getElementById("datos");
let a =JSON.parse(localStorage.getItem('facturas'))
console.log(a[0].Cedula)
Datos.innerText=a[0].Cedula;

const cuenta = document.getElementById("Cuent");
const cedula = document.getElementById("cedula");
const Deposito = document.getElementById("Deposi");
let a =JSON.parse(localStorage.getItem('facturas'))
console.log(a[0].Cedula)

cuenta.innerText=a[0].Cuenta;
cedula.innerText=a[0].Cedula;
Deposito.innerText=a[0].ValorDepos;
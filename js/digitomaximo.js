let formulario=document.getElementById('formulario');
console.log(formulario);
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
//
const Habilitar =()=>{
  let val=0;
  if (Cuenta.value=="") {
    val++;
  } if(Cedula.value=="") { 
    val++;
  } if(Valordepos.value==""){
    val++;
  }if (val === 0) {
    document.getElementById("guardar").disabled = false;
  } else {
    document.getElementById("guardar").disabled = true;
  }
};
Cuenta.addEventListener("keyup", Habilitar);
Cedula.addEventListener("keyup", Habilitar);
Valordepos.addEventListener("keyup", Habilitar);

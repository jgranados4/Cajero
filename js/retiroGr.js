const Retiro = document.getElementById('retiro');
let b = JSON.parse(localStorage.getItem("Retiros"));

Retiro.innerText=b[0].MontoEspecificos;
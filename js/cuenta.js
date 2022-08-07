//digito de cuenta
const resul =()=>{
    let resul=document.getElementById("resul");
    let resultado=document.getElementById("resultado");
    let uno=document.getElementById("uno");
    let dos =document.getElementById("dos");
    let tres=document.getElementById("tres");
    let cuatro=document.getElementById("cuatro");
    let cinco=document.getElementById("cinco");
    let seis =document.getElementById("seis");
    let siete=document.getElementById("siete");
    let ocho=document.getElementById("ocho");
    let nueve=document.getElementById("nueve");
    let cero=document.getElementById("cero");
    //eventos
    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
        console.log(resultado)
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
        console.log(resultado);
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }
    function Limpiar(){
        resultado.textContent="";
    }
    resul.onclick=function(){
        if(resultado.textContent==='1234'){
            location='Bienvenido.html';
        }else{
            console.log('no entra')
        }

    }
}
// //Ingreso de contrasena
//  const ingreso = (resultado) => {
//    if (resultado === "1234") {
//      location = "consulta.html";
//      Limpiar();
//    } else {
//      alert("error en el password");
//      console.log(resultado);
//    }
//  };

resul();

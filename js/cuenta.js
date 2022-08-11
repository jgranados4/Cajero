//digito de cuenta
const resul =()=>{
    let resul=document.getElementById("resul");
    let resultado=document.getElementById("resultado");
    let diez=document.getElementById("diez");
    let veinte =document.getElementById("veinte");
    let treinta=document.getElementById("treinta");
    let cuarenta=document.getElementById("cuarenta");
    let cincuenta=document.getElementById("cincuenta");
    let sesenta =document.getElementById("sesenta");
    let ochenta=document.getElementById("ochenta");
    let cien=document.getElementById("cien");
    let otros=document.getElementById("otros");
    //eventos
    diez.onclick=function(e){
        resultado.textContent=resultado.textContent+"10";
        console.log(resultado)
    }
    veinte.onclick=function(e){
        resultado.textContent=resultado.textContent+"20";
        console.log(resultado);
    }
    treinta.onclick=function(e){
        resultado.textContent=resultado.textContent+"30";
    }
    cuarenta.onclick=function(e){
        resultado.textContent=resultado.textContent+"40";
    }
    cincuenta.onclick=function(e){
        resultado.textContent=resultado.textContent+"50";
    }
    sesenta.onclick=function(e){
        resultado.textContent=resultado.textContent+"60";
    }
    ochenta.onclick=function(e){
        resultado.textContent=resultado.textContent+"80";
    }
    cien.onclick=function(e){
        resultado.textContent=resultado.textContent+"100";
    }
    otros.onclick=function(e){
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
            location='consulta.html';
        }else{
            console.log('no entra')
        }


    }
}

resul();

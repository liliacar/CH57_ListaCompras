const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


//number

function validarCantidad(){
if (txtNumber.value.length==0){
    return false;
}//tenga informacion
if(isNaN(txtNumber.value)){
    return false;
}//tiene que ser un numero
if(Number(txtNumber.value)<=0){
    return false;
}
//mayor que 0

return true;
}//validarCantidad

function getPRecio(){
    return Math.round(Math.random() *1000)/100;
}//get precio

btnAgregar.addEventListener("click", function(event){
event.preventDefault();
alertValidacionesTexto.innerHTML="";
alertValidaciones.style.display="none";
txtName.style.border="";
txtNumber.style.border="";
//name
//validar que tenga minimo tres letras
if(txtName.value.length<3){
    //mensaje error
    txtName.style.border="medium red solid";
    alertValidacionesTexto.innerHTML="<strong>El nombre del producto no es correcto</strong>";
    alertValidaciones.style.display="block";
}//<3

if(! validarCantidad()){
    txtNumber.style.border="medium red solid";
alertValidacionesTexto.innerHTML ="<strong>La cantidad no es correcta</strong>";
alertValidaciones.style.display="block";
}//!validarCantidad

if (txtNumber.value.length==0){

}
}); //btnAgregar listener


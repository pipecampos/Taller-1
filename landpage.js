//obtenemos los elementos
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("email");
var textarea = document.getElementById("textarea");
//mensaje de enviado
var enviado = document.getElementById("enviado");
//accedemos a los errores
var error = document.getElementById("mensajeerror");
//nombre
var error3caracteresNombre = document.getElementById("errora1");
var errorNombreVacio = document.getElementById("errora2");
//apellido
var error3caracteresApellido = document.getElementById("errorb1");
var errorApellidoVacio = document.getElementById("errorb2");
//correo
var error3caracteresCorreo = document.getElementById("errorc1");
var errorCorreoVacio = document.getElementById("errorc2");
//comentario
var error3caracteresComentario = document.getElementById("errord1");
var errorComentarioVacio = document.getElementById("errord2");
var error200 = document.getElementById("errord3")
//obtenemos el botón
var btnenviar = document.getElementById("btnenviar");
//obtenemos los div del panel de comentarios
var comentarios = document.getElementById("tablacomentarios");
//Validacion
nombre.addEventListener("blur",function(){
    if(nombre.value.length<3){
        error3caracteresNombre.style.display = "block";
        
    }else{
        error3caracteresNombre.style.display = "none";
    }
    if(nombre.value ==""){
        errorNombreVacio.style.display = "block";
        
    }else{
        errorNombreVacio.style.display = "none";
       
    }
    enviado.style.display = "none";
});
apellido.addEventListener("blur",function(){
    if(apellido.value.length<3){
        error3caracteresApellido.style.display = "block";
        
    }else{
        error3caracteresApellido.style.display = "none";
       
    }
    if(nombre.value == ""){
        errorApellidoVacio.style.display = "block";
        
    }else{
        errorApellidoVacio.style.display = "none";
       
    }
});
correo.addEventListener("blur",function(){
    if(correo.value.length<3){
        error3caracteresCorreo.style.display = "block";
        
    }else{
        error3caracteresCorreo.style.display = "none";
       
    }
    if(correo.value ==""){
        errorCorreoVacio.style.display = "block";
        
    }else{
        errorCorreoVacio.style.display = "none";
       
    }
});
textarea.addEventListener("blur",function(){
    if(textarea.value.length<3){
        error3caracteresComentario.style.display = "block";
        
    }else{
        error3caracteresComentario.style.display = "none";
        
    }
    if(textarea.value ==''){
        errorComentarioVacioVacio.style.display = "block";
       
    }else{
        errorComentarioVacio.style.display = "none";
        
    }
    if(textarea.value.length>200){
        error200.style.display = 'block';
       
    }else {
        error200.style.display = 'none';
    }
});
btnenviar.addEventListener("click",function(){
    if(nombre.value == "" || apellido.value == ""||correo.value == ""||textarea.value == ''){
        error.style.display = "block";
    }else if(error3caracteresNombre.style.display=="none" && error3caracteresApellido.style.display == "none" && error3caracteresCorreo.style.display == "none" && error3caracteresComentario.style.display == "none"){
        comentar();
        error.style.display = "none";
        enviado.style.display = "block";
        //reiniciamos los inputs
        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        textarea.value = '';
        comentarios.deleteRow(5); //vamos borrando el comentario 4
    }else{
        error.style.display = "block";
    }
      
},false); 
function comentar(){ //creamos los comentarios en la tabla
    var fila = comentarios.insertRow(1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
   
    const fecha = new Date();
    const fechacompleta = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    const hora = fecha.getHours()+":"+fecha.getMinutes();
    celda1.textContent = nombre.value+" "+apellido.value;
    celda2.textContent = fechacompleta+" "+hora;
    celda3.textContent = textarea.value;
}
var btnacordion = document.getElementById("btnacordion");
var panel = document.getElementById("comentarios");
btnacordion.addEventListener("click",function(){
    panel.style.display = "flex";
});
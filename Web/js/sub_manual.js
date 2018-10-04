/*Variables Globales*/

var adelanteCheck = false;
var atrasCheck = false;
/*Variables Globales*/
/*
function disable() {
    document.getElementById("manAdelante").disabled = true;
    document.getElementById("manAtras").disabled = true;
    document.getElementById("manParar").disabled = false;
}

function enable() {
    document.getElementById("manAdelante").disabled = false;
    document.getElementById("manAtras").disabled = false;
    document.getElementById("manParar").disabled = true;
}*/
/*
function btnAdelante(idBoton) {
    document.getElementById("manInAd").value = "true";
    document.getElementById("manInAt").value = "false";
    GuardarBtnPulsado(idBoton);
}

function btnAtras(idBoton) {
    document.getElementById("manInAd").value = "false";
    document.getElementById("manInAt").value = "true";
    GuardarBtnPulsado(idBoton);
}

function btnParar(idBoton) {
    document.getElementById("manInAd").value = "false";
    document.getElementById("manInAt").value = "false";
    GuardarBtnPulsado(idBoton);
}
*/
/*Los botones se quedan pulsados tras recargar la pagina*/
/*function GuardarBtnPulsado(idBoton) {
    localStorage.setItem("BtnPulsado", idBoton);
}
*/
/*Esta Funcion sirve para los formularios, pero recarga la pagina aun asi*/
/*function envioDeDatos (id){
  var datos = $('#'+id).serialize();
  console.log(datos);
  $.ajax({
    type:POST,
    data:datos,
    success: function (datos){
      console.log("enviado");
    },
    error: function (){
      console.log("error");
    }
  })
  return false;
}*/
/*ESTA FUNCION ES MUY IMPORTANTE, VOY A TOMARLA COMO BASE PARA EL RESTO DE LA LOGICA DE ESTO*/
function enviarDatos(nomVar,val){
  var datos = '\"WEB_1\".'+nomVar+"="+val;
  $($.ajax({
    method:'POST',
    data:datos,
    success: function(datos){
      console.log("funciona, el valor que se ha enviado es \n"+"WEB_1."+nomVar+"="+val);
    },
    error: function(){
      console.log("errores");
    }
  }))
}

/*function prueba(){
  var x = true;
  console.log(!x);
}*/
/*Esta funcion envia un true a la variable correspondiente, y después la devuelve a false*/
function enviarSennal(nomVar,currentId,otherId){
  var val = false;
  if (nomVar=='ADELANTE') {
    if(adelanteCheck==false){
      val = true;
      adelanteCheck= true;
    }else{
      val = false;
      adelanteCheck = false;
    }
  }else if(nomVar=='ATRAS'){
    if(atrasCheck==false){
      val = true;
      atrasCheck = true;
    }else{
      val = false;
      atrasCheck = false;
    }
  }
  var datos = '\"WEB_1\".'+nomVar+"="+val;
  $($.ajax({
    method:'POST',
    data:datos,
    success: function(datos){
      console.log("funciona, el valor que se ha enviado es \n"+"WEB_1."+nomVar+"="+val);
    },
    error: function(){
      console.log("errores");
    }
  }))
  alterBotn(currentId,otherId);
/*  var altern = '\"WEB_1\".'+nomVar+"="+!val;
  setTimeout(function(){
    $($.ajax({
      method:'POST',
      data:altern,
      success: function(altern){
        console.log("Exito");
      },
      error: function(){
        console.log("Error")
      }
    }))
  },1000);*/
}

function alterBotn(currentId,otherId){
  if (document.getElementById(currentId).value=='libre') {
    document.getElementById(currentId).value='press';
    document.getElementById(currentId).style.backgroundColor='#ffb84d';
    document.getElementById(otherId).disabled=true;
  }
  else if (document.getElementById(currentId).value=='press') {
    document.getElementById(currentId).value='libre';
    document.getElementById(currentId).style.backgroundColor='#01363f';
    document.getElementById(otherId).disabled=false
  }{}
}

/*Variables Globales*/
var manualCheck = false;
var adelanteCheck = false;
var atrasCheck = false;


/*Esta function activa y desactiva el MODO MANUAL*/
function alternarManual(){
  if (manualCheck==false) {
    manualCheck=true;
    document.getElementById("manBotonMan").style.backgroundColor="#ffb84d";
    document.getElementById("manAdelante").disabled=false;
    document.getElementById("manAtras").disabled=false;
    modoActivo=true;
  }else{
    manualCheck=false;
    document.getElementById("manBotonMan").style.backgroundColor="#01313a";
    document.getElementById("manAdelante").disabled=true;
    document.getElementById("manAtras").disabled=true;
    modoActivo=false;
  }
    var datos = '\"WEB_1\".BOTON_MANUAL='+manualCheck;
    $($.ajax({
      method:'POST',
      data:datos,
      success:function(datos){
        console.log("Funciona, los datos enviados son:"+manualCheck);
      },
      error:function(){
        console.log("errores");
      }
    }))
}



/*Esta funcion envia un true a la variable correspondiente
y se queda pulsada, si se clicka de nuevo, se pone en false*/
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
}

/*Esta funcion alterna el estado de los botones entre activado y desactivado*/
function alterBotn(currentId,otherId){
  if (document.getElementById(currentId).value=='libre') {
    document.getElementById(currentId).value='press';
    document.getElementById(currentId).style.backgroundColor='#ffb84d';
    document.getElementById(otherId).disabled=true;
    document.getElementById("manBotonMan").disabled=true;
  }
  else if (document.getElementById(currentId).value=='press') {
    document.getElementById(currentId).value='libre';
    document.getElementById(currentId).style.backgroundColor='#01363f';
    document.getElementById(otherId).disabled=false
    document.getElementById("manBotonMan").disabled=false;
  }
}

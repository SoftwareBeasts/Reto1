/*Variables Globales*/
  var mmCheck = false;
/*Variables Globales*/
function pruebaBoolean(element) {
    let boton = document.getElementById(element);
    boton.setAttribute('disabled', '');
    boton.value("1");
}

function activarB() {
    var elements = document.getElementsByTagName("button");

    for(var el in elements){
        elements[el].removeAttribute('disabled')
    }
}
/*Envia los datos de las posiciones y de la velocidad*/
function enviarDatos(){
    var datos = '\"WEB_1\".'+"POSITION_1"+"="+document.getElementById("position1").value+"&"+'\"WEB_1\".'+"POSITION_2"+"="+document.getElementById("position2").value
    +"&"+'\"WEB_1\".'+"POSITION_3"+"="+document.getElementById("position3").value+"&"
    +'\"WEB_1\".'+"POSITION_4"+"="+document.getElementById("position4").value+"&"+'\"WEB_1\".'+"SPEED_1"
        +"="+document.getElementById("speed").value;
    //alert(datos);
    $($.ajax({
        method:'POST',
        data:datos,
        success: function(datos){
            console.log("funciona, el valor que se ha enviado es \n"+datos);
        },
        error: function(){
            console.log("errores");
        }
    }))
}
/*Activa o desactiva el modo MM*/
function alternarMM(){
  if (mmCheck==false) {
    mmCheck=true;
    enviarDatos();
    document.getElementById("submit").style.backgroundColor="#ffb84d";
    document.getElementById("mm_empaquetar").disabled=false;
    document.getElementById("mm_sellar").disabled=false;
    modoActivo=true;
  }
  else{
    mmCheck=false;
    document.getElementById("submit").style.backgroundColor="#01313a";
    document.getElementById("mm_empaquetar").disabled=true;
    document.getElementById("mm_sellar").disabled=true;
    modoActivo=false;
  }
  var datosx = '\"WEB_1\".BOTON_MM='+mmCheck;
  $($.ajax({
    method:'POST',
    data:datosx,
    success:function(){
      console.log("funciona, los datos que se han enviado son: "+'\"WEB_1\".BOTON_MM='+mmCheck);
    },
    error:function(){
      console.log("errores");
    }
  }))
}
/*Esta funcion envia los datos de las variables al pulsar los botones empaquetar y sellar*/
function enviarSennalxx(nomVar,val){
  var datos = '\"WEB_1\".'+nomVar+"="+val;
  /*Enviar la señal inicial*/
  $($.ajax({
    method:'POST',
    data:datos,
    success:function(datos){
      console.log("funciona, el dato que se ha enviado es "+'\"WEB_1\".'+nomVar+"="+val);
    },
    error: function(){
      console.log("errores");
    }
  }))
  /*Devolver false para hacer efecto de On/Off*/

  var altern = '\"WEB_1\".'+nomVar+"="+!val;
  setTimeout(function(){
  $($.ajax({
    method:'POST',
    data:altern,
    success:function(altern){
      console.log("funciona, el valor enviado es "+'\"WEB_1\".'+nomVar+"="+!val);
    },
    error: function(){
      console.log("errores");
    }
  }))
},1000);
}

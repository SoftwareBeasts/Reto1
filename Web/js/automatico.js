/*Variables Globales*/
  var automaticoCheck = false;

/*Variables Globales*/
/*function botonIniciar() {

    document.getElementById("hBotonAutomatico").value="true";
    document.getElementById("hEmpaquetar").value="false";
    document.getElementById("hSellar").value="false";
}

function botonEmpaquetar() {
    if (document.getElementById("hBotonAutomatico").value === "true")
    {
        document.getElementById("hEmpaquetar").value = "true";
        document.getElementById("hSellar").value = "false";
    }
}

function botonSellar() {
    if(document.getElementById("hBotonAutomatico").value==="true")
    {
        document.getElementById("hEmpaquetar").value="false";
        document.getElementById("hSellar").value="true";
    }
}

function botonParar() {
    document.getElementById("hBotonAutomatico").value="false";
    document.getElementById("hPaso1").value="false";
    document.getElementById("hPaso2").value="false";
    document.getElementById("hPaso3").value="false";
}*/
/*ESTA FUNCION ES MUY IMPORTANTE, VOY A TOMARLA COMO BASE PARA EL RESTO DE LA LOGICA DE ESTO*/
/*function enviarDatos(nomVar,val){
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
}*/

/*Esta funcion envia los datos de los inputs a la base de datos*/
function enviarDatosx(){
  var datos = '\"WEB_1\".'+"posizioa2"+"="+document.getElementById("position1auto").value+"&"+'\"WEB_1\".'+"posizioa1"+"="+document.getElementById("position2auto").value
  +"&"+'\"WEB_1\".'+"posizioa4"+"="+document.getElementById("position3auto").value+"&"
  +'\"WEB_1\".'+"posizioa3"+"="+document.getElementById("position4auto").value;
  $($.ajax({
    method:'POST',
    data:datos,
    success:function(){
      console.log("Funciona, los datos enviados son "+'\"WEB_1\".'+"posizioa2"+"="+document.getElementById("position1auto").value+"&"+'\"WEB_1\".'+"posizioa1"+"="+document.getElementById("position2auto").value
      +"&"+'\"WEB_1\".'+"posizioa4"+"="+document.getElementById("position3auto").value+"&"
      +'\"WEB_1\".'+"posizioa3"+"="+document.getElementById("position4auto").value);
    },
    error:function(){
      console.log("Errores");
    }
  }))
}

/*Esta funcion alterna los botones dependiendo de si esta activado el modo o no
y ademas activa y desactiva el modo*/
function alternarAutomatico(){
  if(automaticoCheck==false){
    automaticoCheck=true;
    enviarDatosx();
    document.getElementById("auto_iniciar").style.backgroundColor="#ffb84d";
    document.getElementById("auto_empaquetar").disabled=false;
    document.getElementById("auto_sellar").disabled=false;
    modoActivo=true;
  }else{
    automaticoCheck=false;
    document.getElementById("auto_iniciar").style.backgroundColor="#01313a";
    document.getElementById("auto_empaquetar").disabled=true;
    document.getElementById("auto_sellar").disabled=true;
    modoActivo=false;
  }
  var datos = '\"WEB_1\".BOTON_AUTOMATICO='+automaticoCheck;
  $($.ajax({
    method:'POST',
    data: datos,
    success: function(datos){
      console.log("funciona: el dato que se ha enviado es "+automaticoCheck);
    },
    error: function(jqXRH,status,opt){
      console.log("errores"+jqXRH+"\n"+status);
    }
  }))
}

/*Esta funcion envia true a la variable correspondiente y despues la devuelve
a false*/
function enviarSennalx(nomVar,val){
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

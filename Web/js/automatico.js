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

/*Deshabilitamos los botones hasta que se active el boton de automatico*/



function alternarAutomatico(){
  if(automaticoCheck==false){
    automaticoCheck=true;
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

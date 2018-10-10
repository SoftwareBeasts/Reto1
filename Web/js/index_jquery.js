/*Variable Global*/
var modoActivo = false;
/*Variable Global*/
function comprobarUso(){
  if (modoActivo==false) {
    return true;
  }
  else{
    return false;
  }
}
/*Esta funcion envia una señal a true, y despues de un segundo la vuelve false
cambia la variable ON_ORIGEN*/
function volverOrigen(){
  if (comprobarUso()) {
      var origenActivado = document.getElementById("gif");
      origenActivado.style.display = "inline-block";
      botonLoadOrigen = true;
    $($.ajax({
      method:'POST',
      data:'\"WEB_1\".ON_ORIGEN=true',
      success:function(e){
        console.log("Funciona, se ha enviado: "+'\"WEB_1\".ON_ORIGEN=true');
      },
      error:function(){
        console.log("errores");
      }
    }));
    setTimeout(function(){
    $($.ajax({
      method:'POST',
      data:'\"WEB_1\".ON_ORIGEN=false',
      success:function(e){
        console.log("Funciona, se ha enviado: "+'\"WEB_1\".ON_ORIGEN=true');
      },
      error:function(){
        console.log("errores");
      }
    }));
  },1000);
  }
}
/*Esta funcion envia una señal a true, y despues de un segundo la vuelve false
cambia la variable RESET*/
function RESET(){
  if (comprobarUso()) {
    $($.ajax({
      method:'POST',
      data:'\"WEB_1\".RESET=true',
      success:function(e){
        console.log("funciona, se ha enviado "+'\"WEB_1\".RESET=true');
      },
      error:function(){
        console.log("errores");
      }
    }));
    setTimeout(function(){
      $($.ajax({
        method:'POST',
        data:'\"WEB_1\".RESET=false',
        success:function(e){
          console.log("Funciona, se ha enviado "+'\"WEB_1\".RESET=false');
        },
        error:function(){
          console.log("errores");
        }
      }));
    },1000)
  }
}

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

function volverOrigen(){
  if (comprobarUso()) {
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

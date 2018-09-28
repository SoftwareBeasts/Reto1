


function btnAdelante(ADELANTE){
  ADELANTE=true;

  return ADELANTE;
}
function btnAtras(ATRAS){
  ATRAS=true;

  return ATRAS;
}
function btnParar(ADELANTE,ATRAS){
  ADELANTE= confirm("mensaje");
  ATRAS = confirm("mensjae");
  if (ADELANTE) {

    ADELANTE=false;

    return ADELANTE;

  }
  else if(ATRAS){

    ATRAS=false;

    return ATRAS;

  }

}

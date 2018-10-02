


function disable(){

  document.getElementById("manAdelante").disabled=true;
  document.getElementById("manAtras").disabled=true;
  document.getElementById("manParar").disabled=false;
}
function enable(){
  document.getElementById("manAdelante").disabled=false;
  document.getElementById("manAtras").disabled=false;
  document.getElementById("manParar").disabled=true;
}
function btnAdelante(){

  document.getElementById("manInAd").value="true";
  document.getElementById("manInAt").value="false";

}
function btnAtras(){
  document.getElementById("manInAd").value="false";
  document.getElementById("manInAt").value="true";
}

function btnParar(){

  document.getElementById("manInAd").value="false";
  document.getElementById("manInAt").value="false";
}

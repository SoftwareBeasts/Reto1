function disable() {
    document.getElementById("manAdelante").disabled = true;
    document.getElementById("manAtras").disabled = true;
    document.getElementById("manParar").disabled = false;
}

function enable() {
    document.getElementById("manAdelante").disabled = false;
    document.getElementById("manAtras").disabled = false;
    document.getElementById("manParar").disabled = true;
}

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

/*Los botones se quedan pulsados tras recargar la pagina*/
function GuardarBtnPulsado(idBoton) {
    localStorage.setItem("BtnPulsado", idBoton);
}
window.onbeforeunload = function() {
    return "";
}

/*Mantiene la selección del modo en el nav y guarda el modo en el que se queda*/
function CambiarModo(modo, recarga) {
    if (recarga == false) {
        localStorage.clear();
        localStorage.setItem("Modo", elemento);
    }
    var modos = document.getElementsByClassName("boton efectoclick");
    if (elementos.length != 0) {
        for (var i = 0; i < elementos.length; i++) {
            modos[i].className = " boton";
        }
    }
    document.getElementById(modo).className += " efectoclick";
}
window.onbeforeunload = function() {
    return "";
}

/*Mantiene la selección del modo en el nav y guarda el modo en el que se queda*/
function CambiarModo(modo) {
    localStorage.setItem("Modo", modo);
    var modos = document.getElementsByClassName("boton efectoclick");
    if (modos.length != 0) {
        for (var i = 0; i < modos.length; i++) {
            modos[i].className = " boton";
        }
    }
    document.getElementById(modo).className += " efectoclick";
}

function avanzar() {
    let div = document.getElementById("esquema");
    let pos;
    switch (div.className) {
        case "none":
            pos = "pos1";
            break;

        case "pos1":
            pos = "pos2";
            break;

        case "pos2":
            pos = "pos3";
            break;

        default:
            pos = "none";
            break;
    }
    div.className = pos;
}

/*Guarda los datos de velocidad*/
function GuardarDatos() {
    localStorage.setItem("Velocidad", arrayVelocidad);
}
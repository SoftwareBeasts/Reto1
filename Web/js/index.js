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
    /*Guardar modo para estadisticas*/
    var modo = localStorage.getItem("Modo");
    if (modo == "auto") {
        localStorage.setItem("Modo", "Automático");
    } else if (modo == "manual") {
        localStorage.setItem("Modo", "Manual");
    } else if (modo == "cotas") {
        localStorage.setItem("Modo", "Por cotas");
    }
    localStorage.setItem("Velocidad", arrayVelocidad);
    localStorage.setItem("Tiempo total", tiempo);
}

/*function avanzarNueva() {
    console.log("ha entrado");
    debugger;
    let div = document.getElementById("esquema");
    let antigua = div.className;
    let antigua = div.style.getPropertyValue('--second-margin-left');
    console.log(antigua+"");
    let nueva = (parseInt(antigua)+10);
    if(parseInt(antigua) != 25){
        div.style.removeProperty("--first-margin-left");
        div.style.removeProperty("--second-margin-left");
    }
    div.style.setProperty("--first-margin-left", antigua+"%");
    div.style.setProperty("--second-margin-left", nueva+"%");
    div.style.animationPlayState = "running";

    div.onCSSAnimationEnd( function()
    {
        div.style.setProperty("--margin", nueva+"%");
        div.className = nueva;
    });
}*/
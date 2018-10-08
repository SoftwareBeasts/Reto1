window.onbeforeunload = function() {
    localStorage.clear();
    return "";
}

/*Mantiene la selección del modo en el nav y guarda el modo en el que se queda*/
function CambiarModo(modo) {
    if (comprobarUso()){
        localStorage.setItem("Modo", modo);
        var modos = document.getElementsByClassName("boton efectoclick");
        for (var i = 0; i < modos.length; i++) {
            modos[i].className = " boton";
        }
        document.getElementById(modo).className += " efectoclick";
        var estadisticasAnte = document.getElementById("estadisticasAnteriores");
        if (localStorage.getItem("EstadisticasAuto") == "true" && localStorage.getItem("Modo") == "auto") {
            estadisticasAnte.style.display = " block";
        } else if (localStorage.getItem("EstadisticasManual") == "true" && localStorage.getItem("Modo") == "manual") {
            estadisticasAnte.style.display = " block";
        } else if (localStorage.getItem("EstadisticasCotas") == "true" && localStorage.getItem("Modo") == "cotas") {
            estadisticasAnte.style.display = " block";
        }
    } else {
        var modos = document.getElementsByClassName("boton efectoclick");
        for (var i = 0; i < modos.length; i++) {
            modos[i].focus();
        }
    }
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

/*Guarda datos necesarios para estadisticas*/
function GuardarDatos() {
    if (comprobarUso()){
        var modo = localStorage.getItem("Modo");
        if (modo == "auto") {
            localStorage.setItem("ModoEstadisticas", "Automático");
            localStorage.setItem("Velocidad auto", arrayVelocidad);
            localStorage.setItem("Tiempo total auto", tiempo);
            localStorage.setItem("EstadisticasAuto", true);
        } else if (modo == "manual") {
            localStorage.setItem("ModoEstadisticas", "Manual");
            localStorage.setItem("Velocidad manual", arrayVelocidad);
            localStorage.setItem("Tiempo total manual", tiempo);
            localStorage.setItem("EstadisticasManual", true);
        } else if (modo == "cotas") {
            localStorage.setItem("ModoEstadisticas", "Por cotas");
            localStorage.setItem("Velocidad cotas", arrayVelocidad);
            localStorage.setItem("Tiempo total cotas", tiempo);
            localStorage.setItem("EstadisticasCotas", true);
        }
        window.open("pages/estadisticas.html");
    }
    /**/
    if(comprobarUso()){
        tiempo = tiempo + 0.5;
    }
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

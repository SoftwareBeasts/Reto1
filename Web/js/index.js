/*Variables que van a servir para guardar los datos para después hacer generar las estadísticas*/
var arrayVelocidad = [];
contador = 0;
var tiempo = 0;
var posicion = 0;
var posicionAnterior = 0;

/*Esta funcion lee las 8 variables de posicion para tenerlas guardadas*/
function leerVarPos() {
    let arraydir = ["posizioa1", "posizioa2", "posizioa3", "posizioa4", "position_1", "position_2"
        , "position_3", "position_4"];

    for (let dir in arraydir){
        $.get("./pages/leer_"+arraydir[dir]+".html",function(pos){
            localStorage.setItem(arraydir[dir], pos.toString());
        });
    }
}

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
        } else if (modo == "manual") {
            localStorage.setItem("ModoEstadisticas", "Manual");
            localStorage.setItem("Velocidad manual", arrayVelocidad);
            localStorage.setItem("Tiempo total manual", tiempo);
        } else if (modo == "cotas") {
            localStorage.setItem("ModoEstadisticas", "Por cotas");
            localStorage.setItem("Velocidad cotas", arrayVelocidad);
            localStorage.setItem("Tiempo total cotas", tiempo);
        }
        window.open("pages/estadisticas.html");
    }
}

/*Este intervalo recoge cada 0.5 segundos la posición y la velocidad actuales, también sirve para la animación*/
setInterval(function(){
    $.get("../leerVar/leer_posicion.html",function(currentPosition){
        let esquema = document.getElementById("esquema");
        document.getElementById("posData").textContent = parseInt(currentPosition, 10).toString();
        /*$("#posData").text(position).toString();*/
        if(currentPosition >= 33){
            if(currentPosition >= 66){
                if(currentPosition === 100){
                    esquema.className = "pos3";
                }
                else{
                    esquema.className = "pos2";
                }
            }
            else{
                esquema.className = "pos1";
            }
        }
        else{
            esquema.className = "none";
        }
    });
    $.get("../leerVar/leer_velocidad.html",function(currentSpeed){
        $("#velData").text(currentSpeed).toString();
        arrayVelocidad[contador] = currentSpeed;
        contador++;
    });
    tiempo = tiempo + 0.5;
    /*Guarda cada posicion por la que pasa la maquina*/
    posicion = document.getElementById("esquema").className;
    if (posicion != posicionAnterior && posicionAnterior == 0){
        let temp = localStorage.getItem("Posicion 0");
        localStorage.setItem("Posicion 0", 1 + temp);
    } else if (posicion != posicionAnterior && posicionAnterior == 1){
        let temp = localStorage.getItem("Posicion 1");
        localStorage.setItem("Posicion 1", 1 + temp);
    } else if (posicion != posicionAnterior && posicionAnterior == 2){
        let temp = localStorage.getItem("Posicion 2");
        localStorage.setItem("Posicion 2", 1 + temp);
    } else if (posicion != posicionAnterior && posicionAnterior == 3){
        let temp = localStorage.getItem("Posicion 3");
        localStorage.setItem("Posicion 3", 1 + temp);
    }
},500);

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

/*Variables que van a servir para guardar los datos para después hacer generar las estadísticas*/
var arrayVelocidad = [];
var contador = 0;
var contador2 = 0;
var currentPos = 0;
var posicionPrev1 = false;
var posicionPrev2 = false;
var posicionPrev3 = false;
var posicionPrev4 = false;
var botonLoadOrigen = false;
var ModoCambiado = false;
var tiempo = 0;
var posicion = 0;
var posicionPrev = document.getElementById("esquema").className;

/*Mensaje de confirmación a la hora de salir o recargar la pagina*/
window.onbeforeunload = function() {
    return "";
}

/*Esta funcion lee las 8 variables de posicion para tenerlas guardadas*/
function leerVarPos() {
    console.log("Ha entrado leerVarPos");
    let arraydir = ["posizioa1", "posizioa2", "posizioa3", "posizioa4", "position_1", "position_2", "position_3", "position_4"];

    for (let dir in arraydir) {
        $.get("./leerVar/leer_" + arraydir[dir] + ".html", function(pos) {
            if (dir > 3) {
                localStorage.setItem(arraydir[dir], (pos / 100).toString());
            } else {
                /*No utilizado por problemas de variables con los de ARI*/
            }
        });
    }
}

/*Mantiene la selección del modo en el nav y guarda el modo en el que se queda*/
function CambiarModo(modo) {
    ModoCambiado = true;
    if (comprobarUso()) {
        localStorage.setItem("Modo", modo);
        var modos = document.getElementsByClassName("boton efectoclick");
        for (var i = 0; i < modos.length; i++) {
            modos[i].className = " boton";
        }
        document.getElementById(modo).className += " efectoclick";
        tiempo = 0;
    } else {
        var modos = document.getElementsByClassName("boton efectoclick");
        for (var i = 0; i < modos.length; i++) {
            modos[i].focus();
        }
    }
}

/*Guarda datos necesarios para estadisticas*/
function GuardarDatos() {
    if (comprobarUso() && ModoCambiado == true) {
        var modo = localStorage.getItem("Modo");
        if (modo == "auto") {
            localStorage.setItem("ModoEstadisticas", "Automático");
            localStorage.setItem("Velocidad auto", arrayVelocidad);
            localStorage.setItem("Tiempo total auto", tiempo);
        } else if (modo == "manual") {
            localStorage.setItem("ModoEstadisticas", "Manual");
            localStorage.setItem("Velocidad manual", arrayVelocidad);
            localStorage.setItem("Tiempo total manual", tiempo);
        } else {
            localStorage.setItem("ModoEstadisticas", "Por cotas");
            localStorage.setItem("Velocidad cotas", arrayVelocidad);
            localStorage.setItem("Tiempo total cotas", tiempo);
        }
        window.open("pages/estadisticas.html");
    }
}

/*Este intervalo recoge cada 0.5 segundos la posición y la velocidad actuales, también sirve para la animación*/
setInterval(function() {
    $.get("./leerVar/leer_posicion.html", function(currentPosition) {
        currentPos = (currentPosition).toString();
        document.getElementById("posData").textContent = (currentPosition / 100).toString();
        let margen = Math.round(((33.5 / 50000) * currentPosition) + 29);
        console.log(margen.toString());
        document.getElementById("esquema").style.marginLeft = margen + "%";
    });
    $.get("./leerVar/leer_velocidad.html", function(currentSpeed) {
        $("#velData").text(currentSpeed).toString();
        arrayVelocidad[contador] = currentSpeed;
        contador++;
    });

    /*Cuenta cuando se usa un modo*/
    if (comprobarUso() == false) {
        tiempo = tiempo + 0.5;
    }

    /*Guarda cada posicion por la que pasa la maquina*/
    if (currentPos < localStorage.getItem("position_1") && posicionPrev1 == false) {
        let temp = localStorage.getItem("pos0");
        localStorage.setItem("pos0", 1 + temp);
        posicionPrev1 = true;
    } else if (currentPos >= localStorage.getItem("position_2") && currentPos < localStorage.getItem("position_3") && posicionPrev2 == false) {
        let temp = localStorage.getItem("pos1");
        localStorage.setItem("pos1", 1 + temp);
        posicionPrev2 = true;
    } else if (currentPos >= localStorage.getItem("position_3") && currentPos < localStorage.getItem("position_4") && posicionPrev3 == false) {
        let temp = localStorage.getItem("pos2");
        localStorage.setItem("pos2", 1 + temp);
        posicionPrev3 = true;
    } else if (currentPos < localStorage.getItem("position_4") && posicionPrev4 == false) {
        let temp = localStorage.getItem("pos3");
        localStorage.setItem("pos3", 1 + temp);
        posicionPrev4 = true;
    }

    /*Quita la animacion del boton origen tras 3 segundos*/
    if (contador2 == 6 && botonLoadOrigen == true) {
        var origenActivado = document.getElementById("gif");
        origenActivado.style.display = "none";
    } else if (botonLoadOrigen == true) {
        contador2++;
    }
}, 500);
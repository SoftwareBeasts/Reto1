document.getElementById("modoH3").innerHTML = "Modo: " + localStorage.getItem("ModoEstadisticas");

/*Calcula individualmente las estadisticas para cada modo*/
if (localStorage.getItem("Modo") == "auto") {
    /*Velocidad media*/
    var velMedia = 0;
    var arrayVel = localStorage.getItem("Velocidad auto").split(",");
    for (var i = 0; i < arrayVel.length; i++) {
        velMedia = parseInt(arrayVel[i]) + velMedia;
    }
    velMedia = velMedia / arrayVel.length;
    document.getElementById("velocidadMedia").innerHTML = "Velocidad media: " + Math.trunc(velMedia) + " mm/s";

    /*Tiempo total*/
    document.getElementById("tiempoTotal").innerHTML = "Tiempo total : " + localStorage.getItem("Tiempo total auto") + "s";

    /*Enseña el historial de posiciones*/
    var historialPos = document.getElementById("esquemaEstadisticas");
    historialPos.style.display = "inline-block";

    /*Dibuja del grafico*/
    var arrayMax = 0;
    for (let i = 0; i < arrayVel.length; i++) {
        if (arrayMax < arrayVel[i]) {
            arrayMax = arrayVel[i];
        }
    }
    var tiempototal = localStorage.getItem("Tiempo total auto");
    var reparto = 500 / (arrayVel.length + 1);
    var c = document.getElementById("grafico");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 150);
    for (let i = 0; i < arrayVel.length; i++) {
        let transform = arrayVel[i] / arrayMax * 150;
        ctx.lineTo(i * reparto, (150 - transform));
    }
    ctx.stroke();
} else if (localStorage.getItem("Modo") == "manual") {
    /*Velocidad media*/
    var velMedia = 0;
    var arrayVel = localStorage.getItem("Velocidad manual").split(",");
    for (var i = 0; i < arrayVel.length; i++) {
        velMedia = parseInt(arrayVel[i]) + velMedia;
    }
    velMedia = velMedia / arrayVelocidad.length;
    document.getElementById("velocidadMedia").innerHTML = "Velocidad manual: " + Math.trunc(velMedia) + " mm/s";

    /*Tiempo total*/
    document.getElementById("tiempoTotal").innerHTML = "Tiempo total : " + localStorage.getItem("Tiempo total manual") + "s";

    /*Dibuja del grafico*/
    var arrayMax = 0;
    for (let i = 0; i < arrayVel.length; i++) {
        if (arrayMax < arrayVel[i]) {
            arrayMax = arrayVel[i];
        }
    }
    var tiempototal = localStorage.getItem("Tiempo total manual");
    var reparto = 500 / arrayVel.length;
    var c = document.getElementById("grafico");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 150);
    for (let i = 0; i < arrayVel.length; i++) {
        let transform = arrayVel[i] / arrayMax * 150;
        ctx.lineTo(i * reparto, (150 - transform));
    }
    ctx.stroke();
} else {
    /*Velocidad media*/
    var velMedia = 0;
    var arrayVel = localStorage.getItem("Velocidad cotas").split(",");
    for (var i = 0; i < arrayVel.length; i++) {
        velMedia = parseInt(arrayVel[i]) + velMedia;
    }
    velMedia = velMedia / arrayVelocidad.length;
    document.getElementById("velocidadMedia").innerHTML = "Velocidad media: " + Math.trunc(velMedia) + " mm/s";

    /*Tiempo total*/
    document.getElementById("tiempoTotal").innerHTML = "Tiempo total : " + localStorage.getItem("Tiempo total cotas") + "s";

    /*Dibuja del grafico*/
    var arrayMax = 0;
    for (let i = 0; i < arrayVel.length; i++) {
        if (arrayMax < arrayVel[i]) {
            arrayMax = arrayVel[i];
        }
    }
    var tiempototal = localStorage.getItem("Tiempo total cotas");
    var reparto = 500 / arrayVel.length;
    var c = document.getElementById("grafico");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 150);
    for (let i = 0; i < arrayVel.length; i++) {
        let transform = arrayVel[i] / arrayMax * 150;
        ctx.lineTo(i * reparto, (150 - transform));
    }
    ctx.stroke();
}

/*Rellena el historial de posiciones*/
document.getElementById("pos0").innerHTML = "Posición 0: " + localStorage.getItem("pos0") + " veces";
document.getElementById("pos1").innerHTML = "Posición 1: " + localStorage.getItem("pos1") + " veces";
document.getElementById("pos2").innerHTML = "Posición 2: " + localStorage.getItem("pos2") + " veces";
document.getElementById("pos3").innerHTML = "Posición 3: " + localStorage.getItem("pos3") + " veces";
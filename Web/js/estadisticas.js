document.getElementById("h3").innerHTML = "Modo: " + localStorage.getItem("ModoEstadisticas");

/*Calcula individualmente las estadisticas para cada modo*/
if(localStorage.getItem("Modo") == "auto"){
    /*Velocidad media*/
    var velMedia = 0;
    var arrayVelocidad = localStorage.getItem("Velocidad auto").split(",");
    for (var i = 0; i < arrayVelocidad.length; i++) {
        velMedia = arrayVelocidad[i] + velMedia;
    }
    velMedia = velMedia / arrayVelocidad.length;
    document.getElementById("velocidadMedia").innerHTML = "Velocidad media: " + Math.trunc(velMedia) + " mm/s";

    /*Tiempo total*/
    document.getElementById("tiempoTotal").innerHTML = "Tiempo total : " + localStorage.getItem("Tiempo total auto");
} else if (localStorage.getItem("Modo") == "manual") {
    /*Velocidad media*/
    var velMedia = 0;
    var arrayVelocidad = localStorage.getItem("Velocidad manual").split(",");
    for (var i = 0; i < arrayVelocidad.length; i++) {
        velMedia = arrayVelocidad[i] + velMedia;
    }
    velMedia = velMedia / arrayVelocidad.length;
    document.getElementById("velocidadMedia").innerHTML = "Velocidad manual: " + Math.trunc(velMedia) + " mm/s";

    /*Tiempo total*/
    document.getElementById("tiempoTotal").innerHTML = "Tiempo total : " + localStorage.getItem("Tiempo total manual");
} else if (localStorage.getItem("Modo") == "cotas"){
    /*Velocidad media*/
    var velMedia = 0;
    var arrayVelocidad = localStorage.getItem("Velocidad cotas").split(",");
    for (var i = 0; i < arrayVelocidad.length; i++) {
        velMedia = arrayVelocidad[i] + velMedia;
    }
    velMedia = velMedia / arrayVelocidad.length;
    document.getElementById("velocidadMedia").innerHTML = "Velocidad media: " + Math.trunc(velMedia) + " mm/s";

    /*Tiempo total*/
    document.getElementById("tiempoTotal").innerHTML = "Tiempo total : " + localStorage.getItem("Tiempo total cotas");
}

/*Dibujo del grafico*/
var tiempototal = localStorage.getItem("Tiempo total");
var velocidad = localStorage.getItem("Velocidad").split(",");
var reparto = 500 / tiempototal;
var c = document.getElementById("grafico");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 150);
for (let i = 0; i < velocidad.length; i++) {
    ctx.lineTo(i * reparto, (150 - velocidad[i]));
}
ctx.stroke();

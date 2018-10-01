function MantenerEfectoClick(elemento) {
    var elementos = document.getElementsByClassName("boton efectoclick");
    if(elementos.length != 0){
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].className = " boton";
        }
    }
    document.getElementById(elemento).className += " efectoclick";
}

function pruebaBoolean(element) {
    let boton = document.getElementById(element);
    boton.setAttribute('disabled', '');
    boton.value("1");
}

function activarB() {
    var elements = document.getElementsByTagName("button");

    for(var el in elements){
        elements[el].removeAttribute('disabled')
    }
}


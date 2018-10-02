function pruebaBoolean(element) {
    document.getElementById(element).setAttribute('disabled', '');
}

function activarB() {
    var elements = document.getElementsByTagName("button");

    for(var el in elements){
        elements[el].removeAttribute('disabled')
    }
}

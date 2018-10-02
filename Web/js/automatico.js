function botonIniciar() {

    document.getElementById("hBotonAutomatico").value="true";
    document.getElementById("hPaso1").value="false";
    document.getElementById("hPaso2").value="false";
    document.getElementById("hPaso3").value="false";
}

function botonPaso1() {
    if (document.getElementById("hBotonAutomatico").value === "true")
    {
        document.getElementById("hPaso1").value = "true";
        document.getElementById("hPaso2").value = "false";
        document.getElementById("hPaso3").value = "false";
    }
}

function botonPaso2() {
    if(document.getElementById("hBotonAutomatico").value==="true")
    {
        document.getElementById("hPaso1").value="false";
        document.getElementById("hPaso2").value="true";
        document.getElementById("hPaso3").value="false";
    }
}

function botonPaso3() {
    if(document.getElementById("hBotonAutomatico").value==="true")
    {
        document.getElementById("hPaso1").value="false";
        document.getElementById("hPaso2").value="false";
        document.getElementById("hPaso3").value="true";
    }
}

function botonParar() {
    document.getElementById("hBotonAutomatico").value="false";
    document.getElementById("hPaso1").value="false";
    document.getElementById("hPaso2").value="false";
    document.getElementById("hPaso3").value="false";
}

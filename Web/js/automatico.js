function botonIniciar() {

    document.getElementById("hBotonAutomatico").value="true";
    document.getElementById("hEmpaquetar").value="false";
    document.getElementById("hSellar").value="false";
}

function botonEmpaquetar() {
    if (document.getElementById("hBotonAutomatico").value === "true")
    {
        document.getElementById("hEmpaquetar").value = "true";
        document.getElementById("hSellar").value = "false";
    }
}

function botonSellar() {
    if(document.getElementById("hBotonAutomatico").value==="true")
    {
        document.getElementById("hEmpaquetar").value="false";
        document.getElementById("hSellar").value="true";
    }
}

function botonParar() {
    document.getElementById("hBotonAutomatico").value="false";
    document.getElementById("hEmpaquetar").value="false";
    document.getElementById("hSellar").value="false";
}

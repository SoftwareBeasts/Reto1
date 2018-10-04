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

/*ESTA FUNCION ES MUY IMPORTANTE, VOY A TOMARLA COMO BASE PARA EL RESTO DE LA LOGICA DE ESTO*/
function enviarDatos(nomVar,val){
    var datos = '\"WEB_1\".'+nomVar+"="+val;
    $($.ajax({
        method:'POST',
        data:datos,
        success: function(datos){
            console.log("funciona, el valor que se ha enviado es \n"+"WEB_1."+nomVar+"="+val);
        },
        error: function(){
            console.log("errores");
        }
    }))
}

function enviarDatos(){
    var datos = '\"WEB_1\".'+"POSITION_1"+"="+document.getElementById("position").value+"&"+'\"WEB_1\".'+"POSITION_1"
        +"="+document.getElementById("speed").value+"&"+'\"WEB_1\".'+"POSITION_1"+"=true";
    alert(datos);
    $($.ajax({
        method:'POST',
        data:datos,
        success: function(datos){
            console.log("funciona, el valor que se ha enviado es \n"+datos);
        },
        error: function(){
            console.log("errores");
        }
    }))
}


function $(id) {
    return document.getElementById(id);
}

function sumar() {
    $('cantidad').value = parseInt($('cantidad').value) + 1;
}

function restar() {
    var cantidadItems = parseInt($('cantidad').value);
    var nuevoValor = (cantidadItems)
        ? cantidadItems - 1
        : 0;

    $('cantidad').value = nuevoValor;
}


//CONTADOR EN JAVASCRIPT VANILLA
document.querySelector("#restarUno").addEventListener("click",restarUno);
document.querySelector("#sumarUno").addEventListener("click",sumarUno);
let contador=1;


function sumarUno(){
    contador= contador+1;
    document.querySelector("#cant").innerHTML=contador
}

function restarUno(){
    contador= contador-1;
    document.querySelector("#cant").innerHTML=contador
}


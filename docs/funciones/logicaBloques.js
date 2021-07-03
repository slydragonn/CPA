var botonBloque = document.getElementById("guardarB");
var numeroBloque = document.getElementById("savePromedio");
var bloqueNumero;

botonBloque.addEventListener("click", aceptar);

var Valores = {
    valorB1: document.getElementById("bloquesPromedio1"),
    valorB2: document.getElementById("bloquesPromedio2"),
    valorB3: document.getElementById("bloquesPromedio3"),
    valorB4: document.getElementById("bloquesPromedio4")
}

var a, b, c, d, e;

function aceptar(evento) {

    bloqueNumero = numeroBloque.value;
    operacionBloques()



}

function operacionBloques() {
    if (bloqueNumero == 1) {
        a = parseFloat(Valores.valorB1.value) * promedio;
        promedioBloque()
    } else if (bloqueNumero == 2) {
        b = parseFloat(Valores.valorB2.value) * promedio;
        promedioBloque()
    } else if (bloqueNumero == 3) {
        c = parseFloat(Valores.valorB3.value) * promedio;
        promedioBloque()
    } else if (bloqueNumero == 4) {
        d = parseFloat(Valores.valorB4.value) * promedio;
        promedioBloque()
    } else {
        alert("El valor ingresado es incorrecto.");
    }
}

function promedioGeneral() {
    let clearGeneral = document.getElementById("notaGeneral");
    clearGeneral.innerHTML = "";

    e = a + b + c + d;

    let imprimir = document.createTextNode("Tu promedio general es: " + e.toFixed(2));
    let imprimirId = document.getElementById("notaGeneral");
    imprimirId.appendChild(imprimir);

    aprobacion()
    crearMensaje("proGeneral", "Promedio General: ", e.toFixed(2));
}
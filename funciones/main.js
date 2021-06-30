var nNotas = document.getElementById("txt_nBloques");
var botonNotas = document.getElementById("boton_nBloques");
var boton_notas = document.getElementById("botonNotas")

botonNotas.addEventListener("click", numeroNotas);

var ideNotas = {

    NOTA1: "nota1",
    NOTA2: "nota2",
    NOTA3: "nota3",
    NOTA4: "nota4",
    NOTA5: "nota5",
    NOTA6: "nota6",
    NOTA7: "nota7",
    NOTA8: "nota8",
    NOTA9: "nota9",
    NOTA10: "nota10"

};

var xNotas;

var valor1;
var valor2;
var valor3;
var valor4;
var valor5;
var valor6;
var valor7;
var valor8;
var valor9;
var valor10;

var nota1;
var nota2;
var nota3;
var nota4;
var nota5;
var nota6;
var nota7;
var nota8;
var nota9;
var nota10;

var nUsuario = document.getElementById("nombreUsuario");
var notaMinima;

nUsuario.addEventListener("keyup", nombreDeUsuario);

var minimaEnviar = document.getElementById("enviar");
minimaEnviar.addEventListener("click", clickEnviar);

function clickEnviar() {
    notaMinima = nUsuario.value;

    crearUsuario()
}

function nombreDeUsuario(evento) {
    if (evento.keyCode == 13) {
        notaMinima = nUsuario.value;

        crearUsuario()

    }

}

function aprobacion() {
    let a = parseFloat(notaMinima);

    if (e < a) {
        let clearR = document.getElementById("aprobar");
        clearR.innerHTML = "";
        let nada = "";

        let crearRepro = document.createTextNode("Reprobaste");
        let mensajeRepro = document.getElementById("aprobar");
        mensajeRepro.appendChild(crearRepro);
        crearMensaje("ApruebasN", "Reprobaste", nada);
    } else if (e > a) {
        let clearA = document.getElementById("aprobar");
        clearA.innerHTML = "";
        let nada = "";

        let crearApro = document.createTextNode("Aprobaste");
        let mensajeApro = document.getElementById("aprobar");
        mensajeApro.appendChild(crearApro);
        crearMensaje("ApruebasN", "Aprobaste", nada);
    }
}

function numeroNotas() {

    xNotas = nNotas.value;


    if (xNotas == 1) {

        crearInput(ideNotas.NOTA1);
        boton_notas.addEventListener("click", primerPromedio);


    } else if (xNotas == 2) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        boton_notas.addEventListener("click", primerPromedio);

    } else if (xNotas == 3) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 4) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 5) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        crearInput(ideNotas.NOTA5);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 6) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        crearInput(ideNotas.NOTA5);
        crearInput(ideNotas.NOTA6);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 7) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        crearInput(ideNotas.NOTA5);
        crearInput(ideNotas.NOTA6);
        crearInput(ideNotas.NOTA7);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 8) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        crearInput(ideNotas.NOTA5);
        crearInput(ideNotas.NOTA6);
        crearInput(ideNotas.NOTA7);
        crearInput(ideNotas.NOTA8);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 9) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        crearInput(ideNotas.NOTA5);
        crearInput(ideNotas.NOTA6);
        crearInput(ideNotas.NOTA7);
        crearInput(ideNotas.NOTA8);
        crearInput(ideNotas.NOTA9);
        boton_notas.addEventListener("click", primerPromedio);
    } else if (xNotas == 10) {
        crearInput(ideNotas.NOTA1);
        crearInput(ideNotas.NOTA2);
        crearInput(ideNotas.NOTA3);
        crearInput(ideNotas.NOTA4);
        crearInput(ideNotas.NOTA5);
        crearInput(ideNotas.NOTA6);
        crearInput(ideNotas.NOTA7);
        crearInput(ideNotas.NOTA8);
        crearInput(ideNotas.NOTA9);
        crearInput(ideNotas.NOTA10);
        boton_notas.addEventListener("click", primerPromedio);
    } else {
        alert("El valor que ingresaste no es correcto.");
    }

}
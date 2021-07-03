function crearMensaje(id, texto, variable) {
    let clearP = document.getElementById(id);
    clearP.innerHTML = "";
    var mensaje = document.createTextNode(texto + variable);
    var padreH = document.getElementById(id);
    padreH.appendChild(mensaje);
}

function crearUsuario() {
    var crearUsuario = document.createTextNode("Nota mínima: " + notaMinima);
    var mensajeUsuario = document.getElementById("Usuario");
    mensajeUsuario.appendChild(crearUsuario);

    var remover = document.getElementById("padreUsuario");
    var padreU = remover.parentNode;
    padreU.removeChild(remover);

}

let botonBorrar = document.getElementById("borrarInput");
botonBorrar.addEventListener("click", eliminar);

function eliminar() {
    let borrar = document.getElementById("padreInput");
    let borraInput = borrar.parentNode;
    borraInput.removeChild(borrar);

    let padreh = document.getElementById("padreH2");
    padreh.innerHTML = "";

    let pdre = document.getElementById("padreP");
    let crear = document.createElement("div");
    crear.setAttribute("id", "padreInput");
    pdre.appendChild(crear);
}

function promedioBloque() {
    var crearB;
    var mensajeBloque;


    if (bloqueNumero == 1) {
        let clearB1 = document.getElementById("Bloque1");
        clearB1.innerHTML = "";
        crearB = document.createTextNode("Tu promedio en el bloque #" + bloqueNumero + " es: " + a.toFixed(2));
        mensajeBloque = document.getElementById("Bloque1");
        mensajeBloque.appendChild(crearB);

    } else if (bloqueNumero == 2) {
        let clearB2 = document.getElementById("Bloque2");
        clearB2.innerHTML = "";
        crearB = document.createTextNode("Tu promedio en el bloque #" + bloqueNumero + " es: " + b.toFixed(2));
        mensajeBloque = document.getElementById("Bloque2");
        mensajeBloque.appendChild(crearB);

    } else if (bloqueNumero == 3) {
        let clearB3 = document.getElementById("Bloque3");
        clearB3.innerHTML = "";
        crearB = document.createTextNode("Tu promedio en el bloque #" + bloqueNumero + " es: " + c.toFixed(2));
        mensajeBloque = document.getElementById("Bloque3");
        mensajeBloque.appendChild(crearB);
    } else if (bloqueNumero == 4) {
        let clearB4 = document.getElementById("Bloque4");
        clearB4.innerHTML = "";
        crearB = document.createTextNode("Tu promedio en el bloque #" + bloqueNumero + " es: " + d.toFixed(2));
        mensajeBloque = document.getElementById("Bloque4");
        mensajeBloque.appendChild(crearB);
    }
    let clearB = document.getElementById("savePromedio");
    clearB.value = "";
    promedioGeneral()
}
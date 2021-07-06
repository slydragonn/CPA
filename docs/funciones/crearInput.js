function crearInput(id) {
    var padre = document.getElementById("padreInput");
    var input = document.createElement("input");
    input.setAttribute("id", id);
    input.type = "text";
    padre.appendChild(input);
}

function crearNotaMinima() {
    let padre = document.getElementById("contenedorUsuario");

    let cDiv = document.createElement("div");
    cDiv.setAttribute("id", "padreUsuario");
    padre.appendChild(cDiv);

    let padre2 = document.getElementById("padreUsuario");

    let p = document.createElement("p");
    p.innerHTML = "Ingresa la nota mínima";
    padre2.appendChild(p);

    let input = document.createElement("input");
    input.setAttribute("id", "nombreUsuario");
    input.type = "text";
    padre2.appendChild(input);

    let boton = document.createElement("input");
    boton.setAttribute("id", "enviar");
    boton.type = "button";
    boton.value = "Enviar"
    padre2.appendChild(boton);

}
function crearInput(id) {
    var padre = document.getElementById("padreInput");
    var input = document.createElement("input");
    input.setAttribute("id", id);
    input.type = "text";
    padre.appendChild(input);
}
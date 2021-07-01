let delet = document.getElementById("borrarAll");
delet.addEventListener("click", deleteAll);

function deleteAll() {
    let botonNumeroNotas = document.getElementById("txt_nBloques");
    botonNumeroNotas.value = "";
    eliminar()

    let textoH2 = document.getElementById("padreH2");
    textoH2.innerHTML = "";

    let promedio = document.getElementById("Promedio");
    promedio.innerHTML = "Promedio";

    let pGeneral = document.getElementById("proGeneral");
    pGeneral.innerHTML = "Promedio General";

    let repro = document.getElementById("ApruebasN");
    repro.innerHTML = "Apruebas/No Apruebas";

    let inputbloque1 = document.getElementById("bloquesPromedio1");
    inputbloque1.value = "";
    let inputbloque2 = document.getElementById("bloquesPromedio2");
    inputbloque2.value = "";
    let inputbloque3 = document.getElementById("bloquesPromedio3");
    inputbloque3.value = "";
    let inputbloque4 = document.getElementById("bloquesPromedio4");
    inputbloque4.value = "";

    let resultBloque1 = document.getElementById("Bloque1");
    resultBloque1.innerHTML = "";
    let resultBloque2 = document.getElementById("Bloque2");
    resultBloque2.innerHTML = "";
    let resultBloque3 = document.getElementById("Bloque3");
    resultBloque3.innerHTML = "";
    let resultBloque4 = document.getElementById("Bloque4");
    resultBloque4.innerHTML = "";

    let promedioGeneral = document.getElementById("notaGeneral");
    promedioGeneral.innerHTML = "";
    let aprobaste = document.getElementById("aprobar");
    aprobaste.innerHTML = "";
}
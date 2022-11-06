import Ruta from "./ruta.js";
import Base from "./base.js";

let ruta = new Ruta(22);

document.querySelector("#agregarBase").addEventListener("click", () => {
    let nombre = document.getElementById("name_base").value;
    let minutos = parseInt(document.getElementById("mins").value);
    ruta.agregar(new Base(nombre, minutos));
    document.getElementById("name_base").value = "";
    document.getElementById("mins").value = "";
    document.getElementById("name_base").focus();
    console.table(ruta.imprimir());
});
document.querySelector("#buscar").addEventListener("click", () => {
    let nombre = document.getElementById("searchBase").value;
    let base = ruta.buscar(nombre);
    if (base) {
        document.getElementById("nombre_base").innerHTML = base.nombre;
        document.getElementById("duracion_base").innerHTML = base.minutos;
    } else {
        document.getElementById("nombre_base").innerHTML = "Base no encontrada";
    }
});
document.querySelector("#eliminar").addEventListener("click", () => {
    let nombre = document.getElementById("eliminaInput").value;
    let base = ruta.buscar(nombre);
    if (base) {
        ruta.eliminar(nombre);
        document.getElementById("eliminaInput").value = "";
        document.getElementById("eliminaInput").focus();
        console.table(ruta.imprimir());
    } else {
        document.getElementById("errorEliminar").style.display = 'block';
    }
});
document.querySelector("#eliminaInput").addEventListener("click", () => {
    document.getElementById("errorEliminar").style.display = 'none';
});

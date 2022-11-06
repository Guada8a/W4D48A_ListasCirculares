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
document.querySelector("#iniciar").addEventListener("click", () => {
    let nombre = document.getElementById("baseInicial").value;
    let hInicioInput = document.querySelector("#h_inicio").value;
    let hFinalInput = document.querySelector("#h_final").value;
    let horas_Inicio = hInicioInput.split(":")[0];
    let minutos_Inicio = hInicioInput.split(":")[1];
    let horas_Final = hFinalInput.split(":")[0];
    let minutos_Final = hFinalInput.split(":")[1];
    let str_html = '<thead><tr><th scope="col">Base</th><th scope="col">Hora</th></tr></thead><tbody>';

    let base = ruta.buscar(nombre);

    if (base) {
        let base_array = ruta.recorrido(base, horas_Inicio, minutos_Inicio, horas_Final, minutos_Final);
        console.log(base_array);
        base_array.forEach((base) => {
            str_html += `<tr><td>${base.BASE}</td><td>${base.HORA}</td></tr>`;
        });

        document.getElementById("recorrido").innerHTML = str_html;
    } else {
        document.getElementById("recorrido").innerHTML = "Base no encontrada";
    }
});
document.querySelector("#limpiar").addEventListener("click", () => { 
    document.getElementById("recorrido").innerHTML = "";
    document.getElementById("baseInicial").value = "";
    document.getElementById("h_inicio").value = "";
    document.getElementById("h_final").value = "";
    document.getElementById("baseInicial").focus();
});
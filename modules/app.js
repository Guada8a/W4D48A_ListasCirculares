import Ruta from "./ruta.js";
import Base from "./base.js";

let ruta = new Ruta(22);
let checkbox = document.querySelector('#posicion');
checkbox.addEventListener('change', () => {
    if (checkbox.checked)
        document.querySelector('#campo_posicion').style.display = 'block';
    else
        document.querySelector('#campo_posicion').style.display = 'none';
});
document.querySelector("#agregarBase").addEventListener("click", () => {
    let nombre = document.getElementById("name_base").value;
    let minutos = parseInt(document.getElementById("mins").value);
    let posicion = parseInt(document.getElementById("posicion").value);
    let base = new Base(nombre, minutos);
    if (nombre != "" && minutos != "") { 
        if(!posicion) {
            if (ruta.inicio == null) {
                ruta.agregar(base);
                document.getElementById("listadoBases").innerHTML = basesNuevas();
            } else {
                let aux = new Base(nombre, minutos);
                if (ruta.buscar(aux.nombre) != null) {
                    if (ruta.buscar(aux.nombre).nombre != aux.nombre) {
                        ruta.agregar(base, aux);
                        base = aux;
                        document.getElementById("listadoBases").innerHTML = basesNuevas();
                    } else {
                        alert("La base ya existe");
                    }
                } else {
                    ruta.agregar(aux);
                    base = aux;
                    document.getElementById("listadoBases").innerHTML = basesNuevas();
                }
            }
        } else {
            if (posicion != '') {
                var aux = new Base(nombre, minutos);
                if (ruta.buscar(aux.nombre) != null) {
                    if (ruta.buscar(aux.nombre).nombre != aux.nombre) {
                        ruta.cambiarPosicion(base, posicion);
                        base = aux;
                        document.getElementById("listadoBases").innerHTML = basesNuevas();
                    } else {
                        alert("La base ya existe");
                    }
                } else {
                    let elemento = ruta.cambiarPosicion(aux, posicion);
                    base = aux;
                    document.getElementById("listadoBases").innerHTML = basesNuevas();
                    if (!elemento)
                        alert("La posición no existe");
                }
            } else {
                alert("Ingrese una posición");
            }
        }
    } else {
        alert("Ingrese todos los campos");
    }
    document.getElementById("name_base").value = "";
    document.getElementById("mins").value = "";
    checkbox.checked = false;
    document.querySelector('#campo_posicion').style.display = 'none';
    document.getElementById("name_base").focus();
});
function basesNuevas() {
    if (ruta.inicio != null) {
        let basesNuevas = ruta.imprimir();
        let str = '';

        basesNuevas.forEach((base) => {
            str += `<tr><td>${base.BASE}</td><td>${base.MINUTOS} mins</td></tr>`;
        });
        return str;
    } else {
        return '';
    }
}
document.querySelector("#buscar").addEventListener("click", () => {
    let nombre = document.getElementById("searchBase").value;
    let base = ruta.buscar(nombre);
    if (base) {
        document.getElementById("nombre_base").innerHTML = base.nombre;
        document.getElementById("duracion_base").innerHTML = base.minutos + " mins";
    } else {
        document.getElementById("nombre_base").innerHTML = "Base no encontrada";
        document.getElementById("duracion_base").innerHTML = "";
    }
});
document.querySelector("#eliminar").addEventListener("click", () => {
    let nombre = document.getElementById("eliminaInput").value;
    let base = ruta.buscar(nombre);
    if (base) {
        ruta.eliminar(nombre);
        document.getElementById("eliminaInput").value = "";
        document.getElementById("eliminaInput").focus();
        document.getElementById("listadoBases").innerHTML = basesNuevas();
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
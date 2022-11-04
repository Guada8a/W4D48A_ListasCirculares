export default class Ruta{
    constructor(numero) {
        this.inicio = null;
        this.numero = numero;
    }
    agregar(base) {
        if(this.inicio == null){
            this.inicio = base;
            this.inicio.sig = this.inicio;
            this.inicio.ant = this.inicio;
        } else {
            let aux = this.inicio;
            while(aux.sig != this.inicio){
                aux = aux.sig;
            }
            aux.sig = base;
            aux.sig.ant = aux;
            aux.sig.sig = this.inicio;
            this.inicio.ant = base;

        }
    }
    buscar(nombre) {
        let aux = this.inicio;
        if (aux != null) {
            while (aux.nombre != nombre && aux.sig != this.inicio) {
                aux = aux.sig;
            }
            if(aux.nombre == nombre){
                return aux;
            } else {
                console.log("No se encontró la base");
            }
        }
    }
    eliminar(nombre) {
        let aux = this.inicio;

        if (this.inicio.nombre === nombre && this.inicio.sig === this.inicio) {
            this.inicio = null;
        } else if (this.inicio.nombre == nombre) {
            this.inicio.sig.minutos = this.inicio.minutos + this.inicio.sig.minutos;
            this.inicio.sig.ant = this.inicio.ant;
            this.inicio.ant.sig = this.inicio.sig;
            this.inicio = this.inicio.sig;
        } else {
            while (aux.sig.nombre != nombre) {
                aux = aux.sig;
            }
            if (aux.sig.nombre === nombre) {
                aux.sig.sig.minutos = aux.sig.minutos + aux.sig.sig.minutos;
                aux.sig = aux.sig.sig;
                aux.sig.ant = aux;
            } else {
                console.log("Base no encontrada");
            }
        }
    }
    imprimir() {
        let str = `RUTA ${this.numero}: \n`;
        let aux = this.inicio;
        str += aux.nombre + ' -> ';
        while (aux.sig != this.inicio) {
            str += aux.sig.nombre + ' -> ';
            aux = aux.sig;
        }
        return str;
    }
    recorrido(inicio,horaInicio,horaFin) {
        let aux = this.buscar(inicio);
        let minutos = 0;
        minutos = horaInicio.getMinutes() == 0 ? `00` : horaInicio.getMinutes();
        console.log(`RUTA ${this.numero}:`);
        let str = `"${aux.nombre}" -> ${horaInicio.getHours()}:${minutos}\n`;
        while (horaInicio.getHours() < horaFin.getHours() || horaInicio.getMinutes() < horaFin.getMinutes()) {
            horaInicio.setMinutes(horaInicio.getMinutes() + aux.sig.minutos);
            aux = aux.sig;
            minutos = horaInicio.getMinutes() == 0 ? `00` : horaInicio.getMinutes();
            str += `"${aux.nombre}" -> ${horaInicio.getHours()}:${minutos}\n`;
        }
        return str;
    }
}



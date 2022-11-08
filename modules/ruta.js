import Base from "./base.js";
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
        return base;
    }
    buscar(nombre) {
        let aux = this.inicio;
        if (aux != null) {
            while (aux.nombre != nombre && aux.sig != this.inicio) {
                aux = aux.sig;
            }
            return aux.nombre == nombre ? aux : false;
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
    agregarInicio(base) {
        if (this.inicio == null) {
            this.inicio = base;
            this.inicio.sig = this.inicio;
            this.inicio.ant = this.inicio;
        } else {
            base.sig = this.inicio;
            base.ant = this.inicio.ant;
            this.inicio.ant.sig = base;
            this.inicio.ant = base;
            this.inicio = base;
        }
    }
    cambiarPosicion(base, posicion) {
        let aux = this.inicio;
        if (aux) {
            try {
                if (posicion == 1) {
                    this.agregarInicio(base);
                } else {
                    for (let i = 1; i < posicion - 1; i++) {
                        aux = aux.sig;
                    }
                    base.sig = aux.sig;
                    base.ant = aux;
                    aux.sig.ant = base;
                    aux.sig = base;
                }
            } catch (e) { }
        }
    }
    imprimir() {
        let aux = this.inicio;
        let base = [];
        base.push({ BASE: aux.nombre, MINUTOS: aux.minutos });
        while (aux.sig != this.inicio) {
            base.push({ BASE: aux.sig.nombre, MINUTOS: aux.sig.minutos });
            aux = aux.sig;
        }
        return base;
    }
    recorrido(inicio, horaInicio, minutosInicio, horaFin, minutosFin) {
        let aux = inicio;
        let minutes = 0;
        let bases = [];
        let entrada = new Date();
        let salida = new Date();

        entrada.setHours(horaInicio, minutosInicio, 0);
        salida.setHours(horaFin, minutosFin, 0);

        minutes = entrada.getMinutes() < 10 ? `0` + entrada.getMinutes() : entrada.getMinutes();
        /*
         * ? Se crea un arreglo de objetos con la información de las bases y las horas en las que pasan
            */
        while (entrada.getHours() < salida.getHours() || entrada.getMinutes() < salida.getMinutes()) {
            console.log(aux.sig.minutos);
            entrada.setMinutes(entrada.getMinutes() + aux.sig.minutos);
            bases.push({ BASE: aux.nombre, HORA: `${entrada.getHours()}:${minutes}` });
            aux = aux.sig;
            minutes = entrada.getMinutes() < 10 ? `0` + entrada.getMinutes() : entrada.getMinutes();
        }
        return bases;
        /*
        let str = `"${aux.nombre}" -> ${entrada.getHours()}:${minutos}\n`;
        while (entrada.getHours() < salida.getHours() || entrada.getMinutes() < salida.getMinutes()) {
            entrada.setMinutes(entrada.getMinutes() + aux.sig.minutos);
            aux = aux.sig;
            minutos = entrada.getMinutes() == 0 ? `00` : entrada.getMinutes();
            str += `BASE: "${aux.nombre}" -> ${entrada.getHours()}:${minutos}\n`;
        }
        console.log(str);
        
        return str;
        */
        
    }
}



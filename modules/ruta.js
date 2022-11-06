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
            return aux.nombre == nombre ? aux : false;
        }
    }
    eliminar(nombre) {
        let aux = this.inicio;

        if (this.inicio.nombre === nombre && this.inicio.sig === this.inicio) {
            this.inicio = null;
        } else if (this.inicio.nombre == nombre) {
            this.inicio.sig.minutos = parseInt(this.inicio.minutos) + parseInt(this.inicio.sig.minutos);
            this.inicio.sig.ant = this.inicio.ant;
            this.inicio.ant.sig = this.inicio.sig;
            this.inicio = this.inicio.sig;
        } else {
            while (aux.sig.nombre != nombre) {
                aux = aux.sig;
            }
            if (aux.sig.nombre === nombre) {
                aux.sig.sig.minutos = parseInt(aux.sig.minutos) + parseInt(aux.sig.sig.minutos);
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
        let base = [];
        base.push({ BASE: aux.nombre, MINUTOS: aux.minutos });
        while (aux.sig != this.inicio) {
            base.push({ BASE: aux.sig.nombre, MINUTOS: aux.sig.minutos });
            aux = aux.sig;
        }
        return base;
    }
    recorrido(inicio,horaInicio,minutosInicio,horaFin,minutosFin) {
        let aux = this.buscar(inicio);
        let minutos = 0;
        let bases = [];
        let entrada = new Date();
        let salida = new Date();

        entrada.setHours(horaInicio, minutosInicio, 0);
        salida.setHours(horaFin, minutosFin, 0);

        minutos = entrada.getMinutes() == 0 ? `00` : entrada.getMinutes();
        console.log(`RUTA ${this.numero}:`);
        /**
         * ? Se crea un arreglo de objetos con la información de las bases y las horas en las que pasan
         */
        bases.push({ BASE: aux.nombre, HORA: `${entrada.getHours()}:${minutos}` });
        while (entrada.getHours() < salida.getHours() || entrada.getMinutes() < salida.getMinutes()) {
            entrada.setMinutes(entrada.getMinutes() + aux.sig.minutos);
            aux = aux.sig;
            minutos = entrada.getMinutes() == 0 ? `00` : entrada.getMinutes();
            bases.push({ BASE: aux.nombre, HORA: `${entrada.getHours()}:${minutos}` });
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
        return str;
        */
        
    }
}



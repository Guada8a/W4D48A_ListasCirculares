import Base from "./base.js";
import Ruta from "./ruta.js";


let ruta = new Ruta(22);
let fecha1 = new Date();
let fecha2 = new Date();

ruta.agregar(new Base("Deportes", 12));
ruta.agregar(new Base("Sams", 12));
ruta.agregar(new Base("Comercial Mexicana", 12));
ruta.agregar(new Base("DIF VA", 12));
ruta.agregar(new Base("Central Rojos", 12));
ruta.agregar(new Base("Conalep", 12));
ruta.agregar(new Base("Estancia", 12));
console.log(ruta.imprimir());
fecha1.setHours(6, 0, 0);
fecha2.setHours(21, 15, 0);
ruta.buscar("Deportes");
console.log(ruta.recorrido("Central Rojos", fecha1, fecha2));
ruta.eliminar("Deportes");
fecha1.setHours(6, 0, 0);
fecha2.setHours(21, 15, 0);
console.log(ruta.recorrido("Central Rojos", fecha1, fecha2));

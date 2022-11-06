import Base from "./base.js";
import Ruta from "./ruta.js";

let ruta = new Ruta(22);
console.log(ruta.numero);
ruta.agregar(new Base("Deportes", 12));
ruta.agregar(new Base("Sams", 12));
ruta.agregar(new Base("Comercial Mexicana", 12));
ruta.agregar(new Base("DIF VA", 12));
ruta.agregar(new Base("Central Rojos", 12));
ruta.agregar(new Base("Conalep", 12));
ruta.agregar(new Base("Estancia", 12));
console.table(ruta.imprimir());
console.log(ruta.buscar("Deportes"));
console.table(ruta.recorrido("Central Rojos", 6, 0, 21, 20));
ruta.eliminar("Deportes");
console.table(ruta.recorrido("Central Rojos", 6, 0, 21, 20));



# Listas Circulares
## **Rutas**
![Imagen de Referencia](https://www.beetrack.com/hs-fs/hubfs/calcular%20ruta%20google%20maps.jpg?width=560&name=calcular%20ruta%20google%20maps.jpg)
### **Requerimientos**
Crear una estructura circular simple o doble, donde el nodo será una Base:
```
class base{
    constructor(nombre,minutos)
}
```
y la estructura de datos, representará una ruta de transporte, por lo que a la ruta se le podrá:
> - Agregar base
> - Buscar base
> - Eliminar base
> - Imprimir bases

Además se agregará el siguiente método.
```
recorrido(baseInicio, horaInicio, minutoInicio, horaFin, minutoFin)
```
### **Detalles de la Actividad**
Se buscará la base inicio y se mostrará el recorrido por cada una de las bases hasta que se llegue a la hora final.
### **Notas**
- No es necesario crear una interfaz HTML para utilizarla
- Sólo entregar un archivo con las dos clases que se requieren así como una serie de instrucciones de prueba (crear una ruta y varias bases, mandar la impresión, crear un recorrido)
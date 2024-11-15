/* 
    1. Creación de un Objeto Básico:
    ○ Crea un objeto llamado libro con propiedades como título, autor y
    añoDePublicacion. Imprime cada propiedad en la consola.
*/

const libro = {
    titulo : 'Harry Potter 1',
    autor : 'J. K. Rowling',
    anopublicacion : '1997'
}

console.log(libro)

/*
    2. Anidación de Objetos:
    ○ Crea un objeto llamado estudiante con propiedades nombre, edad y
    direccion. direccion debe ser otro objeto con propiedades calle,
    ciudad y pais. Imprime la dirección completa del estudiante.
*/

const estudiante = {
    nombre : 'Josue',
    edad : 28,
    direccion : {
        calle : 'Lauria',
        ciudad :  'Concepcion del Uruguay',
        pais : 'Argentina'
    }
}

console.log(estudiante.direccion)

/*
    3. Métodos en Objetos:
    ○ Añade un método llamado descripción al objeto libro que devuelva
    una cadena describiendo el título y el autor del libro. Invoca este
    método e imprime el resultado.
*/

libro.descripcion = function(){
    return (`El libro "${this.titulo}" fue escrito por "${this.autor}" `)
} 

console.log(libro.descripcion())

/*
    4. Iteración sobre Propiedades de un Objeto:
    ○ Crea un objeto producto con propiedades como nombre, precio y
    disponible. Usa un bucle for...in para imprimir todas las propiedades
    y sus valores.
*/

const producto = {
    nombre: 'Notebook',
    precio: 547000,
    disponible: true
}

for(let propiedad in producto) {
    console.log(`${propiedad}:${producto[propiedad]}`)
}

/*
    5. Actualización de Propiedades:
    ○ Modifica el valor de la propiedad precio del objeto producto y luego
    imprime el objeto completo para verificar el cambio.
*/

producto.precio = 700000

console.log(producto)

/*
    6. Comprobación de Propiedades:
    ○ Crea una función llamada tienePropiedad que tome un objeto y una
    cadena como parámetros, y devuelva true si el objeto tiene una
    propiedad con ese nombre, o false en caso contrario.
*/

function tienePropiedad (objeto,propiedad){
    return objeto.hasOwnProperty(propiedad)
}

console.log(tienePropiedad(producto,'nombre'))
console.log(tienePropiedad(producto,'edad'))

/*
    7. Eliminación de Propiedades:
    ○ Elimina la propiedad disponible del objeto producto. Imprime el
    objeto antes y después de eliminar la propiedad.
*/

console.log(producto)

delete producto.precio

console.log(producto)

/*
    8. Combinar Objetos:
    ○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
    en un nuevo objeto. Imprime el resultado.
*/

const persona1 = {
    nombre : 'Pedro',
    edad : 73,
    trabajo : 'Chofer de micro'
}
const persona2 = {
    nombre : 'Jose',
    edad : 35
}

const combinar = Object.assign(persona1,persona2)

console.log(combinar)

/*
    9. Copiar Objetos:
    ○ Crea una copia profunda del objeto estudiante utilizando el método
    JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
    original no haya sido alterado.
*/

const objestudiante = JSON.parse(JSON.stringify(estudiante))

objestudiante.nombre = 'Camilo'
objestudiante.edad = 24

console.log(objestudiante)
console.log(estudiante)

/*
    10. Métodos Getters y Setters:
    ○ Añade un getter y un setter al objeto libro para la propiedad
    añoDePublicacion. Usa el setter para actualizar el año de publicación
    y luego usa el getter para leerlo.
*/

Object.defineProperty(libro, 'anopublicacion', {
    get() {
        return this._anopublicacion;
    },
    set(nuevoanio) {
        this._anopublicacion = nuevoanio;
    }
});

libro.anopublicacion = '2000'

console.log(libro.anopublicacion)
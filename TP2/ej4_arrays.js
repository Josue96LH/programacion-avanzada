/*
    1. Agregar y Eliminar Elementos:
    ○ Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
    push para agregar una fruta al final, y pop para eliminar la última
    fruta.
*/

const frutas = ["manzana", "banana","pera"]

frutas.push("sandia")

frutas.pop("sandia")

/*
    2. Array Bidimensional:○ Crea un array bidimensional llamado matriz con los valores [[1, 2, 3],
    [4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.
*/

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const elemento5 = matriz[1][1]

console.log(elemento5)

/*
    3. Iterar sobre un Array:
    ○ Usa un bucle for para iterar sobre el array frutas e imprimir cada
    elemento.
*/

for(let value of frutas){
    console.log(value)
}

/*
    4. Uso de map:
    ○ Crea una función llamada elevarAlCuadrado que tome un array de
    números y devuelva un nuevo array con cada número elevado al
    cuadrado. Usa map para implementar la función.
*/

function elevarAlCuadrado(array) {
    return array.map(x => x ** 2)
}

const numeros = [1,3,5,6]
const cuadrado = elevarAlCuadrado(numeros)
console.log(cuadrado)

/*
    5. Uso de filter:
    ○ Crea una función llamada filtrarMayoresDe que tome un array de
    números y un valor de referencia, y devuelva un nuevo array solo con
    los números mayores que ese valor. Usa filter.
*/

function filtrarMayoresDe(array,value) {
    return array.filter(x => x > value)
    
}

const numeros1 = [4, 5, 6, 7, 8, 9]
console.log(filtrarMayoresDe(numeros1,5))

/*
    6. Uso de reduce:
    ○ Crea una función llamada sumarElementos que tome un array de
    números y devuelva la suma de todos los elementos del array
    usando reduce.
*/

function sumarElementos (array){
    return array.reduce(function(a,b){
        return a+b
    })
}

console.log(sumarElementos(numeros))

/*
    7. Uso de some:
    ○ Crea un array de números llamado numeros y usa some para
    verificar si algún número es mayor que 10.
*/

const numerosX = [2,5,6,11,13].some(elem => elem > 10)

console.log(numerosX)

/*
    8. Uso de every:
    ○ Crea un array de números llamado numeros y usa every para
    verificar si todos los números son positivos.
*/

const numeros3 = [2,4,6].every(elem => elem > 0)

console.log(numeros3)

/*
    9. Uso de find:
    ○ Crea un array de objetos llamados personas donde cada objeto
    tenga nombre y edad. Usa find para encontrar a la primera persona
    mayor de 30 años.
*/

const persona = [{nombre:'Lorenzo',edad:13},{nombre:'Coco',edad:34}].find(elem => elem.edad > 30)

console.log(persona)

/*
    10. Uso de sort:
    ○ Crea un array de palabras y ordénalo alfabéticamente usando sort.
*/

const palabras = ['Pan','Leche','Queso','Pure'].sort()

console.log(palabras)
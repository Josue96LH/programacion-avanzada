/*
    1. Función Suma:
    ○ Crea una función llamada sumar que tome dos números como
    parámetros y devuelva su suma. Prueba la función con diferentes
    números.
*/

function suma (a,b){
    return a+b
}

console.log('La suma es: ',suma(4,3))

/*
    2. Función que Multiplica:
    ○ Crea una función llamada multiplicar que tome dos números como
    parámetros y devuelva su producto. Prueba la función con diferentes
    valores.
*/

function multiplicar (a,b){
    return a*b
}

console.log('La multiplicacion es: ',multiplicar(6,2))

/*
    3. Función con Parámetro por Defecto:
    ○ Crea una función llamada saludar que tome un parámetro nombre
    con un valor por defecto de "Invitado". La función debe devolver
    "Hola, [nombre]".
*/

function parametro (nombre){
    return console.log('Hola, ',nombre)
}

parametro('Carlos')

/*
    4. Función que Devuelve un Objeto:
    ○ Crea una función llamada crearPersona que tome nombre y edad
    como parámetros y devuelva un objeto con esas propiedades.
*/

function crearPersona(nomb,ed){
    return objeto = {
        nombre : nomb,
        edad : ed
    }
}

console.log(crearPersona('Lucas',23))

/*
    5. Función que Modifica un Objeto:
    ○ Crea una función llamada actualizarEdad que tome un objeto
    persona y un número nuevaEdad, y actualice la propiedad edad del
    objeto.
*/

function actualizarEdad(persona,nuevaEdad){
    return console.log('La nueva edad es: ',persona.edad = nuevaEdad)
}

actualizarEdad(crearPersona('Lucas',23),34)

/*
    6. Función Recursiva:
    ○ Crea una función recursiva llamada factorial que calcule el factorial
    de un número dado.
*/

function factorial (n){
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log('El factorial es: ',factorial(3))

/*
    7. Función con Función Interna:
    ○ Crea una función llamada despedir que contenga una función
    interna adios. despedir debe devolver el resultado de llamar a adios.
*/

function despedir(){
    function adios(){
        return 'Adios'
    }

    return adios
}

console.log(despedir())

/*
    8. Función que Usa Otra Función:
    ○ Crea una función llamada procesarArray que tome un array y una
    función como parámetros, y aplique la función a cada elemento del
    array. Usa una función como parámetro para multiplicar cada
    número por 2.
*/

function procesarArray(array,fun){
    result=[]
    for(let num of array){
        result.push(fun(num,2))
    }
    return result
}

v1 = [2,3,5,2]
console.log('Multiplicacion de array',procesarArray(v1,multiplicar))

/*
    9. Función que Devuelve Otra Función:
    ○ Crea una función llamada crearMultiplicador que tome un número x
    y devuelva una nueva función que multiplique cualquier número por
    x.
*/

function crearMultiplicador(x){
    return function (n){
        return n*x
    } 

}

const multiplicarPor2 = crearMultiplicador(2)
console.log('Resultado: ',multiplicarPor2(5))

/*
    10. Función Anónima:
    ○ Crea una función anónima que sume dos números y la asigna a una
    variable llamada sumarAnonima. Luego, invoca la función a través de
    esa variable.
*/

const sumarAnonima = function(a, b) {
    return a+b
};

console.log('Suma :',sumarAnonima(3, 4))
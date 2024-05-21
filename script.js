console.log("hola")

// -------------------------------------Tipos de Datos-----------------------------------------

/* Con let declaramos una variable */

let nombre = "Nely"
console.log(nombre)
nombre = "Johanna"
console.log(nombre)

let numero1 = 7
let numero2 = 9
let resultado = numero1 + numero2
console.log("resultado" , resultado , "algo")

const pi = 3.1416

var Apellido = "Dias"
console.log(Apellido)

/* Comentario de bloque */
// comentario de línea




// ----------------------------------Tipos de datos Primitivos--------------------------------

//Strings - texto
const ciudad = "Medellín"

const País = "Colombia"
const País1 = "Argentina"
console.log(ciudad, País, País1)

//javascript es un lenguaje debilmente tipado
//Int (enteros), float (decimales) - Números
const suma = 5
const edad = 20.5
console.log("multiplicación:", 5 * "5")

//El estandar de javascript recomienda la escritura camelCase
const numeroNegativo = -10
console.log(suma, edad, numeroNegativo)

//Booleanos - Verdadero o Flaso
let esVerde = true
let esMorado = false

//---------------------------------- Estructura de Datos-----------------------------------------

// Array - Vectores - Listas

let listaDeNumeros = [20, -55, 100]
console.log(listaDeNumeros)

// ver un elementode la lista

console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2])

let listaCiudades = ["Bogotá", "Cali", "Cartagena", "Santa Marta"]
console.log(listaCiudades)
console.log(listaCiudades[0])
console.log(listaCiudades[1])
console.log(listaCiudades[2])
console.log(listaCiudades[3])

let listaDelistas = [listaCiudades, listaDeNumeros]
//acceder al dato 55
console.log(listaDelistas[1][1])

//JSON (JavaScript Object Notation) - Objetos
// clave - valor

let usuario = {
    nombre: "Nely",
    edad: 18,
    ciudad: "Bogotá",
    Ubicación: {
        latitud: 1.535654543, longitud:-2.23432353}
}
console.log(usuario)
console.log(usuario.ciudad)
console.log(usuario.nombre)

//Tipos de Datos Vacios


//null - nulo
//Este tipo de variables se da por algún resultado
let espacioVacio = null

//undefined - indefinido
let noDefinido = undefined
console.log(usuario.apellido)

//Not a Number (NaN) - No es un numero
const multiplicaion = 10 * "hola"
console.log(multiplicaion)

//---------------------Estructuras de Control--------------------------
//Bucles - Un proceso que se repite
//Loop - bucle infinito

const listaAnimales = [
"perro",
"gato",
"gallina",
"oso"
]

// Propiedad length
console.log('tamaño del array:',listaAnimales.length)

//For es una palabra reservada
//Parametro 1: Contador 
//Parametro 2: Condición para que el bucle se detenga
//Parametro 3: Comportamiento del contador

// for(let contador = 0; contador < listaAnimales.length; contador + 1){console.log(contador)console.log(listaAnimales[contador])

for(let i = 0; i < listaAnimales.length; i++){
    console.log(i)
    console.log(listaAnimales[i])
}

//Condiciones
// - Igualdad: ===
// - Comparación menor que: <
// - Comparación mayor que >
// - Comparación menor o igual que: <=
// - Comparación mayor o igual que >=







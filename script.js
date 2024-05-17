console.log("hola")

let nombre = "Nely"
console.log(nombre)
nombre = "Johanna"
console.log(nombre)

const pi = 3.1416

var Apellido = "Dias"
console.log(Apellido)

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
console.log(usuario.nombre.edad)




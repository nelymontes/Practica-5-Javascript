//--------Ejercicio de lectura y Escritura --------

console.log("hola")
const mostrarValor = () => {
    // getElementById= obtener Elemento por el ID
    const input1 = document.getElementById("valor1")

    let valor1 = input1.value
    console.log(valor1)
    console.log("mostrando valor")
    const span = document.getElementById("input-valor")
    console.log(span)
    console.log(span.innerHTML)
    span.innerHTML = valor1
}
// ------------ Calculadora -----------------
//LeerInputs debe leer los inputs, validarlos
// y devolver estos valores
const leerInputs = () => {
    console.log("leyendo inputs....")

    // con document obtenemos las etiquetas input
    const inputNumero1 = document.getElementById('input-numero-1')
    const inputNumero2 = document.getElementById('input-numero-2')

    // Aquí obtenemos las etiquetas inputs
    let numero1 = inputNumero1.value
    let numero2 = inputNumero2.value
    console.log(numero1, numero2)
    //validar que no esten vacíos

    if (numero1 === '') {
        //anunciar un error
        alert("El valor 1 no existe o contiene caracteres no númericos")
        //Interrumpir la ejecución
        return null
    }

    if (numero2 === '') {
        //anunciar un error
        alert("El valor 2 no existe o contiene caracteres no númericos")
        //Interrumpir la ejecución
        return null
    }
    // parse - cambiar el tipo de dato
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    console.log(numero1, numero2)

    const numerosValidados = {
        numero1: numero1,
        numero2: numero2
    }
    return numerosValidados

    //esta es otra forma de declarar un JSON
    // return {
    //numero1: numero1,
    //numero2: numero2
    //}
}

//realizarOperación debe recibir el tipo de operación
//realizar la operación con los valores de los inputs y devolver el 
// un resultado

const realizarOperación = (operación) => {
    const numeros = leerInputs()
    if(numeros === null){
        return
    }
    console.log(operación, "con los numeros:", numeros.numero1, 'y', numeros.numero2)


    let resultado = 0

//Validar la operación
    if (operación === 'suma') {

//return nuemeros.numero1 + numeros.numero 2

        resultado = numeros.numero1 + numeros.numero2
    }
    if (operación === 'resta') {
        resultado = numeros.numero1 - numeros.numero2
    }

    if (operación === 'multiplicar'){
        resultado = numeros.numero1 * numeros.numero2
    }

    if (operación === 'división'){
        resultado = numeros.numero1 / numeros.numero2
    }
    console.log("resultado;", resultado)
}

//mostrarResultado debe recibir el resultado de la operación y mostrarlo al usuario
//Además debe modificar el simbolo de operación que se realizó
const mostrarResultado = (resultado) => {
console.log(resultado)

}

console.log('Hello world from index.js!')

// Esto es un comentario en un línea

/* Esto
es 
un
comentario
de
múltiples
líneas
*/

// TIPOS DE DATOS

// PRIMITIVOS: Number, String, Boolean (true, false), undefined

// NUMBER
const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING o cadena de texto
const alumna = 'Claudia'
const alumno = "Marco"
const numero4 = "200"
const numero5 = 200

console.log(typeof alumna)
console.log(typeof alumno)
console.log(typeof numero4)
console.log(typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = true

console.log(tieneDescuento)
console.log(typeof tieneDescuento)

// UNDEFINED

let nombre

console.log(nombre)
console.log(typeof nombre)

// NULL -> Es un object

let apellido = null

console.log(apellido)
console.log(typeof apellido)

// Object
// Funtion
// BigInt
// Symbol


// VARIABLES Y CONSTANSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable)
var nombreDeMiVariable = 'un valor'

// CONST -> ES6 (El uso de const es lo recomendado)

// * No podemos reasignar su valor

const edad = 55
const _edad = 25
const edadDeMiHijo = 15

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let es lo recomendado)

// * Sí podemos reasignar su valor

let edad2 = 35
edad2 = 36
edad2 = 22

console.log(edad2)
console.log(typeof edad2)

edad2 = "hola"
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // dos elevado al cubo

// OPERADOR DE ASIGNACIÓN

const genero = 'femenino'

console.log(genero + '*')

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta
// DEvuelven un valor booleano(true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 != 1) // false

// Operador de igualdad y desigualdad estricta (ES RECOMENDABLE USARLO CASI SIEMPRE)
// Devuelven un valor booleano(true o false)
// Este operador si toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 !== 1) // false ! ==

// OPERADORES DE COMPARACIÓN, siempre devuelven un booleano

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(8 <= 5)

// Operadores lógicos (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR 
console.log(!true) // NEGACIÓN

// Operador de cadena (concatenación)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 37

const saludoAmigo = saludo + nombreCompleto + '. Tengo ' + miEdad + ' años'

console.log(nombreCompleto)
console.log(saludoAmigo)

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar true si un numero es menor que 40 sino devolver false

const numero111 = 34

console.log(numero111 < 40) // true

// 3. Retornar True si un numero es menor que 60 sino devolver False

const numero222 = 85
console.log(numero222 < 60) // false

// 4. Retornar True si un numero es par sino devolver False
const numero333 = 5
const numero444 = 6

console.log(numero333 % 2 === 0) // false
console.log(numero444 % 2 === 0) // true

// let n = prompt("ingrese numero: ");

// if((n % 2)== 0){
//     console.log("Es par");
// }else{
//     console.log("Es impar");
// }

// 5. Retornar True si un numero es impar sino devolver False
const numero555 = 5
const numero666 = 6

console.log(numero555 % 2 !== 0) // true
console.log(numero666 % 2 !== 0) // false

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 10
const altura = 5

const area = (base * altura) / 2

console.log(area) // 25

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
const numero3cifras = 101
const cifras = numero3cifras.toString()
const x=parseInt(cifras[0])
const y=parseInt(cifras[1])
const z=parseInt(cifras[2])
const sumaNumero=(x+y+z) ** 3
console.log(x)
console.log(y)
console.log(z)
console.log("La suma de cifras elevado al cubo es: " + sumaNumero)

// const num = prompt("ingrese numero de 3 cifras: ")
// const str = num.toString()
// const suma = (parseInt(str[0])+ parseInt(str[1]) + parseInt(str[2])) ** 3
// console.log("La cifra elevado al cubo es: ", suma);

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%
const montoDinero = 5000
let socioA = montoDinero * 0.3
let socioB = montoDinero * 0.2
let socioC = montoDinero * 0.6

console.log(socioA)
console.log(socioB)
console.log(socioC)

// condicionales

if(true){
    //verdadero
}

const numero = 34

const esPar = numero % 2 === 0

if(esPar){
    console.log("Es par");
}

// condicional (if else)
if(true){
    //verdadero
}else{
    // falso
}

if(esPar){
    console.log("este numero es par");
}else{
    console.log("este numero es impar");
}

// condicionales (if, else if, else)

if(true){
    // verdadero
}else if(false){
    // verdadero
}else if(false){
    // verdadero
}else{
    // falso
}

const hero = "spiderman"

if(hero === 'batman'){
    console.log('hola soy bruce');
}else if(hero === 'spiderman'){
    console.log('Hola soy peter parker');
}else if(hero === 'ironman'){
    console.log('hola soy Tony');
}else{
    console.log('No soy un heroe aun');
}

// Condicionales (switch)

switch(hero){
    case 'barman':
        console.log('hola soy bruce');
        break;
    case 'spiderman':
        console.log('hola soy peter');
        break;
    case 'iroman':
        console.log('Hola soy tony');
        break;
    default:
        console.log('No soy un here aun');               

}

// estructuras repetitivas

// for (sirve para repetir una o varias instrucciones)

for(let i=0; i<10; i++){
    console.log(i);
}

// while

let j = 0

while(j<10){
    console.log(j);
    j++;
}

// do while

let k= 0

do{
    console.log(k)
    k=k+1
    // k++
}while(k<10)

// ejercicios

// 1.determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'mayor de edad' o 'menor de edad'

const edadPersona = 37

if(edadPersona>=18){
    console.log('mayor de edad');
}else{
    console.log('menor de edad');
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

// let saludo1 = prompt('Ingrese saludo: ');

// if(saludo1 === 'español'){
//     console.log("Hola");
// }else if(saludo1 === 'ingles'){
//     console.log("Hello");
// }else if(saludo1 === 'aimara'){
//     console.log("Kamisaraki");
// }else{
//     console.log("No esta registrado ese lenguaje");
// }

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

// let div = prompt("ingrese numero: ");
// if((div % 3)==0 && (div % 5)==0 ){
//     console.log("Divisible entre 3 y 5: fizzbuzz");
// }else if((div % 3)==0){
//     console.log("Divisible entre 3: fizz");
// }else if((div % 5)==0){
//     console.log("Divisible entre 5: buzz");
// }


// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1

// const primo = prompt("Ingrese numero: ");
// if((primo%1)==0 && primo%primo==0){
//     console.log("Es primo");
// }


// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
for(let i=0; i<10; i+=2){
    console.log(i);
}


//funciones
// definiendo una funcion

function nombreDelaFuncion(){
    // cuerpo de la funcion y aqui va la logica a ejecutar
}

nombreDelaFuncion()

// funciones sin parametros

function imprimirMiNombre(){
    console.log('Hola soy bryan');
    console.log('Y soy fronend');
}

imprimirMiNombre()

// funciones con parametros

function imprimirUnNombre(nombre){
    console.log("Hola soy "+ `${nombre}`);
}

imprimirUnNombre("juan")

function imprimirNombreApellido(nombre,apellido,edad){
    console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`);
}

imprimirNombreApellido('bryan','urquizo',22)

// ejercicios

// 1.usando funciones determinar si la edad de una persona es mayor de edad o menor de
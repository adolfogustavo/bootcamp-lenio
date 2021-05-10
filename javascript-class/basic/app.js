let foo = 'String 1';
const variableConst = 'String 2';

function myFirstFunction() {
  foo = 'String 2'; // Variable foo ya ha sido declarada
  variableConst = 'Nuevo String para const'; // Error porque ya ha sido declarado
  document.getElementById("demo").innerHTML = "Texto cambiado"; // Cambio el valor de mi etiqueta <p> en mi documento HTML
  document.write(5 + 6); // Reemplazo todo lo que existe en mi documento HTML
  console.log(foo); // Para ver mi resultado en la consola al ejecutar mi función
} 

console.log(foo); // Para ver mi resultado en la consola fuera de mi función

/* ================= Operadores aritméticos comunes ================== */

let x = 'Hola'
let y = 'Mundo'
let s = "1102" + 5; // 11025
let z = "1102" - 5; // 1097
// Si uso mi operador '-', JS convierte mi string en integer y hace la resta.
// Si uso mi operador '+', JS concatena mi string con el integer.

console.log(s);
console.log(z);

/* ================= Operadores lógicos comunes ================== */

let a = '1'
let b = 1

console.log('[Case 1] - Are x and y equals?=>', (a === b) ? true : false) // false
console.log('[Case 2] - Are x and y equals?=>', (a == b) ? true : false) // true
console.log('[Case 3] - Are x and y equals?=>', (a !== b) ? true : false) // true





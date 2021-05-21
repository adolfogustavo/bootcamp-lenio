/* Local Storage */
localStorage.setItem('Ejemplo1', 'Ejemplo data1');
localStorage.setItem('Ejemplo2', 'Ejemplo data2');

let data1 = localStorage.getItem('Ejemplo1');
let data2 = localStorage.getItem('Ejemplo2');

console.log('Data2 from local storage=>', data1);
console.log('Data2 from local storage=>', data2);

/* Session Storage */
sessionStorage.setItem('Ejemplo1', 'data1');
sessionStorage.setItem('Ejemplo2', 'data2');

let datast1 = sessionStorage.getItem('Ejemplo1');
let datast2 = sessionStorage.getItem('Ejemplo2');

console.log('Data1 from session storage=>', datast1);
console.log('Data2 from session storage=>', datast2);
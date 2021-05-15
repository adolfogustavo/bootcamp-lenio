/* ===== Crear arrays ===== */
const numeros = [10, 20, 30];
// const meses = new Array('Enero', 'Febrero', 'Marzo');
const arregloCombinado = ["Julio", 22, true, [1, 2, 3, 4]];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
meses.push('Junio');
// meses.unshift('Primera posicion');

// console.log('Mi mes=>', meses[1]);
// console.log(meses.length);

/* Recorriendo un array */

// for(let i = 0; i < meses.length; i++) {
//   console.log(meses[i]);
// }

const cart = [
  { name: 'Monitor', price: 500 },
  { name: 'TV', price: 100 },
  { name: 'Tablet', price: 200 },
  { name: 'Headphones', price: 300 },
  { name: 'Phone', price: 700 },
];

// for(let i = 0; i < cart.length; i++) {
//   console.log(`${cart[i].name} - Price: ${cart[i].price}`);
// }

// const newArrayOfProduct = cart.forEach(function(product) {
//   console.log(`${product.name} - Price: ${product.price}`)
// })

const newArrayOfProduct = cart.map(function(product) {
  return `Product: ${product.name} - ${product.price}`;
})

console.log(newArrayOfProduct);

const filteredByPrice = cart.filter(function(product){
  return product.price > 200;
});

console.log('filteredByPrice=>', filteredByPrice);

/* Arrow functions */

// const result = numeros.map(function(n){ return n*2 })
// const result = numeros.map((n) => n*2);
// const myMethod = () => (console.log('Do Something'));

// console.log(result);


// var obj = {
//   count: 10,
//   doSomething: function() {
//     setTimeout(function() {
//       this.count++;
//       console.log(this.count);
//     }.bind(this), 300);
//   }
// }

var obj = {
  count: 10,
  doSomething: function() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    })
  }
}

obj.doSomething();

function greet({ text = 'world' }) {
  console.log(`Hello ${text}`)
}

greet({ text: undefined });




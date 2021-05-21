/* ====== Rest and Spread operator ===== */

// function add(x, y) {
//   return x + y;
// }

// add(1, 3, 3, 4 , 5); // 3


/* Spread: Recibo todos mis argumentos con ...*/

function add(...args) {
  console.log('args=>', args);
  // return args.reduce((previous, current) => previous + current, 0);
}

add(1, 2, 3, 4 , 5); //15

/* Rest: Recibo el **resto** de mis argumentos */ 

function process(x, y, ...rest) {
  console.log('x=>', x);
  console.log('y=>', y);
  console.log(rest);
}

process(1, 2, 3, 4, 5);
/* =================== Using async await ==================*/
/*
const timePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2');
  }, 2000)
})

const inOrderPrint = () => {
  console.log('1');
  timePromise.then((resolveResponse) => console.log(resolveResponse))
  .then(() => console.log('3'));
}

console.log(inOrderPrint());

*/

/* =================== Using async await ==================*/

const timePromise = new Promise((resolve, reject) => {
  setTimeout(afterTwoSeconds = () => {
    resolve('2');
  }, 2000)
})

const inOrderPrint = async () => {
  console.log('1');
  console.log(await timePromise);
  console.log('3');
}
console.log(inOrderPrint());




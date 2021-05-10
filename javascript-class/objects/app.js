var bike = {
  brand: 'Oxford',
  weight: 55,
  color: 'Amarillo',
  pedaling: function () { console.log('Start pedalling') },
  stop: function () { console.log('Brake') },
  changeGear: function () { console.log('Changing Gears') }
};

console.log('Accessing to the brand of my bike by using brackets =>', bike['brand']);
console.log('Accessing to the brand of my bike by using dot =>', bike.brand);

/* ======= Methods of an object ========= */

// const finalObject = Object.assign({}, bike);

const firstObj = {
  firstName: 'Pedro',
  lastName: 'Hernandez'
}

const secondObj = {
  id: 1234567,
  role: 'Programmer'
}

const finalObj = { ...firstObj, ...secondObj}; // Unify objets
console.log('finalObj=>', finalObj);

/* ======= Accessing to property ========= */

// console.log('firstObj error=>', firstObj.id); // Is not defined in this object

// To avoid the previous error we could check first if the property exists for my firstObj.
if(firstObj.hasOwnProperty('id')) {
  console.log(firstObj.id)
} else {
  console.log(firstObj.firstName)
}

/* ======= Object.keys method ========= */

const objectKeys = Object.keys(bike);
console.log('Object keys=>', objectKeys);

/* ======= Object.values method ========= */

const objectKeysTwo = Object.values(bike);
console.log(objectKeysTwo);

/* ======= Destructuring ========= */

const { brand } = bike;
console.log(brand);
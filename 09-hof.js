const array = [
  { name: "iPhone", price: 5000, quantity: 2 },
  { name: "MacBook Pro", price: 20000, quantity: 1 },
  { name: "Magic Mouse", price: 1000, quantity: 5 },
];

// .find -> pesquisar - sempre retorna o primeiro resultado.
const find = array.find((product) => product.price > 1000);
// findCallback({ product: 'iPhone', price: 5000, quantity:2 })
const findIndex = array.findIndex((product) => product.price > 1000);
// console.log({ findIndex })
// console.log('Produto:', array[findIndex]);

//.some & every
const some = array.some((product) => product.price < 1000);
// console.log({ some });
const every = array.every((product) => product.price < 1000);
// console.log({ every });

//.map
const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price,
}));
// console.log({ map });

//.filter
const filter = array.filter((product) => product.quantity > 1);
// console.log({ filter });

const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0);
console.log({ reduce });
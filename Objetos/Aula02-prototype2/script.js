const pessoa = {
  maos: 2,
}

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty("maos"));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

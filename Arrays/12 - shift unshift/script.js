let carros = ['brasilia', 'hb20', 'crossfox', 'palio'];

let removerPrimeiro = carros.shift();
console.log(removerPrimeiro);

console.log(carros);

carros.unshift('Ferrari');

console.log(carros);

for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}

carros.forEach((car) => {
  console.log('O carro é o ' + car);
});

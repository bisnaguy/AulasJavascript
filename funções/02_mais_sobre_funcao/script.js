function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(4, 4, 4));

const mult = multiplicarTresNumeros(2, 2, 2);

console.log('O valor da multilicação é ' + mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    return 'Pode dirigir!';
  } else {
    return 'Não pode dirigir!';
  }
}
console.log(podeDirigir(19, 1));
console.log(podeDirigir(19, 0));

let idade = 19;
if (idade == 19) {
  console.log('A idade é igual a 19');
}
if (idade > 25) {
  console.log('A idade é maior que 25');
}

let nome = 'Gabriel';
if (nome == 'Gabriel' && idade > 10) {
  console.log('Liberado!');
}

let passaporte = true;
if ((nome == 'Gabriel' && idade > 30) || passaporte == true) {
  console.log('Liberado!');
}

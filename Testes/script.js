const verificar = ['g', 'a', 'b', 'r', 'i', 'e', 'l'];
let conta = 0;
let nome = 'amendoim';
for (let char of nome.toLowerCase()) {
  if (verificar.includes(char)) {
    conta++;
  }
}
console.log(conta);

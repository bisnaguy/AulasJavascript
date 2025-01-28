function podeEntrar(idade) {
  if (idade >= 18) {
    console.log('Pode se matricular na auto escola');
  } else {
    console.log('Não pode se matricular na auto escola');
  }
}

podeEntrar(15);
podeEntrar(19);

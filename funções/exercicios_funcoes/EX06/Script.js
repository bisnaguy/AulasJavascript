function tipoDeDado(dado) {
  if (typeof dado === 'number') {
    console.log('Esse dado é um número!');
  } else if (typeof dado === 'string') {
    console.log('Esse dado é um texto!');
  } else if (typeof dado === 'boolean') {
    console.log('Esse dado é booleano!');
  } else {
    console.log('Não consegui identificar o dado!');
  }
}
tipoDeDado(5);
tipoDeDado('oi');

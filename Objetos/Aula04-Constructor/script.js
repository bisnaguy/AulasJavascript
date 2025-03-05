function criaCachorro(raca, patas, cor){
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let doberman = criaCachorro("doberman",4, "preta");
console.log(doberman);
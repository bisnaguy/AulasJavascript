function cachorro(raca,patas,cor){
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function(){
    console.log("Auuuuuuu");
  }
}

let husky = new cachorro("Husky",4,"cinza");

console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);

husky.uivar();
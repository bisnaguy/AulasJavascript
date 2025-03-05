let cachorro = {
  patas: 4,
  raca: "SRD",
  latir: function(){
    console.log("Au Au");
  }
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca);
pastorAlemao.latir();
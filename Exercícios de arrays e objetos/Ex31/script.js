let teste = [4,5,3,6,8,9];
let teste2 = [3,6,8,9];

function validar(elemento){
  if(elemento.length > 5){
    console.log("Muitos elementos");
  }else{
    console.log("Poucos elementos");
  }
}

validar(teste);
validar(teste2);
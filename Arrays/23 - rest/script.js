let num = 1;
let num2 = 5;
let num3 = 10;
let num4 = 21;
let num5 = 2;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num, num2, num3, num4, num5);
imprimirNumeros(4, 4, 5, 6, 7, 8, 9, 6, 1, 5, 45, 46, 4, 64);

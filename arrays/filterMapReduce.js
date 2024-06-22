
//filtrar os numeros pares
// dobrar os valores
//reduzir um único valor que é a somatória de todos valores

const numeros = [0, 1, 2, 3, 4, 5, 79, 55, 42, 51, 100];

//sem arrow function, mais verboso
// const numerosPares = numeros.filter(function(valor){
//     return valor % 2 === 0;
// }).map(function(valor){
//     return valor * 2;
// }).reduce(function(acumulador, valor){
//     return acumulador + valor;
// });

//abaixo reduzindo para arrow function
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce(acumulador, valor => acumulador + valor);
// reduzindo o array


const numeros = [0, 1, 2, 3, 4, 5, 79, 55, 42, 51, 100];

//soma de todos elementos do array (reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0); //valor inicial do acumulador


// retornar um array com os números pares (é para fazer com filter, mas demonstrando com reduce)
const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

//retornar um array com o dobro dos valores (é para fazer com map, demonstrando comr reduce)
const dobro = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    return acumulador;
}, []);


const pessoas = [
    { nome: 'Babi', idade: 3 },
    { nome: 'Chico', idade: 12 },
    { nome: 'Gaia', idade: 8 },
    { nome: 'Tereza', idade: 6 },
    { nome: 'Bailey', idade: 4 },
    { nome: 'Juventus', idade: 5 },
];

// retornar a pessoa mais velha
// o acumulador é como se fosse uma variável auxiliar, acumula a idade maior para comparar com a próxima
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
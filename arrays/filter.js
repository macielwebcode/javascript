//filtrando array
// filter sempre retorna um array com a mesma qntde de elementos do array original ou com menos


const numeros = [0, 1, 2, 3, 4, 5, 79, 55, 42, 51, 100];

//retornar numeros maiores a 10

function callbackFilter(valor){
    return valor > 10;
}
const maiorDeDez = numeros.filter((valor, indice, array) =>{
    return valor > 10;
});
console.log(maiorDeDez);


const pessoas = [
    { nome: 'Babi', idade: 3 },
    { nome: 'Chico', idade: 12 },
    { nome: 'Gaia', idade: 8 },
    { nome: 'Tereza', idade: 6 },
    { nome: 'Bailey', idade: 4 },
    { nome: 'Juventus', idade: 5 },
];

const pessoasComNomeGrande = pessoas.filter(function(valor){
    // return valor.nome.length >= 5; //nome maior ou igual a 5 letroas
    return valor.idade > 3; //com mais de 3 anos
});

const nomeTerminaLetraA = pessoas. filter(valor => {
    return valor.nome.toLowerCase().endsWith('a');
})

console.log(pessoasComNomeGrande);
console.log(nomeTerminaLetraA);
// a diferença de filter para map é o retorno do valor final
// map usa o valor do array original para criar um novo array com uma possível alteração 
// utilizado para alterar o valor original do array (mas recomendado criar um novo para os novos valores modificados)

const numeros = [0, 1, 2, 3, 4, 5, 79, 55, 42, 51, 100];
// const numerosEmDobro = numeros.map(function(valor, indice, array){ // ecrevendo a forma completa só para saber os parametros padrões
//     return valor * 2;
// });

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);



const pessoas = [
    { nome: 'Babi', idade: 3 },
    { nome: 'Chico', idade: 12 },
    { nome: 'Gaia', idade: 8 },
    { nome: 'Tereza', idade: 6 },
    { nome: 'Bailey', idade: 4 },
    { nome: 'Juventus', idade: 5 },
];

// para cada elemento, realizar os recursos:

// retornar apenas uma string com o nome de cada pessoa

const nome = pessoas.map(valor => valor.nome);

//remover a chave nome do objeto (a chave e o valor)

const idades = pessoas.map(valor => ({ idade: valor.idade }));

//adicionar chave id em cada objeto
// aqui foi modificado no objeto original
const id = pessoas.map(valor, indice => valor.id = indice);

//adicionando id sem modificar o original
const withId = pessoas.map(function(valor, indice){
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
})

// lembrar que valor assim são passados por referência, ou seja, modificou o objeto original
// array, objetos e funções não são copiados para um novo endereço  de memória
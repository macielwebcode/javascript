// retornando maior numero entre dois numeros

// escrevendo uma functon de forma default
function maiorNumero(x, y){
    return x > y ? x : y;
}

// escrevendo com arrowfunction
const max2 = (x, y) => x > y ? x : y;


const maior = max2(1, 2);
console.log(maior);


// exercicio abaixo: escrever uma função que recebe dois argumentos (largura e altura)
// de uma image. a Função deve retornar true se a img estiver no modo paisagem

function isPaisagem(largura, altura){
    return largura > altura;
}

// com arrow funtcion
const confirmarPaisagem = (largura, altura) => largura > altura;


console.log(isPaisagem(1920, 1080));
console.log(confirmarPaisagem(1920, 1080));
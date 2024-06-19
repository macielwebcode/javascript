function postLido(post){ 
    return `${post}`; 
}

const variavel = postLido('posr principal');
console.log(variavel);

function somaConta(x, y){
    const result = x + y;
    return result;
}

console.log(somaConta(10, 5));

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

//arrrow function
const teste = n => n ** 0.5;
console.log(teste(9));
function ola(a, b, c, d, e, f){
    console.log('ola')
    for(let argument of arguments){
        total += argument;
    }

    console.log(total)
}

ola(1, 2, 3, 4, 5, 6, 7)

const conta = function(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
}
conta('+', 1, 20, 30, 40, 50);


// abaixo com arrow function para entender o arguments
const contaArrow = (...args) => {
    console.log(args);
}
contaArrow('+', 1, 20, 30, 40, 50);
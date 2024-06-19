// escrever function que recebe um número e executa os seguintes testes:
//  1 - número é divisivel por 3;
//  2 - número é divisivel por 5;
//  3 - numero é divisivel por 3 e 5;
//  4 - número n é divisivel por 3 e 5, retornando o prório número
//  5 - checar se o valor realmente é do tipo número;
//  6 - utilizar números randômicos de 0 a 100

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if( n % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a')); // testando com string

for (let i = 0; i <= 100; i++){
    console.log.og(i, fizzBuzz(i));
}
// utilizando função splice
// função "faz tudo" e altera o array original
                // -6      -5     -4        -3       -2      -1
                // 0       1       2         3       4       5
const dogs = ['Chico', 'Gaia', 'Tereza', 'Babi', 'Bailey', 'Juventus'];

const removidos = dogs.splice(4, 1); //testar com (-2, 2) //removendo a partir do indice 4 e somente 1 elemento, e o retorno é um array
const adcArray = dogs.splice(3, 2, 'Jhow', 'Ziggy'); //remove dois e adc dois elementos
console.log(dogs, removidos);


// abaixo, concatenando array
// n se concatena array utilizando sinal de +
const num1 = [0, 4, 9];
const num2 = [5, 1, 3];

const joinArrays = num1.concat(num2);
console.log(joinArrays)

const joinSpread = [...num1, ...num2, 'Babi', ...[11, 12, 13]];
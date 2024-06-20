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


//closures
function falaFrase(comecoFrase){
    function falaRestoFrase(resto){
        return comeco + '  ' + resto;
    }
    return falaRestoFrase;
}

const olaMundo = falaFrase('oi oi oi');
console.log(olaMundo('mundo'));

//abaixo exemplo de function callback

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

//callback é a function que você chama, quando algo/evento acabar de acontecer
function f1(callback){
    setTimeout(function() {
        console.log('dgd');
        if(callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function() {
        console.log('coisa');
        if(callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function() {
        console.log('coisinha');
        if(callback) callback();
    }, rand());
}

//modo não recomendado
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('ola ola');
//         });
//     });
// });


f1(f1Callback);
function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('oi')
}

// FACTORY FUNCTION ABAIXO
function createPerson(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} + ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`;
        },

        altura: a,
        peso: p,
        get imc(){ //imc passa a ser atributo como getter
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
} 
const p1 = createPerson('Babi', 'Babilônia', 1.10, 10); //cria o obj
console.log(p1.imc); //aciona o imc do obj
console.log(nomeCompleto);


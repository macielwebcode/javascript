// função construtora (molde) classe

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //primeiro o motor do js no navegador vai procurar algum método dentro do objeto
    //this.nomeCompleto = () => this.nome + ' ' + this.sonrenome; // isso aqui compromete performance pois
    // se cada objeto instanciado chamar isso, vai deixar a memória cheia e cair a performance
}

pessoaDois.prototype.isHere = 'here';

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompletoDaPessoa =  function(){
    return this.nome + ' ' + this.sonrenome;
}
const pessoaUm = new Pessoa('babi', 'B.');
const pessoaDois = new Pessoa('Chico', 'M.');

const data = new Date();
console.dir(data)

console.dir(pessoa1);
console.dir(pessoaDois);

// abaixo manipulando prototypes

const objUm = {
    chaveA: 'Time A'
}

const objDois = {
    chaveB: 'Time B'
}

Object.setPrototypeOf(objDois, objUm);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produtoUmTeste = new Produto('produto', 120)

console.log(produtoUmTeste)

//forma literal
const produtoXicara = {
    nome: 'xicara',
    preco: 20
};
Object.setPrototypeOf(produtoXicara, Produto.prototype)
produtoXicara.aumenta(10);

console.log(produtoXicara)

//outra forma de criar uma nova instancia do Produto
// mas tem que passar valor para as chaves
const produtoTres = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 30
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 13
    }
});
produtoTres.aumenta(30)
console.log(produtoTres)
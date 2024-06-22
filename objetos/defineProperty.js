function Produto(nome, preco, qntdeEstoque){
    this.nome = nome;
    this.preco = preco;
    this.qntdeEstoque = qntdeEstoque;

    Object.defineProperty(this, 'qntdeEstoque', {
        enumerable: true, //mostra a chave
        value: qntdeEstoque, // valor da chave
        writable: false, //o valor de qntdeEstoque não pode mais ser alterado qdo um novo obj é criado
        configurable: false //configurável , pode redefinir a propriedade estoque, ou seja, chamar defineProperty outra vez
    }); //configurable false tbm n permite apagar a chave
}

const p1 = new Produto('Peita', 20, 10);
console.log(p1);

//for in para iterar sobre as chaves de um obj
for(let chave in p1){
    console.log(chave);
}
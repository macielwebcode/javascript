function Produto(nome, preco, qntdeEstoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = qntdeEstoque;

    Object.defineProperty(this, 'qntdeEstoque', {
        enumerable: true, //mostra a chave
        configurable: true,
        get: function(){
            return qntdeEstoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('não é number');
                return;
            }
            estoquePrivado = valor;
        };
    }); //configurable false tbm n permite apagar a chave
}

//exemplo com factory function
function createProduct(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('composto.', '')
            nome = valor;
        }
    };
}

const produtinho = createProduct('escova de dente');
produtinho.nome = 'escova de dente composto';
console.log(produtinho.nome);

const p1 = new Produto('Peita', 20, 10);
console.log(p1);

//for in para iterar sobre as chaves de um obj
for(let chave in p1){
    console.log(chave);
}
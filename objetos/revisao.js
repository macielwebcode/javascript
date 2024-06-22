// objeto literal

const pessoa = {
    nome: 'max',
    sobrenome: 'doguinho'
}

//utilizando construtor nativo
const pessoa1 = new Object();
pessoa1.nome = 'babi';
pessoa1.sobrenome = 'babilonia';

//apagando chave
delete pessoa1.nome;


//factory functions / constructor functions / Classes

function criaPessoa(nome, sobrenome){
    return{
        noome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome}`
        }
    }
}

const p1 =  criaPessoa('Babi', 'Babilônia');
console.log(p1.nomeCompleto());


function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome;
}

//{} <- this (o new cria um novo obj atrelando ao this)
const p2 = new Pessoa('max', 'aumigo');
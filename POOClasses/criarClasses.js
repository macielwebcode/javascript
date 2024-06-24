class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log('pessoa come')
    }

    andar(){
        console.log('pessoa anda')
    }

    get nomeCompleto(){
        return this.nome + '  ' + this.sobrenome
    }

    set nomeCompleto(valor){
        // separando nome do sobrenome
        valor = valor.split('  ');
        this.nome = valor.shift();
        this.sobrenome = valor.join('  ');
    }
}

const pessoaUm = new Pessoa('Babi', 'Babilônia')
console.log(pessoaUm.nomeCompleto); // acessa nomeCompleto sem ser como var.function()
pessoaUm.nomeCompleto = 'Babi Maciel'


const _velocidade = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade = valor]
    }
    get velocidade(){
        return this[_velocidade]
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 100; i++){
    c1.acelerar()
}

c1.velocidade = 70; //usando set, é só passar valor pq já está esperando
console.log(c1.velocidade); // usando get, n passa valor e ele já retorna oq está contido em velocidade
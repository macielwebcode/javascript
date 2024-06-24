//superclasse
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log('Seu saldo é insuficiente');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo;
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo;
}

Conta.prototype.verSaldo = function(){
    console.log(`A conta: ${this.conta} - da Ag: ${this.agencia} - Possui Saldo: ${this.saldo}`);
}

const contaUm = new Conta(11, 22, 100);
contaUm.depositar(30);
contaUm.sacar(22);

// após criar a superclasse, é possível especializar a superclasse


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log('Seu saldo é insuficiente');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo;
}

const contacorrenteUm = new ContaCorrente(20, 10, 35, 100)
contacorrenteUm.depositar(10);
contacorrenteUm.sacar(180)


// polimorfismo - métodos se comportando diferente em classes filhas do mesmo filme

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const contaPoupancaUm = new ContaPoupanca(12, 33, 0);
contaPoupancaUm.depositar(10);
contaPoupancaUm.sacar(10)
contaPoupancaUm.sacar(2)
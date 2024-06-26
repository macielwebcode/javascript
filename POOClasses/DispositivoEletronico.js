// trabalhando com  Herança
// é possível reescrever métodos da classe Pai
// herança vem de cima para baixo ("você herda tudo dos seus pais, mas seus pais não herdam nada de você")

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já está ligado')
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já está desligado')
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome); // chamando oq tem na classe Pai de atributo
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('alterando método ligar da classe pai')
    }

    falaOi(){
        console.log('oi')
    }
}

const mobile1 = new Smartphone('android', 'branco', 'S20');
mobile1.ligar();

const tabletUm = new Tablet('galaxy', true)
tabletUm.ligar(); // vai retornar o método da classe filha, se n encontrassse pegaria da classe Pai
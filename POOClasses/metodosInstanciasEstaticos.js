// o método static só da para acessar pela classe, 
// ou seja: ControleRemoto.trocaPilha()

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância - acesso aos dados da instância
    aumentarVolume(){
        this.volume += 2;
    }

    // método de instância - acesso aos dados da instância
    //um exemplo é: Math.random() que pode ser usado sem 
    // ter que chamar o construtor através da palavra new
    diminuirVolume(){
        this.volume -= 2;
    }

    //Método estático
    static trocaPilha(){
        console.log('trocar pilha')
    }
}

const controleUm = new ControleRemoto('tv samsung', 8);
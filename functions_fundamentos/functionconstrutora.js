//Função construtora constrói objetos
//Função Factory (fábrica() , fabrica objetos
//Construtoca: inicia nome come letra maiúscula : Pessoa (new)
//função construtora é como se fosse um "Molde" do objeto

function Pessoa(nome, sobrenome){

    const ID = 1; //atributo privado


    const metodoInterno = function(){

    };

    //atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': methdo');
    }
}

const pessoinha1 =  new Pessoa('babi', 'maciel');
pessoinha1.metodo();
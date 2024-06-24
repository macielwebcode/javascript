//Usando composição para desacoplar mais ainda o pessoaPrototype

const falar = {
    falar() {
        console.log(this.nome + this.sobrenome)
    }
}

const andar = {
    andar(){
        console.log(this.nome)
    }
}

// com spread operator
const pessoaPrototype = { ...falar, ...andar }

// ou usar Object.assign
// const pessoaPrototype = Object.assign({}, falar, andar)

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: {value: sobrenome}
    });
}

// da forma que está abaixo, os métodos estão acoplados ao objeto
// a cada objeto instanciado, será também criado um método falar e beber
// isso consome recursos e abaixa a performance
// o ideal é ficar no prototype do objeto, no "pai do objeto"
// falar(){
//     console.log(this.nome + this.sobrenome)
// },
// andar(){
//     console.log(this.nome)
// }
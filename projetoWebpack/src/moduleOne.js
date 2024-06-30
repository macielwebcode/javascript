export const nome = 'babi';
export const sobrenome = 'maciel';
export const idade = 3;

export function soma(x,y){
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}

// export { nome, sobrenome, idade, soma }
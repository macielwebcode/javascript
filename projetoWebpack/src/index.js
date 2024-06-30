// import { nome as nomeImport, sobrenome, idade, soma, Pessoa } from './moduleOne';
// import * as ModuloUm from './moduleOne';

import GeraCPF from './modules/GeraCPF';
import FormGeraSenha from './modules/formGeraSenha';

import './assets/css/style.css';

(function(){
    const gera = new GeraCPF();
    
    const cpfGeradoDiv = document.querySelector('.cpf-gerado');
    cpfGeradoDiv.innerHTML = gera.geraNovoCPF();
})();

FormGeraSenha();

/* const nome = 'berlipe';

console.log(nomeImport + ' ' +  sobrenome + '  ' + idade)
console.log(nome)
console.log(soma(10, 8))

const pessoaUm = new Pessoa('mar', 'bar')
console.log(pessoaUm) */
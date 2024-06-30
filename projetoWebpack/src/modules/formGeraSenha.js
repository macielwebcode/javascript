import GeraSenha from './geradores';

const senhaGerada = document.querySelector('.resultSenhaGerada');
const qntdecaracteres = document.querySelector('.qntdeC');
const ChkCUppercase = document.querySelector('.ChkCUppercase');
const ChkLowecase = document.querySelector('.ChkLowecase');
const ChkNumber = document.querySelector('.ChkNumber');
const ChkSymbol = document.querySelector('.ChkSymbol');
const btnGerarSenha = document.querySelector('.btnGerarSenha');

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera(){
    const senha = GeraSenha(
        qntdecaracteres.value,
        ChkCUppercase.checked,
        ChkLowecase.checked,
        ChkNumber.checked,
        ChkSymbol.checked
    );
    
    return senha || 'Nada Selecionado';
}
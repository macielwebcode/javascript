const h1 = document.querySelector('.container h1');

const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
};

//h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes); isso não funcionou
const dataFormatada = (new Date()).toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "short" });
// console.log(teste);

h1.innerHTML = dataFormatada;
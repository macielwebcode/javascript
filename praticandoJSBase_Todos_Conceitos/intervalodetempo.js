function showHora(){
    let data =  new Date();

    return data.toLocaleDateString('pt-BR', {
        tour12: false
    });
}

function setIntervaloShowHora(){
    console.log(showHora());
}

setInterval(setIntervaloShowHora, 1000);

// abaixo, realizando com arrow function função 
setInterval(() => {
    console.log(showHora());
}, 10000);


// abaixo com função anônima
const timer = setInterval(function(){
    console.log(showHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);

//exibindo algo na tela depois de um determinado intervalo de tempo
setTimeout(() => {
    console.log('mensagem após 5segundos');
}, 5000);
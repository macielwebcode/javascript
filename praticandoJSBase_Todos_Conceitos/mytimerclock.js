const clock = document.querySelector('.paragrafo__timer');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnClear = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
        timeStyle: "medium",
    });
}

function beginClock(){
    timer = setInterval(() => {
        segundos++;
        clock.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

// ABAIXO, UMA FORMA REFATORADA E PERFORMATICA DE PEGAR O CLICK 
// DE MAIS DE UM BOTÃO, SEM ATRIBUIR UM LISTENER PRA CADA
document.addEventListener('click', function(e){
    console.log(e.target); //verificar qual elemento está sendo clicado

    const elemento = e.target;

    if(elemento.classList.contains('iniciar')){
        console.log('clicou em iniciar');

        clock.classList.remove('pausaclock');
        clearInterval(timer);
        beginClock();   
    }

    if(elemento.classList.contains('pausar')){
        clearInterval(timer);
        clock.classList.add('pausaclock');
    }

    if(elemento.classList.contains('zerar')){
        clearInterval(timer);
        clock.innerHTML= '00:00:00'; 
        clock.classList.remove('pausaclock');
        segundos = 0;
    }
});

// btnIniciar.addEventListener('click', function(event){
//     clock.classList.remove('pausaclock');
//     clearInterval(timer);
//     beginClock();
// });

// btnPausar.addEventListener('click', function(event){
//     clearInterval(timer);
//     clock.classList.add('pausaclock');
// });

// btnClear.addEventListener('click', function(event){
//    clearInterval(timer);
//    clock.innerHTML= '00:00:00'; 
//    segundos = 0;
// });
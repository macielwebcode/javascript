function* geradoraUm(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const geradora1 = geradoraUm();
console.log(geradora1.next().value);
console.log(geradora1.next().value);
console.log(geradora1.next().value);
console.log(geradora1.next());
console.log(geradora1.next());


for(let valor of geradora1){
    console.log(valor)
}

function* geradorDois(){ //exemplo de geradora infinito, pois o while é true infinito
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const geradoradois = geradorDois();
console.log(geradorDois.next().value);



//gerador que delega tarefa para outro gerador

function* geradoraTres(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradoraQuatro(){
    yield* geradoraTres();
    yield 3;
    yield 4;
    yield 5;
}

const geradora4 = geradoraQuatro();
for(let valor of geradora4){
    console.log(valor)
}
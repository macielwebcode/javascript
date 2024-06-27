function numRandomico(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min);
}


function esperarAlgo(msg, tempo){

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string'){
            reject(false);
            return;
        } 
        

        setTimeout(() => {
            //console.log(msg)
            resolve(msg);
            return;
        }, tempo);
    })
}


// Promise.all Promise.race Prose.resolve Promise.reject

//Promise.all tenta resolver todas as promises
const promises = [
    esperarAlgo('Promise Um', rand(1, 5)),
    esperarAlgo('Promise Um', rand(1, 5)),
    esperarAlgo('Promise Um', rand(1, 5)),
    // esperarAlgo(10, 1000), // testando se para no reject e rejeita todas as Promises
]

/* Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(error){
        console.log(error)
    }) */

// retorna a primeira promise que conseguir resolver
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(error){
        console.log(error)
    })


// Promise.resolve e Promise.reject


function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache'); // troca para reject para testar cair no catch, com resolve cai no then
    }else{
        return esperarAlgo('Baixada apágina', 2000)
    }
}

baixaPagina()
    .then(dadosDaPagina => {
        console.log(dadosDaPagina)
    })
    .catch(e =>{
        console.log('erro', e)
    })
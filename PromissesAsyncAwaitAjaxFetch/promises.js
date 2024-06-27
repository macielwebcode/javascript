function numRandomico(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min);
}

function esperarAlgo(msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo);
}


esperarAlgo('frase dois', numRandomico(1, 3));
esperarAlgo('frase três', numRandomico(1, 3));

// como resolver a ordem de execução com Promise (abaixo)

function esperarAlgo(msg, tempo){

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('valor errado no tipo de dado');

        setTimeout(() => {
            //console.log(msg)
            resolve(msg);
        }, tempo);
    })
}

esperarAlgo('Conexão com BD sendo simulada', numRandomico(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperarAlgo('Buscado dados da BASE', rand(1, 3))
    }).then(resposta => {
        console.log(resposta)
        return esperarAlgo('frase tres', rand(1, 3)) // testar aqui passar numero no lugar da string, pra cair no reject
    }).then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Exibindo dados na tela')
    })
    .catch(e => {
        console.log('erro', e)
    });
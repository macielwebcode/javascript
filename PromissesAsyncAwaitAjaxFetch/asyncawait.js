function numRandomico(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) - min);
}

function esperarAlgo(msg, tempo){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('valor errado no tipo de dado');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passou na PROMISE');
            return;
        }, tempo);
    });
}

async function executa(){
    try {

        const faseUm = await esperarAlgo('fase um', rand());
        console.timeLog(faseUm);

        const faseDois = await esperarAlgo(10, rand()); //colocar um numero no parametro um pra ver erro
        console.log(faseDois);

        const faseTres = await esperarAlgo('fase tres', rand());
        console.log('termina na fase três', faseTres);
        
        
    } catch (error) {
        console.log('erro no executa', error)
    }
   
}
executa();
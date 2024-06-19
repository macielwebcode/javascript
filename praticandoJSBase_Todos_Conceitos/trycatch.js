function testarFnc(num1, num2){
    if(typeof num1 !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros');
    }
    return num1 + num2;
}

try {
    testarFnc(1, 2);
    testarFnc('1', 4);
} catch (error) {
    console.log(error);
} finally{
    console.log('sempre é executado');
}

function retornaHora(data){
    if(data && !(data instanceof Data)){
        throw new TypeError('esperando instancia de date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleString("pt-BR", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

}

try {
    const dadateste = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(dadateste);
    console.log(hora);
} catch (error) {
    console.log(error);
}finally{
    console.log('tenha um bom dia');
}

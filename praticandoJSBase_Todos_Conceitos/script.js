const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const peso = e.target.querySelector('#peso');
    const altura = e.target.querySelector('#altura');

    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);

    if(!peso){
        setResult('Peso Inválido');
        return;
    }

    if(!altura){
        setResult('Altura Inválido');
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = nivelIMC(imc);

    const msg = `seu imc ${imc} ${nivelIMC}`;

    setResult(msg, true);

});

function setResult(mensagem, isValid){
    const resultado = document.querySelector('.resultadoCalculo');
    resultado.innerHTML = '';
    const p = createParagrafo();

    if(isValid){
        p.classList.add('paragrafoValido');
    }else{
         p.classList.add('warningIMC');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

function createParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function nivelIMC(imc){
    const nivel = ['abaixo', 'normal', 'sobrepeso', 'grau 1 obes', 'grau 2 obes', 'grau 3 obes'];

    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc >= 18.5) return nivel[0]
    
}
const rand = (max, min) => {
    Math.floor(Math.random() * (max - min) + min);
}

// para fazer os intervalos passados no rand, olhar tabela ASCII

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;:~[]{}"!@#$%¨&*()+-*/<>';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qntdeCaracteres, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qntdeCaracteres = Number(qntdeCaracteres);

    console.log(qntdeCaracteres)

    for(let i = 0; i <= qntdeCaracteres; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }


    return senhaArray.join('').slice(0, qntdeCaracteres);
    
}


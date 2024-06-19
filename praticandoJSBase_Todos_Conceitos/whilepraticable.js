function random(min, max){
    const r = Math.random() * (max - min) + min;
    return r;
}

const min = 1;
const max = 50;
let rand = random(min, max);

// while checa a condição enquanto ela for verdadeira

while(rand !== 10){
    rand = random(min, max);
}


// abaixo, utilizando do while

do{
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
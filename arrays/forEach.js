// uma forma de iterar sob array

const aumigos = ['babi', 'max', 'juve', 'taylor'];

for(let valor of aumigos){
    console.log(valor);
}

aumigos.forEach(valor => console.log(valor))

let total = 0;
//simulando reduce
aumigos.forEach(valor => {
    total += valor;
});
console.log(total);
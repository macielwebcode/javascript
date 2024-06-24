const pessoas = [
    { id: 4, nome: 'barcela'},
    { id: 3, nome: 'babi'},
    { id: 1, nome: 'berlipe'},
    { id: 0, nome: 'henryck'}
]

/* const novasPessoas = {};
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }
} */

const novasPessoasMap = new Map{};
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoasMap.set(id, {...pessoa})
}

for(const pessoas of novasPessoasMap.values()){
    console.log(pessoas)
}

console.log(novasPessoasMap.get(2))
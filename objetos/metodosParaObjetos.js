/*
    Object.values
    Object.entries
    Object.assing(des, any) serve para copiar o objeto
    Object.getOwnPropertyDescriptor(', 'prop)
    ...(spred)

    Object.keys (retorna as chaves)
    Object.freeze (confela o objeto)
    Object.defineProperties (define várias propriedades)
    Object.defineProperty (define uma propriedade)

*/

//como copiar um objeto para outro objeto (usar spread operator mas tbm pode usar assign)

const produto = { nome: 'ooi', preco: 1.8 }
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto))
console.log(Object.entries(produto))

for(let entry of Object.entries(produto)){
    console.log(entry)
}
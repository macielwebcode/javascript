
const posts = ['post um', 'post dois', 'post tres'];

posts.push('novo artigo'); //adiciona no fim do array

posts.unshift('artigo principal'); // adiciona na primeira posição, no começo

const removido = posts.pop(); //remove item da última posição

const remove = posts.shift(); //remove da primeira posição

console.log(posts.slice(0, 3)); //pegando elementos do array e pode usar negativo como: 0, -2

console.log(typeof posts);
console.log(posts instanceof Array);
const elementos = [
    {tag: 'p', texto: 'Frase Um'},
    {tag: 'div', texto: 'Frase Dois'},
    {tag: 'footer', texto: 'Frase Três'},
    {tag: 'section', texto: 'Frase Quatro'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i]; //desestruturação
    let htmlElement = document.createElement(tag);
    htmlElement.innerHTML = texto; //ou pode usar htmlElement.innerText

    // utilizando TextNode
    //     let textoCreate = document.createTextNode(texto);
    //     htmlElement.appendChild(textoCreate);

    div.append(htmlElement);
}

container.appendChild(div);
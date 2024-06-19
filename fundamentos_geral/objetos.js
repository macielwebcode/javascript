
//função factory, pois cria objeto "fábrica de objeto"
function  createDocument(titulo, shortD, content) {
    return{
        titulo: titulo,
        short_description: shortD,
        content_complete: content,

        doc(){
            console.log(`${this.titulo} está criado`)
        }
    }; 
};

const documentOne = createDocument('Escopo', 'o escopo do projeto', 'texto imenso aqui');
documentOne.doc();

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){

    try {
         const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('erro no response status');
        const html = await response.text();
        carregaResultado(html) 
    } catch (error) {
        console.log('erro no catch', error)
    }

   
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultRequest');
    resultado.innerHTML = response;
}


// uma forma mais simples de fazer
// fetch('pagina1.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('erro 404')
//             return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e))
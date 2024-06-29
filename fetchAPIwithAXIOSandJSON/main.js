/* fetch('pessoa.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosPagina(json)) */

axios('pessoas.json')
    .then(resposta => carregaElementosPagina(resposta.data))


function carregaElementosPagina(json){
    const table = document.createElement('table')

    for(let item of json){
        const tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerHTML = item.nome
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = item.time
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = item.cidade
        tr.appendChild(td3)

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultRequest');
    resultado.appendChild(table);
}
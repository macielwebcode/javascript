function objScoped(){
    const form = document.querySelector('.form');
    const divresultado = document.querySelector('.resultado');

    const pessoas = [];

    /*form.onsubmit = function(event){
        event.preventDefault();
    }*/

    function sendForm(event){
        event.preventDefault();

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        divresultado.innerHTML += `<p>${nome.value}</p> <br /> 
            <p>${sobrenome.value}</p><br /> 
            <p>${peso.value}</p>
            <p>${altura.value}</p>
        
        `;
    };

    form.addEventListener('submit', sendForm);
}

objScoped();
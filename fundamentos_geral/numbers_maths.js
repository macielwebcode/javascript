const numero = Number(prompt('digite um número: '));


const span = document.getElementById('numTitle');
const div = document.getElementById('texto');

span.innerHTML = numero;

div.innerHTML = '';
div.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
div.innerHTML = `<p>Número é inteiro quadrada: ${Number.isInteger(numero)}</p>`;
div.innerHTML = `<p>Arredonda para baixo: ${Math.floor(numero)}</p>`;
div.innerHTML = `<p>Arredonda para cima: ${Math.ceil(numero)}</p>`;
div.innerHTML = `<p>Número é NaN: ${Number.isNaN(numero)}</p>`;
div.innerHTML = `<p>Com duas cadas decimais: ${numero.toFixed(2)}</p>`;
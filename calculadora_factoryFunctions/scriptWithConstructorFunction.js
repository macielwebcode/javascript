function Calculadora(){

    this.display = document.querySelector('.displaycalculadora');

    this.capturaClique = () => {
        document.addEventListener('click', evento => {
            const el = evento.target; //botão pressionado

            if(el.classList.contains('btn-num')) this.addNumberAtDisplay(el);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-delete')) this.deleteNumberAtDisplay();
            if(el.classList.contains('btn-equal')) this.showResultAtDisplay();
            
        })
    };

    this.addNumberAtDisplay = el => {
        this.display.value += el.innerText
        this.display.focus();
    };
    this.clearDisplay = () => this.display.value = '';

    this.deleteNumberAtDisplay = () => this.display.value =  this.display.value.slice(0, -1);

    this.showResultAtDisplay = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('conta inválida')
                return
            }

            this.display.value = conta;

        } catch (error) {
            alert('conta inválida')
        }
    }

    this.capturaTeclaEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.key === 'Enter') return;
            this.showResultAtDisplay();
        });
    }
 
    this.inicia = () => {
        this.capturaClique();
        this.capturaTeclaEnter();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
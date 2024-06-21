function createCalculadora(){

    return{

        display: document.querySelector('.displaycalculadora'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.clickBtns();
            this.pressionaTeclaEnter();
            
        },

        clickBtns(){
            //o método abaixo usa bind pois function anônima muda o comportamento do this
            // e antes da linha que aplica listener click, o this era a calculadora
            // só que depois ele passa a ser o function anônima
            // document.addEventListener('click', function(e){
            //     const elemento = e.target;

            //     if(elemento.classList.contains('btn-num')){
            //         this.btnParaDisplay(elemento.innerText);
            //     }
            // }.bind(this)); 

            document.addEventListener('click', (elemento) =>{
                const el = elemento.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.limparDisplayText();
                }

                if(el.classList.contains('btn-delete')){
                    this.deleteUm();
                }

                if(el.classList.contains('btn-equal')){
                    this.toDoOperation();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        },

        limparDisplayText(){
            this.display.value = '';
        },

        deleteUm(){
            this.display.value = this.display.value.slice(0 , -1); //slice pq pega tamanho da string e subtrai o ultimo, apagando 1 por um
        },

        toDoOperation(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('conta inválida')
                    return;
                }
                this.display.value = conta;
            } catch (error) {
                alert('conta inválida')
                return;
            }
        },

        pressionaTeclaEnter(){
            this.display.addEventListener('keyup', (elemento) => {
                if(elemento.keyCode === 13){
                    this.toDoOperation();
                }
            })
        }

        
    };

}

const calculadora = createCalculadora();
calculadora.inicia();
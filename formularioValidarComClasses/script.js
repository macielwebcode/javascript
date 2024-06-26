class ValidarFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
           this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.isValidFields();
        const senhas = this.isPassValids();


        if(camposValidos && senhas){
            alert('formulário enviado')
            this.formulario.submit()
        }
    }

    isPassValids(){
        let valid = true;

        const senha = this.formulario.querySelector('.passClass');
        const repetirSenha = this.formulario.querySelector('.passrepeatClass');

        if(senha.value  !== repetirSenha.value){
            valid = false;
            this.createError(senha, 'Campo senha e repetir senha precisam ser iguais');
            this.createError(repetirSenha, 'Campo senha e repetir senha precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.createError(senha, 'senha precisa estar entre 6 e 12 caracteres')
        }

        return valid;
    }

    isValidFields(){
        let valid = true;

        for(let errortexto of this.formulario.querySelectorAll('.error-field-text')){
            errortexto.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            console.log(campo); // ver se pegou todos os campos do form
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.createError(campo, `O campo ${label} não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpfClass')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usernameClass')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo){
        const user = campo.value;
        let valid = true;

        if(user.length < 3 || user.length > 12){
            this.createError(campo, 'nome de usuário inválido. precisa ter 3 e 12 caracteres');
            valid = false;
        }

         if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'nome de usuário precisa conter apenas letras e/ou números');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        
        if(!cpf.valida()){
            this.createError(campo, 'CPF INVÁLIDO')
        }
        return true;
    }

    createError(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-field-text');
        campo.insertAdjacentElement('afterend', div);

    }
}

const valida = new ValidarFormulario();
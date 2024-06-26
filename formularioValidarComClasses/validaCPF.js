class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequence(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digitoUm = ValidaCPF.geraDigito(cpfSemDigitos)
        const digitoDois = ValidaCPF.geraDigito(cpfSemDigitos + digitoUm)
        this.novoCpf = cpfSemDigitos + digitoUm + digitoDois;
    }

    // se tornou static pois não usa atributo da instância, n tem um this.algumaCoisa
    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 0 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== '') return false;

        if(this.isSequence()) return false;
        this.geraNovoCpf();

        console.log(this.novoCpf)

        return this.novoCpf ===  this.cpfLimpo;
    }
}

// const validaCPF = new ValidaCPF('397.028.718-45')

// if(validaCPF.valida()){
//     console.log('cpf valido')
// }else{
//     console.log('cpf invalido')
// }
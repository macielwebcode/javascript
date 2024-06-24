
//tirando caracteres do cpf
let cpfLimpo = '397.029.718-45'.replace(/\D+/g, '')
// convertendo para array
cpfArray = Array.from(cpfLimpo)
cpfArray.reduce((acumulador, valor) => acumulador + Number(valor), 0)
console.log(cpfLimpo)


function ValidaCPF(cpfEnviado){

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== '') return false;
    if(this.isSequenciaNumerica()) return false;

    const cpfParcialResult = this.cpfLimpo.slice(0, -2);
    const digitoUm = this.criaDigito(cpfParcialResult)
    const digitoDois = this.criaDigito(cpfParcialResult + digitoUm)

    const novoCPF = cpfParcial + digitoUm + digitoDois;
    
    return novoCPF === this.cpfLimpo;
}

ValidaCPF.prototype.isSequenciaNumerica = function(){ // valida se colocar 111.111.111-11
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    

    const total = cpfArray.reduce((acumulador, valor) => {
        
        acumulador += (regressivo * Number(valor));
        regressivo--;
        return acumulador;

    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
}

const cpf = new ValidaCPF('397.029.718-45');

if(cpf.valida()){
    console.log('cpf valido')
}else{
    console.log('cpf invalido')
}
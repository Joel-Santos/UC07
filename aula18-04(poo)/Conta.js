class Conta{
    titular;
    saldo;
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        //restrição valor maior que 0 e tipo de dado númerico
        if(valor>0 && typeof valor == 'number'){
           this.saldo+=valor; 
        }else{
           console.log('Valor inválido'); 
        }
    }
    sacar(valor){
        if(valor>0 && typeof valor == 'number' && valor<=this.saldo){
            this.saldo-=valor;
        }else{
            console.log('Valor inválido para o saque.');
        }    
    }
    getSaldo(){
        return this.saldo;
    }   
}
module.exports = Conta;
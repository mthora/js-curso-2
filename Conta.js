export class Conta{
    constructor(saldoInicial, cliente, agencia){

        if (this.constructor == Conta){
            throw new Error("Essa classe é abstrata.")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        throw new Error("O método abstrato 'sacar' não foi definido.");
    }

    _sacar(valor, taxa){
        if(this._saldo >= valor){
            this._saldo -= valor * taxa;
            return valor;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
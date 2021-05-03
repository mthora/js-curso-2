export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
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
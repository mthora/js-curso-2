import {Conta} from "./Conta.js"

export class ContaSalario extends Conta {
    constructor(saldoIncial, cliente, agencia){
        super(saldoIncial, cliente, agencia);
    }

    sacar(valor){
        let taxa = 1.02;
        this._sacar(valor, taxa);
    }

}
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Matheus", 45031321806);

const conta1 = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(5000, cliente1, 1001);

conta1.depositar(5000);
conta1.sacar(1000);
contaPoupanca.sacar(1000)

console.log(conta1);
console.log(contaPoupanca);

console.log(ContaCorrente.numeroDeContas);
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Matheus", 45031321806);
const cliente2 = new Cliente("Alice", 47893784005);


const conta1= new ContaCorrente(1001, cliente1);

console.log(`Saldo conta 1: ${conta1.saldo}`);

conta1.depositar(5000);

console.log(`Saldo conta 1 após depósito: ${conta1.saldo}`);

conta1.sacar(1000);

console.log(`Saldo conta 1 após saque: ${conta1.saldo}`);

const conta2 = new ContaCorrente(102, cliente2);
console.log(`Saldo conta 2: ${conta2.saldo}`);

let valor = 2000;
conta1.transferir(valor, conta2);

console.log(`Saldo conta 1 após transferência: ${conta1.saldo}`);
console.log(`Saldo conta 2 após transferência: ${conta2.saldo}`);

conta2.sacar(300);

console.log(`Saldo conta 2 após saque: ${conta2.saldo}`);

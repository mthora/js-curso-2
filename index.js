import {Cliente} from "./Cliente.js";
import{Auth} from "./Auth.js"
import {Gerente} from "./Funcionario/Gerente.js"; 
import {Diretor} from "./Funcionario/Diretor.js";

const diretor = new Diretor("Rodrigo", 12000, 31245678903);
/* const gerente = new Gerente("Joel", 5000, 12345612309);*/
const cliente = new Cliente("João", 90898956780, "1029");
diretor.cadastrarSenha("1029");

console.log(Auth.login(diretor, "1029"));
console.log(Auth.login(cliente, "1029"))
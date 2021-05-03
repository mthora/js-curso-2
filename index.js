import {Cliente} from "./Cliente.js";
import{Auth} from "./Auth.js"
import {Gerente} from "./Funcionario/Gerente.js"; 
import {Diretor} from "./Funcionario/Diretor.js";

const diretor = new Diretor("Rodrigo", 12000, 31245678903);
const gerente = new Gerente("Joel", 5000, 12345612309);

diretor.cadastrarSenha("1234");
gerente.cadastrarSenha("5678");

console.log(Auth.login(diretor, "123"));

console.log(diretor);
console.log(gerente);

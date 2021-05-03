export class Auth{
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }
}
export default class Pessoa {
    name:string;
    idade:number;
    cpf: number;
    celular:number;
    constructor(name:string, idade:number, cpf:number, celular:number) {
        this.name = name;
        this.idade = idade;
        this.cpf = cpf;
        this.celular = celular;
    }
}

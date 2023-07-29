export class Pessoa{
    constructor(_codigo, _nome, _altura, _peso, _data, _convenio){
        this.codigo = _codigo;
        this.nome = _nome;
        this.altura = _altura;
        this.peso = _peso;
        this.data = _data;
        this.convenio = _convenio;
    }

    toString(){
        return "Codigo: " + this.codigo + "\nNome: " + this.nome + "\nAltura: " + this.altura + "\nPeso: " + this.peso + "\nData de nacimento: " + this.data + "\nConvenio: " + this.convenio + "\n\n";
    }


}

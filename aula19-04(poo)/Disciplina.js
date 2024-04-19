class Disciplina{
    nome;
    codigo;
    ch;
    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch = ch;
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getCodigo(){
        return this.codigo;
    }
    setCH(ch){
        this.ch = ch;
    }
    getCH(){
        return this.ch;
    }
}
module.exports = Disciplina;
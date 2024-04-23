class Disciplina{
    nome;
    codigo;
    ch;
    nota;
    constructor(nome, codigo, ch){
        this.nome = nome;
        this.codigo = codigo;
        this.ch = ch;
        this.nota = [];
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
    setNota(nota){
        this.nota.push(nota)
    }
    getNota(){
        return this.nota;
    }
    situacaoDisciplina(){
       let media = 0;
       for(let i=0; i<this.nota.length; i++){
            media+=this.nota[i];
       }
       media = media/this.nota.length;
       
        if(media>=6){
            return `(${this.nome}) Média: ${media} - Aprovado.`;
        }else{
            return `(${this.nome}) Média: ${media} - Reprovado.`;
        }
    }

}
module.exports = Disciplina;
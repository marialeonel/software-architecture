class Turma {
    constructor(codigo, nota) {
      this._codigo = codigo;
      this._nota = nota;
      this.alunos = [];
    }
  
    get codigo() {
      return this._codigo;
    }
  
    set codigo(value) {
      this._codigo = value;
    }
  
    get nota() {
      return this._nota;
    }
  
    set nota(value) {
      this._nota = value;
    }
  
    aprovado() {
      if(this._nota > 6)
        return true;
      
      return false;
    }
  }
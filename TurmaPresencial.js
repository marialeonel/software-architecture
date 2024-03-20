class TurmaPresencial extends Turma {
    constructor(codigo, frequencia) {
      super( codigo);
      this._frequencia = frequencia;
    }

    get frequencia(){
      return this._frequencia;
    }

    set frequencia(value){
      this._frequencia = value;
    }
  
    aprovado() {
      return super.aprovado && this._frequencia >= 75;
    }
  }
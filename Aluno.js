class Aluno {
    constructor(nome, login, ra) {
      this.nome = nome;
      this.login = login;
      this.ra = ra;
    }
  
    get nome() {
      return this._nome;
    }
   
    set nome(value) {
      this._nome = value;
    }
  
    get login() {
      return this._login;
    }
  
    set login(value) {
      this._login = value;
    }
  
    get ra() {
      return this._ra;
    }
  
    set ra(value) {
      this._ra = value;
    }
  }
  
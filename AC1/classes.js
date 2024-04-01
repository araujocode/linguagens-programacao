export class Usuario {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
        this._livrosEmprestados = [];
    }

    get id() {
        return this._id;
    }

    inserirLivroEmprestado(livro) {
        this._livrosEmprestados.push(livro);
    }

    removerLivroEmprestadoByCodigo(codigo) {
        this._livrosEmprestados = this._livrosEmprestados.filter(livro => livro.codigo !== codigo);
    }

    getLivroEmprestado(codigo) {
        return this._livrosEmprestados.find(livro => livro.codigo === codigo);
    }

    imprimir() {
        return `ID: ${this._id}, Nome: ${this._nome}`;
    }

    imprimirCompleto() {
        let entrada = this.imprimir();
        if (this._livrosEmprestados.length > 0) {
            entrada += "\nLivros Emprestados:";
            
            this._livrosEmprestados.forEach(livro => {
                entrada += `\n${livro.imprimir()}`;
            });
        }
        return entrada;
    }
}

export class Livro {
    constructor(codigo, titulo, autor) {
        this._codigo = codigo;
        this._titulo = titulo;
        this._autor = autor;
    }

    get codigo() {
        return this._codigo;
    }

    imprimir() {
        return `Código: ${this._codigo}, Título: ${this._titulo}, Autor: ${this._autor}`;
    }
}
class Pessoa {
    #codigo;
    #nome;
    #automoveis;

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#automoveis = [];
    }

    get codigo() {
        return this.#codigo;
    }

    inserirAutomovel(automovel) {
        this.#automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo) {
        let  index = this.#automoveis.findIndex((obj => obj.codigo == codigo));
        if (index !== -1) {
            this.#automoveis.splice(index, 1);
        }
    }
    // Forma alternativa de fazer o método removerAutomovelByCod 
    /*    for (let i = 0; i < this.#automoveis.length; i++) {
            if (this.#automoveis[i].codigo === codigo) {
                this.#automoveis.splice(i, 1);
                break;
            }
        }
    } */
    

    getAutomovel(codigo) {
        return this.#automoveis.find(auto => auto.codigo === codigo);
    }

    imprimir() {
        return `Código Pessoa: ${this.#codigo}, Nome: ${this.#nome}`;
    }

    imprimirCompleto() {
        let result = this.imprimir();
        result += "\nAutomóveis:";
        for (const auto of this.#automoveis) {
            result += `\n${auto.imprimir()}`;
        }
        return result;
    }
}

class Automovel {
    #codigo;
    #marca;
    #modelo;

    constructor(codigo, marca, modelo) {
        this.#codigo = codigo;
        this.#marca = marca;
        this.#modelo = modelo;
    }

    get codigo() {
        return this.#codigo;
    }

    imprimir() {
        return `Código Automóvel: ${this.#codigo}, Marca: ${this.#marca}, Modelo: ${this.#modelo}`;
    }
}

class Main {
    #pessoas;

    constructor() {
        this.#pessoas = [];
    }

    addPessoa(pessoa) {
        this.#pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {
        const pessoa = this.#pessoas.find(p => p.codigo === codPessoa);
        if (pessoa) {
            const automovel = new Automovel(codAuto, marca, modelo);
            pessoa.inserirAutomovel(automovel);
        }
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        const pessoaOrigem = this.#pessoas.find(p => p.codigo === codPessoaOrigem);
        const pessoaDestino = this.#pessoas.find(p => p.codigo === codPessoaDestino);

        if (!pessoaOrigem) {
            console.log("Pessoa de origem não encontrada.");
            return;
        }

        if (!pessoaDestino) {
            console.log("Pessoa de destino não encontrada.");
            return;
        }

        const automovel = pessoaOrigem.getAutomovel(codAutomovel);
        if (!automovel) {
            console.log("Automóvel não encontrado na pessoa de origem.");
            return;
        }

        pessoaOrigem.removerAutomovelByCod(codAutomovel);
        pessoaDestino.inserirAutomovel(automovel);
    }

    mostrarTodasAsPessoas() {
        console.log("PESSOAS:");
        console.log("===========================================");
        for (const pessoa of this.#pessoas) {
            console.log(pessoa.imprimirCompleto());
            console.log("===========================================");
        }
    }
}

class Cliente {
    #nome;
    #idade;

    constructor(_nome, _idade) { //js inicializa um construtor sozinho caso eu não crie
        this.#nome = _nome;
        this.#idade = _idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    set idade(idade) {
        this.#idade;
    }

    print() {
        console.log(`${this.nome}, ${this.idade}`);
    }
}

/*
const cliente = new Cliente("Bruno", 25);
console.log(cliente.nome);
console.log(cliente.idade);
*/

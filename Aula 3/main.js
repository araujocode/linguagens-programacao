
/* class Animal {
    constructor(_nome, _idade, _raca) { //js inicializa um construtor sozinho caso eu não crie
        this.nome = _nome;
        this.idade = _idade;
        this.raca = _raca
    }

    print() {
        console.log(`Nome: ${this.nome}, Idade:${this.idade}, ${this.raca}`);
    }
}

const animal = new Animal("Max", 2, "Labrador");
animal.print();

*/

let lstClientes = [];
lstClientes.push(new Cliente("Cliente 1", 20));
lstClientes.push(new Cliente("Cliente 2", 30));
lstClientes.push(new Cliente("Cliente 3", 40));
lstClientes.push(new Cliente("Cliente 4", 50));

function MostrarClientes() {
    for (let item of lstClientes) {
        item.print();
    }
}

MostrarClientes();
import { Usuario } from './classes.js';
import { Livro } from './classes.js';

class Main {
    constructor() {
        this.usuarios = [];
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    addLivroUsuario(idUsuario, codigoLivro, titulo, autor) {
        const usuario = this.usuarios.find(user => user.id === idUsuario);
        if (usuario) {
            const livro = new Livro(codigoLivro, titulo, autor);
            usuario.inserirLivroEmprestado(livro);
        } else {
            console.log("Usuário não encontrado");
        }
    }

    transferirLivro(idUsuarioOrigem, idUsuarioDestino, codigoLivro) {
        const usuarioOrigem = this.usuarios.find(user => user.id === idUsuarioOrigem);
        const usuarioDestino = this.usuarios.find(user => user.id === idUsuarioDestino);
        if (usuarioOrigem && usuarioDestino) {
            const livroTransferido = usuarioOrigem.getLivroEmprestado(codigoLivro);
            if (livroTransferido) {
                usuarioOrigem.removerLivroEmprestadoByCodigo(codigoLivro);
                usuarioDestino.inserirLivroEmprestado(livroTransferido);
            } else {
                console.log("Livro não encontrado com este usuário.");
            }
        } else {
            console.log("Usuário de origem ou destino não encontrado.");
        }
    }

    mostrarTodosOsUsuarios() {
        this.usuarios.forEach(usuario => {
            console.log(usuario.imprimirCompleto());
        });
    }
}

const main = new Main();

const usuario1 = new Usuario(1, "João");
const usuario2 = new Usuario(2, "Maria");

main.addUsuario(usuario1);
main.addUsuario(usuario2);

main.addLivroUsuario(1, 101, "Dom Quixote", "Miguel de Cervantes");
main.addLivroUsuario(2, 201, "1984", "George Orwell");

main.mostrarTodosOsUsuarios();

main.transferirLivro(2, 1, 201);

console.log("Após transferência:");
main.mostrarTodosOsUsuarios();

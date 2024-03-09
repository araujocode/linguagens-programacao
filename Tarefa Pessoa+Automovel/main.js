const main = new Main();
main.addPessoa(new Pessoa(1, "João"));
main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");
main.mostrarTodasAsPessoas();
main.addPessoa(new Pessoa(2, "Maria"));
main.transfereAutomovel(1, 2, 1);
main.mostrarTodasAsPessoas();
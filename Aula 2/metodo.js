//Criando método dentro do objeto

let pessoa = {
    "nome": "Bruno",
    "ultimoNome": "Machado de Araujo",
    "idade": 25,
    "isActive": true,

    nomeCompleto: function() {
        return this.nome + " " + this.ultimoNome;
    }
}
console.log(pessoa.nomeCompleto());
let pessoa = {
    "nome": "Bruno",
    "idade": 25,
    "isActive": true,
}

//Acessando Propriedades do Objeto
console.log(pessoa.nome);
console.log(pessoa["nome"]); //forma alternativa - é mais usada quando temos palavras com espaço
console.log(pessoa.idade);

//Iterando com for in (passando por todas as propriedades dentro (in) do objeto)
for (prop in pessoa) {
    console.log(prop); //retorna o nome das propriedades, não os conteúdos
}

//Retornando o conteúdo das propriedades
for (prop in pessoa) {
    console.log(pessoa);
}

//Forma alternativa de retornar o conteúdo
for (prop in pessoa) {
    console.log(prop + " = " + pessoa[prop]);
}

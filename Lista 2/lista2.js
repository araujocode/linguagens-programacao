console.log("1 - Crie uma função anônima que receba nome e sobrenome e retorne o nome completo. Atribua essa função a uma variável. Chame essa variável passando 'Fábio', 'Columbini' e mostra o resultado no console.\n");
let nomeCompleto = function(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
};
console.log(nomeCompleto("Fábio", "Columbini"));

console.log("\n");

console.log("2 - Defina uma Arrow Function chamada calculaAreaRetangulo que recebe dois parâmetros, base e altura, e retorna a área do retângulo. Mostre o resultado no console");
let calculaAreaRetangulo = (base, altura) => base * altura;
console.log(calculaAreaRetangulo(5, 10));

console.log("\n");

console.log("3 - Dado o array numeros = [10, 20, 30, 40, 50], escreva uma função que receba um array e retorna a soma de todos os elementos desse array");
let somaNumeros = numeros => {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
};

const numeros1 = [10, 20, 30, 40, 50];
console.log(somaNumeros(numeros1));

console.log("\n");

console.log("4 - Dado o array numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], escreva uma função que receba um array e retorne um array de números ímpares");
let numerosImpares = numeros => {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i]);
        }
    }
    return impares;
};

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numerosImpares(numeros2));

console.log("\n");

console.log('5 - Crie um array chamado cidades = ["Sorocaba", "Piedade", "Votorantim"]. Em seguida, usando métodos de array, adicione uma nova cidade no início do array e remova a última cidade.');
const cidades = ["Sorocaba", "Piedade", "Votorantim"];
cidades.unshift("Porto Feliz");
cidades.pop();
console.log(cidades);

console.log("\n");

console.log("6 - Crie um objeto chamado aluno com as propriedades nome, idade, curso e matrícula. Adicione um método chamado mostrarInformacoes que exibe todas as informações do aluno.");
const aluno = {
    nome: "Bruno",
    idade: 20,
    curso: "ADS",
    matricula: "171470",
    mostrarInformacoes() {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
    }
};
aluno.mostrarInformacoes();


console.log("\n");

console.log("7 - Escreva uma função chamada encontraMaiorNumero que recebe um array de números como entrada e retorna o maior número encontrado no array.");
let encontraMaiorNumero = numeros => {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
};

console.log(encontraMaiorNumero([10, 20, 30, 40, 50]));

console.log("\n");

console.log("8 - Crie um objeto chamado produto com as propriedades nome, preço, quantidade e calcularTotal. O método calcularTotal deve retornar o preço total do produto (preço multiplicar pela quantidade");
const produto = {
    nome: "Lápis",
    preço: 1.5,
    quantidade: 10,
    calcularTotal() {
        return this.preço * this.quantidade;
    }
};
console.log(produto.calcularTotal());

console.log("\n");

console.log("9 - Dado o objeto endereço com propriedades como rua, numero, bairro e cidade. Faça um loop que mostre todas as propriedades e seus valores de forma genérica");
const endereco = {
    rua: "Alameda Brauna",
    numero: 235,
    bairro: "Parque São Bento",
    cidade: "Sorocaba"
};
for (let prop in endereco) {
    console.log(`${prop}: ${endereco[prop]}`);
}

console.log("\n");

console.log("10 - Escreva uma função chamada alunosMaior que recebe um array de objetos Alunos como entrada e retorna um novo array com apenas os alunos com idade acima de 18 anos");
const alunosMaior = alunos => {
    let resultado = [];
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].idade >= 18) {
            resultado.push(alunos[i]);
        }
    }
    return resultado;
};

const alunos = [
    { nome: "Lucas", idade: 20, curso: "ADS" },
    { nome: "Pedro", idade: 17, curso: "Engenharia Elétrica" },
    { nome: "Beatriz", idade: 25, curso: "Filosofia" },
    { nome: "Giovana", idade: 18, curso: "ADS" }
];

console.log(alunosMaior(alunos));
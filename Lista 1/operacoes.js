console.log("1 - Operações matemáticas básicas:");
let num1 = 10;
let num2 = 5;

// Soma
let soma = num1 + num2;
console.log("Soma:", soma);

// Subtração
let subtracao = num1 - num2;
console.log("Subtração:", subtracao);

// Multiplicação
let multiplicacao = num1 * num2;
console.log("Multiplicação:", multiplicacao);

// Divisão
let divisao = num1 / num2;
console.log("Divisão:", divisao);

console.log("\n2 - Números ímpares de 0 a 100:");
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

console.log("\n3 - Quantidade de caracteres em \"Disciplina de Programação para web\":");
let texto = "Disciplina de Programação para web";
let qtdCaracteres = texto.length;
console.log("Quantidade de caracteres:", qtdCaracteres); // Resultado: 34

console.log("\n4 - Extrair primeiro e último nome e gerar e-mail:");
function gerarEmail(nomeCompleto) {
    let nomes = nomeCompleto.split(" ");

    let primeiroNome = nomes[0].toLowerCase();
    let ultimoNome = nomes[nomes.length - 1].toLowerCase();

    let email = primeiroNome + "." + ultimoNome + "@facens.br";
    //forma alternativa: let email = `${primeiroNome}.${ultimoNome}@facens.br`;

    return email;
}
// Exemplo de uso
let nome = "Bruno Machado de Araujo";
let emailGerado = gerarEmail(nome);
console.log("E-mail gerado:", emailGerado);


console.log("\n5 - Escreva um programa que imprima os números de 1 a 10 no console usando na mesma linha usando Estrutura de repetição. Os números devem ser separados com um traço, ex.: 1-2-3... 10. Observação: após o número 10 não pode ter um traço:");

let resultado = "";

for (let i = 1; i <= 10; i++) {
    resultado += i;
    
    if (i < 10) {
        resultado += "-";
    }
}

console.log(resultado);



console.log("\n6 - Função para mostrar o dobro do número:");
function dobro(numero) {
    if (numero <= 0) {
        return "Só é aceito números positivos maiores que zero";
    } else {
        return numero * 2;
    }
}
// Exemplo de uso
let numero = 5;
let resposta = dobro(numero);
console.log(`Dobro de ${numero}: ${resposta}`);

numero = -2;
resposta = dobro(numero);
console.log(`Dobro de ${numero}: ${resposta}`);


console.log("\n7 - Função para inverter uma string:");
function inverterString(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}
// Exemplo de uso
let mensagem = "Olá, mundo!";
let mensagemInvertida = inverterString(mensagem);
console.log(`Mensagem original: ${mensagem}`);
console.log(`Mensagem invertida: ${mensagemInvertida}`);


console.log("\n8 - Função para contar vogais em uma string:");
function contarVogais(texto) {
    let numeroVogais = 0;
    const vogais = "aeiou";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (vogais.indexOf(letra) !== -1) {
            numeroVogais++;
        }
    }
    return numeroVogais;
}
// Exemplo de uso
let msg = "BrUno!".toLowerCase();
let numeroVogais = contarVogais(msg);
console.log(`Número de vogais em "${msg}": ${numeroVogais}`);


console.log("\n9 - Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'. :");

function validarEmail(email) {
    let contarSimbolo = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            contarSimbolo++;
        }
    }
    if (contarSimbolo !== 1) {
        return false;
    }

    let indexArroba = email.indexOf('@');
    let pontoDepoisDaArroba = email.indexOf('.', indexArroba);
    if (pontoDepoisDaArroba === -1 || pontoDepoisDaArroba <= indexArroba + 1) {
        return false;
    }

    return true;
}

// Exemplo de uso:
console.log(validarEmail("email@teste.com")); // true
console.log(validarEmail("email@teste")); // false
console.log(validarEmail("email@teste.")); // true
console.log(validarEmail("email@teste com")); // false

console.log("\n10 - Função para verificar se uma string é um palíndromo:");
function verificarPalindromo(str) {
    str = str.toLowerCase();

    let inicio = 0;
    let fim = str.length - 1;
    
    while (inicio < fim) {

        if (str[inicio] !== str[fim]) {
            return false;
        }

        inicio++;
        fim--;
    }

    return true;
}
// Exemplo de uso:
console.log(verificarPalindromo("reviver")); // true
console.log(verificarPalindromo("arara")); // true
console.log(verificarPalindromo("doce")); // false


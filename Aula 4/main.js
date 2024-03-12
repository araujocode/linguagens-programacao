/* let myArray = [10, 20, 18, 3, 55, 23, 11, 40];

let result = myArray.find(x => x > 18);
console.log(result) */

let myArray = [10, 20, 18, 3, 55, 23, 11, 40];

let result = myArray.find(myFunction18); //retorna apenas o primeiro elemento que satisfaz a condição da função de ser menor do que 18

// myArray.find(valor, indice, array) -> ele recebe esses tres parametros, mas nao precisa

function myFunction18(value) {
    return value > 18;
}

console.log(result);

//===============================================================

/* let strArray = ['Bruno', 'Lucas', 'Alberto'];
let resultName = strArray.find(hasLetterA);

function hasLetterA(name) {    
    return name.toLowerCase().includes('a');    
}

console.log(resultName); */

//======================================================================

let strArray = ['Bruno', 'Lucas', 'Alberto'];
let resultName = strArray.map(hasLetterA).join("-"); //o join transforma o array em string

function hasLetterA(name) {    
    return name + "_final";    
}

console.log(resultName);



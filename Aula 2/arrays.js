let myArray = ["Sorocaba", "Piedade", "Tatuí"];
let cidade = ["Sorocaba", 60345, true]; //tipos diferentes dentro do array

console.log(cidade[2]);

//Nested Array
let matriz = [["Fabio", 50], ["João", 18], ["Maria", 35]];
console.log(matriz[2][0]);

//Iterando com Array
for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//Iterando com for of
for (let item of myArray) {
    console.log(item);
}

//Editando Arrays
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi"); //adiciona no final
fruits.unshift("Lemon");// adiciona no começo
fruits.pop(); //remove o último elemento
console.log(fruits);

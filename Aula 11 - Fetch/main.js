function myDisplay(algumaCoisa) {
    console.log(algumaCoisa);
}

function myCalculator(num1, num2, teste) {
    let sum = num1 + num2;
    teste(sum);
}

function mostrarNoCelular(algumaCoisa) {
    document.getElementById("demo").innerHTML = algumaCoisa;

}

myCalculator(5, 5, myDisplay);
myCalculator(10, 10, mostrarNoCelular);
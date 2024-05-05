let fileName = "data.txt";

let myFetch = fetch(fileName);
console.log(myFetch);

fetch(fileName)
    .then(response => response.text())
    .then(data => console.log(data));


let fileJson= "data.json";

fetch(fileJson)
.then(response => response.json())
.then(data => console.log(data.nome));


let fileJson2= "data2.json";

fetch(fileJson2)
.then(response => response.json())
.then(data => console.log(data[2].nome));

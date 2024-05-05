const url = "https://66302733c92f351c03d923b6.mockapi.io/cliente/";

// fetch(url)
// .then(response => response.json())
// .then(data => document.querySelector('#cliente').innerHTML = data[0].name);

// function facaAlgo(data) {
//     data.forEach(cliente => {
//         console.log(`${cliente.name} - Age: ${cliente.age}`);
//     })
// }

// fetch(url)
// .then(response => response.json())
// .then(data => facaAlgo(data));

fetch("https://66302733c92f351c03d923b6.mockapi.io/cliente/", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Peter Parker',
        age: 25
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro customizado:', error));
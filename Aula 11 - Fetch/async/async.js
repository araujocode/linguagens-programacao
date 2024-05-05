setTimeout (myDisplay, 3000);

function myDisplay(algumaCoisa) {
    console.log("Passou 3s!");
}

setInterval(resetClock, 1000);

function resetClock() {
    let date = new Date();
    document.querySelector('#clock').innerHTML = 
    date.getHours()+ ":" +
    date.getMinutes() + ":" +
    date.getSeconds();
}

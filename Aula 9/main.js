let buttons = document.querySelectorAll('a', '.btn');
let minhaURL = window.location.href;

for (let button of buttons) {
    if (button.href === minhaURL ) {
        button.classList.add('active');
    }
}
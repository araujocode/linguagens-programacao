import { urlServer } from '../utils.js';

document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        document.getElementById('mensagem').innerHTML = 'Todos os campos são obrigatórios.';
        return;
    }

    let novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    console.log('Novo usuário:', novoUsuario);

    
    fetch(urlServer, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao cadastrar o usuário.');
        }
        
        window.location.href = '../login/login.html';
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('mensagem').innerHTML = 'Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.';
    });

    document.getElementById('formCadastro').reset();
});

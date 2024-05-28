function entrar() {
    
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email.trim() === '' || senha.trim() === '') {
        exibirMensagemErro('Por favor, preencha todos os campos.');
        return;
    }

    
    fetch(urlServer + '/usuario', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Ocorreu um erro ao buscar os usuários.');
        }
    })
    .then(usuarios => {
        
        const usuario = usuarios.find(user => user.email === email && user.senha === senha);
        if (usuario) {            
            window.location.href = 'home.html';
        } else {            
            exibirMensagemErro('Usuário ou senha inválidos.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        exibirMensagemErro('Ocorreu um erro ao autenticar o usuário.');
    });
}

function exibirMensagemErro(mensagem) {
    document.getElementById('mensagemErro').textContent = mensagem;
}

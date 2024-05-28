document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    
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

    
    document.getElementById('formCadastro').reset();
});

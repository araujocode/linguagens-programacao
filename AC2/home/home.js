function carregarNomeUsuario() {
    let nomeUsuario = localStorage.getItem('nomeUsuario');
    if (nomeUsuario) {
        document.getElementById('nomeUsuario').textContent = nomeUsuario;
    }
}

function sair() {
    localStorage.removeItem('nomeUsuario');
    
    window.location.href = '../login/login.html';
}


document.addEventListener('DOMContentLoaded', function() {
    carregarNomeUsuario();    
    document.getElementById('btnSair').addEventListener('click', sair);
});

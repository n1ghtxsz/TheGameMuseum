document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        window.location.href = '../index.html';
    } else {

        console.log('Falha no login: Usuário ou senha incorretos.');
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});

document.getElementById('loginForm_mobile').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username_mobile').value;
    const password = document.getElementById('password_mobile').value;

    if (username === 'admin' && password === '123') {
        window.location.href = '../index.html';
    } 
});


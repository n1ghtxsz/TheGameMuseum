var login_button = document.getElementById('login')
var register_button = document.getElementById('register')
var user_error = document.getElementById('user_error')
var password_error = document.getElementById('pass_error')

var mob_register_button = document.getElementById('register_mobile')
var mob_user_error = document.getElementById('user_error_mobile')
var mob_pass_error = document.getElementById('pass_error_mobile')

login_button.addEventListener('click', redirect)

function goSiteMobile() {
    document.getElementById('loginForm_mobile').addEventListener('submit', function(event) {
        event.preventDefault()

        const username2 = document.getElementById('username_mobile').value
        const password2 = document.getElementById('password_mobile').value
        if (username2 === "" && password2 === "") {
            alert('Impossível registrar, Preencha todos os campos!')
        } else if (username2 === "") {
            mob_user_error.innerHTML = 'Porfavor preencha este campo!'
        } else if (password2 === "") {
            mob_pass_error.innerHTML = 'Porfavor preencha este campo!'
        } else {
            window.location.href = '../index.html'
        }
    })
}

function goSite() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === "" && password === "") {
            alert('Impossível registrar, Preencha todos os campos!')
        } else if (username === "") {
            user_error.innerHTML = 'Porfavor preencha este campo!'
        } else if (password === "") {
            password_error.innerHTML = 'Porfavor preencha este campo!'
        } else {
            window.location.href = '../index.html'
        }
    })
}

function redirect() {
    window.location.href = 'login.html';
}
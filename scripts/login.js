function check() {
    var log = document.getElementById('login').value;
    var pw = document.getElementById('senha').value;

    if (log === "miranda" && pw === "kaleidoscope") {
        location.href = 'teste.html';
    } else {
        alert('Login ou senha incorretos');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', check);
});

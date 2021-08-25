const buttonEmail = document.getElementById('button-login');
const loginEmail = document.getElementById('input-email');
const passwordEmail = document.getElementById('input-password');
const login = 'tryber@teste.com';
const password = '123456';

function verifyLogin() {
  if (loginEmail.value === login && passwordEmail.value === password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEmail.addEventListener('click', verifyLogin);

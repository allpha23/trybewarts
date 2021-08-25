const buttonEmail = document.getElementById('button-login');
const loginEmail = document.getElementById('input-emailLogin');
const passwordEmail = document.getElementById('input-password');
const login = 'tryber@teste.com';
const password = '123456';
const agreeCheck = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');

function verifyLogin() {
  if (loginEmail.value === login && passwordEmail.value === password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEmail.addEventListener('click', verifyLogin);

function buttonEnable() {
  if (agreeCheck.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

agreeCheck.addEventListener('click', buttonEnable);

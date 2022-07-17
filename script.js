const submitButton = document.querySelector('.buttonSubmit');
function analysis(event) {
  event.preventDefault();
  const emailInput = document.getElementById('header-email').value;
  const passInput = document.getElementById('header-senha').value;
  if (emailInput === 'tryber@teste.com' && passInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
submitButton.addEventListener('click', analysis);

const sendButton = document.getElementById('submit-btn');
const confirma = document.getElementById('agreement');
function analysis2() {
  if (confirma.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}
confirma.addEventListener('click', analysis2);

function limiteTextarea(event) {
  const valor = event.target.value;
  const quantidade = 500;
  const total = valor.length;
  if (total <= quantidade) {
    const resto = quantidade - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('texto').value = valor.substr(0, quantidade);
  }
}

document.getElementById('textarea').addEventListener('keyup', limiteTextarea);

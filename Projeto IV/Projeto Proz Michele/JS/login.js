document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formLogin');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // impede o envio do formulário

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    let isValid = true;

    limparErros();

    // Validação do email
    if (!validarEmail(email.value)) {
      mostrarErro(email, 'Digite um e-mail válido.');
      isValid = false;
    }

    // Validação da senha
    if (senha.value.length < 6) {
      mostrarErro(senha, 'A senha deve ter pelo menos 6 caracteres.');
      isValid = false;
    }

    // Aplica ou remove classe de erro
    if (!isValid) {
      form.classList.add('form-erro');
    } else {
      form.classList.remove('form-erro');
      form.submit(); // Envia o formulário se estiver tudo certo
    }
  });

  function mostrarErro(input, mensagem) {
    let span = input.parentElement.querySelector('.erro');
    if (!span) {
      span = document.createElement('span');
      span.classList.add('erro');
      input.parentElement.appendChild(span);
    }

    input.style.border = '2px solid red';
    span.textContent = mensagem;
  }

  function limparErros() {
    const spans = document.querySelectorAll('.erro');
    const inputs = document.querySelectorAll('input');

    spans.forEach(span => {
      span.textContent = '';
    });

    inputs.forEach(input => {
      input.style.border = '';
    });

    form.classList.remove('form-erro');
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

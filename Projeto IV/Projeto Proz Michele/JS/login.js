document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formLogin');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = emailInput.value;
    const senha = senhaInput.value;

    // Limpa erros anteriores
    limparErros();

    // Validação do formato (seu código original)
    let isValid = true;
    if (!validarEmail(email)) {
      mostrarErro(emailInput, 'Digite um e-mail válido.');
      isValid = false;
    }

    if (senha.length < 6) {
      mostrarErro(senhaInput, 'A senha deve ter pelo menos 6 caracteres.');
      isValid = false;
    }

    if (isValid) {
      if (window.validarCredenciais && await window.validarCredenciais(email, senha)) {
        form.submit(); 
      } else {
        mostrarErro(senhaInput, 'E-mail ou senha incorretos.');
      }
    }
  });

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function mostrarErro(input, mensagem) {
    const erro = input.nextElementSibling;
    input.style.border = '2px solid red';
    erro.textContent = mensagem;
  }

  function limparErros() {
    document.querySelectorAll('.erro').forEach(erro => {
      erro.textContent = '';
    });
    document.querySelectorAll('input').forEach(input => {
      input.style.border = '';
    });
  }
});
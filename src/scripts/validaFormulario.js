document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.container_form');
  const inputs = form.querySelectorAll('input');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    clearErrors();

    inputs.forEach((input) => {
      const value = input.value.trim();

      if (!value) {
        showError(input, 'Campo obrigatório');
        isValid = false;
        return;
      }

      if (input.id === 'email' && !validateEmail(value)) {
        showError(input, 'Email inválido');
        isValid = false;
      }

      if (input.id === 'telefone') {
        if (!/^\d+$/.test(value)) {
          showError(input, 'Telefone deve conter apenas números');
          isValid = false;
        } else if (value.length < 10 || value.length > 11) {
          showError(input, 'Telefone deve ter entre 10 e 11 dígitos');
          isValid = false;
        }
      }

      if (input.id === 'senha' && value.length < 6) {
        showError(input, 'A senha deve ter no mínimo 6 caracteres');
        isValid = false;
      }

      if (input.id === 'confirma_senha' && value !== document.getElementById('senha').value) {
        showError(input, 'As senhas não coincidem');
        isValid = false;
      }
    });

    if (isValid) {
      form.submit();
    }
  });

  function showError(input, message) {
    input.classList.add('input-error');

    const error = document.createElement('span');
    error.className = 'error-message';
    error.innerText = message;
    input.parentElement.appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach((e) => e.remove());
    document.querySelectorAll('.input-error').forEach((input) =>
      input.classList.remove('input-error')
    );
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

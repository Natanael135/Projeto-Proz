document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".container_form");

  form.addEventListener("submit", function (event) {
    const nome = document.getElementById("nome").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirma_senha").value;

    if (!nome || !endereco || !telefone || !email || !senha || !confirmaSenha) {
      alert("Por favor, preencha todos os campos.");
      event.preventDefault();
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      alert("Digite um e-mail válido.");
      event.preventDefault();
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      event.preventDefault();
      return;
    }

    if (senha !== confirmaSenha) {
      alert("As senhas não coincidem.");
      event.preventDefault();
    }
  });
});

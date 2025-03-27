// Selecionando os elementos
const menuButton = document.querySelector(".menu-button-header");
const overlay = document.querySelector(".overlay-header");
const mobileMenu = document.querySelector(".mobile-menu-header");
const closeButton = document.querySelector(".close-button-header");

// Função para abrir o menu
const openMenu = () => {
  overlay.style.display = "block";
  mobileMenu.style.left = "0";
};

// Função para fechar o menu
const closeMenu = () => {
  overlay.style.display = "none";
  mobileMenu.style.left = "-100%";
};

// Adicionando evento para abrir o menu
menuButton.addEventListener("click", openMenu);

// Adicionando evento para fechar o menu
closeButton.addEventListener("click", closeMenu);

// Fechando o menu quando clicar no overlay
overlay.addEventListener("click", closeMenu);

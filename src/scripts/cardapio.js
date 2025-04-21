const pizzas = [
  {
    nome: "🍄 Super Cogumelo",
    descricao: "Queijos especiais com cogumelos salteados.",
    preco: "R$ 49,99",
    imagem: "./public/super-cogumelo.png",
  },
  {
    nome: "🔥 Fireball Calabresa",
    descricao: "Calabresa apimentada com molho especial.",
    preco: "R$ 54,99",
    imagem: "./public/fireball-calabresa.png",
  },
  {
    nome: "⭐ Estrela Portuguesa",
    descricao: "Tradicional portuguesa com um toque especial.",
    preco: "R$ 53,99",
    imagem: "./public/estrela-portuguesa.png",
  },
  {
    nome: "🏰 Castelo do Bowser",
    descricao: "Quatro queijos com pimenta.",
    preco: "R$ 39,99",
    imagem: "./public/castelo-bowser.png",
  },
  {
    nome: "🌈 Arco-Íris do Yoshi",
    descricao: "Pizza doce com frutas e chocolate branco.",
    preco: "R$ 64,99",
    imagem: "./public/arco-iris-yoshi.png",
  },
  {
    nome: "🚀 Turbo Luigi",
    descricao: "Frango, catupiry e bacon crocante.",
    preco: "R$ 62,99",
    imagem: "./public/turbo-luigi.png",
  },
];

const bebidas = [
  {
    nome: "🥤 Poção do Mario",
    descricao: "Refrigerante de cola.",
    preco: "R$ 9,99",
    imagem: "./public/pocao-mario.png",
  },
  {
    nome: "🍊 Suco do Yoshi",
    descricao: "Suco de Fruta 100% natural.",
    preco: "R$ 7,99",
    imagem: "./public/suco-yoshi.png",
  },
  {
    nome: "🔴🟢 Drink do Mario & Luigi",
    descricao:
      "Mistura refrescante de Frutas Vermelhas com Morango ou limão-siciliano com hortelã e manga",
    preco: "R$ 14,99",
    imagem: "./public/drink-mario-luigi.png",
  },
];

function criarItemCardapio(item) {
  const div = document.createElement("div");
  div.classList.add("menu-item");

  div.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" />
      <div class="menu-info">
        <p class="item-name">${item.nome}</p>
        <p class="item-description">${item.descricao}</p>
        <p class="item-price">${item.preco}</p>
      </div>
    `;

  return div;
}

const containerPizzas = document.querySelector("#pizzas-container");
const containerBebidas = document.querySelector("#bebidas-container");

pizzas.map((pizza) => {
  const item = criarItemCardapio(pizza);
  containerPizzas.appendChild(item);
});

bebidas.map((bebida) => {
  const item = criarItemCardapio(bebida);
  containerBebidas.appendChild(item);
});

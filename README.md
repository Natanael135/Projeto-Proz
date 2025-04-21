# Projeto-Proz - Super Mario Pizza

## Visão Geral

Site completo de uma pizzaria temática do Super Mario, desenvolvido como parte do curso Proz. Inclui páginas de cardápio, sobre nós, cadastro de cliente, carrinho de compras e sistema de login.

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript básico para interações
- Design responsivo (mobile-first)

## Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Navegue entre as páginas através do menu

## Estrutura de Arquivos

```
├── README.md
├── index.html (Página inicial com cardápio)
├── public/
│   ├── Wireframes/
│   │   ├── AboutPage.png
│   │   ├── cad_client_page.png
│   │   ├── imagem_2025-02-12_180515102.png
│   │   ├── tela_login.PNG
│   │   └── tela_perfil_cliente.PNG
│   ├── arco-iris-yoshi.png
│   ├── castelo-bowser.png
│   ├── drink-mario-luigi.png
│   ├── estrela-portuguesa.png
│   ├── fireball-calabresa.png
│   ├── logo-mario.png
│   ├── pocao-mario.png
│   ├── slider2.png
│   ├── slider3.png
│   ├── slider4.png
│   ├── slider5.png
│   ├── suco-yoshi.png
│   ├── super-cogumelo.png
│   └── turbo-luigi.png
├── src/
│   ├── pages/
│   │   ├── CadCliente/
│   │   │   ├── cad_client_page.html
│   │   │   └── style.css
│   │   ├── Carrinho/
│   │   │   ├── Carrinho.html
│   │   │   └── style.css
│   │   ├── Login/
│   │   │   ├── login.html
│   │   │   └── style.css
│   │   └── Sobre/
│   │       ├── AboutPage.html
│   │       └── style.css
│   ├── scripts/
│   │   ├── cardapio.js
│   │   ├── carousel.js
│   │   └── header.js
│   └── styles/
│       ├── footer.css
│       ├── globalStyle.css
│       └── header.css
└── style.css
```

## Páginas Principais

### 1. Página Inicial (index.html)

- **Itens carregados dinamicamente**:

  - Utiliza JavaScript para gerar os elementos de pizza e bebida com base em arrays de objetos.
  - Manipulação de DOM para inserir os itens nos containers:
    - `#pizzas-container`
    - `#bebidas-container`
  - Cada item inclui:
    - Imagem
    - Nome com emoji temático
    - Descrição curta
    - Preço

- **Cardápio Completo**:
  - 6 pizzas temáticas com nomes criativos:
    - 🍄 Super Cogumelo (R$ 49,99)
    - 🔥 Fireball Calabresa (R$ 54,99)
    - ⭐ Estrela Portuguesa (R$ 53,99)
    - 🏰 Castelo do Bowser (R$ 39,99)
    - 🌈 Arco-Íris do Yoshi (R$ 64,99)
    - 🚀 Turbo Luigi (R$ 62,99)
  - 3 bebidas temáticas:
    - 🥤 Poção do Mario (R$ 9,99)
    - 🍊 Suco do Yoshi (R$ 7,99)
    - 🔴🟢 Drink do Mario & Luigi (R$ 14,99)

### 2. Página Sobre Nós (AboutPage.html)

- **Seções informativas**:

  - História da pizzaria: mistura entre tradição italiana e cultura gamer.
  - "Um Espaço para Jogar e Saborear": descrição do ambiente físico.
  - Layout alternado com imagens temáticas.

- **Carrossel interativo com JavaScript**:

  - Slides automáticos a cada 5 segundos.
  - Navegação por pontos (dots).
  - Pausa automática ao passar o mouse.
  - Responsivo e com transições suaves.

### 3. Cadastro de Cliente (cad_client_page.html)

- **Formulário Completo**:
  - Campos obrigatórios: Nome, Endereço, Telefone, Email, Senha
  - Validação básica de campos
  - Design limpo com fieldset e legend

### 4. Página de Login (login.html)

- **Sistema de Acesso**:
  - Campos para email e senha
  - Link "Esqueceu a senha?"
  - Opção para cadastro de novos clientes
  - Botão de login estilizado

### 5. Carrinho de Compras (Carrinho.html)

- **Funcionalidades**:
  - Listagem de itens adicionados
  - Ajuste de quantidades
  - Cálculo de total por item e geral
  - Botão para remover itens
  - Botão "Finalizar Compra"

## Recursos e Funcionalidades

### Navegação

- **Header Responsivo**:
  - Menu desktop e mobile
  - Logo e nome da pizzaria
  - Links para todas as páginas principais
  - Ícones de carrinho e login

### Design

- **Tema Mario Bros**:
  - Todas as imagens e nomes de produtos seguem a temática
  - Cores vibrantes e elementos de jogos
  - Wireframes incluídos para referência

### Interatividade

- **Menu Mobile**:
  - Botão hamburguer para telas pequenas
  - Overlay e animação de abertura/fechamento
  - Mesma funcionalidade do menu desktop

### Organização de Código

- **CSS Modularizado**:
  - Estilos globais
  - Componentes separados (header, footer)
  - Estilos específicos para cada página

## Melhorias Futuras

1. Implementar backend para:
   - Sistema de login real
   - Persistência do carrinho
   - Processamento de pedidos
2. Adicionar:
   - Página de perfil do cliente
   - Histórico de pedidos
   - Sistema de avaliações
   - Páginas dinâmicas
3. Melhorar:
   - Validação de formulários
   - Animações e transições
   - Performance de carregamento

## Observações

O projeto foi desenvolvido como exercício acadêmico, com foco em front-end. As imagens e conceitos temáticos são para fins educacionais, sem intenção de violação de direitos autorais.

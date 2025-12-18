# Portfólio Profissional - Alessander Dutra

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-228AE6?style=flat-square&logo=font-awesome&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-0A66C2?style=flat-square&logo=mail.ru&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

Portfólio online desenvolvido com HTML, Tailwind CSS e Font Awesome.

🎯 **Product Manager | IA Generativa | Estratégia de Produtos Digitais**

---

## 🌐 Visualizar Online

👉 [https://alessander-dutra.github.io/portfolio](https://alessander-dutra.github.io/portfolio)

> (Substitua `alessander-dutra` pelo seu nome de usuário do GitHub se você for clonar este repositório)

---

## 🛠️ Tecnologias

- HTML5
- Tailwind CSS (CDN)
- Font Awesome
- Google Fonts

---

## 📁 Estrutura

portfolio-alessander/
├── index.html
├── css/style.css
├── assets/img/profile.jpeg
└── README.md

---

## ⚙️ Nota sobre Tailwind

Este projeto usa o Tailwind CSS via CDN para facilitar o desenvolvimento rápido. A configuração do Tailwind no `index.html` define `darkMode: 'class'` para que o botão de tema funcione corretamente.

Dica de desenvolvimento local (opcional): para reduzir o tamanho em produção e usar classes customizadas, configure o Tailwind com PostCSS e gere um CSS compilado em vez de usar a CDN.

---

## 📨 Configurando o formulário (Formspree)

O formulário de contato do projeto usa o Formspree. Se ao enviar você vê o erro "Form not found — Please check the form hashid", siga estes passos:

1. Acesse <https://formspree.io> e crie uma conta (ou faça login).
1. Crie um novo formulário e copie o endpoint fornecido no formato: `https://formspree.io/f/SEU_HASH`.
1. No arquivo `index.html`, procure a linha do formulário:

```html
<form action="https://formspree.io/f/xxxxxxxx" method="POST">
```

1. Substitua `xxxxxxxx` pelo `SEU_HASH` que o Formspree retornou.

Se preferir não configurar o Formspree, você pode usar um serviço alternativo, um endpoint próprio, ou eu posso adicionar um fallback `mailto:`/simples para testes locais.

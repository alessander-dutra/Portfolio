// js/main.js
document.addEventListener('DOMContentLoaded', function () {
  
  /* -------------------------------------------------------------------------- */
  /*                                 Typed.js                                   */
  /* -------------------------------------------------------------------------- */
  if (document.getElementById('typed-subtitle')) {
    new Typed('#typed-subtitle', {
      strings: [
        "Product Manager",
        "Especialista em Ciclo de Vida de Produtos",
        "Estrategista Go-To-Market",
        "Entusiasta de IA Generativa"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                Theme Toggle                                */
  /* -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  if (themeToggleBtn && darkIcon && lightIcon) {
    // Check initial state
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      lightIcon.classList.remove('hidden');
    } else {
      darkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', function() {
      // Toggle icons
      darkIcon.classList.toggle('hidden');
      lightIcon.classList.toggle('hidden');

      // If is set in localStorage
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
      } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                Back to Top                                 */
  /* -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top-btn');

  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        backToTopBtn.classList.add('opacity-0', 'invisible');
        backToTopBtn.classList.remove('opacity-100', 'visible');
      }
    });

    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                            Formspree Validation                            */
  /* -------------------------------------------------------------------------- */
  // Encontra o formulário de contato pela action do Formspree ou pelo seletor geral
  const form = document.querySelector('form[action*="formspree.io"]') || document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const action = (form.getAttribute('action') || '').trim();

      // Verifica se o action está com o placeholder (xxxxxxxx) ou não aponta para formspree
      if (!action || action.includes('xxxxxxxx')) {
        e.preventDefault();
        // Mensagem amigável no DOM (se existir) ou fallback para alert
        const container = form.querySelector('.form-message') || document.createElement('div');
        container.classList.add('form-message');
        container.style.marginTop = '12px';
        container.style.padding = '12px';
        container.style.borderRadius = '8px';
        container.style.backgroundColor = '#FEF3C7';
        container.style.color = '#92400E';
        container.innerHTML = '<strong>Formulário não configurado:</strong> substitua o atributo <code>action</code> do formulário pelo endpoint do Formspree (ex.: https://formspree.io/f/SEU_HASH). Veja o README para instruções.';

        // Insere a mensagem no formulário (apenas se ainda não estiver anexada)
        if (!form.querySelector('.form-message')) {
          form.appendChild(container);
        }

        // Opcional: rolar até a mensagem
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
      }
      // Se action parece correto, deixa o submit prosseguir normalmente
    });
  }
});

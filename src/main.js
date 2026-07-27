
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  const form = document.getElementById('contact-form');
  if(form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      const formData = new FormData(form);
      const action = form.getAttribute('action');
      
      try {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          alert('Formulário enviado com sucesso. Retornaremos o contato em breve.');
          form.reset();
        } else {
          alert('Ocorreu um erro ao enviar o formulário. Verifique o endpoint do Formspree ou tente novamente mais tarde.');
        }
      } catch (error) {
        alert('Ocorreu um erro ao enviar o formulário. Tente novamente ou entre em contato pelo WhatsApp.');
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }
});

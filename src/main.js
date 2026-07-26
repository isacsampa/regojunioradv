
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
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulário enviado com sucesso. Retornaremos o contato em breve.');
      form.reset();
    });
  }
});

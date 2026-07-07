const body = document.body;
const menuToggle = document.querySelector('[data-menu-toggle]');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-demo-form="true"]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) {
      note.classList.add('show');
      note.textContent = 'Demo submission captured. Connect this form to Formspree, your CRM, or newsletter tool before launch.';
    }
    form.reset();
  });
});

document.querySelectorAll('[data-amount-button]').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.closest('[data-donation-panel]');
    panel?.querySelectorAll('[data-amount-button]').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const input = panel?.querySelector('[data-custom-amount]');
    if (input) input.value = button.dataset.amount || '';
  });
});

document.querySelectorAll('[data-toggle-gift]').forEach((button) => {
  button.addEventListener('click', () => {
    const toggle = button.closest('.toggle');
    toggle?.querySelectorAll('button').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const mode = document.querySelector('[data-gift-mode]');
    if (mode) mode.textContent = button.dataset.toggleGift === 'monthly' ? 'monthly recurring gift' : 'one-time gift';
  });
});

document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

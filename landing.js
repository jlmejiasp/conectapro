const form = document.querySelector('#leadForm');
const toast = document.querySelector('#landingToast');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  toast.textContent = 'Solicitud recibida. Te responderemos personalmente.';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
});

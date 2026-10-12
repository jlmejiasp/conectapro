const registerForm = document.querySelector('#registerForm');
const authToast = document.querySelector('#authToast');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(registerForm));
  localStorage.setItem('conectapro_space', JSON.stringify({ business:data.business, offer:data.offer, name:data.name, email:data.email }));
  authToast.textContent = 'Espacio creado. Abriendo tu backoffice…'; authToast.classList.add('show');
  setTimeout(() => { window.location.href = 'backoffice.html'; }, 650);
});

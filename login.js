const loginForm = document.querySelector('#loginForm');
const loginToast = document.querySelector('#authToast');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const saved = JSON.parse(localStorage.getItem('conectapro_space') || 'null');
  const email = new FormData(loginForm).get('email');
  if (!saved) { loginToast.textContent = 'Primero crea tu espacio de trabajo.'; loginToast.classList.add('show'); setTimeout(() => window.location.href = 'registro.html', 800); return; }
  if (saved.email !== email) { loginToast.textContent = 'El email no coincide con este espacio local.'; loginToast.classList.add('show'); setTimeout(() => loginToast.classList.remove('show'), 2200); return; }
  loginToast.textContent = 'Acceso correcto. Abriendo tu backoffice…'; loginToast.classList.add('show'); setTimeout(() => window.location.href = 'backoffice.html', 650);
});

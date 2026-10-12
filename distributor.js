const params = new URLSearchParams(window.location.search);
const savedSpace = JSON.parse(localStorage.getItem('conectapro_space') || 'null');
const savedProfile = JSON.parse(localStorage.getItem('conectapro_profile') || 'null');
const profile = { ...(savedSpace || {}), ...(savedProfile || {}) };
const ref = params.get('ref');
const owner = params.get('owner') || profile.displayName || profile.business || (ref ? ref.replace(/[-_]/g, ' ') : 'Tu negocio');
const email = params.get('email') || profile.email || '';
const whatsapp = params.get('wa') || profile.whatsapp || '';
document.title = `${owner} · Información`;
document.querySelector('#ownerName').textContent = owner; document.querySelector('#footerOwner').textContent = owner; document.querySelector('#contactOwner').textContent = owner; document.querySelector('#brandInitial').textContent = owner.trim().charAt(0).toUpperCase();
if (profile.offer) document.querySelector('#heroOffer').textContent = profile.offer;
const cleanWhatsApp = whatsapp.replace(/\D/g, '');
const waText = `Hola ${owner}, quiero información sobre la propuesta.`;
const waUrl = cleanWhatsApp ? `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(waText)}` : '#solicitud';
document.querySelector('#whatsappLink').href = waUrl;
if (email) { const emailLink = document.querySelector('#emailLink'); emailLink.href = `mailto:${email}`; emailLink.textContent = email; }
document.querySelector('#distForm').addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const message = `Hola ${owner}, soy ${data.get('name')}. Me interesa: ${data.get('interest')}.${data.get('message') ? ` Mi pregunta: ${data.get('message')}` : ''}`; if (!cleanWhatsApp) { const toast = document.querySelector('#distToast'); toast.textContent = 'Este perfil aún no tiene WhatsApp configurado.'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400); return; } window.open(`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener'); });

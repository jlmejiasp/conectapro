const campaigns = [
  { id:'intestinal', category:'BIENESTAR DIGESTIVO', title:'Apoya tu bienestar digestivo', description:'Conoce IGNYT y descubre cómo puede acompañar tu rutina.', image:'assets/ignyt-intestinal.jpeg', caption:'Tu bienestar empieza por entender lo que necesitas. Descubre IGNYT y encuentra el apoyo que encaja contigo. Escríbeme «INFO» y te cuento cómo funciona.' },
  { id:'apetito', category:'HÁBITOS Y APETITO', title:'Más claridad en tus hábitos', description:'Una conversación para acompañar tus objetivos con información clara.', image:'assets/ignyt-apetito.jpeg', caption:'Cada objetivo empieza con una decisión informada. Conoce la propuesta IGNYT y descubre cómo acompañar tus hábitos con un plan que tenga sentido para ti.' },
  { id:'muscular', category:'FUERZA Y RUTINA', title:'Cuida tu fuerza y tu rutina', description:'Conoce una fórmula pensada para acompañar un estilo de vida activo.', image:'assets/ignyt-muscular.jpeg', caption:'Tu rutina merece apoyo. Descubre la propuesta IGNYT para acompañar tus objetivos de fuerza y bienestar. ¿Quieres recibir la información?' }
];
let selectedId = campaigns[0].id;
let selectedNetwork = 'Instagram';
const $ = (selector) => document.querySelector(selector);
const selectedCampaign = () => campaigns.find((campaign) => campaign.id === selectedId);
function renderCampaigns() {
  $('#campaignGrid').innerHTML = campaigns.map((campaign) => `<button class="campaign-card ${campaign.id === selectedId ? 'selected' : ''}" data-campaign="${campaign.id}"><div class="campaign-image" style="background-image:url('${campaign.image}')"></div><div class="campaign-info"><span class="campaign-category">${campaign.category}</span><h3>${campaign.title}</h3><p>${campaign.description}</p></div></button>`).join('');
  document.querySelectorAll('[data-campaign]').forEach((button) => button.addEventListener('click', () => { selectedId = button.dataset.campaign; render(); toast('Campaña seleccionada'); }));
}
function renderPreview() { const campaign = selectedCampaign(); $('#selectedPreview').innerHTML = `<div class="preview-media" style="background-image:url('${campaign.image}')"></div><div class="preview-copy"><strong>${campaign.title}</strong><p>${campaign.caption}</p></div>`; }
function renderNetworks() { document.querySelectorAll('[data-network]').forEach((button) => { button.classList.toggle('active', button.dataset.network === selectedNetwork); button.onclick = () => { selectedNetwork = button.dataset.network; renderNetworks(); toast(`${selectedNetwork} seleccionado`); }; }); }
function render() { renderCampaigns(); renderPreview(); renderNetworks(); }
function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 1900); }
$('#publishButton').addEventListener('click', () => toast(`Preparando tu publicación para ${selectedNetwork}`));
$('#copyButton').addEventListener('click', async () => { try { await navigator.clipboard.writeText(selectedCampaign().caption); toast('Texto copiado'); } catch { toast('Texto listo para copiar'); } });
$('#learnButton').addEventListener('click', () => toast('Publica primero una campaña para empezar a recibir leads'));
$('#campaignEntry').addEventListener('click', () => document.querySelector('.gallery-panel').scrollIntoView({ behavior:'smooth', block:'start' }));
render();

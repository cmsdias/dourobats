const form = document.getElementById('mm-form');
const msgBox = document.getElementById('mm-msg');
const copyBtn = document.getElementById('copy-btn');
const waLink = document.getElementById('whatsapp-link');

form.addEventListener('submit', e => {
  e.preventDefault();
  const jogadores = [
    form.jogador1.value, form.jogador2.value,
    form.jogador3.value, form.jogador4.value
  ].filter(j => j.trim());
  if (jogadores.length < 2) {
    msgBox.value = "Indique pelo menos dois jogadores.";
    waLink.style.display = 'none';
    return;
  }
  const msg = `Convite para jogo Douro Bats!\nJogadores: ${jogadores.join(', ')}\nVamos jogar? Confirmem presença!`;
  msgBox.value = msg;
  waLink.href = "https://wa.me/?text=" + encodeURIComponent(msg);
  waLink.style.display = '';
});

copyBtn.addEventListener('click', () => {
  msgBox.select();
  document.execCommand('copy');
});
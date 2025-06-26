// Lista simples de treinos. Edite conforme necessário!
const treinos = [
  { modalidade: "Badminton", dia: "Segunda-feira", hora: "19:00", local: "Pavilhão Municipal" },
  { modalidade: "Ténis de Mesa", dia: "Quarta-feira", hora: "18:30", local: "Escola Secundária" },
  { modalidade: "Padel", dia: "Sábado", hora: "10:00", local: "Clube de Padel" },
];

const container = document.getElementById('treinos-list');
container.innerHTML = treinos.map(t =>
  `<div class="treino-item">
    <b>${t.modalidade}</b>: ${t.dia} às ${t.hora} (${t.local})
  </div>`
).join('');
// Link CSV do Google Sheets publicado
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu9ZGJ59j1Beyots09_Ui0QHv08a247oojM-1om4EQvu3g5ABG0pIKtmAb-WYD1TZGaR7OHvKnViHN/pub?gid=0&single=true&output=csv";

async function loadRanking() {
  const resp = await fetch(SHEET_URL);
  const csv = await resp.text();
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",");
  const rows = lines.slice(1).map(l => l.split(","));

  let html = "<table><thead><tr>";
  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr></thead><tbody>";
  rows.forEach(r => {
    html += "<tr>" + r.map(c => `<td>${c}</td>`).join('') + "</tr>";
  });
  html += "</tbody></table>";

  document.getElementById('ranking-table').innerHTML = html;
}
loadRanking();

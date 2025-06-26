# Associação Desportiva Douro Bats - App Web

## Como editar

- Todas as páginas estão em `/index.html` e `/pages/`.
- Para editar textos, basta abrir o ficheiro correspondente e alterar.
- Para editar horários ou contactos, edite os ficheiros `.js` ou `.json` conforme necessário.
- O ranking é carregado automaticamente de um Google Sheets (ver instruções abaixo).

## Publicar no GitHub Pages

1. Faça fork/clonar este repositório.
2. Ative o GitHub Pages nas settings (branch `main`).
3. O site ficará disponível em `https://<utilizador>.github.io/<repo>`.

## Google Sheets - Ranking

- Crie um Google Sheets com as colunas `Posição`, `Nome`, `Pontos`, etc.
- Publique como CSV (File > Share > Publish to web > CSV).
- Cole o link do CSV na variável `SHEET_URL` em `pages/ranking.js`.

## Personalização

- Imagens e logotipo: Coloque em `/assets/`.
- Cores e estilo: Edite `/assets/styles.css`.

---
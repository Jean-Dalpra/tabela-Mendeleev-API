fetch('data.json')
  .then(response => response.json())
  .then(data => {
    criarTabelaPeriodica(data);
  })

function criarTabelaPeriodica(elementos) {
  const tabela = document.createElement('table');
  tabela.classList.add('tabela-periodica');

  for (let linha = 1; linha <= 10; linha++) {
    const tr = document.createElement('tr');

    for (let coluna = 1; coluna <= 18; coluna++) {
      const td = document.createElement('td');
      td.classList.add('celula');

      const elemento = elementos.find(el => el.linha == linha && el.coluna == coluna);

      if (elemento) {
        td.innerHTML = `
          <div style="background-color: #${elemento.corHexCpk || 'FFFFFF'}; padding: 5px; border-radius: 5px;">
            <strong>${elemento.simbolo}</strong><br>
            <span>${elemento.numeroAtomico}</span>
          </div>
        `;
        td.title = `${elemento.nome} (${elemento.massaAtomica})`;
      }

      tr.appendChild(td);
    }

    tabela.appendChild(tr);
  }

  document.body.appendChild(tabela);
}
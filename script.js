fetch('data.json')
  .then(response => response.json())
  .then(data => {
    criarTabelaPeriodica(data);
  });

function criarTabelaPeriodica(elementos) {
  const tabela = document.createElement('table');
  tabela.classList.add('tabela-periodica');

 
  const infoDiv = document.createElement('div');
  infoDiv.id = 'info-elemento';
  infoDiv.style.position = 'absolute';
  infoDiv.style.top = '20px';
  infoDiv.style.left = '40%';
  infoDiv.style.transform = 'translateX(-50%)';
  infoDiv.style.padding = '20px';
  infoDiv.style.border = '2px solid #007BFF';
  infoDiv.style.borderRadius = '10px';
  infoDiv.style.backgroundColor = '#F9F9F9';
  infoDiv.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  infoDiv.style.fontFamily = 'Arial, sans-serif';
  infoDiv.style.fontSize = '16px';
  infoDiv.style.color = '#333';
  infoDiv.style.width = '400px';
  infoDiv.style.textAlign = 'center';
  infoDiv.style.display = 'none';
  document.body.appendChild(infoDiv);

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

        // Adicionando eventos de mouse
        td.addEventListener('mouseover', () => {
          infoDiv.style.display = 'block';
          infoDiv.innerHTML = `
            <h2 style="margin: 0; color: #007BFF;">${elemento.nome}</h2>
            <p style="margin: 10px 0; font-size: 14px;">
              <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
              <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
              <strong>Símbolo:</strong> ${elemento.simbolo}<br>
              <strong>Cor CPK:</strong> <span style="color: #${elemento.corHexCpk || '000'};">#${elemento.corHexCpk || 'N/A'}</span>
            </p>
          `;
          
        });

        td.addEventListener('mouseout', () => {
          infoDiv.style.display = 'none';
          td.style.border = 'none';
        });
      }

      tr.appendChild(td);
    }

    tabela.appendChild(tr);
  }

  document.body.appendChild(tabela);
}
//estrelas show

const starCanvas = document.createElement('canvas');
starCanvas.id = 'star-bg';
starCanvas.style.position = 'fixed';
starCanvas.style.top = '0';
starCanvas.style.left = '0';
starCanvas.style.width = '100vw';
starCanvas.style.height = '100vh';
starCanvas.style.zIndex = '-1';
starCanvas.style.pointerEvents = 'none';
document.body.appendChild(starCanvas);

function resizeStarCanvas() {
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
}
resizeStarCanvas();
window.addEventListener('resize', resizeStarCanvas);

const ctx = starCanvas.getContext('2d');
const numStars = 120;
const stars = [];

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * starCanvas.width,
    y: Math.random() * starCanvas.height,
    r: Math.random() * 1.2 + 0.3,
    speed: Math.random() * 0.15 + 0.05,
    alpha: Math.random() * 0.5 + 0.5
  });
}

function animateStars() {
  ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  for (let star of stars) {
    ctx.save();
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    star.y += star.speed;
    if (star.y > starCanvas.height) {
      star.y = 0;
      star.x = Math.random() * starCanvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}
animateStars();


function desenharAtomo2D({ protons, neutrons, eletrons, distribuicao }) {

  // átomo 2D 
  let atom2dContainer = document.getElementById('atom-2d-container');
  if (!atom2dContainer) {
    atom2dContainer = document.createElement('div');
    atom2dContainer.id = 'atom-2d-container';
    atom2dContainer.style.position = 'absolute';
    atom2dContainer.style.top = '337px';
    atom2dContainer.style.left = '87%';
    atom2dContainer.style.transform = 'translateX(-50%)';
    atom2dContainer.style.width = '233px';
    atom2dContainer.style.height = '233px';
    atom2dContainer.style.zIndex = '10';
    document.body.appendChild(atom2dContainer);
  }
  atom2dContainer.innerHTML = '';

  const size = 233;
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.style.display = "block";
  svg.style.margin = "0 auto";
  atom2dContainer.appendChild(svg);

  const cx = size / 2, cy = size / 2;

  // Núcleo
  const totalNucleo = protons + neutrons;
  const nucleons = [];
  for (let i = 0; i < protons; i++) nucleons.push({ tipo: 'proton' });
  for (let i = 0; i < neutrons; i++) nucleons.push({ tipo: 'neutron' });

  for (let i = nucleons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nucleons[i], nucleons[j]] = [nucleons[j], nucleons[i]];
  }

  const raioNucleo = 18; // raio máximo do núcleo
  nucleons.forEach(nuc => {
    const ang = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(Math.random()) * raioNucleo * 0.85;
    const x = cx + Math.cos(ang) * r;
    const y = cy + Math.sin(ang) * r;
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 4.5);
    circle.setAttribute("fill", nuc.tipo === 'proton' ? "#e53935" : "#888");
    circle.setAttribute("stroke", "#fff");
    circle.setAttribute("stroke-width", "1");
    svg.appendChild(circle);
  });

  //Órbitas
  const orbitConfigs = [
    { rx: 32, ry: 32, rot: 0 },
    { rx: 44, ry: 36, rot: 18 },
    { rx: 56, ry: 40, rot: -18 },
    { rx: 68, ry: 44, rot: 0 },
    { rx: 80, ry: 48, rot: 12 },
    { rx: 92, ry: 52, rot: -12 },
    { rx: 104, ry: 56, rot: 0 }
  ];


  let dist = [];
  if (Array.isArray(distribuicao) && distribuicao.length > 0) {
    dist = distribuicao.slice(0, 7);
  } else {

    const camadas = [2, 8, 18, 32, 32, 18, 2];
    let eletronsRestantes = eletrons;
    for (let i = 0; i < 7; i++) {
      const n = Math.min(camadas[i], eletronsRestantes);
      dist.push(n);
      eletronsRestantes -= n;
    }
  }


  let eletronsSVG = [];
  for (let camadaIdx = 0; camadaIdx < 7; camadaIdx++) {
    const conf = orbitConfigs[camadaIdx];
    const nEletrons = dist[camadaIdx] || 0;

    if (nEletrons > 0) {

      const orbit = document.createElementNS(svgNS, "ellipse");
      orbit.setAttribute("cx", cx);
      orbit.setAttribute("cy", cy);
      orbit.setAttribute("rx", conf.rx);
      orbit.setAttribute("ry", conf.ry);
      orbit.setAttribute("fill", "none");
      orbit.setAttribute("stroke", "#888");
      orbit.setAttribute("stroke-width", "1.2");
      orbit.setAttribute("transform", `rotate(${conf.rot} ${cx} ${cy})`);
      svg.appendChild(orbit);

      // Elétrons
      for (let e = 0; e < nEletrons; e++) {
        const electron = document.createElementNS(svgNS, "circle");
        electron.setAttribute("r", 3.2);
        electron.setAttribute("fill", "#1976d2");
        electron.setAttribute("stroke", "#fff");
        electron.setAttribute("stroke-width", "0.8");
        svg.appendChild(electron);
        eletronsSVG.push({
          el: electron,
          camada: camadaIdx,
          idx: e,
          total: nEletrons,
          conf
        });
      }
    }
  }

  // Animação dos elétrons
  let start;
  function animateElectron(ts) {
    if (!start) start = ts;
    const t = (ts - start) / 1000;
    eletronsSVG.forEach(({ el, camada, idx, total, conf }) => {

      const speed = 0.3 + camada * 0.18; // rad/s
      const theta = (2 * Math.PI * idx) / total + t * speed;
      const x0 = conf.rx * Math.cos(theta);
      const y0 = conf.ry * Math.sin(theta);
      const rad = conf.rot * Math.PI / 180;
      const x = cx + x0 * Math.cos(rad) - y0 * Math.sin(rad);
      const y = cy + x0 * Math.sin(rad) + y0 * Math.cos(rad);
      el.setAttribute("cx", x);
      el.setAttribute("cy", y);
    });
    el2dAnimFrame = requestAnimationFrame(animateElectron);
  }

  if (window.el2dAnimFrame) cancelAnimationFrame(window.el2dAnimFrame);
  window.el2dAnimFrame = requestAnimationFrame(animateElectron);
}

function criarTabelaPeriodica(elementos) {
  const tabela = document.createElement('table');
  tabela.classList.add('tabela-periodica');

  const combinacaoDiv = document.createElement('div');
  combinacaoDiv.id = 'area-combinacao';
  combinacaoDiv.style.position = 'absolute';
  combinacaoDiv.style.top = '48px';
  combinacaoDiv.style.right = '10px';
  combinacaoDiv.style.width = '290px';
  combinacaoDiv.style.height = '270px';
  combinacaoDiv.style.border = '2px dashed #888';
  combinacaoDiv.style.borderRadius = '10px';
  combinacaoDiv.style.background = '#fbfbfb';
  combinacaoDiv.style.padding = '10px';
  combinacaoDiv.innerHTML = '<strong style="font-size: 23px;">Arraste Elementos Aqui!</strong><div id="elementos-combinados" style="margin-top:10px; min-height:40px;"></div>';
  document.body.appendChild(combinacaoDiv);

  // Botão resultado
  const btnCombinar = document.createElement('button');
  btnCombinar.textContent = 'Combinar!';
  btnCombinar.style.position = 'absolute';
  btnCombinar.style.top = '167px'; // ajuste conforme o visual desejado
  btnCombinar.style.left = '10px'; // ajuste conforme o visual desejado
  btnCombinar.style.borderRadius = '5px';
  btnCombinar.style.padding = '5px';
  btnCombinar.style.cursor = 'pointer';
  btnCombinar.style.fontSize = '13px';
  combinacaoDiv.appendChild(btnCombinar);

  // Botão resetar 
  const btnReset = document.createElement('button');
  btnReset.textContent = '×';
  btnReset.style.position = 'absolute';
  btnReset.style.top = '10px';
  btnReset.style.right = '10px';
  btnReset.style.background = '#ffdddd';
  btnReset.style.cursor = 'pointer';
  btnReset.style.color = '#a00';
  btnReset.style.paddingBottom = '10px';
  btnReset.style.height = '25px';
  btnReset.style.fontSize = '20px';
  btnReset.style.border = '1px solid #a00';
  btnReset.style.borderRadius = '5px';
  combinacaoDiv.appendChild(btnReset);


  const resultadoDiv = document.createElement('div');
  resultadoDiv.id = 'resultado-juncao';
  resultadoDiv.style.position = 'absolute';
  resultadoDiv.style.top = '210px';
  resultadoDiv.style.left = '-2px';
  resultadoDiv.style.width = '140px';
  resultadoDiv.style.fontWeight = 'bold';
  resultadoDiv.style.fontSize = '20px';
  resultadoDiv.style.borderRadius = '6px';
  resultadoDiv.style.padding = '4px 8px';
  resultadoDiv.style.boxSizing = 'border-box';
  combinacaoDiv.appendChild(resultadoDiv);


  // Botão cargas e interação
  const btnVerCargas = document.createElement('button');
  btnVerCargas.textContent = 'Ver Cargas';
  btnVerCargas.style.position = 'absolute';
  btnVerCargas.style.top = '167px';
  btnVerCargas.style.left = '100px';
  btnVerCargas.style.borderRadius = '5px';
  btnVerCargas.style.cursor = 'pointer';
  btnVerCargas.style.padding = '5px';
  btnVerCargas.style.fontSize = '13px';
  combinacaoDiv.appendChild(btnVerCargas);


  const cargasDiv = document.createElement('div');
  cargasDiv.id = 'cargas-juncao';
  cargasDiv.style.position = 'absolute';
  cargasDiv.style.top = '200px';
  cargasDiv.style.left = '130px';
  cargasDiv.style.width = '190px';
  cargasDiv.style.fontSize = '14px';
  cargasDiv.style.borderRadius = '6px';
  cargasDiv.style.padding = '4px 8px';
  cargasDiv.style.boxSizing = 'border-box';
  combinacaoDiv.appendChild(cargasDiv);


  combinacaoDiv.addEventListener('dragover', e => {
    e.preventDefault();
    combinacaoDiv.style.background = '#e0ffe0';
  });
  combinacaoDiv.addEventListener('dragleave', e => {
    combinacaoDiv.style.background = '#f0f0f0';
  });
  combinacaoDiv.addEventListener('drop', e => {
    e.preventDefault();
    combinacaoDiv.style.background = '#fbfbfb';
    const simbolo = e.dataTransfer.getData('simbolo');
    const elemento = elementos.find(el => el.simbolo === simbolo);
    if (elemento) {
      const container = document.getElementById('elementos-combinados');

      let elDiv = container.querySelector(`span[data-simbolo="${elemento.simbolo}"]`);
      if (elDiv) {

        let count = parseInt(elDiv.getAttribute('data-count') || '1', 10);
        count++;
        elDiv.setAttribute('data-count', count);

        let contadorSpan = elDiv.querySelector('.contador-elemento');
        if (!contadorSpan) {
          contadorSpan = document.createElement('span');
          contadorSpan.className = 'contador-elemento';
          contadorSpan.style.fontSize = '14px';
          contadorSpan.style.position = 'absolute';
          contadorSpan.style.top = '2px';
          contadorSpan.style.right = '6px';
          contadorSpan.style.color = '#333';
          elDiv.appendChild(contadorSpan);
        }
        contadorSpan.textContent = count;
      } else {

        elDiv = document.createElement('span');
        elDiv.textContent = elemento.simbolo;
        elDiv.setAttribute('data-simbolo', elemento.simbolo);
        elDiv.setAttribute('data-count', 1);
        elDiv.style.margin = '0 5px';
        elDiv.style.width = '45px';
        elDiv.style.marginTop = '10px';
        elDiv.style.height = '45px';
        elDiv.style.lineHeight = '45px';
        elDiv.style.textAlign = 'center';
        elDiv.style.display = 'inline-block';
        elDiv.style.fontSize = '28px';
        elDiv.style.background = elemento.corGrupo || '#fff';
        elDiv.style.borderRadius = '5px';
        elDiv.style.border = '1px solid #ccc';
        elDiv.style.position = 'relative';

        // Contador menor
        const contadorSpan = document.createElement('span');
        contadorSpan.className = 'contador-elemento';
        contadorSpan.textContent = '1';
        contadorSpan.style.fontSize = '14px';
        contadorSpan.style.position = 'absolute';
        contadorSpan.style.marginTop = '14px';
        contadorSpan.style.marginLeft = '1px';
        contadorSpan.style.color = '#333';
        elDiv.appendChild(contadorSpan);

        container.appendChild(elDiv);
      }
    }
  });

  btnCombinar.onclick = () => {

    const combinados = [];
    document.querySelectorAll('#elementos-combinados span[data-simbolo]').forEach(el => {
      const simbolo = el.getAttribute('data-simbolo');
      const count = parseInt(el.getAttribute('data-count') || '1', 10);
      for (let i = 0; i < count; i++) {
        combinados.push(simbolo);
      }
    });

    if (combinados.length === 0) {
      resultadoDiv.textContent = 'Nenhum elemento selecionado!';
      return;
    }

    const combinadosOrdenados = [...combinados].sort();

    const combinacao = combinacoesQuimicas.find(c => {
      const elementosOrdenados = [...c.elementos].sort();
      return JSON.stringify(combinadosOrdenados) === JSON.stringify(elementosOrdenados);
    });

    if (combinacao) {
      resultadoDiv.innerHTML = `<strong style=" margin-top:100px;">Fórmula: ${combinacao.formula}<br>Nome: <em>${combinacao.nome}</em></strong>`;
    } else {
      resultadoDiv.textContent = 'Junção desconhecida: ' + combinados.join(' + ');
    }
  };

  btnReset.onclick = () => {
    document.getElementById('elementos-combinados').innerHTML = '';
    resultadoDiv.textContent = '';
    cargasDiv.textContent = '';
  };

  btnVerCargas.onclick = () => {
    const container = document.getElementById('elementos-combinados');
    const spans = container.querySelectorAll('span[data-simbolo]');
    if (spans.length === 0) {
      cargasDiv.textContent = 'Nenhum elemento selecionado!';
      return;
    }


    const e = 1.602e-19;

    let totalEletrons = 0;
    let simbolos = [];
    spans.forEach(span => {
      const simbolo = span.getAttribute('data-simbolo');
      const count = parseInt(span.getAttribute('data-count') || '1', 10);
      const elemento = colecaoElementos.find(el => el.simbolo === simbolo);
      if (elemento) {
        const numeroAtomico = parseInt(elemento.numeroAtomico, 10);
        totalEletrons += numeroAtomico * count;
        for (let i = 0; i < count; i++) simbolos.push(simbolo);
      }
    });

    const Q = totalEletrons * e;

    let Ftxt = '';
    if (simbolos.length >= 2) {
      const d = 1e-10;
      const K = 8.988e9;
      let somaF = 0;
      let detalhes = '';
      for (let i = 0; i < simbolos.length; i++) {
        for (let j = i + 1; j < simbolos.length; j++) {
          const el1 = colecaoElementos.find(el => el.simbolo === simbolos[i]);
          const el2 = colecaoElementos.find(el => el.simbolo === simbolos[j]);
          const q1 = el1 ? parseInt(el1.numeroAtomico, 10) * e : 0;
          const q2 = el2 ? parseInt(el2.numeroAtomico, 10) * e : 0;
          const F = (K * q1 * q2) / (d * d);
          somaF += F;
          detalhes += `${simbolos[i]} × ${simbolos[j]}: F = ${F.toExponential(2)} N<br>`;
        }
      }
      Ftxt = `<b>${detalhes}</b><b>Soma das forças:</b> ${somaF.toExponential(3)} N `;
    }

    cargasDiv.innerHTML = `<b>Q = ${Q.toExponential(3)} C</b><br>${Ftxt}`;
  };

  const infoDiv = document.createElement('div');
  infoDiv.id = 'info-elemento';
  infoDiv.style.position = 'absolute';
  infoDiv.style.top = '77px';
  infoDiv.style.left = '30%';
  infoDiv.style.transform = 'translateX(-50%)';
  infoDiv.style.padding = '14px';
  infoDiv.style.border = '2px solid';
  infoDiv.style.borderRadius = '10px';
  infoDiv.style.backgroundColor = '#F9F9F9';
  infoDiv.style.fontFamily = 'Arial, sans-serif';
  infoDiv.style.fontSize = '15px';
  infoDiv.style.color = '#333';
  infoDiv.style.width = '320px';
  infoDiv.style.height = '80px';
  infoDiv.style.textAlign = 'center';
  infoDiv.style.display = 'none';
  document.body.appendChild(infoDiv);

  let infoFixa = false;

  for (let linha = 1; linha <= 10; linha++) {
    const tr = document.createElement('tr');

    for (let coluna = 1; coluna <= 18; coluna++) {
      const td = document.createElement('td');
      td.classList.add('celula');

      const elemento = elementos.find(el => el.linha == linha && el.coluna == coluna);

      if (elemento) {
        td.innerHTML = `
          <div style="background-color: ${elemento.corGrupo || 'FFFFFF'}; padding: 5px; border-radius: 5px;">
            <strong>${elemento.simbolo}</strong><br>
            <span>${elemento.numeroAtomico}</span>
          </div>
        `;
        td.title = `${elemento.nome} (${elemento.massaAtomica})`;

        td.draggable = true;
        td.addEventListener('dragstart', e => {
          e.dataTransfer.setData('simbolo', elemento.simbolo);
        });

        const infoPadraoTabela = `
          <h3 style="margin-top: -2px; color: #444;">Tabela Periódica dos Elementos</h3>
          <p style="margin-top: -10px; padding-bottom: 10px; font-size: 15px;">
            A tabela periódica organiza todos os elementos químicos conhecidos de acordo com suas propriedades e número atômico.</p>
        `;

        infoDiv.innerHTML = infoPadraoTabela;
        infoDiv.style.display = 'block';

        td.addEventListener('mouseover', () => {
          if (!infoFixa) {
            infoDiv.style.display = 'block';
            infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
            infoDiv.innerHTML = `
              <h2 style="margin-top: -7px; color: ${elemento.corGrupo};">${elemento.nome}</h2>
              <p style="margin-top: -15px; padding-bottom: 1px; font-size: 14px;">
                <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
                <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
                <strong>Símbolo:</strong> ${elemento.simbolo}<br>
                <strong>Família:</strong> ${elemento.grupo}<br>
              </p>
              <div class="imagem-elemento" style="background-color:${elemento.corGrupo}; width: 66px;  padding: 0.5px; ">
                <h2 style="margin-top: 10px;">${elemento.simbolo}</h2>
                <h3>${elemento.nome}</h3>
                <h3 style="margin-right: 90px; margin-top: -10px;">${elemento.numeroAtomico}</h3>
              </div>
            `;
            const numeroAtomico = parseInt(elemento.numeroAtomico, 10);
            const massaAtomica = parseFloat((elemento.massaAtomica + '').replace(/[^\d.]/g, ''));
            const protons = numeroAtomico;
            const eletrons = numeroAtomico;
            const neutrons = Math.round(massaAtomica - numeroAtomico);

            desenharAtomo2D({
              protons,
              neutrons,
              eletrons,
              distribuicao: elemento.distribuicao
            });
          }
        });

        td.addEventListener('mouseout', () => {
          if (!infoFixa) {
            infoDiv.style.display = 'block';
            infoDiv.style.border = '2px solid #bbb';
            infoDiv.innerHTML = infoPadraoTabela;
            const atom2dContainer = document.getElementById('atom-2d-container');
            if (atom2dContainer) atom2dContainer.innerHTML = '';
            if (window.el2dAnimFrame) cancelAnimationFrame(window.el2dAnimFrame);
          }
        });


        td.addEventListener('click', () => {

          document.querySelectorAll('.hover-fixo').forEach(el => el.classList.remove('hover-fixo'));

          if (infoFixa && infoDiv.innerHTML.includes(elemento.nome)) {
            infoFixa = false;
            infoDiv.style.display = 'none';
            td.classList.remove('hover-fixo');
          } else {
            infoFixa = true;
            infoDiv.style.display = 'block';
            infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
            infoDiv.innerHTML = `
              <h2 style="margin-top: -7px; color: ${elemento.corGrupo};">${elemento.nome}</h2>
              <p style="margin-top: -15px; padding-bottom: 1px; font-size: 14px;">
                <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
                <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
                <strong>Símbolo:</strong> ${elemento.simbolo}<br>
                <strong>Família:</strong> ${elemento.grupo}<br>
              </p>
              <div class="imagem-elemento" style="background-color:${elemento.corGrupo}; width: 66px;  padding: 0.5px; ">
                <h2 style="margin-top: 10px;">${elemento.simbolo}</h2>
                <h3>${elemento.nome}</h3>
                <h3 style="margin-right: 90px; margin-top: -10px;">${elemento.numeroAtomico}</h3>
              </div>
            `;
            td.classList.add('hover-fixo');
          }
        });
      }

      tr.appendChild(td);
    }

    tabela.appendChild(tr);
  }

  document.body.appendChild(tabela);
}

criarTabelaPeriodica(colecaoElementos);
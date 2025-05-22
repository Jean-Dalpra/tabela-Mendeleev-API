const combinacoesQuimicas = [
  {
    elementos: ['Na', 'Cl'],
    formula: 'NaCl',
    nome: 'Sal de cozinha'
  },
  {
    elementos: ['H', 'H', 'O'],
    formula: 'H₂O',
    nome: 'Água'
  },
  {
    elementos: ['C', 'O', 'O'],
    formula: 'CO₂',
    nome: 'Dióxido de carbono'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₆H₁₂O₆',
    nome: 'Glicose'
  },
  {
    elementos: ['N', 'H', 'O'],
    formula: 'NH₃',
    nome: 'Amônia'
  },
  {
    elementos: ['Fe', 'O'],
    formula: 'Fe₂O₃',
    nome: 'Óxido de ferro (III)'
  },
  {
    elementos: ['Ca', 'CO₃'],
    formula: 'CaCO₃',
    nome: 'Carbonato de cálcio'
  },
  {
    elementos: ['Na', 'HCO₃'],
    formula: 'NaHCO₃',
    nome: 'Bicarbonato de sódio'
  },
  {
    elementos: ['C', 'H'],
    formula: 'CH₄',
    nome: 'Metano'
  },
  {
    elementos: ['C', 'H', 'N'],
    formula: 'C₃H₅N₃O₉',
    nome: 'Ácido ascórbico (vitamina C)'
  },
  {
    elementos: ['C', 'H', 'O', 'N'],
    formula: 'C₁₂H₁₈N₄O₆',
    nome: 'Ácido glutâmico'
  },
  {
    elementos: ['C', 'H', 'O', 'N', 'S'],
    formula: 'C₃H₇NO₂S',
    nome: 'Cisteína'
  },
  {
    elementos: ['Na', 'K'],
    formula: 'NaK',
    nome: 'Soro fisiológico'
  },
  {
    elementos: ['H', 'Cl'],
    formula: 'HCl',
    nome: 'Ácido clorídrico'
  },
  {
    elementos: ['H', 'S'],
    formula: 'H₂S',
    nome: 'Ácido sulfídrico'
  },
  {
    elementos: ['C', 'O', 'H'],
    formula: 'C₃H₆O₃',
    nome: 'Ácido lático'
  },
  {
    elementos: ['C', 'H', 'O', 'N', 'P'],
    formula: 'C₁₀H₁₄N₅O₁₃P',
    nome: 'ATP (adenosina trifosfato)'
  },
  {
    elementos: ['C', 'H', 'O', 'N', 'S'],
    formula: 'C₁₃H₁₈N₄O₆S',
    nome: 'Cisteína'
  },
  {
    elementos: ['C', 'H', 'O', 'N', 'P'],
    formula: 'C₁₀H₁₄N₅O₁₃P',
    nome: 'ATP (adenosina trifosfato)'
  },
  {
    elementos: ['C', 'H', 'O', 'N', 'S'],
    formula: 'C₁₃H₁₈N₄O₆S',
    nome: 'Cisteína'
  },
  {
    elementos: ['C', 'H', 'O', 'N', 'P'],
    formula: 'C₁₀H₁₄N₅O₁₃P',
    nome: 'ATP (adenosina trifosfato)'
  },
  {
    elementos: ['H', 'O'],
    formula: 'H₂O₂',
    nome: 'Peróxido de hidrogênio (água oxigenada)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₂H₅OH',
    nome: 'Etanol (álcool etílico)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'CH₃COOH',
    nome: 'Ácido acético (vinagre)'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₈H₁₀N₄O₂',
    nome: 'Cafeína'
  },
  {
    elementos: ['Na', 'O', 'H'],
    formula: 'NaOH',
    nome: 'Hidróxido de sódio (soda cáustica)'
  },
  {
    elementos: ['K', 'O', 'H'],
    formula: 'KOH',
    nome: 'Hidróxido de potássio'
  },
  {
    elementos: ['Ca', 'O', 'H'],
    formula: 'Ca(OH)₂',
    nome: 'Hidróxido de cálcio (cal hidratada)'
  },
  {
    elementos: ['C', 'H', 'Cl'],
    formula: 'CHCl₃',
    nome: 'Clorofórmio'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₉H₈O₄',
    nome: 'Ácido acetilsalicílico (aspirina)'
  },
  {
    elementos: ['Mg', 'O'],
    formula: 'MgO',
    nome: 'Óxido de magnésio'
  },
  {
    elementos: ['Al', 'O'],
    formula: 'Al₂O₃',
    nome: 'Óxido de alumínio'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₁₇H₁₉NO₃',
    nome: 'Morfina'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₁₂H₂₂O₁₁',
    nome: 'Sacarose'
  },
  {
    elementos: ['H', 'N', 'O'],
    formula: 'HNO₃',
    nome: 'Ácido nítrico'
  },
  {
    elementos: ['H', 'S', 'O'],
    formula: 'H₂SO₄',
    nome: 'Ácido sulfúrico'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₂H₅NO₂',
    nome: 'Glicina (aminoácido)'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₅H₁₁NO₂',
    nome: 'Leucina (aminoácido)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₂H₄O₂',
    nome: 'Ácido etanoico (ácido acético)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₃H₈O₃',
    nome: 'Glicerol (glicerina)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₄H₁₀',
    nome: 'Butano'
  },
  {
    elementos: ['C', 'H', 'Cl', 'F'],
    formula: 'CCl₂F₂',
    nome: 'Diclorodifluorometano (CFC-12)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₂H₄O',
    nome: 'Óxido de etileno'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₅H₁₀N₂O₃',
    nome: 'Glutamina'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₅H₉NO₄',
    nome: 'Ácido glutâmico'
  },
  {
    elementos: ['C', 'H', 'N', 'O', 'P'],
    formula: 'C₁₀H₁₃N₅O₄P',
    nome: 'AMP (adenosina monofosfato)'
  },
  {
    elementos: ['C', 'H', 'N', 'O', 'P'],
    formula: 'C₁₀H₁₂N₅O₁₃P₂',
    nome: 'ADP (adenosina difosfato)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₇H₆O₃',
    nome: 'Ácido salicílico'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₉H₁₃NO₃',
    nome: 'Adrenalina (epinefrina)'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₈H₁₁NO₂',
    nome: 'Dopamina'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₁₀H₁₄N₂',
    nome: 'Nicotina'
  },
  {
    elementos: ['H', 'N'],
    formula: 'NH₂OH',
    nome: 'Hidroxilamina'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₄H₈N₂O₃',
    nome: 'Ureia'
  },
  {
    elementos: ['S', 'O'],
    formula: 'SO₂',
    nome: 'Dióxido de enxofre'
  },
  {
    elementos: ['S', 'O'],
    formula: 'SO₃',
    nome: 'Trióxido de enxofre'
  },
  {
    elementos: ['N', 'O'],
    formula: 'NO₂',
    nome: 'Dióxido de nitrogênio'
  },
  {
    elementos: ['N', 'O'],
    formula: 'N₂O',
    nome: 'Óxido nitroso (gás do riso)'
  },
  {
    elementos: ['C', 'H', 'Cl'],
    formula: 'CH₂Cl₂',
    nome: 'Diclorometano'
  },
  {
    elementos: ['C', 'H', 'F', 'O'],
    formula: 'C₂HF₃O₂',
    nome: 'Ácido trifluoroacético'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₃H₆O',
    nome: 'Acetona (propanona)'
  },
  {
    elementos: ['C', 'H', 'N', 'O', 'S'],
    formula: 'C₅H₉NO₄S',
    nome: 'Metionina (aminoácido essencial)'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₂H₂',
    nome: 'Etino (acetileno)'
  },
  {
    elementos: ['P', 'O'],
    formula: 'P₂O₅',
    nome: 'Pentóxido de difósforo'
  },
  {
    elementos: ['C', 'O'],
    formula: 'CO',
    nome: 'Monóxido de carbono'
  },
  {
    elementos: ['H', 'Br'],
    formula: 'HBr',
    nome: 'Ácido bromídrico'
  },
  {
    elementos: ['C', 'H', 'O'],
    formula: 'C₂H₄',
    nome: 'Eteno (etileno)'
  },
  {
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₁₀H₁₄N₂O₈',
  nome: 'EDTA (ácido etilenodiamino tetra-acético)'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₆H₆',
  nome: 'Benzeno'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₈H₁₈',
  nome: 'Octano'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₉H₈O₄',
  nome: 'Ácido acetilsalicílico (aspirina)'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₆H₆N₂O',
  nome: 'Paracetamol'
},
{
  elementos: ['C', 'H', 'N', 'O', 'S'],
  formula: 'C₁₆H₁₉N₃O₄S',
  nome: 'Amoxicilina'
},
{
  elementos: ['C', 'H', 'Cl'],
  formula: 'CH₃Cl',
  nome: 'Clorometano'
},
{
  elementos: ['C', 'H', 'F'],
  formula: 'CHF₃',
  nome: 'Trifluorometano (refrigerante HFC-23)'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₂H₂',
  nome: 'Etino (acetileno)'
},
{
  elementos: ['H', 'N'],
  formula: 'N₂H₄',
  nome: 'Hidrazina'
},
{
  elementos: ['S', 'O'],
  formula: 'SO₂',
  nome: 'Dióxido de enxofre'
},
{
  elementos: ['S', 'O'],
  formula: 'SO₃',
  nome: 'Trióxido de enxofre'
},
{
  elementos: ['N', 'O'],
  formula: 'NO₂',
  nome: 'Dióxido de nitrogênio'
},
{
  elementos: ['N', 'O'],
  formula: 'N₂O',
  nome: 'Óxido nitroso (gás do riso)'
},
{
  elementos: ['C', 'H', 'Cl', 'F'],
  formula: 'C₂Cl₃F₃',
  nome: 'Halotano (anestésico)'
},
{
  elementos: ['H', 'I'],
  formula: 'HI',
  nome: 'Ácido iodídrico'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₂H₆O',
  nome: 'Metanol (álcool metílico)'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₃H₈O',
  nome: 'Propanol'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₉H₉NO',
  nome: 'Paracetamol'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₈H₈',
  nome: 'Estireno'
},
{
  elementos: ['H', 'F'],
  formula: 'HF',
  nome: 'Ácido fluorídrico'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₄H₁₀O',
  nome: 'Éter etílico (éter dietílico)'
},
{
  elementos: ['Ca', 'O'],
  formula: 'CaO',
  nome: 'Óxido de cálcio (cal viva)'
},
{
  elementos: ['Ba', 'Cl'],
  formula: 'BaCl₂',
  nome: 'Cloreto de bário'
},
{
  elementos: ['C', 'H', 'N', 'O', 'S'],
  formula: 'C₇H₉NO₂S',
  nome: 'Sulfametoxazol'
},
{
  elementos: ['C', 'H', 'N', 'O', 'Cl'],
  formula: 'C₁₆H₁₉ClN₂O₄',
  nome: 'Cloranfenicol'
},
{
  elementos: ['Fe', 'S', 'O'],
  formula: 'FeSO₄',
  nome: 'Sulfato ferroso'
},
{
  elementos: ['Zn', 'S'],
  formula: 'ZnS',
  nome: 'Sulfeto de zinco'
},
{
  elementos: ['Mg', 'SO₄'],
  formula: 'MgSO₄',
  nome: 'Sulfato de magnésio (sal de Epsom)'
},
{
  elementos: ['K', 'Mn', 'O'],
  formula: 'KMnO₄',
  nome: 'Permanganato de potássio'
},
{
  elementos: ['H', 'I'],
  formula: 'HI',
  nome: 'Ácido iodídrico'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₂H₆O',
  nome: 'Metanol (álcool metílico)'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₃H₈O',
  nome: 'Propanol'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₉H₉NO',
  nome: 'Paracetamol'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₈H₈',
  nome: 'Estireno'
},
{
  elementos: ['H', 'F'],
  formula: 'HF',
  nome: 'Ácido fluorídrico'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₄H₁₀O',
  nome: 'Éter etílico (éter dietílico)'
},
{
  elementos: ['Ca', 'O'],
  formula: 'CaO',
  nome: 'Óxido de cálcio (cal viva)'
},
{
  elementos: ['Ba', 'Cl'],
  formula: 'BaCl₂',
  nome: 'Cloreto de bário'
},
{
  elementos: ['C', 'H', 'N', 'O', 'S'],
  formula: 'C₇H₉NO₂S',
  nome: 'Sulfametoxazol'
},
{
  elementos: ['C', 'H', 'N', 'O', 'Cl'],
  formula: 'C₁₆H₁₉ClN₂O₄',
  nome: 'Cloranfenicol'
},
{
  elementos: ['Fe', 'S', 'O'],
  formula: 'FeSO₄',
  nome: 'Sulfato ferroso'
},
{
  elementos: ['Zn', 'S'],
  formula: 'ZnS',
  nome: 'Sulfeto de zinco'
},
{
  elementos: ['Mg', 'SO₄'],
  formula: 'MgSO₄',
  nome: 'Sulfato de magnésio (sal de Epsom)'
},
{
  elementos: ['K', 'Mn', 'O'],
  formula: 'KMnO₄',
  nome: 'Permanganato de potássio'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₈H₁₀N₄O₂',
  nome: 'Cafeína'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₁₇H₂₁NO₄',
  nome: 'Cocaína'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₂₀H₂₅N₃O',
  nome: 'LSD (ácido lisérgico dietilamida)'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₂₁H₃₀O₂',
  nome: 'THC (tetraidrocanabinol)'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₂H₆O',
  nome: 'Etanol (álcool comum)'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₁₆H₁₃ClN₂O',
  nome: 'Diazepam (Valium)'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₁₇H₁₉NO₃',
  nome: 'Morfina'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₂₁H₂₃NO₅',
  nome: 'Codeína'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₇H₆O₂',
  nome: 'Ácido benzoico'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₉H₈O₄',
  nome: 'Ácido acetilsalicílico (aspirina)'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₃H₄O₃',
  nome: 'Ácido pirúvico'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₆H₆',
  nome: 'Benzeno'
},
{
  elementos: ['C', 'H', 'Cl'],
  formula: 'C₆H₅Cl',
  nome: 'Clorobenzeno'
},
{
  elementos: ['C', 'H', 'O'],
  formula: 'C₇H₈',
  nome: 'Tolueno'
},
{
  elementos: ['C', 'H', 'N', 'O'],
  formula: 'C₁₉H₂₁NO₃',
  nome: 'Naloxona'
},
];

function criarTabelaPeriodica(elementos) {
  const tabela = document.createElement('table');
  tabela.classList.add('tabela-periodica');


  const combinacaoDiv = document.createElement('div');
  combinacaoDiv.id = 'area-combinacao';
  combinacaoDiv.style.position = 'absolute';
  combinacaoDiv.style.top = '80px';
  combinacaoDiv.style.right = '40px';
  combinacaoDiv.style.width = '500px';
  combinacaoDiv.style.minHeight = '650px';
  combinacaoDiv.style.border = '2px dashed #888';
  combinacaoDiv.style.borderRadius = '10px';
  combinacaoDiv.style.background = '#fbfbfb';
  combinacaoDiv.style.padding = '10px';
  combinacaoDiv.innerHTML = '<strong style="font-size: 40px;">Arraste Elementos Aqui!</strong><div id="elementos-combinados" style="margin-top:10px; min-height:40px;"></div>';
  document.body.appendChild(combinacaoDiv);

  // Botão para mostrar resultado
  const btnCombinar = document.createElement('button');
  btnCombinar.textContent = 'Mostrar Junção';
  btnCombinar.style.marginTop = '250px';
  btnCombinar.style.display = 'block';
  btnCombinar.style.position = 'fixed';
  btnCombinar.style.padding = '10px';
  btnCombinar.style.fontSize = '28px';
  combinacaoDiv.appendChild(btnCombinar);

  // Botão para resetar combinação
  const btnReset = document.createElement('button');
  btnReset.textContent = 'Resetar';
  btnReset.style.marginTop = '310px';
  btnReset.style.display = 'block';
  btnReset.style.background = '#ffdddd';
  btnReset.style.color = '#a00';
  btnReset.style.padding = '10px';
  btnReset.style.fontSize = '28px';
  btnReset.style.border = '1px solid #a00';
  btnReset.style.borderRadius = '5px';
  combinacaoDiv.appendChild(btnReset);


  const resultadoDiv = document.createElement('div');
  resultadoDiv.id = 'resultado-juncao';
  resultadoDiv.style.marginTop = '15px';
  resultadoDiv.style.fontWeight = 'bold';
  resultadoDiv.style.fontSize = '2em';
  combinacaoDiv.appendChild(resultadoDiv);


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
      const elDiv = document.createElement('span');
      elDiv.textContent = elemento.simbolo;
      elDiv.style.margin = '0 5px';
      elDiv.style.width = '60px';
      elDiv.style.marginTop = '10px';
      elDiv.style.height = '60px';
      elDiv.style.lineHeight = '60px';
      elDiv.style.textAlign = 'center';
      elDiv.style.display = 'inline-block';
      elDiv.style.fontSize = '30px';
      elDiv.style.background = elemento.corGrupo || '#fff';
      elDiv.style.borderRadius = '5px';
      elDiv.style.border = '1px solid #ccc';
      elDiv.setAttribute('data-simbolo', elemento.simbolo);
      document.getElementById('elementos-combinados').appendChild(elDiv);
    }
  });

  btnCombinar.onclick = () => {
    const combinados = Array.from(document.querySelectorAll('#elementos-combinados span')).map(el => el.getAttribute('data-simbolo'));

    if (combinados.length === 0) {
      resultadoDiv.textContent = 'Nenhum elemento selecionado!';
      return;
    }

    // Ordena para facilitar a comparação
    const combinadosOrdenados = [...combinados].sort();

    // Procura uma combinação química conhecida
    const combinacao = combinacoesQuimicas.find(c => {
      // Ordena os elementos da combinação conhecida
      const elementosOrdenados = [...c.elementos].sort();
      // Verifica se são iguais
      return JSON.stringify(combinadosOrdenados) === JSON.stringify(elementosOrdenados);
    });

    if (combinacao) {
      resultadoDiv.innerHTML = `<strong>Fórmula: ${combinacao.formula}<br>Nome: <em>${combinacao.nome}</em></strong>`;
    } else {
      resultadoDiv.textContent = 'Junção desconhecida: ' + combinados.join(' + ');
    }
  };

  btnReset.onclick = () => {
    document.getElementById('elementos-combinados').innerHTML = '';
    resultadoDiv.textContent = '';
  };

  const infoDiv = document.createElement('div');
  infoDiv.id = 'info-elemento';
  infoDiv.style.position = 'absolute';
  infoDiv.style.top = '107px';
  infoDiv.style.left = '27%';
  infoDiv.style.transform = 'translateX(-50%)';
  infoDiv.style.padding = '20px';
  infoDiv.style.border = '2px solid';
  infoDiv.style.borderRadius = '10px';
  infoDiv.style.backgroundColor = '#F9F9F9';
  infoDiv.style.fontFamily = 'Arial, sans-serif';
  infoDiv.style.fontSize = '22px'; // ou maior, conforme desejar
  infoDiv.style.color = '#333';
  infoDiv.style.width = '400px';
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

        // Torna o elemento arrastável
        td.draggable = true;
        td.addEventListener('dragstart', e => {
          e.dataTransfer.setData('simbolo', elemento.simbolo);
        });

        td.addEventListener('mouseover', () => {
          if (!infoFixa) {
            infoDiv.style.display = 'block';
            infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
            infoDiv.innerHTML = `
              <h2 style=" margin: 0; color: ${elemento.corGrupo};">${elemento.nome}</h2>
              <p style="margin: 10px 0; font-size: 14px;">
                <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
                <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
                <strong>Símbolo:</strong> ${elemento.simbolo}<br>
                <strong>Família:</strong> ${elemento.grupo}<br>
              </p>
              <div class="imagem-elemento" style="background-color:${elemento.corGrupo};">
              <h2 style="margin-top: 10px;">${elemento.simbolo}</h2>
              <h3>${elemento.nome}</h3
              <h3 style="margin-right: 100px;">${elemento.numeroAtomico}</h3>
              </div>
            `;
          }
        });

        td.addEventListener('mouseout', () => {
          if (!infoFixa) {
            infoDiv.style.display = 'none';
          }
        });

        td.addEventListener('click', () => {
          if (infoFixa && infoDiv.innerHTML.includes(elemento.nome)) {
            infoFixa = false;
            infoDiv.style.display = 'none';
          } else {
            infoFixa = true;
            infoDiv.style.display = 'block';
            infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
            infoDiv.innerHTML = `
                 <h2 style=" margin: 0; color: ${elemento.corGrupo};">${elemento.nome}</h2>
              <p style="margin: 10px 0; font-size: 14px;">
                <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
                <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
                <strong>Símbolo:</strong> ${elemento.simbolo}<br>
                <strong>Família:</strong> ${elemento.grupo}<br>
              </p>
              <div class="imagem-elemento" style="background-color:${elemento.corGrupo};">
              <h2 style="margin-top: 10px;">${elemento.simbolo}</h2>
              <h3>${elemento.nome}</h3
              <h4>${elemento.numeroAtomico}</h4>
              </div>
            `;
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
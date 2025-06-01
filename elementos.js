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
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₁₈H₂₁NO₃',
    nome: 'Naltrexona'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₁₈H₂₃NO₃',
    nome: 'Fentanil'
  },
  {
    elementos: ['C', 'H', 'N', 'O'],
    formula: 'C₁₉H₂₃NO₃',
    nome: 'Metadona'
  }
];
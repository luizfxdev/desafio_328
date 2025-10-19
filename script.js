// Elementos DOM
const oniPowerInput = document.getElementById('oni-power');
const artifactsInput = document.getElementById('artifacts');
const calculateBtn = document.getElementById('calculate-btn');
const returnBtn = document.getElementById('return-btn');
const resultContent = document.getElementById('result-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função principal para encontrar a combinação de artefatos
function findArtifactCombination(targetPower, artifacts) {
  const n = artifacts.length;
  let bestCombination = null;
  let maxArtifacts = 0;

  // Tentar todas as combinações possíveis usando bitmask
  for (let mask = 1; mask < 1 << n; mask++) {
    let sum = 0;
    let combination = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        sum += artifacts[i];
        combination.push(artifacts[i]);
        count++;
      }
    }

    // Se a soma é exata e usa mais artefatos que a melhor encontrada
    if (sum === targetPower && count > maxArtifacts) {
      maxArtifacts = count;
      bestCombination = combination;
    }
  }

  return bestCombination;
}

// Função para exibir o resultado com animação
function displayResult(targetPower, artifacts, result) {
  resultContent.innerHTML = '';

  // Passo 1: Mostrar dados de entrada
  const step1 = document.createElement('div');
  step1.className = 'calculation-step';
  step1.innerHTML = `<strong>📊 Dados de Entrada:</strong><br>
        Poder de Ataque do Oni: <span style="color: #ff6b6b; font-weight: bold;">${targetPower}</span><br>
        Artefatos Disponíveis: [${artifacts.join(', ')}]`;
  resultContent.appendChild(step1);

  setTimeout(() => {
    // Passo 2: Processo de busca
    const step2 = document.createElement('div');
    step2.className = 'calculation-step';
    step2.innerHTML = `<strong>🔍 Processo de Busca:</strong><br>
            Analisando todas as combinações possíveis...<br>
            Total de combinações verificadas: <span style="color: #00ffff;">${
              Math.pow(2, artifacts.length) - 1
            }</span>`;
    resultContent.appendChild(step2);

    setTimeout(() => {
      if (result) {
        // Passo 3: Combinação encontrada
        const step3 = document.createElement('div');
        step3.className = 'calculation-step';
        step3.innerHTML = `<strong>✨ Combinação Encontrada:</strong><br>
                    Artefatos selecionados: [${result.join(', ')}]<br>
                    Quantidade de artefatos: <span style="color: #00ff88;">${result.length}</span>`;
        resultContent.appendChild(step3);

        setTimeout(() => {
          // Passo 4: Validação
          const sum = result.reduce((a, b) => a + b, 0);
          const step4 = document.createElement('div');
          step4.className = 'calculation-step';

          let calculation = result.join(' + ') + ' = ' + sum;
          step4.innerHTML = `<strong>🧮 Validação:</strong><br>
                        ${calculation}<br>
                        Poder alcançado: <span style="color: #00ff88;">${sum}</span> = Poder necessário: <span style="color: #ff6b6b;">${targetPower}</span> ✓`;
          resultContent.appendChild(step4);

          setTimeout(() => {
            // Resultado final
            const finalResult = document.createElement('div');
            finalResult.className = 'final-result';
            finalResult.innerHTML = `⚔️ MISSÃO COMPLETA! ⚔️<br>
                            <div style="margin-top: 10px;">Artefatos Necessários:</div>
                            <div class="artifact-list">
                                ${result.map(art => `<span class="artifact-item">${art}</span>`).join('')}
                            </div>`;
            resultContent.appendChild(finalResult);
          }, 500);
        }, 500);
      } else {
        // Missão impossível
        setTimeout(() => {
          const impossible = document.createElement('div');
          impossible.className = 'mission-impossible';
          impossible.innerHTML = `❌ MISSÃO IMPOSSÍVEL! ❌<br>
                        <div style="font-size: 14px; margin-top: 10px; color: #ffaaaa;">
                        Não existe combinação de artefatos que atinja exatamente o poder necessário de ${targetPower}.
                        </div>`;
          resultContent.appendChild(impossible);
        }, 500);
      }
    }, 500);
  }, 500);
}

// Event listener para o botão CALCULAR
calculateBtn.addEventListener('click', () => {
  const targetPower = parseInt(oniPowerInput.value);
  const artifactsStr = artifactsInput.value;

  // Validação de entrada
  if (!targetPower || targetPower <= 0) {
    resultContent.innerHTML =
      '<div class="calculation-step" style="border-left-color: #ff6b6b;">❌ Por favor, insira um Poder de Ataque válido (maior que 0).</div>';
    return;
  }

  if (!artifactsStr.trim()) {
    resultContent.innerHTML =
      '<div class="calculation-step" style="border-left-color: #ff6b6b;">❌ Por favor, insira os artefatos mágicos.</div>';
    return;
  }

  // Processar artefatos
  const artifacts = artifactsStr
    .split(',')
    .map(s => parseInt(s.trim()))
    .filter(n => !isNaN(n) && n > 0);

  if (artifacts.length === 0) {
    resultContent.innerHTML =
      '<div class="calculation-step" style="border-left-color: #ff6b6b;">❌ Nenhum artefato válido foi detectado. Use números positivos separados por vírgula.</div>';
    return;
  }

  // Encontrar combinação
  const result = findArtifactCombination(targetPower, artifacts);

  // Exibir resultado com animação
  displayResult(targetPower, artifacts, result);
});

// Event listener para o botão RETORNAR
returnBtn.addEventListener('click', () => {
  // Limpar inputs
  oniPowerInput.value = '';
  artifactsInput.value = '';

  // Limpar resultado com animação
  resultContent.style.animation = 'fadeOut 0.3s ease';

  setTimeout(() => {
    resultContent.innerHTML = '<div class="empty">Aguardando cálculo...</div>';
    resultContent.style.animation = 'fadeIn 0.3s ease';
  }, 300);
});

// Inicializar com mensagem vazia
resultContent.innerHTML = '<div class="empty">Aguardando cálculo...</div>';

// Permitir Enter para calcular
oniPowerInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') calculateBtn.click();
});

artifactsInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') calculateBtn.click();
});

# ⚔️ A Jornada do Herói: Em Busca dos Artefatos Mágicos

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Demon Slayer](https://img.shields.io/badge/Demon_Slayer-FF6B6B?style=for-the-badge&logo=crunchyroll&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/luizfxdev/desafio_328?style=social)](https://github.com/luizfxdev/desafio_328)

## 📖 Sobre o Desafio

Inspirado no universo de **Demon Slayer (Kimetsu no Yaiba)**, este desafio apresenta uma aplicação web interativa onde Tanjiro Kamado precisa encontrar a combinação perfeita de artefatos mágicos para derrotar um Oni poderoso.

O objetivo é encontrar, entre todos os artefatos disponíveis, a combinação que atinja **exatamente** o poder necessário, priorizando aquela que use o **maior número possível de artefatos**.

## 🎯 O Problema

Dado um valor de Poder de Ataque (PA) do Oni e uma lista de artefatos com diferentes níveis de poder, determine quais artefatos devem ser combinados para alcançar exatamente o poder necessário. Se não houver combinação possível, retorne "Missão Impossível!".

### Exemplo

**Entrada:**
- PA do Oni: `25`
- Artefatos: `[12, 1, 19, 4, 14, 8]`

**Saída:**
- `[12, 1, 4, 8]`

**Explicação:** A soma 12 + 1 + 4 + 8 = 25, usando 4 artefatos (a maior quantidade possível).

## ✨ Funcionalidades

- 🎬 **Background Animado**: Vídeo de fundo com Tanjiro Kamado em ação
- 🎵 **Trilha Sonora Temática**: Música "Kamado Tanjirou no Uta" (Akano)
- 🎮 **Interface Interativa**: Design moderno inspirado nos tons aquáticos da Respiração da Água
- 📊 **Resultado Detalhado**: Exibição passo a passo do processo de cálculo
- 🔄 **Animações Suaves**: Transições e efeitos visuais envolventes
- 📱 **Design Responsivo**: Adaptável para desktop, tablet e mobile
- 🎨 **Efeitos Visuais**: Botões com glow effect e animações pulsantes

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com animações e gradientes
- **JavaScript Vanilla**: Lógica de algoritmo e manipulação DOM
- **Algoritmo de Busca**: Bit Masking para encontrar todas as combinações possíveis

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/luizfxdev/desafio_328.git
cd desafio_328
```

2. Certifique-se de ter a seguinte estrutura:
```
projeto/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── background.mp4
    └── theme.mp3
```

3. Abra o arquivo `index.html` em seu navegador preferido

## 📝 Como Usar

1. **Insira o Poder de Ataque do Oni** (ex: 25)
2. **Digite os artefatos disponíveis** separados por vírgula (ex: 12, 1, 19, 4, 14, 8)
3. Clique em **CALCULAR** para ver o resultado
4. Use **RETORNAR** para limpar e fazer um novo cálculo

## 🎨 Design

O design foi inspirado na **Respiração da Água (Water Breathing)** de Tanjiro, com:
- Tons de azul aquático (#00d4ff, #00ffff)
- Efeitos de brilho e pulsação
- Transparências e backdrop blur
- Animações fluidas como a água

## 🧮 Algoritmo

O algoritmo utiliza **Bit Masking** para:
1. Gerar todas as combinações possíveis de artefatos (2^n - 1 combinações)
2. Verificar quais combinações atingem o poder exato
3. Selecionar a combinação com o maior número de artefatos
4. Complexidade: O(2^n × n)

## 📊 Exemplos Adicionais

### Exemplo 2
- **Entrada**: PA = 50, Artefatos = [10, 15, 20, 5, 25, 30]
- **Saída**: [10, 15, 20, 5]

### Exemplo 3
- **Entrada**: PA = 100, Artefatos = [25, 30, 15, 40, 10, 20, 35]
- **Saída**: [25, 30, 15, 10, 20]

### Exemplo 4
- **Entrada**: PA = 33, Artefatos = [7, 3, 11, 6, 9, 2, 8]
- **Saída**: [7, 3, 11, 6, 2]

### Exemplo 5
- **Entrada**: PA = 15, Artefatos = [5, 10, 20, 30]
- **Saída**: [5, 10]

## 🎭 Créditos

- **Anime**: Demon Slayer: Kimetsu no Yaiba (Koyoharu Gotouge)
- **Música**: "Kamado Tanjirou no Uta" - Akano
- **Desenvolvimento**: [Luiz FX](https://luizfxdev.com.br)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📬 Contato

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [luizfxdev](https://www.linkedin.com/in/luizfxdev)

---

⚔️ **"Não desista até o fim!"** - Tanjiro Kamado

![Demon Slayer](https://img.shields.io/badge/Made_with-💙-blue?style=for-the-badge)

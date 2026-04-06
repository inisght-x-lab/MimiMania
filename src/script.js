    // ============================================================
    // DEFAULT WORD BANK — keyed by difficulty → category
    // ============================================================
    const DEFAULT_WORDS = {
      easy: {
        objects: [
          'Bola', 'Copo', 'Chapéu', 'Sapato', 'Livro', 'Cadeira', 'Mesa', 'Cama', 'Porta', 'Janela',
          'Lápis', 'Borracha', 'Mochila', 'Óculos', 'Guarda-chuva', 'Telefone', 'Espelho', 'Escova', 'Pente', 'Tesoura',
          'Chave', 'Garfo', 'Colher', 'Prato', 'Garrafa', 'Almofada', 'Cobertor', 'Toalha', 'Sabão', 'Balão',
          'Boneca', 'Carrinho', 'Pipoca', 'Sorvete', 'Bolo', 'Maçã', 'Banana', 'Uva', 'Flor', 'Árvore',
          'Sol', 'Lua', 'Estrela', 'Nuvem', 'Chuva', 'Guarda-roupa', 'Armário', 'Geladeira', 'Fogão', 'Televisão'
        ],
        actions: [
          'Correr', 'Pular', 'Dormir', 'Comer', 'Beber', 'Rir', 'Chorar', 'Dançar', 'Cantar', 'Nadar',
          'Voar', 'Andar', 'Sentar', 'Levantar', 'Abraçar', 'Brincar', 'Desenhar', 'Pintar', 'Ler', 'Escrever',
          'Ouvir', 'Gritar', 'Soprar', 'Respirar', 'Tossir', 'Espirrar', 'Bocejar', 'Aplaudir', 'Acenar', 'Apontar',
          'Pegar', 'Jogar', 'Chutar', 'Empurrar', 'Puxar', 'Abrir', 'Fechar', 'Lavar mãos', 'Escovar dentes', 'Pentear',
          'Calçar sapato', 'Tirar sapato', 'Ligar TV', 'Apagar luz', 'Bater palma', 'Girar', 'Rolar', 'Beijar', 'Sorrir', 'Pensar'
        ],
        animals: [
          'Cachorro', 'Gato', 'Peixe', 'Passarinho', 'Coelho', 'Galinha', 'Vaca', 'Cavalo', 'Porco', 'Ovelha',
          'Pato', 'Sapo', 'Borboleta', 'Formiga', 'Abelha', 'Aranha', 'Minhoca', 'Lesma', 'Caracol', 'Lagarta',
          'Elefante', 'Leão', 'Girafa', 'Macaco', 'Zebra', 'Hipopótamo', 'Crocodilo', 'Tartaruga', 'Pinguim', 'Urso',
          'Lobo', 'Raposa', 'Veado', 'Esquilo', 'Rato', 'Hamster', 'Iguana', 'Papagaio', 'Tucano', 'Flamingo',
          'Pelicano', 'Canguru', 'Koala', 'Panda', 'Golfinho', 'Baleia', 'Polvo', 'Caranguejo', 'Camarão', 'Estrela-do-mar'
        ]
      },
      normal: {
        objects: [
          'Computador', 'Teclado', 'Rádio', 'Máquina de lavar', 'Aspirador', 'Liquidificador', 'Batedeira', 'Cafeteira', 'Sofá', 'Estante',
          'Ventilador', 'Ar-condicionado', 'Micro-ondas', 'Forno', 'Pia', 'Banheira', 'Chuveiro', 'Mala', 'Lanterna', 'Binóculo',
          'Câmera', 'Relógio', 'Calculadora', 'Termômetro', 'Balança', 'Bússola', 'Violão', 'Piano', 'Tambor', 'Flauta',
          'Sanfona', 'Trompete', 'Violino', 'Gaita', 'Xilofone', 'Raquete', 'Skate', 'Patins', 'Luva de boxe', 'Capacete',
          'Colete', 'Cinto', 'Gravata', 'Bolsa', 'Guarda-chuva', 'Bengala', 'Muleta', 'Cadeira de rodas', 'Óculos de sol', 'Boné'
        ],
        actions: [
          'Cozinhar', 'Dirigir', 'Pedalar', 'Pescar', 'Mergulhar', 'Escalar', 'Acampar', 'Fazer ioga', 'Meditar', 'Fotografar',
          'Filmar', 'Pintar quadro', 'Esculpir', 'Tricotar', 'Costurar', 'Bordar', 'Jardinagem', 'Regar planta', 'Podar árvore', 'Varrer',
          'Limpar janela', 'Passar roupa', 'Dobrar roupa', 'Fazer cama', 'Lavar louça', 'Secar louça', 'Descascar fruta', 'Ralar queijo', 'Amassar pão', 'Remar',
          'Surfar', 'Esquiar', 'Patinar', 'Driblar', 'Arremessar', 'Defender gol', 'Servir tênis', 'Fazer ginástica', 'Aplaudir', 'Discursar',
          'Entrevistar', 'Escalar parede', 'Fazer mágica', 'Equilibrar', 'Malabarismo', 'Digitar', 'Telefonar', 'Tirar selfie', 'Pagar conta', 'Fazer fila'
        ],
        animals: [
          'Águia', 'Falcão', 'Coruja', 'Morcego', 'Camelo', 'Lhama', 'Alpaca', 'Bisão', 'Alce', 'Coyote',
          'Guepardo', 'Leopardo', 'Jaguar', 'Puma', 'Rinoceronte', 'Anaconda', 'Ornitorrinco', 'Dingo', 'Cacatua', 'Emu',
          'Orca', 'Tubarão', 'Arraia', 'Lula', 'Cavalo-marinho', 'Ouriço-do-mar', 'Arara', 'Pavão', 'Avestruz', 'Casuar',
          'Albatroz', 'Cegonha', 'Pelicano', 'Íbis', 'Garça', 'Lontra', 'Foca', 'Morsa', 'Leão-marinho', 'Dugongo',
          'Cabra-da-montanha', 'Íbex', 'Antílope', 'Gnu', 'Búfalo', 'Javali', 'Texugo', 'Guaxinim', 'Furão', 'Musaranho'
        ]
      },
      hard: {
        objects: [
          'Estetoscópio', 'Bisturi', 'Microscópio', 'Telescópio', 'Sextante', 'Astrolábio', 'Cronômetro', 'Metrônomo', 'Afinador', 'Desfibrilador',
          'Catapulta', 'Periscópio', 'Destilador', 'Centrífuga', 'Incubadora', 'Autoclave', 'Espectrômetro', 'Cromatógrafo', 'Calorômetro', 'Potenciômetro',
          'Fisga', 'Arpão', 'Bumerangue', 'Arco e flecha', 'Besta', 'Lança', 'Maça', 'Machado', 'Foice', 'Tridente',
          'Sanduicheira', 'Desidratador', 'Fermentador', 'Slow cooker', 'Wok', 'Tagine', 'Fondue', 'Churrasqueira', 'Defumador', 'Alambique',
          'Teodolito', 'Altímetro', 'Barômetro', 'Higrômetro', 'Anemômetro', 'Pluviômetro', 'Sismógrafo', 'Gerador', 'Transformador', 'Osciloscópio'
        ],
        actions: [
          'Equilibrar na corda bamba', 'Engolir fogo', 'Escapar de camisa de força', 'Quebrar tijolos com a mão',
          'Andar sobre brasas', 'Ler braille', 'Fazer sinalização de mergulho', 'Comunicar em libras', 'Código morse', 'Tocar instrumento com os pés',
          'Extrair dente', 'Fazer cirurgia', 'Ressuscitar', 'Imobilizar fratura', 'Aplicar torniquete',
          'Fazer esgrima', 'Praticar tai chi', 'Golpe de caratê', 'Arremesso de martelo', 'Lançamento de dardo olímpico',
          'Arar terra', 'Ordenhar vaca', 'Tosquiar ovelha', 'Ferrar cavalo', 'Domar boi',
          'Tecer no tear', 'Soprar vidro', 'Forjar metal', 'Moldar cerâmica no torno', 'Restaurar quadro',
          'Decolar avião', 'Pousar helicóptero', 'Navegar barco a vela', 'Operar guindaste', 'Conduzir trem',
          'Fazer rapel', 'Alpinismo em rocha', 'Tirolesa', 'Escalada livre', 'Slackline',
          'Desativar bomba', 'Negociar reféns', 'Paraquedismo', 'Corrida de obstáculos', 'Levantamento de peso olímpico'
        ],
        animals: [
          'Axolote', 'Tarsídeo', 'Fossa', 'Quokka', 'Numbat', 'Kakapo', 'Tuátara', 'Okapi', 'Takin', 'Saiga',
          'Dugongo', 'Manatim', 'Narval', 'Beluga', 'Cachalote', 'Rorcual', 'Jubarte', 'Boto', 'Toninha', 'Franciscana',
          'Escorpião', 'Tarântula', 'Mamba-negra', 'Taipan', 'Cobra-de-coral', 'Viperão', 'Cascavel', 'Boomslang', 'Lula-gigante', 'Polvo-de-anéis-azuis',
          'Baiacu', 'Peixe-pedra', 'Peixe-leão', 'Cone-do-mar', 'Medusa-da-caixa', 'Vespa-asiática', 'Besouro-bombardeiro', 'Mosquito-tigre', 'Formiga-bala', 'Lagarta-de-fogo',
          'Pangolim', 'Aye-aye', 'Loris-lento', 'Tatu-bola', 'Tatu-gigante', 'Tamanduá-bandeira', 'Preguiça-de-três-dedos', 'Ouriço-pigmeu', 'Musaranho-elefante', 'Marta-pinheira'
        ]
      }
    };

    let wordBank = JSON.parse(localStorage.getItem('mm_words_v2') || 'null') || JSON.parse(JSON.stringify(DEFAULT_WORDS));

    let gameState = {
      mode: 'teams', difficulty: 'easy',
      teams: { A: [], B: [] }, players: [],
      scores: {}, currentPlayerIdx: 0,
      currentRound: 1, totalRounds: 3,
      currentWord: null, usedWords: [],
      timerDur: 60, timerInterval: null, memInterval: null,
      timerLeft: 60, hintShown: false, wordVisible: false,
      phase: 'preparing', totalTurns: 0, turnsDone: 0
    };

    // ============================================================
    // STARS
    // ============================================================
    (function () {
      const c = document.getElementById('stars');
      for (let i = 0; i < 60; i++) {
        const s = document.createElement('div'); s.className = 'star';
        const sz = Math.random() * 2.5 + 0.5;
        s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--d:${(Math.random() * 4 + 2).toFixed(1)}s;--del:${(Math.random() * 4).toFixed(1)}s;--op:${(Math.random() * 0.5 + 0.3).toFixed(2)}`;
        c.appendChild(s);
      }
    })();

    // ============================================================
    // NAVIGATION
    // ============================================================
    function goTo(screen) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById('screen-' + screen).classList.add('active');
      if (screen === 'wordbank') { wbDiff = 'easy'; wbCat = 'all'; syncWBDiffUI(); syncWBCatUI(); renderWordBank(); }
      if (screen === 'setup') { renderSetupPlayers(); updateDiffWordCount(); }
    }

    // ============================================================
    // NOTIFICATIONS
    // ============================================================
    function showNotif(msg, color = 'var(--accent3)', textColor = '#0d4f17') {
      const el = document.getElementById('notif');
      el.textContent = msg; el.style.background = color; el.style.color = textColor;
      el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2400);
    }

    // ============================================================
    // DIFFICULTY (SETUP)
    // ============================================================
    const DIFF_META = {
      easy: { label: '🌱 Fácil', color: 'var(--diff-easy)' },
      normal: { label: '⚡ Normal', color: 'var(--diff-normal)' },
      hard: { label: '🔥 Difícil', color: 'var(--diff-hard)' }
    };

    function selectDifficulty(diff) {
      gameState.difficulty = diff;
      ['easy', 'normal', 'hard'].forEach(d =>
        document.getElementById('diff-' + d).classList.toggle('selected', d === diff)
      );
      updateDiffWordCount();
    }

    function updateDiffWordCount() {
      const bank = wordBank[gameState.difficulty] || {};
      let total = 0; Object.values(bank).forEach(arr => total += arr.length);
      document.getElementById('diff-word-count').textContent =
        `${DIFF_META[gameState.difficulty].label} · ${total} palavras disponíveis`;
    }

    // ============================================================
    // MODE
    // ============================================================
    function selectMode(mode) {
      gameState.mode = mode;
      document.getElementById('mode-teams').classList.toggle('selected', mode === 'teams');
      document.getElementById('mode-ffa').classList.toggle('selected', mode === 'ffa');
      document.getElementById('step-teams').style.display = mode === 'teams' ? '' : 'none';
      document.getElementById('step-ffa').style.display = mode === 'ffa' ? '' : 'none';
    }

    // ============================================================
    // PLAYERS
    // ============================================================
    function renderSetupPlayers() { renderTeamPlayers(); renderFFAPlayers(); }

    function renderTeamPlayers() {
      ['A', 'B'].forEach(t => {
        const cont = document.getElementById('team-' + t.toLowerCase() + '-players'); cont.innerHTML = '';
        (gameState.teams[t] || []).forEach((p, i) => {
          const color = t === 'A' ? 'var(--team1)' : 'var(--team2)';
          const el = document.createElement('div'); el.className = 'player-row';
          el.innerHTML = `<div class="player-avatar" style="background:${color}22;color:${color}">${p[0].toUpperCase()}</div><div style="flex:1;font-weight:800">${p}</div><button class="btn btn-ghost btn-sm" onclick="removeTeamPlayer('${t}',${i})">✕</button>`;
          cont.appendChild(el);
        });
      });
    }

    function addTeamPlayer(team) {
      const inp = document.getElementById('inp-team-' + team.toLowerCase());
      const name = inp.value.trim(); if (!name) return;
      const total = (gameState.teams.A || []).length + (gameState.teams.B || []).length;
      if (total >= 6) { showNotif('❌ Máximo 6 jogadores!', 'var(--accent1)', 'white'); return; }
      if ((gameState.teams[team] || []).length >= 3) { showNotif('❌ Máximo 3 por time!', 'var(--accent1)', 'white'); return; }
      if (!gameState.teams[team]) gameState.teams[team] = [];
      gameState.teams[team].push(name); inp.value = ''; renderTeamPlayers();
      showNotif(`✅ ${name} no Time ${team}!`);
    }

    function removeTeamPlayer(team, idx) { gameState.teams[team].splice(idx, 1); renderTeamPlayers(); }

    function renderFFAPlayers() {
      const cont = document.getElementById('ffa-players'); cont.innerHTML = '';
      (gameState.players || []).forEach((p, i) => {
        const n = p.name || p;
        const el = document.createElement('div'); el.className = 'player-row';
        el.innerHTML = `<div class="player-avatar" style="background:rgba(255,255,255,0.08);color:white">${n[0].toUpperCase()}</div><div style="flex:1;font-weight:800">${n}</div><button class="btn btn-ghost btn-sm" onclick="removeFFAPlayer(${i})">✕</button>`;
        cont.appendChild(el);
      });
    }

    function addFFAPlayer() {
      const inp = document.getElementById('inp-ffa');
      const name = inp.value.trim(); if (!name) return;
      if (!gameState.players) gameState.players = [];
      if (gameState.players.length >= 6) { showNotif('❌ Máximo 6 jogadores!', 'var(--accent1)', 'white'); return; }
      gameState.players.push(name); inp.value = ''; renderFFAPlayers();
      showNotif(`✅ ${name} entrou!`);
    }

    function removeFFAPlayer(idx) { gameState.players.splice(idx, 1); renderFFAPlayers(); }

    // ============================================================
    // START GAME
    // ============================================================
    function startGame() {
      const rounds = parseInt(document.getElementById('rounds-slider').value);
      gameState.totalRounds = rounds;
      gameState.timerDur = parseInt(document.getElementById('timer-slider').value) || 60;

      if (gameState.mode === 'teams') {
        const a = gameState.teams.A || [], b = gameState.teams.B || [];
        if (a.length < 1 || b.length < 1) { showNotif('❌ Mínimo 1 por time!', 'var(--accent1)', 'white'); return; }
        gameState.players = [];
        const maxLen = Math.max(a.length, b.length);
        for (let i = 0; i < maxLen; i++) {
          if (i < a.length) gameState.players.push({ name: a[i], team: 'A' });
          if (i < b.length) gameState.players.push({ name: b[i], team: 'B' });
        }
        gameState.scores = { teamA: 0, teamB: 0 };
        a.forEach(p => gameState.scores[p] = 0);
        b.forEach(p => gameState.scores[p] = 0);
      } else {
        if (!gameState.players || gameState.players.length < 3) { showNotif('❌ Mínimo 3 jogadores!', 'var(--accent1)', 'white'); return; }
        const players = [...gameState.players];
        gameState.players = players.map(p => ({ name: p.name || p, team: null }));
        gameState.scores = {};
        players.forEach(p => gameState.scores[p.name || p] = 0);
      }

      gameState.currentPlayerIdx = 0; gameState.currentRound = 1;
      gameState.usedWords = []; gameState.turnsDone = 0;
      gameState.totalTurns = gameState.players.length * rounds;
      initTurn(); goTo('game');
    }

    // ============================================================
    // TURN
    // ============================================================
    function initTurn() {
      gameState.phase = 'preparing';
      const player = gameState.players[gameState.currentPlayerIdx];
      const roundNum = Math.floor(gameState.turnsDone / gameState.players.length) + 1;
      document.getElementById('round-display').textContent = `Rodada ${roundNum} de ${gameState.totalRounds}`;
      document.getElementById('current-player-name').textContent = player.name || player;
      const badge = document.getElementById('current-team-badge');
      if (player.team) {
        const color = player.team === 'A' ? 'var(--team1)' : 'var(--team2)';
        badge.innerHTML = `<span class="team-badge" style="background:${color}22;color:${color}">Time ${player.team === 'A' ? 'A 🔴' : 'B 🔵'}</span>`;
      } else badge.innerHTML = '';
      document.getElementById('preparing-state').style.display = '';
      document.getElementById('memorize-state').style.display = 'none';
      document.getElementById('playing-state').style.display = 'none';
      renderScoreMini();
    }

    // ============================================================
    // REVEAL + MEMORIZE
    // ============================================================
    function revealWord() {
      gameState.phase = 'memorizing';
      gameState.currentWord = pickWord();
      const catLabels = { objects: '🧸 Objeto', actions: '🏃 Ação', animals: '🐾 Animal' };
      document.getElementById('mem-word-display').textContent = gameState.currentWord.word;
      document.getElementById('hint-text').textContent = catLabels[gameState.currentWord.cat] || 'Palavra';
      document.getElementById('hint-banner').style.display = 'none';
      document.getElementById('word-display').textContent = gameState.currentWord.word;
      document.getElementById('word-hidden-placeholder').style.display = 'flex';
      document.getElementById('word-visible-content').style.display = 'none';
      document.getElementById('btn-toggle-word').textContent = '👁️ Mostrar palavra';
      gameState.wordVisible = false;

      document.getElementById('preparing-state').style.display = 'none';
      document.getElementById('memorize-state').style.display = '';
      document.getElementById('playing-state').style.display = 'none';

      let memLeft = 5;
      const mc = document.getElementById('memCircle'), mn = document.getElementById('mem-num');
      updateMemCircle(memLeft, 5, mc, mn, 213.6); playBeep(600);
      gameState.memInterval = setInterval(() => {
        memLeft--;
        updateMemCircle(memLeft, 5, mc, mn, 213.6);
        if (memLeft > 0) playBeep(memLeft <= 2 ? 700 : 500);
        if (memLeft <= 0) {
          clearInterval(gameState.memInterval);
          document.getElementById('memorize-state').style.display = 'none';
          document.getElementById('playing-state').style.display = '';
          gameState.phase = 'playing'; playBeep(880); startTimer();
        }
      }, 1000);
    }

    function updateMemCircle(left, total, circ, numEl, circumference) {
      numEl.textContent = left;
      circ.style.strokeDashoffset = circumference - (left / total) * circumference;
    }

    function toggleWordVisibility() {
      const ph = document.getElementById('word-hidden-placeholder');
      const vc = document.getElementById('word-visible-content');
      const btn = document.getElementById('btn-toggle-word');
      gameState.wordVisible = !gameState.wordVisible;
      if (gameState.wordVisible) { ph.style.display = 'none'; vc.style.display = ''; btn.textContent = '🙈 Ocultar palavra'; }
      else { ph.style.display = 'flex'; vc.style.display = 'none'; btn.textContent = '👁️ Mostrar palavra'; }
    }

    // ============================================================
    // PICK WORD
    // ============================================================
    function pickWord() {
      const shuffle = document.getElementById('toggle-shuffle').checked;
      const bank = wordBank[gameState.difficulty] || {};
      const allWords = [];
      Object.entries(bank).forEach(([cat, words]) => words.forEach(w => allWords.push({ word: w, cat })));
      let available = allWords.filter(w => !gameState.usedWords.includes(w.word));
      if (available.length === 0) { gameState.usedWords = []; available = allWords; }
      if (available.length === 0) return { word: '???', cat: 'objects' };
      const picked = shuffle ? available[Math.floor(Math.random() * available.length)] : available[0];
      gameState.usedWords.push(picked.word);
      return picked;
    }

    // ============================================================
    // TIMER
    // ============================================================
    function startTimer() {
      const dur = gameState.timerDur;
      gameState.timerLeft = dur; gameState.hintShown = false;
      updateTimerDisplay(dur, dur);
      clearInterval(gameState.timerInterval);
      gameState.timerInterval = setInterval(() => {
        gameState.timerLeft--;
        updateTimerDisplay(gameState.timerLeft, dur);
        const elapsed = dur - gameState.timerLeft;
        if (!gameState.hintShown && elapsed >= Math.floor(dur * 0.75)) {
          gameState.hintShown = true;
          const hint = document.getElementById('hint-banner');
          hint.style.display = '';
          hint.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 400, fill: 'forwards' });
          playBeep(523);
        }
        if (document.getElementById('toggle-sound').checked && gameState.timerLeft <= 10 && gameState.timerLeft > 0)
          playBeep(gameState.timerLeft <= 3 ? 880 : 440);
        if (gameState.timerLeft <= 0) { clearInterval(gameState.timerInterval); markResult(false, true); }
      }, 1000);
    }

    function updateTimerDisplay(left, total) {
      document.getElementById('timer-num').textContent = left;
      const circ = document.getElementById('timerCircle');
      circ.style.strokeDashoffset = 427.3 - (left / total) * 427.3;
      circ.style.stroke = left > total * 0.5 ? '#ffd93d' : left > total * 0.25 ? '#ff8e53' : '#ff4757';
    }

    function updateTimerLabel(val) {
      document.getElementById('timer-val').textContent = val + 's';
      gameState.timerDur = parseInt(val);
    }

    function playBeep(freq = 440) {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start(); osc.stop(ctx.currentTime + 0.2);
      } catch (e) { }
    }

    // ============================================================
    // RESULT
    // ============================================================
    function markResult(correct, timeUp = false) {
      clearInterval(gameState.timerInterval); clearInterval(gameState.memInterval);
      document.getElementById('memorize-state').style.display = 'none';
      const player = gameState.players[gameState.currentPlayerIdx];
      const pName = player.name || player;
      const emoji = document.getElementById('resultEmoji');
      const title = document.getElementById('resultTitle');
      const sub = document.getElementById('resultSub');

      if (correct) {
        if (gameState.mode === 'teams') {
          gameState.scores['team' + player.team] = (gameState.scores['team' + player.team] || 0) + 10;
          gameState.scores[pName] = (gameState.scores[pName] || 0) + 10;
        } else { gameState.scores[pName] = (gameState.scores[pName] || 0) + 10; }
        emoji.textContent = '🎉'; title.textContent = 'Acertou!'; title.style.color = '#6bcb77';
        sub.textContent = gameState.mode === 'teams'
          ? `+10 pontos para o Time ${player.team === 'A' ? 'A 🔴' : 'B 🔵'}`
          : `+10 pontos para ${pName}!`;
        launchConfetti(); playBeep(523);
      } else {
        if (document.getElementById('toggle-penalty').checked && !timeUp) {
          if (gameState.mode === 'teams') {
            gameState.scores['team' + player.team] = Math.max(0, (gameState.scores['team' + player.team] || 0) - 10);
            gameState.scores[pName] = Math.max(0, (gameState.scores[pName] || 0) - 10);
          } else { gameState.scores[pName] = Math.max(0, (gameState.scores[pName] || 0) - 10); }
          sub.textContent = '-10 pontos (penalidade por skip)';
        } else { sub.textContent = timeUp ? 'O tempo acabou! Sem pontos.' : 'Palavra pulada. Sem pontos.'; }
        emoji.textContent = timeUp ? '⏰' : '😅';
        title.textContent = timeUp ? 'Tempo esgotado!' : 'Errou!';
        title.style.color = '#ff6b6b';
      }
      document.getElementById('resultOverlay').classList.add('show');
    }

    function nextTurn() {
      document.getElementById('resultOverlay').classList.remove('show');
      gameState.turnsDone++;
      if (gameState.turnsDone >= gameState.totalTurns) { showFinalScore(); return; }
      gameState.currentPlayerIdx = (gameState.currentPlayerIdx + 1) % gameState.players.length;
      if (gameState.currentPlayerIdx === 0) { gameState.currentRound++; showMidScore(); }
      else initTurn();
    }

    // ============================================================
    // SCOREBOARDS
    // ============================================================
    function renderScoreMini() {
      const cont = document.getElementById('score-mini'); cont.innerHTML = '';
      if (gameState.mode === 'teams') {
        ['A', 'B'].forEach(t => {
          const color = t === 'A' ? 'var(--team1)' : 'var(--team2)';
          const el = document.createElement('div');
          el.style.cssText = `background:${color}22;border:1px solid ${color}44;border-radius:12px;padding:8px 14px;display:flex;align-items:center;gap:8px;white-space:nowrap`;
          el.innerHTML = `<span style="font-weight:800;color:${color}">Time ${t}</span><span style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:${color}">${gameState.scores['team' + t] || 0}</span>`;
          cont.appendChild(el);
        });
      } else {
        gameState.players.forEach(p => {
          const n = p.name || p;
          const el = document.createElement('div');
          el.style.cssText = `background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:8px 14px;display:flex;align-items:center;gap:8px;white-space:nowrap`;
          el.innerHTML = `<span style="font-weight:800;font-size:0.85rem">${n}</span><span style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:var(--accent2)">${gameState.scores[n] || 0}</span>`;
          cont.appendChild(el);
        });
      }
    }

    function renderFullScoreboard(isFinal = false) {
      const cont = document.getElementById(isFinal ? 'final-scoreboard' : 'scoreboard-list'); cont.innerHTML = '';
      let entries = [];
      if (gameState.mode === 'teams') {
        entries = [{ name: '🔴 Time A', pts: gameState.scores.teamA || 0, team: 'A' }, { name: '🔵 Time B', pts: gameState.scores.teamB || 0, team: 'B' }];
      } else {
        entries = gameState.players.map(p => ({ name: p.name || p, pts: gameState.scores[p.name || p] || 0 }));
      }
      entries.sort((a, b) => b.pts - a.pts);
      const ranks = ['🥇', '🥈', '🥉'];
      entries.forEach((e, i) => {
        const div = document.createElement('div');
        div.className = 'score-row' + (i === 0 ? ' first' : i === 1 ? ' second' : i === 2 ? ' third' : '');
        const color = e.team === 'A' ? 'var(--team1)' : e.team === 'B' ? 'var(--team2)' : '';
        div.innerHTML = `<div class="rank-badge">${ranks[i] || (i + 1)}</div><div class="score-name" style="flex:1;${color ? 'color:' + color : ''}">${e.name}</div><div class="score-pts">${e.pts} <span style="font-size:0.8rem;color:var(--text3)">pts</span></div>`;
        cont.appendChild(div);
      });
    }

    function showMidScore() {
      goTo('score'); renderFullScoreboard(false);
      const roundDone = gameState.currentRound - 1;
      const remaining = gameState.totalRounds - roundDone;
      document.getElementById('score-subtitle').textContent = `Fim da Rodada ${roundDone} — ${remaining} rodada${remaining !== 1 ? 's' : ''} restante${remaining !== 1 ? 's' : ''}!`;
      document.getElementById('next-round-info').textContent = `Rodada ${gameState.currentRound} de ${gameState.totalRounds}`;
    }

    function continueGame() { goTo('game'); initTurn(); }

    function showFinalScore() {
      goTo('final'); renderFullScoreboard(true);
      let winner = '';
      if (gameState.mode === 'teams') {
        const a = gameState.scores.teamA || 0, b = gameState.scores.teamB || 0;
        if (a > b) winner = '🔴 Time A'; else if (b > a) winner = '🔵 Time B'; else winner = 'EMPATE!';
        document.getElementById('final-trophy').textContent = (a === b) ? '🤝' : '🏆';
      } else {
        const sorted = gameState.players.map(p => ({ name: p.name || p, pts: gameState.scores[p.name || p] || 0 })).sort((a, b) => b.pts - a.pts);
        winner = sorted[0].name;
        const isTie = sorted.length > 1 && sorted[0].pts === sorted[1].pts;
        if (isTie) { winner = 'EMPATE!'; document.getElementById('final-trophy').textContent = '🤝'; }
        else document.getElementById('final-trophy').textContent = '🏆';
      }
      document.getElementById('final-winner').textContent = winner;
      launchConfetti(80);
    }

    // ============================================================
    // WORD BANK
    // ============================================================
    let wbDiff = 'easy';
    let wbCat = 'all';

    function syncWBDiffUI() {
      ['easy', 'normal', 'hard'].forEach(d =>
        document.getElementById('wb-diff-' + d).classList.toggle('selected', d === wbDiff)
      );
      const labels = { easy: '🌱 Fácil', normal: '⚡ Normal', hard: '🔥 Difícil' };
      document.getElementById('wb-diff-label').textContent = labels[wbDiff];
    }

    function syncWBCatUI() {
      ['all', 'objects', 'actions', 'animals'].forEach(t =>
        document.getElementById('tab-' + t)?.classList.toggle('active', t === wbCat)
      );
    }

    function switchWBDiff(diff) { wbDiff = diff; syncWBDiffUI(); renderWordBank(); }

    function switchWordTab(tab) { wbCat = tab; syncWBCatUI(); renderWordBank(); }

    function renderWordBank() {
      const cont = document.getElementById('words-list'); cont.innerHTML = '';
      let count = 0;
      const bank = wordBank[wbDiff] || {};
      const cats = wbCat === 'all' ? ['objects', 'actions', 'animals'] : [wbCat];
      const catIcon = { objects: '🧸', actions: '🏃', animals: '🐾' };
      cats.forEach(cat => {
        (bank[cat] || []).forEach(word => {
          count++;
          const tag = document.createElement('span'); tag.className = 'word-tag';
          const idx = (wordBank[wbDiff][cat] || []).indexOf(word);
          tag.innerHTML = `${catIcon[cat] || ''} ${word} <span class="del-btn" onclick="removeWord('${cat}',${idx})">✕</span>`;
          cont.appendChild(tag);
        });
      });
      document.getElementById('word-count').textContent = count;
    }

    function addWord() {
      const inp = document.getElementById('inp-new-word');
      const cat = document.getElementById('inp-word-cat').value;
      const word = inp.value.trim(); if (!word) return;
      if (!wordBank[wbDiff]) wordBank[wbDiff] = {};
      if (!wordBank[wbDiff][cat]) wordBank[wbDiff][cat] = [];
      if (wordBank[wbDiff][cat].includes(word)) { showNotif('⚠️ Palavra já existe!', 'var(--accent2)', '#333'); return; }
      wordBank[wbDiff][cat].push(word);
      saveWords(); inp.value = ''; renderWordBank();
      const labels = { easy: '🌱 Fácil', normal: '⚡ Normal', hard: '🔥 Difícil' };
      showNotif(`✅ "${word}" adicionada (${labels[wbDiff]})!`);
    }

    function removeWord(cat, idx) {
      if (!wordBank[wbDiff]?.[cat]) return;
      wordBank[wbDiff][cat].splice(idx, 1);
      saveWords(); renderWordBank();
    }

    function resetWords() {
      if (confirm('Restaurar o banco de palavras padrão? Palavras customizadas serão perdidas.')) {
        wordBank = JSON.parse(JSON.stringify(DEFAULT_WORDS));
        saveWords(); renderWordBank(); showNotif('✅ Banco restaurado!');
      }
    }

    function saveWords() { localStorage.setItem('mm_words_v2', JSON.stringify(wordBank)); }

    // ============================================================
    // CONFETTI
    // ============================================================
    function launchConfetti(count = 40) {
      const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#c77dff', '#ff8e53'];
      for (let i = 0; i < count; i++) {
        const el = document.createElement('div'); el.className = 'confetti-piece';
        el.style.cssText = `left:${Math.random() * 100}vw;top:-10px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};--dur:${(Math.random() * 1.5 + 1.5).toFixed(1)}s;--del2:${(Math.random() * 1).toFixed(2)}s;`;
        document.body.appendChild(el); setTimeout(() => el.remove(), 4000);
      }
    }

    // ============================================================
    // RESTART
    // ============================================================
    function confirmRestart() {
      if (confirm('Reiniciar o jogo? Todo o progresso será perdido.')) {
        clearInterval(gameState.timerInterval); clearInterval(gameState.memInterval);
        document.getElementById('resultOverlay').classList.remove('show');
        const prevDiff = gameState.difficulty;
        gameState = {
          mode: 'teams', difficulty: prevDiff,
          teams: { A: [], B: [] }, players: [],
          scores: {}, currentPlayerIdx: 0, currentRound: 1, totalRounds: 3,
          currentWord: null, usedWords: [],
          timerDur: parseInt(document.getElementById('timer-slider').value) || 60,
          timerInterval: null, memInterval: null,
          timerLeft: 60, hintShown: false, wordVisible: false,
          phase: 'preparing', totalTurns: 0, turnsDone: 0
        };
        selectMode('teams'); selectDifficulty(prevDiff);
        goTo('setup'); renderSetupPlayers();
      }
    }

    // ============================================================
    // INIT
    // ============================================================
    selectMode('teams');
    selectDifficulty('easy');
    updateTimerLabel(60);
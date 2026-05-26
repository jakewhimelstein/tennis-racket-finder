const questions = [
  {
    id: 'ntrp',
    step: '// Q1 - SKILL LEVEL',
    text: 'What is your NTRP rating (or closest description)?',
    hint: '💡 NTRP is the standard tennis rating scale. 2.5 = rally & learn, 3.5 = solid strokes, 4.5 = competitive club, 5.0+ = tournament level.',
    cols: 2,
    opts: [
      { value: '25', label: '2.0 - 2.5\nLearning basics,\nconsistency is the\nmain goal' },
      { value: '30', label: '3.0 - 3.5\nSolid rallies, working\non spin & placement' },
      { value: '40', label: '4.0 - 4.5\nConsistent & tactical,\ncompetes regularly' },
      { value: '50', label: '5.0+\nHigh-level club or\ntournament player' }
    ]
  },
  {
    id: 'shots',
    step: '// Q2 - STROKE PRODUCTION',
    text: 'How do you mainly generate power on groundstrokes?',
    hint: '💡 This tells us whether you need the racket to add power for you, or if you generate your own and need control.',
    cols: 2,
    opts: [
      { value: 'arm', label: '🤜 ARM & WRIST\nShort compact swing,\nrelying on the racket\nfor pop' },
      { value: 'body', label: '🔄 BODY ROTATION\nFull shoulder turn,\nswing drives\nthrough the ball' },
      { value: 'heavy', label: '💥 HEAVY TOPSPIN\nBrushing up, high\nfollow-through,\nNadal style' },
      { value: 'flat', label: '⚡ FLAT & HARD\nDriving through,\nminimal spin,\nDel Potro style' }
    ]
  },
  {
    id: 'weakness',
    step: '// Q3 - BIGGEST COMPLAINT',
    text: 'What is your biggest issue with your current game or racket?',
    hint: '💡 Your honest weak point is the single most useful signal for choosing the right frame spec.',
    cols: 2,
    opts: [
      { value: 'nopower', label: '😤 NOT ENOUGH POWER\nBall lands short,\nhard to hit through\nthe court' },
      { value: 'nocontrol', label: '😬 SHOTS GOING LONG\nToo much power,\nhitting past the\nbaseline often' },
      { value: 'nospin', label: "🌀 LACK OF SPIN\nCan't keep heavy\ntopspin in court\nor get slice to bite" },
      { value: 'arm', label: '💢 ARM / ELBOW PAIN\nVibration or stiffness\ncauses discomfort\nafter play' }
    ]
  },
  {
    id: 'grip',
    step: '// Q4 - GRIP SIZE',
    text: 'What grip size do you use, or how does your hand measure?',
    hint: '💡 Measure from the middle crease of your palm to the tip of your ring finger. Too small = over-gripping. Too big = less wrist snap.',
    cols: 2,
    opts: [
      { value: 'g1', label: 'GRIP 1 - 2\n(4 - 4 1/4 inch)\nSmaller hands,\njuniors or women' },
      { value: 'g2', label: 'GRIP 3\n(4 3/8 inch)\nMost common size\nfor adults' },
      { value: 'g3', label: 'GRIP 4\n(4 1/2 inch)\nLarger hands,\nmost men' },
      { value: 'g4', label: "NOT SURE\nI'll add an overgrip\nand go smaller" }
    ]
  },
  {
    id: 'headsize',
    step: '// Q5 - SWEET SPOT PREFERENCE',
    text: 'When you mishit, what do you want the racket to do?',
    hint: '💡 Head size is the #1 spec that determines forgiveness. Larger = more forgiving. Smaller = more precise but punishes mishits.',
    cols: 2,
    opts: [
      { value: 'oversized', label: '🟢 FORGIVE ME\nI want a big sweet\nspot - mishits\nstill go in' },
      { value: 'mid_plus', label: '🟡 BALANCED\nSome forgiveness\nbut I can handle\nprecision (98-102 sq in)' },
      { value: 'mid', label: '🔴 PRECISE\nI hit the center\nconsistently. Want\nfull control (93-97 sq in)' },
      { value: 'notsure', label: '❓ NOT SURE\nHelp me decide\nbased on my\nother answers' }
    ]
  },
  {
    id: 'weight',
    step: '// Q6 - RACKET WEIGHT FEEL',
    text: "How do you feel about your current or past racket's weight?",
    hint: '💡 Heavier rackets (300g+) give stability and plow-through. Lighter rackets are easier to swing and kinder to the arm.',
    cols: 2,
    opts: [
      { value: 'light', label: '🪶 TOO HEAVY\nI want something\nlighter & faster\nto swing' },
      { value: 'fine', label: '✅ FEELS RIGHT\nCurrent weight\nfeels natural\nand comfortable' },
      { value: 'heavy', label: '🏋️ TOO LIGHT\nI want more mass\nfor stability on\nhard-hit balls' },
      { value: 'first', label: '🆕 FIRST RACKET\nI have no reference\n- guide me' }
    ]
  },
  {
    id: 'pattern',
    step: '// Q7 - STRING PATTERN',
    text: 'What matters more: spin potential or string durability?',
    hint: '💡 Open patterns (16x19) = more spin & power but strings break faster. Dense (18x20) = control & durability.',
    cols: 2,
    opts: [
      { value: 'open', label: '🌀 MAX SPIN\nI want heavy\ntopspin, open\n16x19 pattern' },
      { value: 'dense', label: '🎯 CONTROL\nI prefer precision,\ndense 18x20\nlasts longer' },
      { value: 'either', label: "🤷 EITHER\nI'm not particular\nabout string pattern\nyet" }
    ]
  },
  {
    id: 'budget',
    step: '// Q8 - BUDGET',
    text: 'What is your budget for a new racket?',
    hint: '💡 Higher budget opens up pro-level frames with advanced graphite layup. Mid-range still gets you excellent performance.',
    cols: 2,
    opts: [
      { value: 'low', label: '💰 UNDER $80\nBest value picks,\ngreat for\nbeginners' },
      { value: 'mid', label: '💳 $80 - $160\nSolid mid-range\nframes for all\nlevels' },
      { value: 'high', label: '💎 $160+\nPremium pro-level\nframes with top\ntechnology' }
    ]
  }
];

const rackets = [
  {
    name: 'Wilson Clash 100',
    specs: ['100 sq in', '295g', '16x19', 'Flex RA 55'],
    tags: [
      { label: 'arm-friendly', color: 'g' },
      { label: 'control', color: 'b' },
      { label: 'all-levels', color: 'b' }
    ],
    desc: 'Exceptionally flexible frame (RA 55) that kills vibration - the go-to prescription for tennis elbow. Large 100 sq in head with a 16x19 open pattern gives forgiveness and spin without punishing stiff contact.',
    score: (answers) =>
      (answers.weakness === 'arm' ? 4 : 0) +
      (answers.headsize === 'mid_plus' || answers.headsize === 'notsure' ? 2 : 0) +
      (answers.pattern === 'open' || answers.pattern === 'either' ? 2 : 0) +
      (answers.shots === 'arm' || answers.shots === 'body' ? 1 : 0) +
      (answers.weight === 'fine' || answers.weight === 'first' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Wilson+Clash+100',
      tennisExpress: 'https://www.tennisexpress.com/wilson-clash-100',
      tennisWarehouse: 'https://www.tennis-warehouse.com/Wilson_Clash_100/p/WILC100.html'
    }
  },
  {
    name: 'Babolat Pure Drive 2024',
    specs: ['100 sq in', '300g', '16x19', 'Stiff RA 71'],
    tags: [
      { label: 'power', color: 'a' },
      { label: '16x19 open', color: 'g' },
      { label: 'intermediate+', color: 'b' }
    ],
    desc: 'The benchmark power racket. Stiff frame (RA 71) + 16x19 open pattern launches balls deep with minimal effort. Best for players with consistent mechanics who want effortless depth and pace from the baseline.',
    score: (answers) =>
      (answers.weakness === 'nopower' ? 4 : 0) +
      (answers.shots === 'flat' || answers.shots === 'arm' ? 2 : 0) +
      (answers.pattern === 'open' || answers.pattern === 'either' ? 2 : 0) +
      (answers.headsize === 'mid_plus' || answers.headsize === 'oversized' || answers.headsize === 'notsure' ? 1 : 0) +
      (answers.ntrp === '30' || answers.ntrp === '40' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Babolat+Pure+Drive+2024',
      tennisExpress: 'https://www.tennisexpress.com/babolat-pure-drive',
      tennisWarehouse: 'https://www.tennis-warehouse.com/Babolat_Pure_Drive/p/BAPD.html'
    }
  },
  {
    name: 'Head Boom MP',
    specs: ['100 sq in', '300g', '16x19', 'Mid flex RA 63'],
    tags: [
      { label: 'spin', color: 'a' },
      { label: 'arm-friendly', color: 'g' },
      { label: 'all-court', color: 'b' }
    ],
    desc: 'Mid-flex frame (RA 63) rewards full body-rotation swings with natural spin production and excellent feel. Great balance of power and arm comfort for players who swing through the ball with body rotation.',
    score: (answers) =>
      (answers.shots === 'heavy' || answers.shots === 'body' ? 3 : 0) +
      (answers.weakness === 'nospin' ? 3 : 0) +
      (answers.pattern === 'open' || answers.pattern === 'either' ? 2 : 0) +
      (answers.weakness === 'arm' ? 2 : 0) +
      (answers.ntrp === '30' || answers.ntrp === '40' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Head+Boom+MP',
      tennisExpress: 'https://www.tennisexpress.com/head-boom-mp',
      tennisWarehouse: 'https://www.tennis-warehouse.com/HEAD_Boom_MP/p/HDBMPX.html'
    }
  },
  {
    name: 'Yonex VCORE 98',
    specs: ['98 sq in', '305g', '16x19', 'Stiff RA 67'],
    tags: [
      { label: 'topspin', color: 'a' },
      { label: 'advanced', color: 'a' },
      { label: 'baseliner', color: 'b' }
    ],
    desc: 'The topspin machine. Isometric head shape enlarges the sweet spot while the aerodynamic frame aids swing speed. Open 16x19 pattern + stiff frame = explosive spin from the baseline for high-NTRP players.',
    score: (answers) =>
      (answers.weakness === 'nospin' ? 4 : 0) +
      (answers.shots === 'heavy' ? 3 : 0) +
      (answers.ntrp === '40' || answers.ntrp === '50' ? 2 : 0) +
      (answers.headsize === 'mid_plus' || answers.headsize === 'notsure' ? 2 : 0) +
      (answers.weight === 'fine' || answers.weight === 'heavy' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Yonex+VCORE+98',
      tennisExpress: 'https://www.tennisexpress.com/yonex-vcore-98',
      tennisWarehouse: 'https://www.tennis-warehouse.com/Yonex_VCORE_98/p/YXVC98.html'
    }
  },
  {
    name: 'Wilson Pro Staff 97 v14',
    specs: ['97 sq in', '315g', '18x20', 'Control RA 63'],
    tags: [
      { label: '18x20 dense', color: 'g' },
      { label: 'control', color: 'b' },
      { label: 'advanced', color: 'a' }
    ],
    desc: "Federer's DNA. Dense 18x20 pattern + 315g weight gives exceptional precision and stability on fast incoming balls. Rewards advanced players who generate their own pace and demand pinpoint control above all else.",
    score: (answers) =>
      (answers.weakness === 'nocontrol' ? 4 : 0) +
      (answers.pattern === 'dense' ? 3 : 0) +
      (answers.shots === 'flat' || answers.shots === 'body' ? 2 : 0) +
      (answers.ntrp === '40' || answers.ntrp === '50' ? 2 : 0) +
      (answers.weight === 'heavy' || answers.weight === 'fine' ? 1 : 0) +
      (answers.headsize === 'mid' ? 2 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Wilson+Pro+Staff+97+v14',
      tennisExpress: 'https://www.tennisexpress.com/wilson-pro-staff-97',
      tennisWarehouse: 'https://www.tennis-warehouse.com/Wilson_Pro_Staff_97_v14/p/WLPS97V14.html'
    }
  },
  {
    name: 'Head Speed MP 2024',
    specs: ['100 sq in', '295g', '16x19', 'Mid-stiff RA 65'],
    tags: [
      { label: 'spin', color: 'a' },
      { label: 'maneuverability', color: 'g' },
      { label: 'all-court', color: 'b' }
    ],
    desc: "Djokovic's lineage. Lightweight and fast through the air - ideal for players who rely on quick swing speed to generate spin. Great net game feel and exceptional maneuverability for all-court players.",
    score: (answers) =>
      (answers.shots === 'heavy' ? 3 : 0) +
      (answers.weakness === 'nospin' ? 2 : 0) +
      (answers.weight === 'light' || answers.weight === 'first' ? 2 : 0) +
      (answers.pattern === 'open' || answers.pattern === 'either' ? 2 : 0) +
      (answers.headsize === 'mid_plus' || answers.headsize === 'notsure' ? 1 : 0) +
      (answers.ntrp === '30' || answers.ntrp === '40' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Head+Speed+MP+2024',
      tennisExpress: 'https://www.tennisexpress.com/head-speed-mp',
      tennisWarehouse: 'https://www.tennis-warehouse.com/HEAD_Speed_MP/p/HDSPDMP.html'
    }
  },
  {
    name: 'Tecnifibre TF-X1 300',
    specs: ['102 sq in', '300g', '16x19', 'Flex RA 58'],
    tags: [
      { label: 'beginner-friendly', color: 'g' },
      { label: 'arm-friendly', color: 'g' },
      { label: 'forgiving', color: 'b' }
    ],
    desc: 'Oversized head (102 sq in) + low stiffness (RA 58) = maximum forgiveness and arm comfort. Designed for players still building consistency. Mishits still clear the net, and the arm barely feels a thing.',
    score: (answers) =>
      (answers.ntrp === '25' ? 4 : 0) +
      (answers.weakness === 'arm' ? 3 : 0) +
      (answers.headsize === 'oversized' || answers.headsize === 'notsure' ? 2 : 0) +
      (answers.weight === 'light' || answers.weight === 'first' ? 2 : 0) +
      (answers.shots === 'arm' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Tecnifibre+TF-X1+300',
      tennisExpress: 'https://www.tennisexpress.com/tecnifibre-tf-x1',
      tennisWarehouse: 'https://www.tennis-warehouse.com/Tecnifibre_TF-X1/p/TFTFX1.html'
    }
  },
  {
    name: 'Babolat Pure Aero 2023',
    specs: ['100 sq in', '300g', '16x19', 'Stiff RA 70'],
    tags: [
      { label: 'topspin', color: 'a' },
      { label: 'baseliner', color: 'b' },
      { label: 'aggressive', color: 'a' }
    ],
    desc: "Nadal's weapon. Aerodynamic woofer frame cuts through air resistance for faster swing speeds. Stiff beam + 16x19 launches heavy topspin deep. Built for baseliners who swing hard and want the ball to kick high.",
    score: (answers) =>
      (answers.shots === 'heavy' ? 4 : 0) +
      (answers.weakness === 'nospin' ? 3 : 0) +
      (answers.ntrp === '40' || answers.ntrp === '50' ? 2 : 0) +
      (answers.pattern === 'open' ? 2 : 0) +
      (answers.weight === 'fine' || answers.weight === 'heavy' ? 1 : 0),
    links: {
      amazon: 'https://www.amazon.com/s?k=Babolat+Pure+Aero+2023',
      tennisExpress: 'https://www.tennisexpress.com/babolat-pure-aero',
      tennisWarehouse: 'https://www.tennis-warehouse.com/Babolat_Pure_Aero/p/BAPA.html'
    }
  }
];

const state = {
  answers: {},
  currentIndex: 0
};

const elements = {
  progressFill: document.getElementById('pf'),
  progressNumber: document.getElementById('pn'),
  quizArea: document.getElementById('qa')
};

function getTagClass(color) {
  if (color === 'g') {
    return 'tag g';
  }

  if (color === 'a') {
    return 'tag a';
  }

  return 'tag b';
}

function getOptionColumns(columns) {
  if (columns === 1) {
    return 'col1';
  }

  if (columns === 3) {
    return 'col3';
  }

  return '';
}

function updateProgress() {
  const progress = Math.round((state.currentIndex / questions.length) * 100);
  elements.progressFill.style.width = `${progress}%`;
  elements.progressNumber.textContent = `${state.currentIndex} / ${questions.length}`;
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const selectedValue = state.answers[question.id];
  const optionColumns = getOptionColumns(question.cols);
  const optionsMarkup = question.opts
    .map(
      (option) => `
        <button
          class="opt${selectedValue === option.value ? ' sel' : ''}"
          type="button"
          data-action="pick"
          data-question-id="${question.id}"
          data-value="${option.value}"
        >${option.label.replace(/\n/g, '<br>')}</button>
      `
    )
    .join('');

  elements.quizArea.innerHTML = `
    <div class="card">
      <div class="q-step">${question.step} <span class="blink">_</span></div>
      <div class="q-text">${question.text}</div>
      <div class="q-hint">${question.hint}</div>
      <div class="opts ${optionColumns}">${optionsMarkup}</div>
      <div class="navrow">
        ${state.currentIndex > 0 ? '<button class="nbtn back" type="button" data-action="back">◀ BACK</button>' : ''}
        <button
          class="nbtn next"
          id="nb"
          type="button"
          data-action="next"
          ${selectedValue ? '' : 'disabled'}
        >${state.currentIndex === questions.length - 1 ? 'FINISH ▶' : 'NEXT ▶'}</button>
      </div>
    </div>
  `;

  updateProgress();
}

function pickAnswer(questionId, value) {
  state.answers[questionId] = value;
  renderQuestion();
}

function showResults() {
  const topMatches = rackets
    .map((racket) => ({ ...racket, fitScore: racket.score(state.answers) }))
    .sort((left, right) => right.fitScore - left.fitScore)
    .slice(0, 3);

  const medals = ['🥇', '🥈', '🥉'];
  const labels = ['TOP PICK', 'RUNNER UP', 'ALSO GREAT'];

  const cardsMarkup = topMatches
    .map(
      (racket, index) => `
        <div class="res-card">
          <div class="res-rank">
            <span>${medals[index]} ${labels[index]}</span>
            <span class="score-b">FIT SCORE: ${racket.fitScore}</span>
          </div>
          <div class="res-name">${racket.name}</div>
          <div class="spec-row">
            ${racket.specs.map((spec) => `<span class="spec-pill">${spec}</span>`).join('')}
          </div>
          <div class="tags">
            ${racket.tags.map((tag) => `<span class="${getTagClass(tag.color)}">${tag.label}</span>`).join('')}
          </div>
          <div class="res-desc">${racket.desc}</div>
          <div class="buy-row">
            <a class="buy az" href="${racket.links.amazon}" target="_blank" rel="noreferrer noopener">🛒 AMAZON</a>
            <a class="buy te" href="${racket.links.tennisExpress}" target="_blank" rel="noreferrer noopener">🎾 TENNIS EXPRESS</a>
            <a class="buy tw" href="${racket.links.tennisWarehouse}" target="_blank" rel="noreferrer noopener">🏪 TENNIS WAREHOUSE</a>
          </div>
        </div>
      `
    )
    .join('');

  elements.progressFill.style.width = '100%';
  elements.progressNumber.textContent = `${questions.length} / ${questions.length}`;
  elements.quizArea.innerHTML = `
    <div class="card results-header">
      <div class="q-step results-step">✅ FITTING COMPLETE <span class="blink">▌</span></div>
      <div class="q-text results-title">YOUR PERSONALIZED RACKET MATCHES:</div>
    </div>
    ${cardsMarkup}
    <button class="restart" type="button" data-action="restart">↩ RETAKE QUIZ</button>
  `;
}

function goNext() {
  const question = questions[state.currentIndex];

  if (!state.answers[question.id]) {
    return;
  }

  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }

  showResults();
}

function goBack() {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
}

function restartQuiz() {
  state.answers = {};
  state.currentIndex = 0;
  renderQuestion();
}

elements.quizArea.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');

  if (!target) {
    return;
  }

  const { action } = target.dataset;

  if (action === 'pick') {
    pickAnswer(target.dataset.questionId, target.dataset.value);
    return;
  }

  if (action === 'next') {
    goNext();
    return;
  }

  if (action === 'back') {
    goBack();
    return;
  }

  if (action === 'restart') {
    restartQuiz();
  }
});

renderQuestion();

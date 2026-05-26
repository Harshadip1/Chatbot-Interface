/* ===== AI Training UI ===== */
const TrainingUI = {
  init() {
    this.renderIntents();
    this.bindForms();
    this.updateStats();
  },

  renderIntents() {
    const list = document.getElementById('intentList');
    if (!list) return;
    const intents = Object.keys(NLPEngine.intents);
    const custom = NLPEngine.getTrainingData();

    list.innerHTML = intents.map(name => {
      const data = NLPEngine.intents[name];
      const extra = custom[name]?.phrases?.length || 0;
      return `
        <div class="intent-list-item">
          <span><strong>${name}</strong> (${data.patterns.length + extra} phrases)</span>
          <button class="btn btn-sm btn-ghost edit-intent" data-intent="${name}">Edit</button>
        </div>
      `;
    }).join('');
  },

  bindForms() {
    document.getElementById('addPhraseForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const intent = document.getElementById('trainIntent')?.value;
      const phrase = document.getElementById('trainPhrase')?.value;
      const response = document.getElementById('trainResponse')?.value;
      if (intent && phrase) {
        NLPEngine.saveTraining(intent, phrase, response);
        if (phrase && NLPEngine.intents[intent]) {
          NLPEngine.intents[intent].patterns.push(phrase.toLowerCase());
        }
        if (response && NLPEngine.intents[intent]) {
          NLPEngine.intents[intent].responses.push(response);
        }
        App.showToast('Training data saved!', 'success');
        e.target.reset();
        this.renderIntents();
        this.updateStats();
      }
    });

    document.getElementById('confidenceSlider')?.addEventListener('input', (e) => {
      document.getElementById('confidenceValue').textContent = e.target.value + '%';
    });
  },

  updateStats() {
    const el = document.getElementById('trainingStats');
    if (!el) return;
    const totalPhrases = Object.values(NLPEngine.intents).reduce((s, i) => s + i.patterns.length, 0);
    const custom = NLPEngine.getTrainingData();
    const customCount = Object.values(custom).reduce((s, c) => s + (c.phrases?.length || 0), 0);
    el.innerHTML = `
      <div class="training-stat"><div class="value">${Object.keys(NLPEngine.intents).length}</div><div>Intents</div></div>
      <div class="training-stat"><div class="value">${totalPhrases + customCount}</div><div>Phrases</div></div>
      <div class="training-stat"><div class="value">94.7%</div><div>Accuracy</div></div>
    `;
  }
};

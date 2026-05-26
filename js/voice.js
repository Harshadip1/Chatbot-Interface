/* ===== Voice Assistant (Web Speech API) ===== */
const VoiceUI = {
  recognition: null,
  isListening: false,
  transcript: '',

  init() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (e) => {
        let interim = '';
        let final = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const t = e.results[i][0].transcript;
          if (e.results[i].isFinal) final += t;
          else interim += t;
        }
        this.transcript = final || interim;
        const box = document.getElementById('transcriptBox');
        if (box) box.textContent = this.transcript || 'Listening...';
      };

      this.recognition.onend = () => {
        this.stopListening();
        if (this.transcript && document.body.dataset.page === 'voice') {
          this.showAIResponse(this.transcript);
        }
      };

      this.recognition.onerror = () => {
        App.showToast('Voice recognition error. Check microphone permissions.', 'error');
        this.stopListening();
      };
    }

    document.getElementById('voiceMicBtn')?.addEventListener('click', () => this.toggle());
    document.getElementById('voiceInputBtn')?.addEventListener('click', () => this.toggle());
  },

  toggle() {
    if (this.isListening) this.stopListening();
    else this.startListening();
  },

  startListening() {
    if (!this.recognition) {
      App.showToast('Speech recognition not supported in this browser', 'warning');
      return;
    }
    this.isListening = true;
    this.transcript = '';
    document.getElementById('voiceMicBtn')?.classList.add('listening');
    document.getElementById('voiceInputBtn')?.classList.add('listening');
    document.querySelector('.voice-visualizer')?.classList.add('active');
    this.recognition.start();
    App.showToast('Listening...', 'info');
  },

  stopListening() {
    this.isListening = false;
    document.getElementById('voiceMicBtn')?.classList.remove('listening');
    document.getElementById('voiceInputBtn')?.classList.remove('listening');
    try { this.recognition?.stop(); } catch (e) { /* ignore */ }
  },

  showAIResponse(text) {
    const nlp = NLPEngine.process(text);
    const response = NLPEngine.generateResponse(nlp);
    const area = document.getElementById('voiceResponse');
    if (area) {
      area.innerHTML = `
        <div class="glass" style="padding:20px;margin-top:20px">
          <p><strong>You said:</strong> ${text}</p>
          <p style="margin-top:12px"><strong>AI Response:</strong> ${response}</p>
          <p style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">Intent: ${nlp.intent.name} (${Math.round(nlp.intent.confidence * 100)}%)</p>
        </div>
      `;
    }
    if (document.getElementById('chatInput') && text) {
      document.getElementById('chatInput').value = text;
    }
  }
};

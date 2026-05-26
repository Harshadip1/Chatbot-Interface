/* ===== Chatbot Core Logic ===== */
const Chatbot = {
  messages: [],
  currentPersona: 'default',
  isTyping: false,

  init(containerId = 'messagesArea') {
    this.currentPersona = localStorage.getItem('active_persona') || 'default';
    this.container = document.getElementById(containerId);
    this.input = document.getElementById('chatInput');
    this.sendBtn = document.getElementById('sendBtn');
    this.typingEl = document.getElementById('typingIndicator');

    this.loadHistory();
    this.bindEvents();
    if (this.messages.length === 0 && typeof DemoData !== 'undefined') {
      this.messages = [...DemoData.chatMessages.default];
      this.render();
    }
  },

  bindEvents() {
    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', () => this.send());
    }
    if (this.input) {
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.send();
        }
      });
      this.input.addEventListener('input', () => {
        this.input.style.height = 'auto';
        this.input.style.height = Math.min(this.input.scrollHeight, 120) + 'px';
      });
    }

    document.querySelectorAll('.prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        if (this.input) {
          this.input.value = chip.textContent;
          this.send();
        }
      });
    });

    document.getElementById('clearChat')?.addEventListener('click', () => this.clear());
    document.getElementById('regenerateBtn')?.addEventListener('click', () => this.regenerate());
  },

  send(text) {
    const message = text || (this.input?.value?.trim());
    if (!message) return;

    this.addMessage('user', message);
    if (this.input) {
      this.input.value = '';
      this.input.style.height = 'auto';
    }

    this.showTyping(true);
    const delay = 600 + Math.random() * 800;

    setTimeout(() => {
      const nlpResult = NLPEngine.process(message);
      this.updateNLPPanel(nlpResult);
      const response = NLPEngine.generateResponse(nlpResult, this.currentPersona);
      this.addMessage('ai', response);
      this.showTyping(false);
      this.saveHistory();
      App.showToast('Response generated', 'success');
    }, delay);
  },

  addMessage(role, content) {
    const msg = { role, content, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), id: Date.now() };
    this.messages.push(msg);
    this.renderMessage(msg);
    this.scrollToBottom();
  },

  renderMessage(msg) {
    if (!this.container) return;
    const div = document.createElement('div');
    div.className = `message ${msg.role}`;
    div.dataset.id = msg.id;

    const avatar = msg.role === 'ai' ? '🤖' : '👤';
    let html = typeof marked !== 'undefined' ? marked.parse(msg.content) : msg.content.replace(/\n/g, '<br>');

    div.innerHTML = `
      <div class="message-avatar">${avatar}</div>
      <div>
        <div class="message-bubble">${html}</div>
        <div class="message-meta">${msg.time}</div>
        ${msg.role === 'ai' ? `
          <div class="message-actions">
            <button class="msg-action-btn copy-btn">📋 Copy</button>
            <button class="msg-action-btn regen-btn">🔄 Regenerate</button>
          </div>
        ` : ''}
      </div>
    `;

    div.querySelector('.copy-btn')?.addEventListener('click', () => {
      navigator.clipboard.writeText(msg.content);
      App.showToast('Copied to clipboard', 'success');
    });
    div.querySelector('.regen-btn')?.addEventListener('click', () => this.regenerate());

    this.container.appendChild(div);
  },

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';
    this.messages.forEach(m => this.renderMessage(m));
    this.scrollToBottom();
  },

  showTyping(show) {
    this.isTyping = show;
    if (this.typingEl) {
      this.typingEl.classList.toggle('hidden', !show);
    }
  },

  scrollToBottom() {
    if (this.container) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  },

  updateNLPPanel(result) {
    const panel = document.getElementById('nlpPanel');
    if (!panel) return;

    const intentsHtml = result.allIntents.slice(0, 5).map(i => `
      <div class="nlp-intent">
        <div class="intent-name">${i.name} (${Math.round(i.confidence * 100)}%)</div>
        <div class="confidence-bar"><div class="confidence-fill" style="width:${i.confidence * 100}%"></div></div>
      </div>
    `).join('');

    const tokensHtml = result.tokens.slice(0, 12).map(t => `<span class="token">${t}</span>`).join('');

    panel.innerHTML = `
      <h4>🧠 NLP Analysis</h4>
      <p><strong>Intent:</strong> ${result.intent.name} (${Math.round(result.intent.confidence * 100)}%)</p>
      ${intentsHtml}
      <p style="margin-top:12px"><strong>Sentiment:</strong></p>
      <span class="sentiment-badge sentiment-${result.sentiment.label}">${result.sentiment.label}</span>
      <p style="margin-top:12px"><strong>Tokens:</strong></p>
      <div class="token-list">${tokensHtml}</div>
      ${result.keywords.length ? `<p style="margin-top:12px"><strong>Keywords:</strong> ${result.keywords.join(', ')}</p>` : ''}
    `;
  },

  regenerate() {
    const lastUser = [...this.messages].reverse().find(m => m.role === 'user');
    if (lastUser) {
      const lastAiIdx = this.messages.map(m => m.role).lastIndexOf('ai');
      if (lastAiIdx > -1) this.messages.splice(lastAiIdx, 1);
      this.render();
      this.send(lastUser.content);
    }
  },

  clear() {
    this.messages = [];
    this.render();
    localStorage.removeItem('chat_history');
    App.showToast('Chat cleared', 'info');
  },

  saveHistory() {
    localStorage.setItem('chat_history', JSON.stringify(this.messages.slice(-50)));
  },

  loadHistory() {
    try {
      const saved = localStorage.getItem('chat_history');
      if (saved) this.messages = JSON.parse(saved);
    } catch (e) { /* ignore */ }
  },

  setPersona(id) {
    this.currentPersona = id;
    localStorage.setItem('active_persona', id);
  },

  exportChat() {
    const text = this.messages.map(m => `[${m.role.toUpperCase()}] ${m.time}\n${m.content}`).join('\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `chat-export-${Date.now()}.txt`;
    a.click();
    App.showToast('Chat exported', 'success');
  }
};

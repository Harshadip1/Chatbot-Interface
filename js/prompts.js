/* ===== Prompt Library UI ===== */
const PromptsUI = {
  favorites: JSON.parse(localStorage.getItem('prompt_favorites') || '[]'),

  init() {
    this.renderPrompts();
    this.bindFilters();
  },

  renderPrompts(filter = 'all', search = '') {
    const grid = document.getElementById('promptGrid');
    if (!grid || typeof DemoData === 'undefined') return;

    let prompts = DemoData.prompts;
    if (filter === 'trending') prompts = prompts.filter(p => p.trending);
    else if (filter === 'favorites') prompts = prompts.filter(p => this.favorites.includes(p.id));
    else if (filter !== 'all') {
      const cat = filter.charAt(0).toUpperCase() + filter.slice(1);
      prompts = prompts.filter(p => p.category.toLowerCase() === filter || p.category === cat);
    }
    if (search) prompts = prompts.filter(p => p.text.toLowerCase().includes(search.toLowerCase()));

    grid.innerHTML = prompts.map(p => `
      <div class="prompt-card glass" data-searchable data-id="${p.id}">
        <div class="prompt-category">${p.category} ${p.trending ? '🔥' : ''}</div>
        <div class="prompt-text">${p.text}</div>
        <div class="prompt-footer">
          <span class="prompt-stats">👁 ${p.uses} · ⭐ ${p.favorites}</span>
          <div>
            <button class="prompt-fav ${this.favorites.includes(p.id) ? 'active' : ''}" data-id="${p.id}">★</button>
            <button class="btn btn-sm btn-primary copy-prompt" data-text="${p.text.replace(/"/g, '&quot;')}">Copy</button>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.copy-prompt').forEach(btn => {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.dataset.text);
        App.showToast('Prompt copied!', 'success');
      });
    });

    grid.querySelectorAll('.prompt-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const idx = this.favorites.indexOf(id);
        if (idx > -1) this.favorites.splice(idx, 1);
        else this.favorites.push(id);
        localStorage.setItem('prompt_favorites', JSON.stringify(this.favorites));
        this.renderPrompts(filter, search);
      });
    });
  },

  bindFilters() {
    document.querySelectorAll('.tab-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const search = document.getElementById('promptSearch')?.value || '';
        this.renderPrompts(btn.dataset.filter, search);
      });
    });
    document.getElementById('promptSearch')?.addEventListener('input', (e) => {
      const active = document.querySelector('.tab-btn.active')?.dataset.filter || 'all';
      this.renderPrompts(active, e.target.value);
    });
  }
};

/* ===== Main Application Controller ===== */
const App = {
  init() {
    this.initParticles();
    this.initSidebar();
    this.initTheme();
    this.initSearch();
    this.initNotifications();
    this.initReveal();
    this.setActiveNav();
    this.initPageSpecific();
  },

  initParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 15 + 's';
      p.style.animationDuration = 10 + Math.random() * 10 + 's';
      container.appendChild(p);
    }
  },

  initSidebar() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    toggle?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      overlay?.classList.toggle('show');
    });
    overlay?.addEventListener('click', () => {
      sidebar?.classList.remove('open');
      overlay?.classList.remove('show');
    });
  },

  initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
    if (saved !== 'light' && saved !== 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }

    document.getElementById('themeToggle')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      this.showToast(`Switched to ${next} theme`, 'info');
    });
  },

  initSearch() {
    const search = document.getElementById('globalSearch');
    search?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('[data-searchable]').forEach(el => {
        const text = el.textContent.toLowerCase();
        el.style.display = !q || text.includes(q) ? '' : 'none';
      });
    });
  },

  initNotifications() {
    const btn = document.getElementById('notifBtn');
    const dropdown = document.getElementById('notifDropdown');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown?.classList.toggle('show');
    });
    document.addEventListener('click', () => dropdown?.classList.remove('show'));

    if (dropdown && typeof DemoData !== 'undefined') {
      dropdown.innerHTML = DemoData.notifications.slice(0, 12).map(n => `
        <div class="notif-item ${n.read ? '' : 'unread'} glass" style="margin:4px;border-radius:8px">
          <strong>${n.title}</strong>
          <p style="font-size:0.8rem;color:var(--text-muted);margin-top:4px">${n.message}</p>
          <span style="font-size:0.7rem;color:var(--text-muted)">${n.time}</span>
        </div>
      `).join('');
    }

    const badge = document.getElementById('notifBadge');
    if (badge && typeof DemoData !== 'undefined') {
      badge.textContent = DemoData.notifications.filter(n => !n.read).length;
    }
  },

  initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  initPageSpecific() {
    const page = document.body.dataset.page;
    if (page === 'chat' && typeof Chatbot !== 'undefined') Chatbot.init();
    if (page === 'analytics' && typeof Analytics !== 'undefined') Analytics.init();
    if (page === 'prompts' && typeof PromptsUI !== 'undefined') PromptsUI.init();
    if (page === 'voice' && typeof VoiceUI !== 'undefined') VoiceUI.init();
    if (page === 'training' && typeof TrainingUI !== 'undefined') TrainingUI.init();
    if (page === 'landing') this.initLanding();
  },

  initLanding() {
    const preview = document.querySelector('.chat-preview');
    if (!preview || typeof DemoData === 'undefined') return;
    const msgs = DemoData.chatMessages.default.slice(0, 4);
    msgs.forEach((m, i) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = `preview-msg ${m.role === 'user' ? 'user' : 'ai'}`;
        div.textContent = m.content.replace(/[#*`]/g, '').slice(0, 120);
        div.style.animationDelay = i * 0.3 + 's';
        preview.appendChild(div);
      }, i * 800);
    });
  },

  showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icons[type] || icons.info}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  },

  formatNumber(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault();
    document.getElementById('globalSearch')?.focus();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'T') {
    document.getElementById('themeToggle')?.click();
  }
  if (e.ctrlKey && e.key === 'b') {
    document.querySelector('.sidebar')?.classList.toggle('open');
  }
});

/* Shared sidebar HTML injection */
function injectAppLayout(activePage) {
  const nav = [
    { section: 'Main', links: [
      { href: 'index.html', icon: '🏠', label: 'Home' },
      { href: 'chat.html', icon: '💬', label: 'Chat', page: 'chat' },
      { href: 'dashboard.html', icon: '📊', label: 'Dashboard' },
      { href: 'analytics.html', icon: '📈', label: 'Analytics', page: 'analytics' },
      { href: 'history.html', icon: '📜', label: 'History' }
    ]},
    { section: 'AI Tools', links: [
      { href: 'prompts.html', icon: '📋', label: 'Prompt Library', page: 'prompts' },
      { href: 'personas.html', icon: '🎭', label: 'Personas' },
      { href: 'voice.html', icon: '🎤', label: 'Voice Assistant', page: 'voice' },
      { href: 'training.html', icon: '🧠', label: 'AI Training', page: 'training' },
      { href: 'knowledge.html', icon: '📚', label: 'Knowledge Base' }
    ]},
    { section: 'Assistants', links: [
      { href: 'coding.html', icon: '💻', label: 'Coding' },
      { href: 'study.html', icon: '📖', label: 'Study' },
      { href: 'productivity.html', icon: '⚡', label: 'Productivity' },
      { href: 'translation.html', icon: '🌐', label: 'Translation' }
    ]},
    { section: 'More', links: [
      { href: 'suggestions.html', icon: '💡', label: 'Suggestions' },
      { href: 'smart-replies.html', icon: '⚡', label: 'Smart Replies' },
      { href: 'community.html', icon: '👥', label: 'Community' },
      { href: 'saved.html', icon: '💾', label: 'Saved Chats' },
      { href: 'notifications.html', icon: '🔔', label: 'Notifications', badge: true },
      { href: 'settings.html', icon: '⚙️', label: 'Settings' },
      { href: 'profile.html', icon: '👤', label: 'Profile' },
      { href: 'themes.html', icon: '🎨', label: 'Themes', page: 'themes' },
      { href: 'models.html', icon: '🤖', label: 'Models' },
      { href: 'about.html', icon: 'ℹ️', label: 'About' }
    ]}
  ];

  const path = window.location.pathname.split('/').pop();
  let html = `<aside class="sidebar"><div class="sidebar-logo"><div class="logo-icon">🤖</div><div><h1>NeuralChat</h1><span>AI Platform</span></div></div><nav class="sidebar-nav">`;
  nav.forEach(sec => {
    html += `<div class="nav-section"><div class="nav-section-title">${sec.section}</div>`;
    sec.links.forEach(l => {
      const active = l.href === path ? ' active' : '';
      const badge = l.badge ? '<span class="nav-badge">6</span>' : '';
      html += `<a href="${l.href}" class="nav-link${active}"><span class="icon">${l.icon}</span>${l.label}${badge}</a>`;
    });
    html += '</div>';
  });
  html += '</nav></aside><div class="sidebar-overlay" id="sidebarOverlay"></div>';
  return html;
}

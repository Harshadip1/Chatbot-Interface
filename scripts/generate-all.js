const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const sidebar = `<aside class="sidebar">
  <div class="sidebar-logo"><div class="logo-icon">🤖</div><div><h1>NeuralChat</h1><span>AI Platform</span></div></div>
  <nav class="sidebar-nav">
    <div class="nav-section"><div class="nav-section-title">Main</div>
      <a href="index.html" class="nav-link"><span class="icon">🏠</span>Home</a>
      <a href="chat.html" class="nav-link"><span class="icon">💬</span>Chat</a>
      <a href="dashboard.html" class="nav-link"><span class="icon">📊</span>Dashboard</a>
      <a href="analytics.html" class="nav-link"><span class="icon">📈</span>Analytics</a>
      <a href="history.html" class="nav-link"><span class="icon">📜</span>History</a>
    </div>
    <div class="nav-section"><div class="nav-section-title">AI Tools</div>
      <a href="prompts.html" class="nav-link"><span class="icon">📋</span>Prompts</a>
      <a href="personas.html" class="nav-link"><span class="icon">🎭</span>Personas</a>
      <a href="voice.html" class="nav-link"><span class="icon">🎤</span>Voice</a>
      <a href="training.html" class="nav-link"><span class="icon">🧠</span>Training</a>
      <a href="knowledge.html" class="nav-link"><span class="icon">📚</span>Knowledge</a>
    </div>
    <div class="nav-section"><div class="nav-section-title">Assistants</div>
      <a href="coding.html" class="nav-link"><span class="icon">💻</span>Coding</a>
      <a href="study.html" class="nav-link"><span class="icon">📖</span>Study</a>
      <a href="productivity.html" class="nav-link"><span class="icon">⚡</span>Productivity</a>
      <a href="translation.html" class="nav-link"><span class="icon">🌐</span>Translation</a>
    </div>
    <div class="nav-section"><div class="nav-section-title">More</div>
      <a href="suggestions.html" class="nav-link"><span class="icon">💡</span>Suggestions</a>
      <a href="community.html" class="nav-link"><span class="icon">👥</span>Community</a>
      <a href="settings.html" class="nav-link"><span class="icon">⚙️</span>Settings</a>
      <a href="profile.html" class="nav-link"><span class="icon">👤</span>Profile</a>
    </div>
  </nav>
</aside>`;

const header = `<header class="top-header">
  <button class="menu-toggle" id="menuToggle">☰</button>
  <div class="header-search"><span class="search-icon">🔍</span><input type="text" id="globalSearch" placeholder="Search..."></div>
  <div class="header-actions">
    <button class="btn btn-ghost btn-sm" id="themeToggle">🌙</button>
    <div style="position:relative"><button class="btn btn-ghost btn-icon" id="notifBtn">🔔</button><div class="notif-dropdown glass" id="notifDropdown"></div></div>
    <a href="profile.html" class="avatar">U</a>
  </div>
</header>`;

function build(title, pageId, active, content, extra = '') {
  const nav = active ? sidebar.replace(`href="${active}" class="nav-link"`, `href="${active}" class="nav-link active"`) : sidebar;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — NeuralChat AI</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/dashboard.css">
  <link rel="stylesheet" href="css/chat.css">
  <link rel="stylesheet" href="css/themes.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body data-page="${pageId}">
  <div class="particles"></div>
  <div class="app-layout">
${nav}
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <main class="main-content">
${header}
      <div class="page-content">${content}</div>
    </main>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/compromise@14.14.4/builds/compromise.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="js/demo-data.js"></script>
  <script src="js/nlp.js"></script>
  <script src="js/app.js"></script>
${extra}
</body>
</html>`;
}

const files = {
  'analytics.html': build('Analytics', 'analytics', 'analytics.html', `
    <div class="page-header"><h2>AI Analytics Dashboard</h2><p>NLP metrics and engagement insights.</p></div>
    <div class="grid grid-4" id="statsGrid"></div>
    <div class="dashboard-grid" style="margin-top:24px">
      <div class="glass card span-6"><div class="card-title">Daily Chats</div><div class="chart-container"><canvas id="dailyChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Intent Distribution</div><div class="chart-container"><canvas id="intentChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Response Categories</div><div class="chart-container"><canvas id="categoryChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Engagement</div><div class="chart-container"><canvas id="engagementChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Intent Metrics</div><div id="intentMetrics"></div></div>
      <div class="glass card span-6"><div class="card-title">Activity</div><div class="activity-timeline" id="activityTimeline"></div></div>
    </div>`, '  <script src="js/analytics.js"></script>\n  <script>Analytics.init();</script>'),

  'dashboard.html': build('Dashboard', 'dashboard', 'dashboard.html', `
    <div class="page-header"><h2>AI Assistant Dashboard</h2><p>Platform overview and quick actions.</p></div>
    <div class="grid grid-4" id="dashStats"></div>
    <div class="grid grid-2" style="margin-top:24px">
      <div class="glass card"><div class="card-title">Recent Activity</div><div id="dashActivity"></div></div>
      <div class="glass card"><div class="card-title">Quick Actions</div>
        <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:16px">
          <a href="chat.html" class="btn btn-primary">New Chat</a><a href="prompts.html" class="btn btn-secondary">Prompts</a>
          <a href="voice.html" class="btn btn-secondary">Voice</a><a href="training.html" class="btn btn-secondary">Training</a>
        </div></div>
    </div>
    <div class="widget-grid" style="margin-top:24px" id="dashWidgets"></div>`,
    `  <script>
    document.getElementById('dashStats').innerHTML=[{i:'💬',v:DemoData.stats.totalChats,l:'Chats'},{i:'🎯',v:DemoData.stats.nlpAccuracy+'%',l:'Accuracy'},{i:'📋',v:DemoData.stats.promptsUsed,l:'Prompts'},{i:'🎤',v:DemoData.stats.voiceSessions,l:'Voice'}].map(s=>'<div class="stat-card glass"><div class="stat-icon" style="background:rgba(124,58,237,0.2)">'+s.i+'</div><div class="stat-value">'+(typeof s.v==='number'?s.v.toLocaleString():s.v)+'</div><div class="stat-label">'+s.l+'</div></div>').join('');
    document.getElementById('dashActivity').innerHTML=DemoData.activityLog.slice(0,10).map(a=>'<div class="list-item"><span>'+a.icon+'</span><div class="list-item-content"><div class="list-item-title">'+a.action+'</div><div class="list-item-meta">'+a.time+'</div></div></div>').join('');
    document.getElementById('dashWidgets').innerHTML=['Productivity','Coding','Study','Analytics'].map(w=>'<div class="widget-card glass"><h4>'+w+'</h4><p style="color:var(--text-secondary);font-size:0.85rem">Quick '+w+' access</p></div>').join('');
    </script>`),

  'prompts.html': build('Prompt Library', 'prompts', 'prompts.html', `
    <div class="page-header"><h2>Prompt Library</h2><p>Hundreds of AI prompts across 8 categories.</p></div>
    <input type="text" class="form-control" id="promptSearch" placeholder="Search prompts..." style="margin-bottom:16px;max-width:400px">
    <div class="tabs" id="promptTabs"></div>
    <div class="prompt-grid" id="promptGrid"></div>`,
    `  <script src="js/prompts.js"></script>
  <script>
    const cats = ['all','trending','favorites'].concat(DemoData.promptCategories);
    document.getElementById('promptTabs').innerHTML = cats.map((c,i) =>
      '<button class="tab-btn' + (i===0?' active':'') + '" data-filter="' + c.toLowerCase() + '">' + c + '</button>'
    ).join('');
    PromptsUI.init();
  </script>`),

  'personas.html': build('AI Personas', 'personas', 'personas.html', `
    <div class="page-header"><h2>AI Personas</h2><p>Switch between specialized AI assistants.</p></div>
    <div class="persona-grid" id="personaGrid"></div>
    <div class="glass card" style="margin-top:24px" id="personaChat"></div>`,
    `  <script>
    document.getElementById('personaGrid').innerHTML=DemoData.personas.map(p=>'<div class="persona-card glass" data-id="'+p.id+'"><div class="persona-avatar">'+p.icon+'</div><h3>'+p.name+'</h3><p>'+p.desc+'</p><div class="persona-tags">'+p.tags.map(t=>'<span class="tag">'+t+'</span>').join('')+'</div><button class="btn btn-primary btn-sm" style="margin-top:12px">Activate</button></div>').join('');
    document.querySelectorAll('.persona-card').forEach(c=>c.addEventListener('click',()=>{localStorage.setItem('active_persona',c.dataset.id);App.showToast('Persona activated','success');}));
    </script>`),

  'training.html': build('AI Training', 'training', 'training.html', `
    <div class="page-header"><h2>AI Training UI</h2><p>Train intents and customize NLP responses.</p></div>
    <div id="trainingStats" class="training-stats"></div>
    <div class="training-section" style="margin-top:24px">
      <div class="glass intent-editor"><h3>Intent Editor</h3><div id="intentList"></div></div>
      <div class="glass"><h3>Add Training Data</h3>
        <form id="addPhraseForm">
          <div class="form-group"><label>Intent</label><select class="form-control" id="trainIntent"></select></div>
          <div class="form-group"><label>Phrase</label><input class="form-control" id="trainPhrase" required></div>
          <div class="form-group"><label>Response</label><textarea class="form-control" id="trainResponse" rows="3"></textarea></div>
          <button type="submit" class="btn btn-primary">Save Training</button>
        </form>
        <div class="form-group" style="margin-top:20px"><label>Confidence Threshold</label>
          <input type="range" class="slider-control" id="confidenceSlider" min="50" max="99" value="75">
          <span id="confidenceValue">75%</span></div>
      </div>
    </div>`,
    `  <script>
    const intents=['greeting','coding','study','weather','motivation','general','productivity','smalltalk'];
    document.getElementById('trainIntent').innerHTML=intents.map(i=>'<option>'+i+'</option>').join('');
    </script>
    <script src="js/training.js"></script><script>TrainingUI.init();</script>`),

  'knowledge.html': build('Knowledge Base', 'knowledge', 'knowledge.html', `
    <div class="page-header"><h2>Knowledge Base</h2><p>Guides, FAQs, and AI help topics.</p></div>
    <input type="text" class="form-control kb-search" placeholder="Search knowledge..." id="kbSearch">
    <div class="kb-topics" id="kbTopics"></div>
    <div id="kbArticles"></div>`,
    `  <script>
    document.getElementById('kbTopics').innerHTML=DemoData.knowledgeBase.topics.map(t=>'<div class="kb-topic-card glass"><div class="topic-icon">'+t.icon+'</div><h4>'+t.title+'</h4><p>'+t.count+' articles</p></div>').join('');
    document.getElementById('kbArticles').innerHTML=DemoData.knowledgeBase.articles.map(a=>'<div class="glass card faq-item" data-searchable style="margin-bottom:12px"><div class="faq-question">'+a.title+' <span class="tag">'+a.category+'</span></div><div class="faq-answer">'+a.excerpt+'</div></div>').join('');
    document.querySelectorAll('.faq-question').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
    document.getElementById('kbSearch').addEventListener('input',e=>{const v=e.target.value.toLowerCase();document.querySelectorAll('[data-searchable]').forEach(el=>{el.style.display=el.textContent.toLowerCase().includes(v)?'':'none';});});
    </script>`),

  'voice.html': build('Voice Assistant', 'voice', 'voice.html', `
    <div class="voice-page-hero">
      <div class="page-header" style="text-align:center"><h2>Voice Assistant</h2><p>Speech-to-text powered by Web Speech API</p></div>
      <button class="voice-mic-btn" id="voiceMicBtn">🎤</button>
      <div class="voice-visualizer"><div class="voice-bar"></div><div class="voice-bar"></div><div class="voice-bar"></div><div class="voice-bar"></div><div class="voice-bar"></div></div>
      <div class="transcript-box glass" id="transcriptBox">Tap the microphone and start speaking...</div>
      <div id="voiceResponse"></div>
      <a href="chat.html" class="btn btn-primary" style="margin-top:20px">Open Chat</a>
    </div>`,
    '  <script src="js/voice.js"></script>\n  <script>VoiceUI.init();</script>'),

  'history.html': build('Chat History', 'history', 'history.html', `
    <div class="page-header"><h2>Chat History</h2><p>All your past conversations.</p></div>
    <div id="historyList"></div>`,
    `  <script>document.getElementById('historyList').innerHTML=DemoData.conversations.map(c=>'<div class="list-item glass" data-searchable style="margin-bottom:8px;border-radius:12px"><div class="list-item-content"><div class="list-item-title">'+c.title+'</div><div class="list-item-meta">'+c.preview+'</div><div class="list-item-meta">'+c.time+' · '+c.messages+' messages</div></div><a href="chat.html" class="btn btn-sm btn-ghost">Open</a></div>').join('');</script>`),

  'settings.html': build('Settings', 'settings', 'settings.html', `
    <div class="page-header"><h2>Chat Settings</h2><p>Customize your AI experience.</p></div>
    <div class="settings-section glass card"><h3>General</h3>
      <div class="setting-row"><span>Dark Mode</span><div class="toggle-switch active" onclick="this.classList.toggle('active')"></div></div>
      <div class="setting-row"><span>Typing Animation</span><div class="toggle-switch active" onclick="this.classList.toggle('active')"></div></div>
      <div class="setting-row"><span>Sound Effects</span><div class="toggle-switch" onclick="this.classList.toggle('active')"></div></div>
      <div class="setting-row"><span>Offline Mode UI</span><div class="toggle-switch" onclick="this.classList.toggle('active')"></div></div>
    </div>
    <div class="settings-section glass card" style="margin-top:20px"><h3>Chat</h3>
      <div class="setting-row"><span>Save History</span><div class="toggle-switch active" onclick="this.classList.toggle('active')"></div></div>
      <div class="setting-row"><span>Markdown Rendering</span><div class="toggle-switch active" onclick="this.classList.toggle('active')"></div></div>
      <div class="setting-row"><span>Smart Suggestions</span><div class="toggle-switch active" onclick="this.classList.toggle('active')"></div></div>
    </div>
    <div style="margin-top:20px"><a href="themes.html" class="btn btn-primary">Theme Customization</a> <a href="shortcuts.html" class="btn btn-secondary">Keyboard Shortcuts</a></div>`),

  'profile.html': build('Profile', 'profile', 'profile.html', `
    <div class="profile-header glass"><div class="avatar avatar-lg">U</div><div><h2>Platform User</h2><p style="color:var(--text-secondary)">AI Enthusiast · Member since 2025</p></div></div>
    <div class="profile-stats" id="profileStats"></div>
    <div class="glass card" style="margin-top:24px"><h3>AI Memory</h3><div id="memoryList"></div></div>`,
    `  <script>
    document.getElementById('profileStats').innerHTML=[{v:'1,247',l:'Messages'},{v:'89',l:'Chats'},{v:'156',l:'Prompts'},{v:'12',l:'Personas'}].map(s=>'<div class="stat-card glass"><div class="stat-value">'+s.v+'</div><div class="stat-label">'+s.l+'</div></div>').join('');
    document.getElementById('memoryList').innerHTML=DemoData.memories.map(m=>'<div class="memory-card glass"><span class="memory-icon">🧠</span><div class="memory-content"><div>'+m.content+'</div><div class="memory-date">'+m.date+'</div></div></div>').join('');
    </script>`),

  'coding.html': build('Coding Assistant', 'coding', 'coding.html', `
    <div class="page-header"><h2>Coding Assistant</h2><p>Debug, explain, and generate code.</p></div>
    <div id="codeExamples"></div>
    <div class="glass card" style="margin-top:24px"><div class="terminal-card"><div class="terminal-line"><span class="terminal-prompt">$</span> npm run dev</div><div class="terminal-output">Server running on port 3000</div><div class="terminal-line"><span class="terminal-prompt">$</span> Running NLP intent: coding (92%)</div></div></div>
    <a href="chat.html" class="btn btn-primary" style="margin-top:20px">Start Coding Chat</a>`,
    `  <script>document.getElementById('codeExamples').innerHTML=DemoData.codeExamples.map(e=>'<div class="code-block-preview"><div class="code-header"><span>'+e.lang+'</span><button class="btn btn-sm btn-ghost copy-code">Copy</button></div><div class="code-content"><pre>'+e.code.replace(/</g,'&lt;')+'</pre></div><p style="padding:12px"><strong>'+e.title+'</strong></p></div>').join('');
    document.querySelectorAll('.copy-code').forEach((b,i)=>b.addEventListener('click',()=>{navigator.clipboard.writeText(DemoData.codeExamples[i].code);App.showToast('Copied','success');}));</script>`),

  'study.html': build('Study Assistant', 'study', 'study.html', `
    <div class="page-header"><h2>Study Assistant</h2><p>Learn with step-by-step explanations.</p></div>
    <div class="grid grid-2" id="studyTopics"></div>
    <a href="chat.html" class="btn btn-primary" style="margin-top:20px">Start Study Session</a>`,
    `  <script>
    document.getElementById('studyTopics').innerHTML = DemoData.prompts.filter(p=>p.category==='Study').slice(0,8).map(p =>
      '<div class="glass card prompt-card"><div class="prompt-text">'+p.text+'</div><button class="btn btn-sm btn-primary copy-study">Copy</button></div>'
    ).join('');
    document.querySelectorAll('.copy-study').forEach((btn,i) => btn.addEventListener('click', () => {
      navigator.clipboard.writeText(DemoData.prompts.filter(p=>p.category==='Study')[i].text);
      App.showToast('Copied','success');
    }));
    </script>`),

  'productivity.html': build('Productivity Assistant', 'productivity', 'productivity.html', `
    <div class="page-header"><h2>Productivity Assistant</h2><p>Plans, schedules, and task management.</p></div>
    <div class="widget-grid" id="prodWidgets"></div>`,
    `  <script>document.getElementById('prodWidgets').innerHTML=DemoData.prompts.filter(p=>p.category==='Productivity').slice(0,6).map(p=>'<div class="widget-card glass"><p>'+p.text+'</p><button class="btn btn-sm btn-ghost" style="margin-top:12px">Use Prompt</button></div>').join('');</script>`),

  'translation.html': build('Translation Assistant', 'translation', 'translation.html', `
    <div class="page-header"><h2>Translation Assistant</h2><p>Multi-language chat support.</p></div>
    <div class="grid grid-3" id="langCards"></div>`,
    `  <script>['Spanish','French','German','Japanese','Chinese','Portuguese'].forEach(l=>{document.getElementById('langCards').innerHTML+='<div class="glass card" style="text-align:center;padding:24px"><h3>'+l+'</h3><p style="color:var(--text-muted);margin:12px 0">Translate text to '+l+'</p><a href="chat.html" class="btn btn-sm btn-primary">Translate</a></div>';});</script>`),

  'suggestions.html': build('AI Suggestions', 'suggestions', 'suggestions.html', `
    <div class="page-header"><h2>AI Suggestions</h2><p>Smart recommendations for your workflow.</p></div>
    <div id="suggestionsList"></div>`,
    `  <script>document.getElementById('suggestionsList').innerHTML=DemoData.suggestedPrompts.concat(DemoData.suggestedPrompts).map((s,i)=>'<div class="glass card list-item" style="border-radius:12px;margin-bottom:8px"><span>💡</span><div><strong>'+s+'</strong><p style="font-size:0.85rem;color:var(--text-muted)">Recommended based on your activity</p></div><a href="chat.html" class="btn btn-sm btn-primary">Try</a></div>').join('');</script>`),

  'smart-replies.html': build('Smart Replies', 'smart-replies', null, `
    <div class="page-header"><h2>Smart Quick Replies</h2><p>One-click response suggestions.</p></div>
    <div id="quickReplies"></div>`,
    `  <script>document.getElementById('quickReplies').innerHTML=DemoData.smartReplies.map(r=>'<span class="quick-reply">'+r+'</span>').join('');</script>`),

  'notifications.html': build('Notifications', 'notifications', null, `
    <div class="page-header"><h2>Notifications Center</h2><p>Updates, reminders, and activity.</p></div>
    <div id="notifList"></div>`,
    `  <script>document.getElementById('notifList').innerHTML=DemoData.notifications.map(n=>'<div class="glass card notif-item '+(n.read?'':'unread')+'" style="margin-bottom:8px;border-radius:12px"><strong>'+n.title+'</strong><p style="font-size:0.85rem;color:var(--text-muted);margin:8px 0">'+n.message+'</p><span style="font-size:0.75rem;color:var(--text-muted)">'+n.time+'</span></div>').join('');</script>`),

  'saved.html': build('Saved Conversations', 'saved', null, `
    <div class="page-header"><h2>Saved Conversations</h2><p>Bookmarked chats and exports.</p></div>
    <div id="savedList"></div>`,
    `  <script>document.getElementById('savedList').innerHTML=DemoData.conversations.slice(0,10).map(c=>'<div class="list-item glass" style="border-radius:12px;margin-bottom:8px"><div class="list-item-content"><div class="list-item-title">⭐ '+c.title+'</div><div class="list-item-meta">'+c.preview+'</div></div><button class="btn btn-sm btn-ghost">Export</button></div>').join('');</script>`),

  'community.html': build('Community Prompts', 'community', 'community.html', `
    <div class="page-header"><h2>Community Prompts</h2><p>User-shared prompt templates.</p></div>
    <div id="communityList"></div>`,
    `  <script>document.getElementById('communityList').innerHTML=DemoData.communityPrompts.map(c=>'<div class="community-card glass"><div class="community-header"><div class="avatar">'+c.author[0]+'</div><div><strong>'+c.author+'</strong><br><span style="font-size:0.8rem;color:var(--text-muted)">'+c.time+'</span></div></div><p>'+c.prompt+'</p><div class="community-rating">'+Array(5).fill('★').join('')+' '+c.rating+'</div><div class="community-actions"><span>👍 '+c.likes+'</span><span>💬 '+c.comments+'</span><span>📋 Copy</span></div></div>').join('');</script>`),

  'themes.html': build('Themes', 'themes', null, `
    <div class="page-header"><h2>Theme Customization</h2><p>Personalize your AI interface.</p></div>
    <div class="theme-preview-grid" id="themeGrid"></div>
    <h3 style="margin:24px 0 12px">Accent Colors</h3>
    <div class="color-picker-row">
      <div class="color-swatch" data-color="#7C3AED" style="background:#7C3AED"></div>
      <div class="color-swatch" data-color="#06B6D4" style="background:#06B6D4"></div>
      <div class="color-swatch" data-color="#22C55E" style="background:#22C55E"></div>
      <div class="color-swatch" data-color="#F59E0B" style="background:#F59E0B"></div>
      <div class="color-swatch" data-color="#EC4899" style="background:#EC4899"></div>
    </div>`,
    `  <script>
    const themes=[{n:'Dark',t:'dark',bg:'linear-gradient(135deg,#0F172A,#1E293B)'},{n:'Light',t:'light',bg:'linear-gradient(135deg,#F8FAFC,#E2E8F0)'},{n:'Ocean',t:'ocean',bg:'linear-gradient(135deg,#0c4a6e,#06B6D4)'},{n:'Sunset',t:'sunset',bg:'linear-gradient(135deg,#F97316,#EC4899)'},{n:'Forest',t:'forest',bg:'linear-gradient(135deg,#064e3b,#22C55E)'},{n:'Neon',t:'neon',bg:'linear-gradient(135deg,#0C0A1D,#D946EF)'}];
    document.getElementById('themeGrid').innerHTML=themes.map(th=>'<div class="theme-preview glass" data-theme="'+th.t+'" style="background:'+th.bg+'"><span class="theme-name">'+th.n+'</span></div>').join('');
    </script><script src="js/themes.js"></script><script>Themes.init();</script>`),

  'shortcuts.html': build('Keyboard Shortcuts', 'shortcuts', null, `
    <div class="page-header"><h2>Keyboard Shortcuts</h2><p>Speed up your workflow.</p></div>
    <div class="shortcut-grid" id="shortcutGrid"></div>`,
    `  <script>document.getElementById('shortcutGrid').innerHTML=DemoData.shortcuts.map(s=>'<div class="shortcut-item glass"><span>'+s.action+'</span><div class="shortcut-keys">'+s.keys.map(k=>'<kbd>'+k+'</kbd>').join('')+'</div></div>').join('');</script>`),

  'about.html': build('About', 'about', null, `
    <div class="page-header"><h2>About Platform</h2><p>NeuralChat AI — Premium JavaScript NLP Chatbot</p></div>
    <div class="glass card"><p>NeuralChat is a frontend-only AI chatbot platform using compromise.js for NLP, rule-based intent matching, Chart.js analytics, Web Speech API voice input, and Marked.js markdown rendering.</p>
    <p style="margin-top:16px;color:var(--text-secondary)">No Python. No backend. No external AI APIs. All intelligence is simulated locally.</p></div>`),

  'contact.html': build('Contact', 'contact', null, `
    <div class="page-header"><h2>Contact</h2><p>Get in touch with the platform team.</p></div>
    <div class="glass card" style="max-width:500px">
      <form onsubmit="event.preventDefault();App.showToast('Message sent (demo)','success')">
        <div class="form-group"><label>Name</label><input class="form-control" required></div>
        <div class="form-group"><label>Email</label><input type="email" class="form-control" required></div>
        <div class="form-group"><label>Message</label><textarea class="form-control" rows="4" required></textarea></div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>`),

  'models.html': build('AI Models', 'models', null, `
    <div class="page-header"><h2>AI Models Comparison</h2><p>Compare available AI models.</p></div>
    <div class="glass card" style="overflow-x:auto"><table class="model-compare-table"><thead><tr><th>Model</th><th>Speed</th><th>Accuracy</th><th>Context</th><th>Coding</th><th>Voice</th><th>Free</th></tr></thead><tbody id="modelsTable"></tbody></table></div>`,
    `  <script>document.getElementById('modelsTable').innerHTML=DemoData.models.map(m=>'<tr><td><strong>'+m.name+'</strong></td><td>'+m.speed+'</td><td>'+m.accuracy+'</td><td>'+m.context+'</td><td class="'+(m.coding?'check-yes':'check-no')+'">'+(m.coding?'✓':'—')+'</td><td class="'+(m.voice?'check-yes':'check-no')+'">'+(m.voice?'✓':'—')+'</td><td class="'+(m.free?'check-yes':'check-no')+'">'+(m.free?'✓':'—')+'</td></tr>').join('');</script>`),
};

Object.entries(files).forEach(([name, html]) => {
  fs.writeFileSync(path.join(root, name), html);
  console.log('Wrote', name);
});
console.log('Done:', Object.keys(files).length, 'pages');

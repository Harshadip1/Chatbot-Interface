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
    <div class="nav-section"><div class="nav-section-title">More</div>
      <a href="settings.html" class="nav-link"><span class="icon">⚙️</span>Settings</a>
      <a href="profile.html" class="nav-link"><span class="icon">👤</span>Profile</a>
      <a href="about.html" class="nav-link"><span class="icon">ℹ️</span>About</a>
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

const baseScripts = `  <script src="https://cdn.jsdelivr.net/npm/compromise@14.14.4/builds/compromise.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="js/demo-data.js"></script>
  <script src="js/nlp.js"></script>
  <script src="js/app.js"></script>`;

function page(title, pageId, activeHref, content, extraScripts = '') {
  const nav = sidebar.replace(
    `href="${activeHref}" class="nav-link"`,
    `href="${activeHref}" class="nav-link active"`
  );
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
${baseScripts}
${extraScripts}
</body>
</html>`;
}

const pages = {
  'analytics.html': [page('Analytics', 'analytics', 'analytics.html', `
    <div class="page-header"><h2>AI Analytics Dashboard</h2><p>NLP metrics and chat statistics.</p></div>
    <div class="grid grid-4" id="statsGrid"></div>
    <div class="dashboard-grid" style="margin-top:24px">
      <div class="glass card span-6"><div class="card-title">Daily Chats</div><div class="chart-container"><canvas id="dailyChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Intents</div><div class="chart-container"><canvas id="intentChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Categories</div><div class="chart-container"><canvas id="categoryChart"></canvas></div></div>
      <div class="glass card span-6"><div class="card-title">Engagement</div><div class="chart-container"><canvas id="engagementChart"></canvas></div></div>
      <div class="glass card span-6"><div id="intentMetrics"></div></div>
      <div class="glass card span-6"><div class="activity-timeline" id="activityTimeline"></div></div>
    </div>`, '  <script src="js/analytics.js"></script>\n  <script>Analytics.init();</script>')],
};

// Write analytics only for test - we'll write all pages below manually in batch
fs.writeFileSync(path.join(root, 'analytics.html'), pages['analytics.html'][0]);
console.log('Generated analytics.html');

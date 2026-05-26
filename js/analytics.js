/* ===== Analytics Dashboard (Chart.js) ===== */
const Analytics = {
  charts: [],

  init() {
    if (typeof DemoData === 'undefined' || typeof Chart === 'undefined') return;
    this.renderStats();
    this.renderCharts();
    this.renderActivity();
    this.renderMetrics();
  },

  renderStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;
    const s = DemoData.stats;
    const stats = [
      { icon: '💬', label: 'Total Chats', value: App.formatNumber(s.totalChats), change: '+12%', positive: true, color: 'rgba(124,58,237,0.2)' },
      { icon: '📨', label: 'Messages', value: App.formatNumber(s.totalMessages), change: '+8%', positive: true, color: 'rgba(6,182,212,0.2)' },
      { icon: '🎯', label: 'NLP Accuracy', value: s.nlpAccuracy + '%', change: '+2.1%', positive: true, color: 'rgba(34,197,94,0.2)' },
      { icon: '⚡', label: 'Avg Response', value: s.avgResponseTime, change: '-0.3s', positive: true, color: 'rgba(245,158,11,0.2)' }
    ];
    grid.innerHTML = stats.map(st => `
      <div class="stat-card glass reveal">
        <div class="stat-icon" style="background:${st.color}">${st.icon}</div>
        <div class="stat-value">${st.value}</div>
        <div class="stat-label">${st.label}</div>
        <div class="stat-change ${st.positive ? 'positive' : 'negative'}">${st.positive ? '↑' : '↓'} ${st.change}</div>
      </div>
    `).join('');
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  },

  renderCharts() {
    const intents = DemoData.analytics.intents;
    this.createChart('intentChart', 'doughnut', {
      labels: intents.map(i => i.name),
      datasets: [{ data: intents.map(i => i.count), backgroundColor: ['#7C3AED','#06B6D4','#22C55E','#F59E0B','#EF4444','#EC4899','#8B5CF6','#14B8A6','#F97316','#64748B'] }]
    });

    this.createChart('dailyChart', 'line', {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [{
        label: 'Daily Chats',
        data: DemoData.analytics.dailyChats,
        borderColor: '#7C3AED',
        backgroundColor: 'rgba(124,58,237,0.1)',
        fill: true,
        tension: 0.4
      }]
    });

    this.createChart('categoryChart', 'bar', {
      labels: DemoData.analytics.responseCategories.map(c => c.label),
      datasets: [{
        label: 'Responses %',
        data: DemoData.analytics.responseCategories.map(c => c.value),
        backgroundColor: '#06B6D4'
      }]
    });

    this.createChart('engagementChart', 'polarArea', {
      labels: ['Daily', 'Weekly', 'Monthly'],
      datasets: [{
        data: [DemoData.analytics.engagement.daily, DemoData.analytics.engagement.weekly, DemoData.analytics.engagement.monthly],
        backgroundColor: ['rgba(124,58,237,0.7)','rgba(6,182,212,0.7)','rgba(34,197,94,0.7)']
      }]
    });
  },

  createChart(canvasId, type, data) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const color = isDark ? '#94A3B8' : '#475569';
    const chart = new Chart(canvas, {
      type,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color } } },
        scales: type !== 'doughnut' && type !== 'polarArea' ? {
          x: { ticks: { color }, grid: { color: 'rgba(148,163,184,0.1)' } },
          y: { ticks: { color }, grid: { color: 'rgba(148,163,184,0.1)' } }
        } : {}
      }
    });
    this.charts.push(chart);
  },

  renderActivity() {
    const el = document.getElementById('activityTimeline');
    if (!el) return;
    el.innerHTML = DemoData.activityLog.slice(0, 15).map(a => `
      <div class="timeline-item">
        <div class="timeline-dot">${a.icon}</div>
        <div class="timeline-content">
          <div class="timeline-title">${a.action}</div>
          <div class="timeline-desc">${a.detail}</div>
          <div class="timeline-time">${a.time}</div>
        </div>
      </div>
    `).join('');
  },

  renderMetrics() {
    const el = document.getElementById('intentMetrics');
    if (!el) return;
    el.innerHTML = DemoData.analytics.intents.map(i => `
      <div class="metric-row">
        <span class="metric-label">${i.name}</span>
        <span class="metric-value">${i.count.toLocaleString()} (${i.percent}%)</span>
      </div>
    `).join('');
  }
};

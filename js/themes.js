/* ===== Theme Customization ===== */
const Themes = {
  presets: ['dark', 'light', 'ocean', 'sunset', 'forest', 'midnight', 'neon'],

  init() {
    document.querySelectorAll('.theme-preview').forEach(el => {
      el.addEventListener('click', () => {
        const theme = el.dataset.theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        document.querySelectorAll('.theme-preview').forEach(p => p.classList.remove('active'));
        el.classList.add('active');
        App.showToast(`Theme: ${theme}`, 'success');
      });
    });

    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        document.documentElement.style.setProperty('--primary', swatch.dataset.color);
        localStorage.setItem('customPrimary', swatch.dataset.color);
        App.showToast('Accent color updated', 'info');
      });
    });

    const saved = localStorage.getItem('theme') || 'dark';
    document.querySelector(`.theme-preview[data-theme="${saved}"]`)?.classList.add('active');
    const custom = localStorage.getItem('customPrimary');
    if (custom) document.documentElement.style.setProperty('--primary', custom);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'themes') Themes.init();
});

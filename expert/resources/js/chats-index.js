(function () {
    async function loadLayout() { if (window.EC && window.EC.loadLayout) await window.EC.loadLayout(); }
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '0' : '250px';
        }
    }
    window.EC = window.EC || {}; window.EC.chatsIndex = { toggleSidebar };
    function init() { loadLayout(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

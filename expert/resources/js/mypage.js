(function () {
    function interactions() {
        const editBtn = document.querySelector('.edit-button');
        editBtn && editBtn.addEventListener('click', () => alert('プロフィール編集機能は準備中です。'));
        document.querySelectorAll('.review-card').forEach(card => {
            card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-4px)');
            card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
        });
        document.querySelectorAll('.history-table tbody tr').forEach(row => {
            row.addEventListener('click', () => alert('案件詳細画面は準備中です。'));
        });
    }
    function activate() {
        const items = document.querySelectorAll('.sidebar-item');
        items.forEach(it => { it.classList.remove('active'); if (it.href && (it.href.endsWith('mypage') || it.href.endsWith('mypage.html'))) it.classList.add('active'); });
    }
    async function loadLayoutIfNeeded() {
        if (window.EC && window.EC.loadLayout) {
            await window.EC.loadLayout();
            setTimeout(activate, 80);
        }
    }
    function init() { loadLayoutIfNeeded(); interactions(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

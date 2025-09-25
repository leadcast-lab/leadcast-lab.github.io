(function () {
    async function loadLayout() { if (window.EC && window.EC.loadLayout) await window.EC.loadLayout(); }
    function loadChatData() {
        const urlParams = new URLSearchParams(window.location.search);
        const chatId = urlParams.get('id') || '1';
        const chatData = {
            '1': { name: 'トヨタ自動車株式会社', company: '鈴木 花子様', avatar: 'ト' },
            '2': { name: '株式会社ホンダ', company: '田中 太郎様', avatar: 'ホ' },
            '3': { name: '日産自動車株式会社', company: '佐藤 次郎様', avatar: '日' },
            '4': { name: 'マツダ株式会社', company: '山田 美香様', avatar: 'マ' },
            '5': { name: 'スバル株式会社', company: '高橋 健一様', avatar: 'ス' },
            '6': { name: '三菱自動車工業株式会社', company: '渡辺 智子様', avatar: '三' }
        };
        const data = chatData[chatId] || chatData['1'];
        document.getElementById('userName').textContent = data.name;
        document.getElementById('userCompany').textContent = data.company;
        document.getElementById('chatAvatar').textContent = data.avatar;
        document.querySelectorAll('.message-avatar.sponsor').forEach(a => a.textContent = data.avatar);
    }
    function addMessage(text, isOwn) {
        const container = document.getElementById('messagesContainer');
        if (!container) return;
        const div = document.createElement('div');
        div.className = 'message' + (isOwn ? ' own' : '');
        div.innerHTML = `\n      <div class="message-avatar ${isOwn ? 'expert' : 'sponsor'}">${isOwn ? 'エ' : document.getElementById('chatAvatar').textContent}</div>\n      <div class="message-content">\n        <div class="message-bubble">${text}</div>\n        <div class="message-time">今</div>\n      </div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }
    function sendMessage() {
        const input = document.getElementById('messageInput');
        if (!input) return;
        const message = input.value.trim(); if (!message) return;
        addMessage(message, true); input.value = ''; input.style.height = 'auto';
        const btn = document.getElementById('sendBtn');
        if (btn) { btn.disabled = true; setTimeout(() => { btn.disabled = false; }, 1000); }
    }
    function autoResize() { const ta = document.getElementById('messageInput'); if (!ta) return; ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'; }
    function handleKeyDown(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '0' : '250px';
        }
    }
    function init() {
        loadLayout().then(() => { loadChatData(); });
        const mi = document.getElementById('messageInput');
        mi && mi.addEventListener('input', autoResize);
        mi && mi.addEventListener('keydown', handleKeyDown);
        window.EC = window.EC || {}; window.EC.chatsDetail = { sendMessage, toggleSidebar };
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

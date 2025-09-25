// Generic loader for header & sidebar components
(function () {
    async function loadComponent(elId, path) {
        try {
            const resp = await fetch(path);
            const html = await resp.text();
            const el = document.getElementById(elId);
            if (el) el.innerHTML = html;
        } catch (e) {
            console.error('コンポーネント読み込み失敗', path, e);
        }
    }

    async function loadLayout() {
        await Promise.all([
            loadComponent('header-container', '/expert/components/header.html'),
            loadComponent('sidebar-container', '/expert/components/sidebar.html')
        ]);
        // After components inserted ensure header & sidebar scripts are active
        // header.js and sidebar.js run on DOMContentLoaded; if inserted later we re-run minimal hooks
        if (window.EC && typeof window.EC.updateSidebarActive === 'function') {
            setTimeout(window.EC.updateSidebarActive, 50);
        }
    }

    window.EC = window.EC || {};
    window.EC.loadLayout = loadLayout;
})();

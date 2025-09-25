// Header interactive behaviors (extracted from inline script)
(function () {
    const initHeader = () => {
        const userBtn = document.getElementById('userMenuBtn');
        const userDropdown = document.getElementById('userDropdown');
        const searchToggle = document.getElementById('searchToggle');
        const searchOverlay = document.getElementById('searchOverlay');
        const closeSearchOverlay = document.getElementById('closeSearchOverlay');
        const menuBtn = document.getElementById('menuToggle');

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                const sidebar = document.getElementById('sidebar');
                const mainContent = document.querySelector('.main-content');
                if (!sidebar) return;
                const isMobile = window.matchMedia('(max-width:1024px)').matches;
                if (isMobile) {
                    sidebar.classList.toggle('mobile-open');
                    const expanded = sidebar.classList.contains('mobile-open');
                    menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                } else {
                    sidebar.classList.toggle('collapsed-alt');
                    if (mainContent) mainContent.classList.toggle('sidebar-mini');
                    const collapsed = sidebar.classList.contains('collapsed-alt');
                    menuBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
                }
            });
        }

        // Ensure correct initial aria-expanded after load
        const sidebar = document.getElementById('sidebar');
        if (sidebar && menuBtn && sidebar.classList.contains('collapsed-alt')) {
            menuBtn.setAttribute('aria-expanded', 'false');
        }

        if (userBtn) {
            userBtn.addEventListener('click', () => {
                if (!userDropdown) return;
                const hidden = userDropdown.getAttribute('aria-hidden') === 'true';
                userDropdown.setAttribute('aria-hidden', hidden ? 'false' : 'true');
                userBtn.setAttribute('aria-expanded', hidden ? 'true' : 'false');
            });
        }
        document.addEventListener('click', (e) => {
            if (!userBtn || !userDropdown) return;
            if (!userDropdown.contains(e.target) && !userBtn.contains(e.target)) {
                userDropdown.setAttribute('aria-hidden', 'true');
                userBtn.setAttribute('aria-expanded', 'false');
            }
        });

        if (searchToggle) {
            searchToggle.addEventListener('click', () => {
                if (!searchOverlay) return;
                searchOverlay.classList.add('open');
                searchOverlay.setAttribute('aria-hidden', 'false');
                const input = searchOverlay.querySelector('input');
                if (input) setTimeout(() => input.focus(), 50);
            });
        }

        if (closeSearchOverlay) {
            closeSearchOverlay.addEventListener('click', () => {
                if (!searchOverlay) return;
                searchOverlay.classList.remove('open');
                searchOverlay.setAttribute('aria-hidden', 'true');
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
                searchOverlay.classList.remove('open');
                searchOverlay.setAttribute('aria-hidden', 'true');
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeader);
    } else {
        initHeader();
    }
})();

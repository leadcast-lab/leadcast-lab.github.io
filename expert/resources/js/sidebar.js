// Sidebar related behaviors & active item highlighting
(function () {
    function updateSidebarActive() {
        const currentPath = window.location.pathname;
        const sidebarItems = document.querySelectorAll('.sidebar-item[href]');
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });

        // Basic matching (by last segment)
        sidebarItems.forEach(item => {
            const last = item.getAttribute('href').split('/').pop();
            if (last && currentPath.endsWith(last)) {
                item.classList.add('active');
            }
        });
    }
    window.EC = window.EC || {};
    window.EC.updateSidebarActive = updateSidebarActive;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(updateSidebarActive, 50));
    } else {
        setTimeout(updateSidebarActive, 50);
    }
})();

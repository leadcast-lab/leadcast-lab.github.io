(function () {
    async function loadLayoutAndActivate() {
        if (window.EC && window.EC.loadLayout) {
            await window.EC.loadLayout();
            setTimeout(() => activate(), 80);
        }
    }
    function activate() {
        document.querySelectorAll('.sidebar-item').forEach(i => {
            i.classList.remove('active');
            if (i.href && (i.href.includes('/expert/project') || i.href.includes('projects'))) i.classList.add('active');
        });
    }
    function showCategory(category, evt) {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        if (evt && evt.target) evt.target.classList.add('active');
        const sections = document.querySelectorAll('.video-section');
        sections.forEach(sec => sec.style.display = 'none');
        if (category === 'all') sections.forEach(sec => sec.style.display = 'block'); else {
            const target = document.getElementById(category);
            if (target) target.style.display = 'block'; else { document.getElementById('newest').style.display = 'block'; document.getElementById('popular').style.display = 'block'; }
        }
    }
    function playVideo(videoId) { window.location.href = `/expert/projects/detail?id=${videoId}`; }
    function performSearch() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const levelFilter = document.getElementById('levelFilter').value;
        const sortFilter = document.getElementById('sortFilter').value;
        console.log('検索実行:', { searchTerm, levelFilter, sortFilter });
    }
    function setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const levelFilter = document.getElementById('levelFilter');
        const sortFilter = document.getElementById('sortFilter');
        if (searchInput) searchInput.addEventListener('input', performSearch);
        if (levelFilter) levelFilter.addEventListener('change', performSearch);
        if (sortFilter) sortFilter.addEventListener('change', performSearch);
    }
    function init() { loadLayoutAndActivate(); setupSearch(); }
    window.EC = window.EC || {}; window.EC.projectsIndex = { showCategory, playVideo };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

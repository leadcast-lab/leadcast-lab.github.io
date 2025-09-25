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
            if (i.href && (i.href.includes('/expert/projects') || i.href.includes('projects.html'))) i.classList.add('active');
        });
    }
    function playVideo() {
        const videoPlayer = document.getElementById('videoPlayer');
        if (!videoPlayer) return;
        const playButton = videoPlayer.querySelector('.play-button');
        if (playButton) {
            playButton.innerHTML = '⏸️';
            playButton.onclick = pauseVideo;
        }
        videoPlayer.style.background = 'linear-gradient(135deg, #43a047 0%, #388e3c 100%)';
        alert('動画を再生します。\n\n実際の実装では、ここで動画プレイヤー（YouTube、Vimeo等）が起動します。');
    }
    function pauseVideo() {
        const videoPlayer = document.getElementById('videoPlayer');
        if (!videoPlayer) return;
        const playButton = videoPlayer.querySelector('.play-button');
        if (playButton) {
            playButton.innerHTML = '▶';
            playButton.onclick = playVideo;
        }
        videoPlayer.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    function submitFeedback(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const feedback = {};
        for (const [k, v] of formData.entries()) {
            if (feedback[k]) { if (Array.isArray(feedback[k])) feedback[k].push(v); else feedback[k] = [feedback[k], v]; }
            else feedback[k] = v;
        }
        console.log('フィードバックデータ:', feedback);
        alert('フィードバックを送信しました。\nご協力ありがとうございました！\n\n実際の実装では、サーバーにデータが送信されます。');
        event.target.reset();
    }
    function init() {
        loadLayoutAndActivate();
        const form = document.getElementById('feedbackForm');
        form && form.addEventListener('submit', submitFeedback);
    }
    window.EC = window.EC || {}; window.EC.projectsDetail = { playVideo, pauseVideo };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

(function () {
    function onSubmit(e) { e.preventDefault(); window.location.href = '/expert/mypage'; }
    function loginWithGoogle() { alert('Google アカウントでのログイン機能は実装中です。'); }
    window.EC = window.EC || {}; window.EC.loginWithGoogle = loginWithGoogle;
    function init() { const f = document.getElementById('loginForm'); f && f.addEventListener('submit', onSubmit); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

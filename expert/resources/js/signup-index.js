(function () {
    function onSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert('アカウント作成機能は実装中です。\n入力されたメール: ' + email);
        }
    }
    function signUpWithGoogle() {
        alert('Google アカウントでのサインアップ機能は実装中です。');
    }
    window.EC = window.EC || {};
    window.EC.signUpWithGoogle = signUpWithGoogle;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('registerForm');
            form && form.addEventListener('submit', onSubmit);
        });
    } else {
        const form = document.getElementById('registerForm');
        form && form.addEventListener('submit', onSubmit);
    }
})();

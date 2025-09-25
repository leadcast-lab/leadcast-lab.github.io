(function () {
    async function loadLayoutAndActivate() {
        if (window.EC && window.EC.loadLayout) {
            await window.EC.loadLayout();
            setTimeout(() => highlight(), 80);
        }
    }
    function highlight() {
        const items = document.querySelectorAll('.sidebar-item');
        items.forEach(i => {
            i.classList.remove('active');
            if (i.href && (i.href.endsWith('contact') || i.href.endsWith('contact.html'))) i.classList.add('active');
        });
    }
    function onSubmit(e) {
        e.preventDefault();
        const submitBtn = document.querySelector('.submit-btn');
        if (!submitBtn) return;
        const original = submitBtn.innerHTML;
        submitBtn.innerHTML = '📤 送信中...';
        submitBtn.disabled = true;
        setTimeout(() => {
            alert('お問合せを受け付けました。\n確認メールをお送りしましたのでご確認ください。\n24時間以内にご返信いたします。');
            document.getElementById('contactForm').reset();
            submitBtn.innerHTML = original; submitBtn.disabled = false;
        }, 2000);
    }
    function realtimeValidation() {
        document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
            input.addEventListener('blur', e => {
                if (e.target.hasAttribute('required') && !e.target.value.trim()) e.target.style.borderColor = '#dc3545'; else e.target.style.borderColor = '#e0e0e0';
            });
            input.addEventListener('input', e => { if (e.target.style.borderColor === 'rgb(220, 53, 69)' && e.target.value.trim()) e.target.style.borderColor = '#e0e0e0'; });
        });
    }
    function init() {
        loadLayoutAndActivate();
        const form = document.getElementById('contactForm'); form && form.addEventListener('submit', onSubmit);
        realtimeValidation();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

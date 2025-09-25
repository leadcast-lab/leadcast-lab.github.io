(function () {
    let timeRemaining = 300; // 5分
    let timerInterval;
    function startTimer() {
        timerInterval = setInterval(() => {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            const timerEl = document.getElementById('codeTimer');
            if (timerEl) timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                if (timerEl) timerEl.textContent = '期限切れ';
                const resend = document.getElementById('resendLink');
                resend && resend.classList.remove('disabled');
            }
        }, 1000);
    }
    function checkPasswordRequirements(password) {
        const requirements = {
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*]/.test(password)
        };
        Object.keys(requirements).forEach(req => {
            const element = document.getElementById(req + 'Req');
            if (!element) return;
            const icon = element.querySelector('.requirement-icon');
            if (requirements[req]) { element.classList.add('valid'); if (icon) icon.textContent = '✓'; }
            else { element.classList.remove('valid'); if (icon) icon.textContent = '○'; }
        });
        return Object.values(requirements).every(Boolean);
    }
    function validateForm() {
        const code = document.getElementById('verificationCode');
        const password = document.getElementById('newPassword');
        const confirmPassword = document.getElementById('confirmPassword');
        const submitBtn = document.getElementById('submitBtn');
        if (!code || !password || !confirmPassword || !submitBtn) return false;
        let isValid = true;
        const codeRegex = /^\d{6}$/;
        if (!codeRegex.test(code.value)) {
            if (code.value.length > 0) { code.classList.add('error'); document.getElementById('codeError').style.display = 'block'; }
            isValid = false;
        } else {
            code.classList.remove('error'); code.classList.add('success'); document.getElementById('codeError').style.display = 'none';
        }
        const passwordValid = checkPasswordRequirements(password.value);
        if (password.value.length > 0 && !passwordValid) { password.classList.add('error'); document.getElementById('passwordError').style.display = 'block'; isValid = false; }
        else if (passwordValid) { password.classList.remove('error'); password.classList.add('success'); document.getElementById('passwordError').style.display = 'none'; }
        if (confirmPassword.value.length > 0) {
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('error');
                document.getElementById('confirmError').style.display = 'block';
                document.getElementById('confirmSuccess').style.display = 'none';
                isValid = false;
            } else {
                confirmPassword.classList.remove('error');
                confirmPassword.classList.add('success');
                document.getElementById('confirmError').style.display = 'none';
                document.getElementById('confirmSuccess').style.display = 'block';
            }
        }
        submitBtn.disabled = !isValid || !code.value || !password.value || !confirmPassword.value;
        return isValid;
    }
    function resendHandler(e) {
        e.preventDefault();
        if (e.target.classList.contains('disabled')) return;
        alert('確認コードを再送信しました。\n新しいコードをご確認ください。');
        timeRemaining = 300; e.target.classList.add('disabled'); startTimer();
    }
    function onSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '🔐 変更中...'; submitBtn.disabled = true;
        setTimeout(() => {
            alert('パスワードの変更が完了しました！\n\n新しいパスワードでログインしてください。\nセキュリティのため、すべてのデバイスからログアウトされました。');
            window.location.href = '../login.html';
        }, 2000);
    }
    function init() {
        startTimer(); validateForm();
        document.getElementById('resendLink').addEventListener('click', resendHandler);
        document.getElementById('passwordResetForm').addEventListener('submit', onSubmit);
        document.getElementById('verificationCode').addEventListener('input', e => { e.target.value = e.target.value.replace(/[^\d]/g, ''); validateForm(); });
        document.getElementById('newPassword').addEventListener('input', validateForm);
        document.getElementById('confirmPassword').addEventListener('input', validateForm);
        document.querySelectorAll('.form-input').forEach(inp => inp.addEventListener('focus', e => e.target.classList.remove('error')));
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

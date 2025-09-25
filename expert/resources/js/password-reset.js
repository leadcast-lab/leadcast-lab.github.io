(function () {
    function generateYearOptions() {
        const yearSelect = document.getElementById('birthYear');
        if (!yearSelect) return;
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 80;
        const endYear = currentYear - 13;
        for (let y = endYear; y >= startYear; y--) {
            const opt = document.createElement('option');
            opt.value = y; opt.textContent = y + '年';
            yearSelect.appendChild(opt);
        }
    }
    function generateDayOptions() {
        const daySelect = document.getElementById('birthDay');
        const month = parseInt(document.getElementById('birthMonth').value);
        const year = parseInt(document.getElementById('birthYear').value);
        if (!daySelect) return;
        while (daySelect.children.length > 1) daySelect.removeChild(daySelect.lastChild);
        if (!month) return;
        let daysInMonth = 31;
        if (month === 2) {
            if (year && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) daysInMonth = 29; else daysInMonth = 28;
        } else if ([4, 6, 9, 11].includes(month)) daysInMonth = 30;
        for (let d = 1; d <= daysInMonth; d++) {
            const opt = document.createElement('option');
            opt.value = d; opt.textContent = d + '日';
            daySelect.appendChild(opt);
        }
    }
    function validateForm() {
        const email = document.getElementById('email');
        const birthYear = document.getElementById('birthYear');
        const birthMonth = document.getElementById('birthMonth');
        const birthDay = document.getElementById('birthDay');
        const submitBtn = document.getElementById('submitBtn');
        if (!email) return false;
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) { email.classList.add('error'); document.getElementById('emailError').style.display = 'block'; isValid = false; }
        else { email.classList.remove('error'); document.getElementById('emailError').style.display = 'none'; }
        if (!birthYear.value || !birthMonth.value || !birthDay.value) {
            [birthYear, birthMonth, birthDay].forEach(sel => { if (!sel.value) sel.classList.add('error'); });
            document.getElementById('birthdateError').style.display = 'block'; isValid = false;
        } else {
            [birthYear, birthMonth, birthDay].forEach(sel => sel.classList.remove('error'));
            document.getElementById('birthdateError').style.display = 'none';
        }
        submitBtn.disabled = !isValid;
        return isValid;
    }
    function onSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '📧 送信中...';
        submitBtn.disabled = true;
        setTimeout(() => {
            alert('パスワードリセット用のメールを送信しました。\n\nメールボックスをご確認いただき、記載されたリンクからパスワードの再設定を行ってください。\n\n※メールが届かない場合は、迷惑メールフォルダもご確認ください。');
            submitBtn.innerHTML = originalText; submitBtn.disabled = false;
        }, 2000);
    }
    function init() {
        generateYearOptions(); validateForm();
        document.getElementById('resetForm').addEventListener('submit', onSubmit);
        document.getElementById('email').addEventListener('input', validateForm);
        document.getElementById('birthYear').addEventListener('change', () => { generateDayOptions(); validateForm(); });
        document.getElementById('birthMonth').addEventListener('change', () => { generateDayOptions(); validateForm(); });
        document.getElementById('birthDay').addEventListener('change', validateForm);
        document.querySelectorAll('.form-input, .date-select').forEach(inp => {
            inp.addEventListener('focus', e => e.target.classList.remove('error'));
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

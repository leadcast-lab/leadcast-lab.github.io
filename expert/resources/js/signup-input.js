(function () {
    function toggleCheckbox(id) {
        const checkbox = document.getElementById(id);
        if (!checkbox) return;
        const item = checkbox.parentElement;
        checkbox.checked = !checkbox.checked;
        item && item.classList.toggle('selected', checkbox.checked);
    }
    function onSubmit(e) {
        e.preventDefault();
        const requiredFields = ['lastName', 'firstName', 'email', 'companyName', 'department', 'companyPhone'];
        let isValid = true;
        requiredFields.forEach(id => {
            const input = document.getElementById(id);
            if (!input) return;
            if (!input.value.trim()) { input.style.borderColor = '#e74c3c'; isValid = false; }
            else input.style.borderColor = '#e0e0e0';
        });
        const responsibilities = document.querySelectorAll('input[name="responsibilities"]:checked');
        if (responsibilities.length === 0) {
            alert('担当業務を少なくとも1つ選択してください。');
            isValid = false;
        }
        if (!isValid) return;
        window.location.href = './confirm.html';
    }
    function attachRealtimeValidation() {
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required') && !input.value.trim()) input.style.borderColor = '#e74c3c';
                else input.style.borderColor = '#e0e0e0';
            });
            input.addEventListener('input', () => { if (input.value.trim()) input.style.borderColor = '#007acc'; });
        });
    }
    function initCheckboxes() {
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                const item = cb.parentElement;
                if (item) item.classList.toggle('selected', cb.checked);
            });
        });
    }
    window.EC = window.EC || {};
    window.EC.toggleCheckbox = toggleCheckbox;
    function init() {
        const form = document.getElementById('detailForm');
        form && form.addEventListener('submit', onSubmit);
        attachRealtimeValidation();
        initCheckboxes();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

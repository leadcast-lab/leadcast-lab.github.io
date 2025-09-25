(function () {
    function getUrlParam(name) { return new URLSearchParams(window.location.search).get(name); }
    function loadFormData() {
        return {
            lastName: getUrlParam('lastName') || '山田',
            firstName: getUrlParam('firstName') || '太郎',
            phone: getUrlParam('phone') || '090-1234-5678',
            email: getUrlParam('email') || 'yamada@example.com',
            companyName: getUrlParam('companyName') || '山田商事株式会社',
            department: getUrlParam('department') || '経理部',
            position: getUrlParam('position') || '課長',
            companyPhone: getUrlParam('companyPhone') || '03-1234-5678',
            responsibilities: getUrlParam('responsibilities') || '経理,購買,給与計算'
        };
    }
    function displayData() {
        const data = loadFormData();
        const byId = id => document.getElementById(id);
        byId('displayFullName').textContent = `${data.lastName} ${data.firstName}`;
        byId('displayPhone').textContent = data.phone || '未入力';
        byId('displayEmail').textContent = data.email;
        byId('displayCompanyName').textContent = data.companyName;
        byId('displayDepartment').textContent = data.department;
        byId('displayPosition').textContent = data.position || '未入力';
        byId('displayCompanyPhone').textContent = data.companyPhone;
        const responsibilitiesContainer = byId('displayResponsibilities');
        if (data.responsibilities) {
            responsibilitiesContainer.innerHTML = '';
            data.responsibilities.split(',').forEach(r => {
                if (r.trim()) {
                    const tag = document.createElement('span');
                    tag.className = 'responsibility-tag';
                    tag.textContent = r.trim();
                    responsibilitiesContainer.appendChild(tag);
                }
            });
        }
        byId('hiddenLastName').value = data.lastName;
        byId('hiddenFirstName').value = data.firstName;
        byId('hiddenPhone').value = data.phone;
        byId('hiddenEmail').value = data.email;
        byId('hiddenCompanyName').value = data.companyName;
        byId('hiddenDepartment').value = data.department;
        byId('hiddenPosition').value = data.position;
        byId('hiddenCompanyPhone').value = data.companyPhone;
        byId('hiddenResponsibilities').value = data.responsibilities;
        document.querySelectorAll('.confirm-value').forEach(el => {
            if (el.textContent === '未入力' || el.textContent.trim() === '') {
                el.classList.add('empty');
                if (el.textContent.trim() === '') el.textContent = '未入力';
            }
        });
    }
    function goBack() {
        const data = loadFormData();
        const params = new URLSearchParams();
        Object.keys(data).forEach(k => { if (data[k]) params.append(k, data[k]); });
        window.location.href = `./input.html?${params.toString()}`;
    }
    function onSubmit(e) {
        e.preventDefault();
        alert('会員登録が完了しました！\nありがとうございます。完了ページへ移動します。');
        window.location.href = './thanks.html';
    }
    window.EC = window.EC || {};
    window.EC.signupConfirm = { goBack };
    function init() {
        const form = document.getElementById('confirmForm');
        form && form.addEventListener('submit', onSubmit);
        displayData();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

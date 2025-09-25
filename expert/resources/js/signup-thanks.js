(function () {
    function animate() {
        const successIcon = document.querySelector('.success-icon');
        if (successIcon) {
            setTimeout(() => {
                successIcon.style.transform = 'scale(1.1)';
                setTimeout(() => { successIcon.style.transform = 'scale(1)'; }, 200);
            }, 500);
        }
        const steps = document.querySelectorAll('.steps-list li');
        steps.forEach((step, i) => {
            setTimeout(() => {
                step.style.opacity = '0';
                step.style.transform = 'translateY(20px)';
                step.style.transition = 'all 0.5s ease';
                setTimeout(() => { step.style.opacity = '1'; step.style.transform = 'translateY(0)'; }, 100);
            }, i * 150);
        });
    }
    function buttonEffects() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.style.transform = 'scale(0.98)';
                setTimeout(() => { btn.style.transform = ''; }, 150);
            });
        });
    }
    function init() { animate(); buttonEffects(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

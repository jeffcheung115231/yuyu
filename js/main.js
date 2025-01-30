// 導航欄交互
document.addEventListener('DOMContentLoaded', () => {
    // 移動端漢堡菜單
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.main-nav .container').appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        document.querySelector('.main-nav ul').classList.toggle('active');
    });

    // 表單驗證
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => {
            if (!form.checkValidity()) {
                e.preventDefault();
                alert('請填寫所有必填欄位');
            }
        });
    });
});

// 會員系統功能
class MemberPortal {
    constructor() {
        this.loadUserData();
    }

    loadUserData() {
        // API 整合代碼...
    }
}

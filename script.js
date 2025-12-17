document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('actionBtn');
    const output = document.getElementById('output');
    let count = 0;

    btn.addEventListener('click', () => {
        count++;
        output.textContent = `你已经点击了 ${count} 次按钮！`;
        
        // 简单的动画效果
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    });
    
    console.log('H5 项目已加载完成');
});







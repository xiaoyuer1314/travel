// 重庆旅游攻略网站 JavaScript 功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏交互
    initNavigation();
    
    // 初始化滚动效果
    initScrollEffects();
    
    // 初始化Mermaid图表
    initMermaid();
    
    // 初始化Chart.js图表
    initCharts();
    
    console.log('重庆旅游攻略网站初始化完成');
});

// 导航栏交互效果
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
        });
    }
    
    // 平滑滚动到对应section
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // 减去导航栏高度
                    behavior: 'smooth'
                });
                
                // 如果是移动端，点击后关闭菜单
                if (navMenu && !navMenu.classList.contains('hidden')) {
                    navMenu.classList.add('hidden');
                }
            }
        });
    });
}

// 滚动效果
function initScrollEffects() {
    // 检查浏览器是否支持 Intersection Observer
    if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        // 对于不支持 Intersection Observer 的浏览器，直接显示所有内容
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('opacity-0');
        });
    }
}

// 初始化Mermaid图表
function initMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'neutral',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            },
            sequence: {
                useMaxWidth: true
            },
            gantt: {
                titleTopMargin: 25,
                barHeight: 20,
                barGap: 4,
                topPadding: 50,
                leftPadding: 75,
                gridLineStartPadding: 35,
                fontSize: 11
            }
        });
    }
}

// 初始化Chart.js图表
function initCharts() {
    if (typeof Chart !== 'undefined') {
        // 设置Chart.js全局默认值
        Chart.defaults.font.family = "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif";
        Chart.defaults.color = '#4B5563';
        
        // 这里可以添加具体的图表初始化代码
        // 例如：人流量预测图、消费水平比较图等
        // 具体图表将在各section内容中实现
    }
}
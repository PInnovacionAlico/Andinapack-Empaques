// Elements
const hero = document.getElementById('hero');
const timeline = document.getElementById('timeline-slides');
const fadeSection = document.getElementById('fadeSection');
const startExploringBtn = document.getElementById('startExploringBtn');
const showReceiptBtn = document.getElementById('showReceiptBtn');
const startOverBtn = document.getElementById('startOverBtn');
const progressBar = document.getElementById('progressBar');
const progressDot = document.getElementById('progressDot');
const receiptDate = document.getElementById('receipt-date');
const receiptTime = document.getElementById('receipt-time');
const receiptSlides = document.getElementById('receipt-slides');

// Initial state
document.body.style.overflow = 'hidden';
let receiptVisible = false;

// Start exploring functionality
function showTimeline() {
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.display = 'none';
        timeline.style.display = 'block';
        timeline.style.opacity = '1';
        document.body.style.overflow = '';
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, 300);
}

startExploringBtn.addEventListener('click', showTimeline);

// Progress bar functionality
window.addEventListener('scroll', () => {
    if (receiptVisible || hero.style.display !== 'none') return;
    
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = Math.min((scrolled / totalHeight) * 100, 100);
    
    progressBar.style.width = progress + '%';
    progressDot.style.left = `calc(${progress}% - 32px)`;
});

// Receipt functionality
showReceiptBtn.addEventListener('click', function() {
    receiptVisible = true;
    timeline.style.opacity = '0';
    setTimeout(() => {
        timeline.style.display = 'none';
        fadeSection.style.opacity = '1';
        fadeSection.style.pointerEvents = 'auto';
    }, 700);
});

// Start over functionality with animation
startOverBtn.addEventListener('click', function() {
    receiptVisible = false;
    
    // Hide receipt with animation
    fadeSection.style.opacity = '0';
    fadeSection.style.pointerEvents = 'none';
    
    setTimeout(() => {
        // Reset scroll
        window.scrollTo({ top: 0, behavior: 'auto' });
        
        // Hide timeline
        timeline.style.display = 'none';
        timeline.style.opacity = '0';
        
        // Show hero section
        hero.style.display = 'flex';
        hero.style.opacity = '0';
        document.body.style.overflow = 'hidden';
        
        // Reset hero content position for animation
        const heroContent = hero.querySelector('div');
        const heroTitle = hero.querySelector('h1');
        const heroText = hero.querySelector('p');
        const heroButton = hero.querySelector('button');
        
        heroContent.style.transform = 'translateY(30px)';
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        heroText.style.opacity = '0';
        heroButton.style.transform = 'translateY(20px)';
        heroButton.style.opacity = '0';
        
        // Animate hero entrance
        setTimeout(() => {
            hero.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                heroTitle.style.transform = 'translateY(0)';
                heroTitle.style.opacity = '1';
            }, 100);
            
            setTimeout(() => {
                heroText.style.transform = 'translateY(0)';
                heroText.style.opacity = '1';
            }, 200);
            
            setTimeout(() => {
                heroButton.style.transform = 'translateY(0)';
                heroButton.style.opacity = '1';
            }, 300);
        }, 50);
        
        // Reset progress bar
        progressBar.style.width = '0%';
        progressDot.style.left = '-32px';
    }, 300);
});

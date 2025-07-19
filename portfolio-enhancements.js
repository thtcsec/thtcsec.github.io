// Enhanced Portfolio Script - Refactored Version
// Performance optimized with modern JavaScript practices

class PortfolioEnhancer {
    constructor() {
        this.observers = [];
        this.isLoaded = false;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupLazyLoading();
            this.setupScrollAnimations();
            this.setupVisitorCounter();
            this.setupProgressBar();
            this.setupTechCarousel();
            this.setupSmoothScrolling();
            this.logPerformance();
            this.isLoaded = true;
        });
    }

    // Enhanced lazy loading with IntersectionObserver
    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            lazyImages.forEach(img => imageObserver.observe(img));
            this.observers.push(imageObserver);
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(img => img.classList.add('loaded'));
        }
    }

    // Scroll-based animations
    setupScrollAnimations() {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        if ('IntersectionObserver' in window) {
            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        entry.target.style.transitionDelay = `${Math.random() * 0.3}s`;
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animateElements.forEach(el => scrollObserver.observe(el));
            this.observers.push(scrollObserver);
        }
    }

    // Enhanced visitor counter with analytics
    setupVisitorCounter() {
        try {
            // Get or initialize visitor count
            let visitors = localStorage.getItem('portfolio-visitors') || 0;
            visitors = parseInt(visitors) + 1;
            localStorage.setItem('portfolio-visitors', visitors);
            
            // Update counter with animation
            const counterElement = document.getElementById('visitor-count');
            if (counterElement) {
                this.animateCounter(counterElement, 0, visitors, 2000);
            }

            // Update current year
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }

            // Update last updated date
            const lastUpdated = document.getElementById('lastUpdated');
            if (lastUpdated) {
                lastUpdated.textContent = new Date().toLocaleDateString('vi-VN');
            }
        } catch (error) {
            console.warn('Visitor counter failed:', error);
        }
    }

    // Animated counter
    animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (end - start) * this.easeOutQuart(progress));
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    }

    // Easing function
    easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
    }

    // Enhanced progress bar
    setupProgressBar() {
        setTimeout(() => {
            const progressFill = document.getElementById('progressFill');
            const progressPercentage = document.getElementById('progressPercentage');
            const tooltip = document.getElementById('progressTooltip');
            
            if (!progressFill || !progressPercentage || !tooltip) return;
            
            // Calculate realistic progress (3rd year, 2nd semester)
            const totalSemesters = 8;
            const currentSemester = 6;
            const progress = (currentSemester / totalSemesters) * 100;
            
            // Animate progress bar
            progressFill.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
            progressFill.style.width = progress + '%';
            
            // Animate percentage counter
            this.animateCounter(
                { textContent: '' }, 
                0, 
                Math.round(progress),
                1500
            );
            
            let currentPercent = 0;
            const percentStep = () => {
                if (currentPercent <= progress) {
                    progressPercentage.textContent = Math.round(currentPercent) + '%';
                    currentPercent += progress / 100;
                    requestAnimationFrame(percentStep);
                }
            };
            percentStep();
            
            tooltip.textContent = `Semester ${currentSemester}/${totalSemesters} - ${Math.round(progress)}% hoàn thành`;
        }, 500);
    }

    // Technology carousel enhancements
    setupTechCarousel() {
        const carousel = document.getElementById('techCarousel');
        const leftBtn = document.getElementById('techScrollLeft');
        const rightBtn = document.getElementById('techScrollRight');
        
        if (!carousel) return;
        
        // Duplicate items for infinite scroll
        const items = carousel.children;
        const itemsArray = Array.from(items);
        
        // Clone items for seamless loop
        itemsArray.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
        
        // Manual scroll controls
        if (leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => this.scrollCarousel('left'));
            rightBtn.addEventListener('click', () => this.scrollCarousel('right'));
        }
    }

    scrollCarousel(direction) {
        const container = document.getElementById('techCarouselContainer');
        if (!container) return;
        
        const scrollAmount = 240; // Width of tech item + gap
        const currentScroll = container.scrollLeft;
        
        if (direction === 'left') {
            container.scrollTo({
                left: currentScroll - scrollAmount,
                behavior: 'smooth'
            });
        } else {
            container.scrollTo({
                left: currentScroll + scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    // Enhanced smooth scrolling
    setupSmoothScrolling() {
        // Handle navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    this.updateActiveNavLink(targetId);
                }
            });
        });

        // Handle scroll-based navigation highlighting
        this.setupScrollSpy();
    }

    setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetId = '#' + entry.target.id;
                    this.updateActiveNavLink(targetId);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
        });

        sections.forEach(section => scrollObserver.observe(section));
        this.observers.push(scrollObserver);
    }

    updateActiveNavLink(activeId) {
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeId) {
                link.classList.add('active');
            }
        });
    }

    // Performance monitoring
    logPerformance() {
        const loadTime = performance.now();
        console.log(`🚀 Portfolio loaded in ${loadTime.toFixed(2)}ms`);
        
        // Core Web Vitals monitoring
        if ('web-vitals' in window) {
            // This would require the web-vitals library
            console.log('📊 Web Vitals monitoring available');
        }
        
        // Memory usage (if available)
        if (performance.memory) {
            const memoryInfo = performance.memory;
            console.log(`💾 Memory: ${(memoryInfo.usedJSHeapSize / 1048576).toFixed(2)} MB used`);
        }
        
        console.log('✅ Portfolio enhancements initialized successfully');
    }

    // Cleanup method for removing observers
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// Initialize the portfolio enhancer
const portfolioEnhancer = new PortfolioEnhancer();

// Export for potential use in other scripts
window.PortfolioEnhancer = PortfolioEnhancer;

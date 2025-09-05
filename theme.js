// Original scripts from new theme
// Remove loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if(loading) loading.style.opacity = '0';
        setTimeout(() => {
            if(loading) loading.style.display = 'none';
        }, 500);
    }, 2000);
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active navigation link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Typing effect for hero subtitle
function typeWriter() {
    const element = document.querySelector('.hero-subtitle');
    if (!element) return;
    const text = "Cybersecurity Enthusiast & Developer";
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
            i++;
            setTimeout(type, 100);
        } else {
            const cursor = element.querySelector('.typing-cursor');
            if(cursor) setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    
    setTimeout(type, 2500);
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(section);
});

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    const animatedBg = document.querySelector('.animated-bg');
    if (animatedBg) animatedBg.style.transform = `translateY(${parallax}px)`;
});

// ===== THEME TOGGLE LOGIC =====
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme() {
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme();
}

// ===== FAB & MODAL LOGIC =====
let isFabOpen = false;

function toggleFAB() {
    isFabOpen = !isFabOpen;
    document.getElementById('mainFab')?.classList.toggle('active', isFabOpen);
    document.getElementById('fabMenu')?.classList.toggle('active', isFabOpen);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(modal) {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.add('active');
    if(modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    if(modal) modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Initializations from new theme
    createParticles();
    typeWriter();
    window.addEventListener('scroll', updateActiveNavLink);

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    applyTheme();

    // FAB & Modal
    const mainFab = document.getElementById('mainFab');
    const backToTop = document.getElementById('backToTop');
    const viewCV = document.getElementById('viewCV');
    const modalOverlay = document.getElementById('modalOverlay');
    const cvModal = document.getElementById('cvModal');
    const closeCVModal = document.getElementById('closeCVModal');

    mainFab?.addEventListener('click', toggleFAB);
    backToTop?.addEventListener('click', scrollToTop);
    viewCV?.addEventListener('click', () => openModal(cvModal));
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal(cvModal);
            }
        });
    }
    
    closeCVModal?.addEventListener('click', () => closeModal(cvModal));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal(cvModal);
        }
    });
});
// ===== MAIN PORTFOLIO APPLICATION =====

class PortfolioApp {
    constructor() {
        // State
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.currentLang = localStorage.getItem('language') || 'vi';
        this.isNavOpen = false;
        this.isFabOpen = false;
        this.lastScrollY = 0;

        // Data containers
        this.config = {};
        this.translations = {};
        this.projects = [];
        this.skills = [];
        this.certificates = [];

        // Modals
        this.modals = {};

        // Initialize
        this.init();
    }

    async init() {
        try {
            // Load all JSON data
            await this.loadData();
            
            // Initialize app components
            this.initializeTheme();
            this.initializeLanguage();
            this.initializeNavigation();
            this.initializeModals();
            this.initializeScrollEffects();
            this.initializeProjects();
            this.initializeSkills();
            this.initializeFAB();
            this.initializeAcademicProgress();
            this.initializeVisitorCounter();
            
            // Hide loading screen
            this.hideLoadingScreen();
            
            console.log("✅ Portfolio Initialized Successfully!");
        } catch (error) {
            console.error("❌ Failed to initialize portfolio:", error);
            this.hideLoadingScreen(); // Hide loading even if error
        }
    }

    async loadData() {
        try {
            console.log("🔄 Loading JSON data...");
            
            const [configData, translationsData, projectsData, skillsData, certificatesData] = await Promise.all([
                fetch('data/config.json').then(r => {
                    console.log("Config response:", r.status);
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                }),
                fetch('data/translations.json').then(r => {
                    console.log("Translations response:", r.status);
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                }),
                fetch('data/projects.json').then(r => {
                    console.log("Projects response:", r.status);
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                }),
                fetch('data/skills.json').then(r => {
                    console.log("Skills response:", r.status);
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                }),
                fetch('data/certificates.json').then(r => {
                    console.log("Certificates response:", r.status);
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                })
            ]);

            this.config = configData;
            this.translations = translationsData;
            this.projects = projectsData.projects || [];
            this.skills = skillsData.categories || [];
            this.certificates = certificatesData.certificates || [];

            console.log("✅ JSON Data loaded:", {
                config: Object.keys(this.config).length,
                translations: Object.keys(this.translations).length,
                projects: this.projects.length,
                skills: this.skills.length,
                certificates: this.certificates.length
            });

        } catch (error) {
            console.error("❌ Fatal error loading data:", error);
            throw error;
        }
    }

    // ===== THEME MANAGEMENT =====
    initializeTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        this.applyTheme();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.currentTheme);
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = this.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // ===== LANGUAGE MANAGEMENT =====
    initializeLanguage() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
        this.applyLanguage();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('language', this.currentLang);
        this.applyLanguage();
    }

    applyLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = this.translations[this.currentLang][key];
                } else {
                    element.textContent = this.translations[this.currentLang][key];
                }
            }
        });

        // Update language toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.textContent = this.currentLang.toUpperCase();
        }
    }

    // ===== NAVIGATION =====
    initializeNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => this.toggleNavigation());
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeNavigation();
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    toggleNavigation() {
        this.isNavOpen = !this.isNavOpen;
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.toggle('active', this.isNavOpen);
            navToggle.classList.toggle('active', this.isNavOpen);
        }
    }

    closeNavigation() {
        this.isNavOpen = false;
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }

    // ===== SCROLL EFFECTS =====
    initializeScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        const scrollY = window.scrollY;
        const navbar = document.getElementById('navbar');

        // Hide/show navbar based on scroll direction
        if (navbar) {
            if (scrollY > this.lastScrollY && scrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }

        this.lastScrollY = scrollY;

        // Update active nav link
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ===== PROJECTS =====
    initializeProjects() {
        this.renderFeaturedProjects();
        this.initializeProjectModals();
    }

    renderFeaturedProjects() {
        const projectsContainer = document.querySelector('.projects-grid');
        if (!projectsContainer) {
            console.error("❌ Projects container not found");
            return;
        }

        if (!this.projects.length) {
            console.error("❌ No projects data loaded");
            projectsContainer.innerHTML = '<p style="color: red;">No projects data loaded!</p>';
            return;
        }

        const featuredProjects = this.projects.filter(project => project.featured);
        console.log("🎯 Featured projects:", featuredProjects.length);
        
        projectsContainer.innerHTML = featuredProjects.map(project => `
            <div class="project-card" data-project="${project.id}">
                <div class="project-image">
                    <div class="project-tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                    <div class="project-icon"><i class="${project.image}"></i></div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-actions">
                        <button class="btn-outline" onclick="app.openProjectModal('${project.id}')">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                        ${project.github ? `<a href="${project.github}" class="btn-icon" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log("✅ Projects rendered successfully");
    }

    initializeProjectModals() {
        // Project modal functionality will be handled by openProjectModal method
    }

    openProjectModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('projectModalTitle');
        const modalContent = document.getElementById('projectDetailContent');

        if (modal && modalTitle && modalContent) {
            modalTitle.textContent = project.title;
            modalContent.innerHTML = `
                <div class="project-detail">
                    <h4>Description</h4>
                    <p>${project.description}</p>
                    
                    <h4>Technologies</h4>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                    
                    <h4>Category</h4>
                    <p>${project.category}</p>
                    
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="btn-primary"><i class="fab fa-github"></i> View Code</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                    </div>
                </div>
            `;
            
            this.showModal(modal);
        }
    }

    // ===== SKILLS =====
    initializeSkills() {
        this.renderSkills();
    }

    renderSkills() {
        const skillsContainer = document.querySelector('.skills-container');
        if (!skillsContainer) {
            console.error("❌ Skills container not found");
            return;
        }

        if (!this.skills.length) {
            console.error("❌ No skills data loaded");
            skillsContainer.innerHTML = '<p style="color: red;">No skills data loaded!</p>';
            return;
        }

        console.log("🎯 Skills categories:", this.skills.length);

        skillsContainer.innerHTML = this.skills.map(category => `
            <div class="skill-category">
                <h3 class="category-title">${category.name[this.currentLang] || category.name.en}</h3>
                <div class="skills-grid">
                    ${category.skills.map(skill => `
                        <div class="skill-item">
                            <img src="${skill.icon}" alt="${skill.name}" loading="lazy">
                            <span>${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        console.log("✅ Skills rendered successfully");
    }

    // ===== MODALS =====
    initializeModals() {
        const modalOverlay = document.getElementById('modalOverlay');
        const closeButtons = document.querySelectorAll('.modal-close');

        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.hideAllModals();
                }
            });
        }

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.hideAllModals();
            });
        });
    }

    showModal(modal) {
        const overlay = document.getElementById('modalOverlay');
        if (overlay && modal) {
            overlay.classList.add('active');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hideAllModals() {
        const overlay = document.getElementById('modalOverlay');
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            modal.classList.add('closing');
            setTimeout(() => {
                modal.classList.remove('active', 'closing');
            }, 300);
        });

        if (overlay) {
            setTimeout(() => {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }, 300);
        }
    }

    // ===== FAB (Floating Action Button) =====
    initializeFAB() {
        const mainFab = document.getElementById('mainFab');
        const backToTop = document.getElementById('backToTop');
        const viewCV = document.getElementById('viewCV');
        const shareProfile = document.getElementById('shareProfile');

        if (mainFab) {
            mainFab.addEventListener('click', () => this.toggleFAB());
        }

        if (backToTop) {
            backToTop.addEventListener('click', () => this.scrollToTop());
        }

        if (viewCV) {
            viewCV.addEventListener('click', () => this.openCVModal());
        }

        if (shareProfile) {
            shareProfile.addEventListener('click', () => this.shareProfile());
        }
    }

    toggleFAB() {
        this.isFabOpen = !this.isFabOpen;
        const fabMenu = document.getElementById('fabMenu');
        const mainFab = document.getElementById('mainFab');
        
        if (fabMenu && mainFab) {
            fabMenu.classList.toggle('active', this.isFabOpen);
            mainFab.classList.toggle('active', this.isFabOpen);
        }
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.toggleFAB();
    }

    openCVModal() {
        const cvModal = document.getElementById('cvModal');
        if (cvModal) {
            this.showModal(cvModal);
        }
        this.toggleFAB();
    }

    shareProfile() {
        if (navigator.share) {
            navigator.share({
                title: 'Trinh Hoang Tu - Portfolio',
                text: 'Check out my portfolio!',
                url: window.location.href
            });
        } else {
            // Fallback to copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            // You could show a toast notification here
        }
        this.toggleFAB();
    }

    // ===== ACADEMIC PROGRESS =====
    initializeAcademicProgress() {
        if (!this.config.academic) return;

        const academic = this.config.academic;
        const progressPercentage = (academic.creditsCompleted / academic.totalCredits) * 100;
        
        const progressFill = document.getElementById('progressFill');
        const progressPercentageEl = document.getElementById('progressPercentage');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (progressPercentageEl) {
            progressPercentageEl.textContent = `${progressPercentage.toFixed(1)}%`;
        }

        // Update stats from config
        this.updateStats();
    }

    updateStats() {
        const creditsEl = document.getElementById('creditsCompleted');
        const projectsEl = document.getElementById('projectsBuilt');
        const techEl = document.getElementById('technologiesUsed');

        if (creditsEl && this.config.academic?.creditsCompleted) {
            creditsEl.textContent = `${this.config.academic.creditsCompleted}+`;
        }
        
        if (projectsEl && this.config.stats?.projectsBuilt) {
            projectsEl.textContent = `${this.config.stats.projectsBuilt}+`;
        }
        
        if (techEl && this.config.stats?.technologiesUsed) {
            techEl.textContent = `${this.config.stats.technologiesUsed}+`;
        }
    }

    // ===== VISITOR COUNTER =====
    initializeVisitorCounter() {
        const namespace = this.config.site?.visitorCounterNamespace || 'portfolio-visitors';
        let count = parseInt(localStorage.getItem(namespace) || '0');
        count++;
        localStorage.setItem(namespace, count.toString());
        
        // You can display this count somewhere if needed
        console.log(`Visitor count: ${count}`);
    }

    // ===== LOADING SCREEN =====
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PortfolioApp();
});

// Export for global access
window.app = app;
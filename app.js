// ===== MAIN PORTFOLIO APPLICATION =====

class PortfolioApp {
    constructor() {
        // State
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.currentLang = localStorage.getItem('language') || 'vi';
        this.isNavOpen = false;
        this.isFabOpen = false;
        this.lastScrollY = 0;

        // Modals
        this.modals = {};

        // Config
        this.config = {
            scrollThreshold: 100,
            typingTexts: [
                'Cybersecurity Enthusiast & Developer',
                'Google Developer Group Member',
                'Full-Stack Developer',
                'Security Researcher',
                'Problem Solver'
            ],
            academic: {
                startDate: '2023-09-01',
                endDate: '2027-07-31',
                totalSemesters: 9,
                currentSemester: 5,
                gpa: 3.26
            },
            visitorCounterNamespace: 'trinhhoangtu-portfolio'
        };

        this.projectDetails = {
            'face-recognition': {
                title: 'Face / Object Recognition (Java + Python Microservice)',
                description: 'Engineered a multi-threaded Java server using TCP sockets secured with SSL/TLS encryption. Developed a Python microservice exposing a REST API (Flask/FastAPI), leveraging OpenCV and face_recognition. Java server communicates securely with the Python service over HTTPS for inference, returning results to clients.',
                link: ''
            },
            'yodobashi': {
                title: 'Yodobashi Sniper V2',
                description: 'Advanced browser extension for automated product purchasing. Built with modern JavaScript (ES6+), Chrome APIs, and robust testing.',
                link: 'https://github.com/thtcsec/yodobashi-sniper-v2'
            },
            'portfolio': {
                title: 'Portfolio Website',
                description: 'Website portfolio cá nhân được thiết kế với giao diện hiện đại, responsive và hỗ trợ đa ngôn ngữ.',
                link: ''
            },
            'flight': {
                title: 'Flight Reservation System',
                description: 'Hệ thống đặt vé máy bay được phát triển bằng ASP.NET C#, cung cấp giao diện thân thiện và quản lý đặt chỗ hiệu quả.',
                link: ''
            },
            'linux-manager': {
                title: 'Linux Server Manager',
                description: 'Ứng dụng quản lý máy chủ Linux dành cho máy tính để bàn (WPF C#), hoạt động như một SSH client mạnh mẽ sử dụng thư viện SSH.NET.',
                link: ''
            },
            'ereader': {
                title: 'EReader',
                description: 'Ứng dụng đọc sách điện tử giàu tính năng với giao diện tùy chỉnh, đánh dấu và theo dõi tiến trình đọc.',
                link: ''
            },
            'chat': {
                title: 'Chat Application',
                description: 'Ứng dụng chat thời gian thực sử dụng WebSocket và Java, hỗ trợ chat nhóm và tin nhắn cá nhân.',
                link: ''
            },
            'english': {
                title: 'English Master',
                description: 'Ứng dụng học tiếng Anh trên Android với các bài học tương tác và hệ thống theo dõi tiến trình học tập.',
                link: ''
            }
        };

        // Translations
        this.translations = {
            en: {
                page_title: "Trinh Hoang Tu Portfolio",
                nav_home: "Home",
                nav_about: "About",
                nav_skills: "Skills",
                nav_projects: "Projects",
                nav_contact: "Contact",
                hero_greeting: "Hello, I'm",
                hero_subtitle: "Cybersecurity Enthusiast & Developer",
                hero_description: "Passionate about securing digital landscapes and crafting innovative solutions with cutting-edge technologies.",
                progress_label: "Academic Journey",
                about_title: "About Me",
                about_subtitle: "Get to know me better",
                about_description: "I'm a cybersecurity enthusiast and developer currently pursuing my degree in Information Technology at HUFLIT University. With a strong passion for both security and development, I love exploring the intersection of these fields.",
                about_description2: "As an active member of the Google Developer Group Ho Chi Minh City, I continuously expand my knowledge and contribute to the tech community.",
                skills_title: "Skills & Technologies",
                skills_subtitle: "Tools and technologies I work with",
                projects_title: "Featured Projects",
                projects_subtitle: "Some of my recent work",
                contact_title: "Let's Connect",
                contact_subtitle: "Get in touch for opportunities or collaborations",
            },
            vi: {
                page_title: "Portfolio Trịnh Hoàng Tú",
                nav_home: "Trang chủ",
                nav_about: "Về tôi",
                nav_skills: "Kỹ năng",
                nav_projects: "Dự án",
                nav_contact: "Liên hệ",
                hero_greeting: "Xin chào, tôi là",
                hero_subtitle: "Người đam mê An ninh mạng & Lập trình viên",
                hero_description: "Đam mê bảo mật không gian số và tạo ra các giải pháp sáng tạo với những công nghệ tiên tiến.",
                progress_label: "Hành trình học tập",
                about_title: "Về bản thân",
                about_subtitle: "Để hiểu rõ hơn về tôi",
                about_description: "Tôi là một người đam mê an ninh mạng và là lập trình viên, hiện đang theo học ngành Công nghệ Thông tin tại Đại học HUFLIT. Với niềm đam mê mãnh liệt cho cả bảo mật và phát triển, tôi thích khám phá sự giao thoa của hai lĩnh vực này.",
                about_description2: "Là một thành viên tích cực của Google Developer Group TP. Hồ Chí Minh, tôi không ngừng mở rộng kiến thức và đóng góp cho cộng đồng công nghệ.",
                skills_title: "Kỹ năng & Công nghệ",
                skills_subtitle: "Các công cụ và công nghệ tôi làm việc",
                projects_title: "Dự án nổi bật",
                projects_subtitle: "Một vài sản phẩm gần đây của tôi",
                contact_title: "Kết nối",
                contact_subtitle: "Liên hệ để trao đổi cơ hội hoặc hợp tác",
            }
        };

        // Initialize after DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log("🚀 Portfolio Initializing...");
        this.initTheme();
        this.initLanguage();
        this.initNavigation();
        this.initScrollHandlers();
        this.initCustomCursor();
        this.initParticles();
        this.initModals();
        this.initFAB();
        this.initAnimations();
        this.initTypingEffect();
        this.initProgressBar();
        this.initVisitorCounter();
        this.initLoadingScreen();
        this.initProjectCardListeners();
        this.initProjectsPage();
        this.bindEvents();
        console.log("✅ Portfolio Initialized Successfully!");
    }

    bindEvents() {
        // Theme Toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());

        // Language Toggle
        document.getElementById('langToggle')?.addEventListener('click', () => this.toggleLanguage());

        // Nav Menu
        document.getElementById('navToggle')?.addEventListener('click', () => this.toggleNavMenu());
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').includes('#')) {
                    e.preventDefault();
                    this.scrollToSection(link.getAttribute('href').substring(1));
                    this.closeNavMenu();
                }
            });
        });

        // FAB
        document.getElementById('mainFab')?.addEventListener('click', () => this.toggleFAB());
        document.getElementById('backToTop')?.addEventListener('click', () => this.scrollToTop());
        document.getElementById('viewCV')?.addEventListener('click', () => this.openModal('cv'));
        
        // Modals
        document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') this.closeAllModals();
        });
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeAllModals();
        });
        
        // CV Download
        document.getElementById('downloadCV')?.addEventListener('click', () => this.openModal('cv'));
        
        // Progress Details
        document.getElementById('progressExpand')?.addEventListener('click', () => this.openModal('progress'));
    }

    // ===== PROJECTS PAGE SPECIFIC =====
    initProjectCardListeners() {
        document.querySelectorAll('.project-card').forEach(card => {
            const viewDetailsButton = card.querySelector('.btn-outline');
            const projectId = card.dataset.project;

            if (viewDetailsButton && projectId) {
                viewDetailsButton.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent any default button action
                    this.openModal('project', projectId);
                });
            }
        });
    }

    initProjectsPage() {
        if (!document.getElementById('projects-page')) return;

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterProjects(btn.dataset.filter);
            });
        });
    }

    filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || category === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    initModals() {
        this.modalOverlay = document.getElementById('modalOverlay');
        document.querySelectorAll('.modal').forEach(modal => {
            // Use the modal's ID as the key, e.g., 'cvModal' -> 'cv'
            const modalName = modal.id.replace('Modal', '');
            this.modals[modalName] = modal;
        });
    }
    
    openModal(modalName, dataId = null) {
        const modal = this.modals[modalName];
        if (modal && this.modalOverlay) {
            if (modalName === 'project' && dataId) {
                const project = this.projectDetails[dataId];
                if (project) {
                    modal.innerHTML = `
                        <div class="modal-header">
                            <h3>${project.title}</h3>
                            <button class="modal-close"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="modal-body">
                            <p>${project.description}</p>
                        </div>
                        <div class="modal-footer">
                            <a href="${project.link}" class="btn-primary" target="_blank">View on GitHub</a>
                        </div>
                    `;
                    modal.querySelector('.modal-close').addEventListener('click', () => this.closeAllModals());
                }
            }

            this.closeAllModals(); // Close others
            modal.style.display = 'block';
            this.modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            modal.focus();
        }
    }

    closeAllModals() {
        if (this.modalOverlay) {
            this.modalOverlay.classList.remove('active');
            Object.values(this.modals).forEach(modal => {
                if (modal) modal.style.display = 'none';
            });
            document.body.style.overflow = '';
        }
    }

    // ===== THEME =====
    initTheme() {
        this.applyTheme();
    }

    applyTheme() {
        document.body.dataset.theme = this.currentTheme;
        localStorage.setItem('theme', this.currentTheme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
    }

    // ===== LANGUAGE =====
    initLanguage() {
        this.translatePage();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('language', this.currentLang);
        this.translatePage();
    }

    translatePage() {
        const trans = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (trans[key]) {
                el.textContent = trans[key];
            }
        });
        document.title = trans.page_title;
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.querySelector('.lang-current').textContent = this.currentLang.toUpperCase();
        }
    }

    // ===== NAVIGATION =====
    initNavigation() {
        this.navMenu = document.getElementById('navMenu');
        this.navToggle = document.getElementById('navToggle');
        this.navbar = document.getElementById('navbar');
    }

    toggleNavMenu() {
        this.isNavOpen = !this.isNavOpen;
        this.navMenu?.classList.toggle('active', this.isNavOpen);
        this.navToggle?.classList.toggle('active', this.isNavOpen);
    }

    closeNavMenu() {
        if (this.isNavOpen) {
            this.toggleNavMenu();
        }
    }
    
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - (this.navbar?.offsetHeight || 80), // Default height
                behavior: 'smooth'
            });
        }
    }

    // ===== SCROLL HANDLERS =====
    initScrollHandlers() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.config.scrollThreshold) {
                this.navbar?.classList.add('scrolled');
            } else {
                this.navbar?.classList.remove('scrolled');
            }
            this.lastScrollY = window.scrollY;
        });
    }

    // ===== CUSTOM CURSOR =====
    initCustomCursor() {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        if (!cursorDot || !cursorOutline) return;

        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            cursorDot.style.left = `${clientX}px`;
            cursorDot.style.top = `${clientY}px`;
            cursorOutline.style.left = `${clientX}px`;
            cursorOutline.style.top = `${clientY}px`;
        });

        document.querySelectorAll('a, button, .skill-item, .project-card, .social-card').forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
        });
    }

    // ===== PARTICLES =====
    initParticles() {
        const container = document.getElementById('particlesContainer');
        if (!container) return;
        const particleCount = 50;
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            fragment.appendChild(particle);
        }
        container.appendChild(fragment);
    }

    // ===== FLOATING ACTION BUTTON (FAB) =====
    initFAB() {
        this.fabMenu = document.getElementById('fabMenu');
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    toggleFAB() {
        this.isFabOpen = !this.isFabOpen;
        document.getElementById('mainFab')?.classList.toggle('active', this.isFabOpen);
        this.fabMenu?.classList.toggle('active', this.isFabOpen);
    }

    // ===== ANIMATIONS =====
    initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }

    // ===== TYPING EFFECT =====
    initTypingEffect() {
        const el = document.querySelector('.typing-text');
        if (!el) return;

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = this.config.typingTexts[textIndex];
            let typeSpeed = isDeleting ? 50 : 100;

            if (isDeleting) {
                el.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % this.config.typingTexts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };
        setTimeout(type, 1500); // Initial delay
    }

    // ===== PROGRESS BAR =====
    initProgressBar() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateProgressBar();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const progressWidget = document.getElementById('progressWidget');
        if (progressWidget) observer.observe(progressWidget);
    }

    animateProgressBar() {
        const fill = document.getElementById('progressFill');
        const percentage = document.getElementById('progressPercentage');
        if (!fill || !percentage) return;

        const startDate = new Date(this.config.academic.startDate);
        const endDate = new Date(this.config.academic.endDate);
        const targetProgress = Math.min(((new Date() - startDate) / (endDate - startDate)) * 100, 100);

        let progress = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);
            progress = targetProgress * (1 - Math.pow(1 - progressRatio, 3)); // easeOutCubic

            fill.style.width = `${progress}%`;
            percentage.textContent = `${progress.toFixed(1)}%`;

            if (progressRatio < 1) requestAnimationFrame(animate);
        };
        animate();
    }

    // ===== VISITOR COUNTER =====
    initVisitorCounter() {
        const el = document.getElementById('visitorCount');
        if (!el) return;

        const key = `${this.config.visitorCounterNamespace}-count`;
        fetch(`https://api.countapi.xyz/hit/${this.config.visitorCounterNamespace}/${key}`)
            .then(res => res.json())
            .then(data => {
                el.textContent = data.value.toLocaleString();
            })
            .catch(() => {
                el.textContent = 'N/A';
            });
        
        // Also update footer date
        const lastUpdatedEl = document.getElementById('lastUpdated');
        if(lastUpdatedEl) {
            lastUpdatedEl.textContent = new Date().toLocaleDateString('vi-VN');
        }
    }

    initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500); // 500ms delay
        }
    }
}

// Instantiate the app
new PortfolioApp();

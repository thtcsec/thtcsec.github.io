// Portfolio JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced progress calculation and visitor counter
    function updateVisitorCounter() {
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('portfolio-last-visit');
        let visitors = parseInt(localStorage.getItem('portfolio-visitors')) || 0;
        
        // Only increment if it's a different day or first visit
        if (lastVisit !== today) {
            visitors += 1;
            localStorage.setItem('portfolio-visitors', visitors);
            localStorage.setItem('portfolio-last-visit', today);
        }
        
        // Add realistic base number for showcase
        const displayVisitors = visitors + 1250;
        const visitorCountEl = document.getElementById('visitor-count');
        if (visitorCountEl) {
            visitorCountEl.textContent = displayVisitors.toLocaleString();
        }
    }
    
    updateVisitorCounter();
    
    // Current year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => observer.observe(el));
    
    // Enhanced progress bar calculation
    function setupProgressBar() {
        const progressFill = document.getElementById('progressFill');
        const progressPercentage = document.getElementById('progressPercentage');
        const tooltip = document.getElementById('progressTooltip');
        const progressBar = document.getElementById('progressBar');
        const progressPanel = document.getElementById('progressDetailPanel');
        const closeBtn = document.getElementById('closeProgressPanel');
        
        if (!progressFill || !progressPercentage || !tooltip) return;
        
        // University timeline: Sep 2022 - June 2026 (4 years)
        // Year 1: 2 semesters (Sep 2022 - Jun 2023)
        // Year 2: 3 semesters (Sep 2023 - Jun 2024) - includes summer
        // Current: 5th semester (Year 2, final semester)
        const startDate = new Date('2022-09-01');
        const endDate = new Date('2026-06-30');
        const currentDate = new Date();
        
        // Fixed values based on user's current status
        const currentSemester = 5; // Currently in 5th semester
        const totalSemesters = 9; // Year 1 (2) + Year 2 (3) + Year 3 (2) + Year 4 (2)
        const remainingSemesters = 4; // 4 semesters remaining
        const completedCredits = 73; // 73 credits completed
        const currentGPA = 3.26; // Current GPA
        
        // Calculate progress based on completed semesters
        const progress = (currentSemester / totalSemesters) * 100;
        
        // Animate progress bar
        setTimeout(() => {
            progressFill.style.width = progress + '%';
            
            // Animate percentage counter
            let currentPercent = 0;
            const percentStep = () => {
                if (currentPercent <= progress) {
                    progressPercentage.textContent = Math.round(currentPercent) + '%';
                    currentPercent += progress / 100;
                    requestAnimationFrame(percentStep);
                }
            };
            percentStep();
            
            // Update tooltip
            tooltip.textContent = `Semester ${currentSemester}/${totalSemesters} - ${Math.round(progress)}% completed`;
            
            // Update panel stats with fixed values
            const currentSemesterStat = document.getElementById('currentSemesterStat');
            const remainingSemestersStat = document.getElementById('remainingSemestersStat');
            const completedCreditsStat = document.getElementById('completedCreditsStat');
            const gpaStatistic = document.getElementById('gpaStatistic');
            
            if (currentSemesterStat) currentSemesterStat.textContent = currentSemester;
            if (remainingSemestersStat) remainingSemestersStat.textContent = remainingSemesters;
            if (completedCreditsStat) completedCreditsStat.textContent = completedCredits;
            if (gpaStatistic) gpaStatistic.textContent = currentGPA;
        }, 500);
        
        // Progress bar click handler
        if (progressBar && progressPanel) {
            progressBar.addEventListener('click', () => {
                progressPanel.classList.add('open');
            });
        }
        
        // Close panel handler
        if (closeBtn && progressPanel) {
            closeBtn.addEventListener('click', () => {
                progressPanel.classList.remove('open');
            });
        }
        
        // Click outside to close
        document.addEventListener('click', (e) => {
            if (progressPanel && !progressPanel.contains(e.target) && !progressBar.contains(e.target)) {
                progressPanel.classList.remove('open');
            }
        });
    }
    
    setupProgressBar();
    
    // Language switching functionality
    function setupLanguageSwitching() {
        let translations = {
            "en": {
                "page_title": "Trinh Hoang Tu Portfolio",
                "nav_home": "Home",
                "nav_tech": "Technologies", 
                "nav_gdg": "GDG",
                "nav_projects": "Projects",
                "nav_contact": "Contact",
                "home_title": "Hi, I'm Tu",
                "home_subtitle": "A Cybersecurity Enthusiast with a Passion for Code",
                "progress_label": "Journey to Graduation",
                "tech_section_title": "Technologies & Skills",
                "gdg_title": "Google Developer Group",
                "gdg_member": "Member",
                "gdg_description": "Active participant in the Google Developer Group community, focusing on learning and sharing knowledge about Google technologies and developer practices.",
                "gdg_stat_events": "Events Attended",
                "gdg_stat_months": "Months Active",
                "gdg_stat_connections": "Connections Made",
                "gdg_visit": "Visit GDG HCMC",
                "progress_panel_title": "Academic Progress",
                "progress_panel_subtitle": "HUFLIT University - Information Technology",
                "progress_milestone_year1": "Year 1: C# Programming Fundamentals",
                "progress_milestone_year1_desc": "Completed foundational programming concepts and C# basics",
                "progress_milestone_year2": "Year 2: Advanced C#, Java & Python (Current)",
                "progress_milestone_year2_desc": "Building solid programming skills across multiple languages",
                "progress_milestone_year3": "Year 3: Deep Dive into Major Specialization",
                "progress_milestone_year3_desc": "Focus on cybersecurity and advanced IT concepts",
                "progress_milestone_year4": "Year 4: Thesis & Graduation",
                "progress_milestone_year4_desc": "Capstone project, internship, and graduation preparation",
                "progress_stats_semester": "Current Semester",
                "progress_stats_remaining": "Semesters Remaining",
                "progress_stats_credits": "Credits Completed",
                "progress_stats_gpa": "Current GPA",
                "project_section_title": "Projects",
                "proj_flight_title": "Flight Reservation System",
                "proj_flight_desc": "A comprehensive flight booking system developed with ASP.NET C#, featuring user-friendly interface and efficient reservation management.",
                "proj_computer_store_title": "Computer Store Website",
                "proj_computer_store_desc": "E-commerce website for computer sales with product management, shopping cart, and payment features, built using ASP.NET C#.",
                "proj_linux_server_manager_title": "Linux Server Manager",
                "proj_linux_server_manager_desc": "Desktop application (WPF C#) for Linux server management, functioning as a powerful SSH client using SSH.NET library.",
                "proj_ereader_title": "EReader",
                "proj_ereader_desc": "A feature-rich digital book reader with customizable themes, bookmarking, and reading progress tracking.",
                "status_completed": "Completed",
                "view_all_projects": "View All Projects",
                "back_home": "Back to Home",
                "projects_page_title": "Projects - Trinh Hoang Tu Portfolio",
                "filter_all": "All",
                "filter_web": "Web",
                "filter_desktop": "Desktop",
                "filter_mobile": "Mobile",
                "btn_view_details": "View Details",
                "btn_close": "Close",
                "contact_section_title": "Contact Information",
                "contact_linkedin": "LinkedIn",
                "contact_facebook": "Facebook",
                "contact_github": "GitHub", 
                "contact_leetcode": "LeetCode",
                "contact_tiktok": "TikTok",
                "contact_discord": "Discord",
                "cv_title": "CV - Trinh Hoang Tu",
                "footer_build_with": "Built with ❤️ using",
                "projects_page_title": "My Projects", 
                "projects_page_subtitle": "Explore my development journey through various projects",
                "stats_projects": "Projects Completed",
                "stats_languages": "Programming Languages", 
                "stats_years": "Years of Experience",
                "filter_all": "All",
                "filter_web": "Web", 
                "filter_desktop": "Desktop",
                "filter_mobile": "Mobile",
                "proj_portfolio_title": "Portfolio Website",
                "proj_portfolio_desc": "Personal portfolio website built with modern, responsive design and multi-language support.",
                "proj_chat_title": "Chat Application",
                "proj_chat_desc": "Real-time chat application using WebSocket and Java, supporting group chat and private messaging.",
                "proj_english_title": "English Master",
                "proj_english_desc": "Android English learning application with interactive lessons and progress tracking system.",
                "proj_drinkup_title": "Drink Up",
                "proj_drinkup_desc": "Daily water reminder Android app with friendly interface and detailed statistics.",
                "btn_view_details": "View Details",
                "btn_close": "Close"
            },
            "vi": {
                "page_title": "Hồ sơ Trịnh Hoàng Tú",
                "nav_home": "Trang chủ",
                "nav_tech": "Công nghệ",
                "nav_gdg": "GDG", 
                "nav_projects": "Dự án",
                "nav_contact": "Thông tin",
                "home_title": "Chào, tôi là Tú",
                "home_subtitle": "Chuyên gia An ninh mạng với Đam mê Lập trình",
                "progress_label": "Hành trình cho tới khi tốt nghiệp",
                "tech_section_title": "Công nghệ & Kỹ năng",
                "gdg_title": "Google Developer Group",
                "gdg_member": "Thành viên",
                "gdg_description": "Người tham gia tích cực trong cộng đồng Google Developer Group, tập trung vào việc học hỏi và chia sẻ kiến thức về các công nghệ Google và thực hành phát triển.",
                "gdg_stat_events": "Sự kiện đã tham gia",
                "gdg_stat_months": "Tháng hoạt động",
                "gdg_stat_connections": "Kết nối đã tạo",
                "gdg_visit": "Thăm GDG HCMC",
                "progress_panel_title": "Tiến trình học tập",
                "progress_panel_subtitle": "Đại học HUFLIT - Công nghệ thông tin",
                "progress_milestone_year1": "Năm 1: Nền tảng lập trình C#",
                "progress_milestone_year1_desc": "Hoàn thành các khái niệm lập trình nền tảng và cơ bản về C#",
                "progress_milestone_year2": "Năm 2: C# nâng cao, Java & Python (Hiện tại)",
                "progress_milestone_year2_desc": "Xây dựng kỹ năng lập trình vững chắc qua nhiều ngôn ngữ",
                "progress_milestone_year3": "Năm 3: Đào sâu vào chuyên ngành",
                "progress_milestone_year3_desc": "Tập trung vào an ninh mạng và các khái niệm IT nâng cao",
                "progress_milestone_year4": "Năm 4: Luận văn & tốt nghiệp",
                "progress_milestone_year4_desc": "Dự án tốt nghiệp, thực tập và chuẩn bị tốt nghiệp",
                "progress_stats_semester": "Học kỳ hiện tại",
                "progress_stats_remaining": "Học kỳ còn lại",
                "progress_stats_credits": "Tín chỉ hoàn thành",
                "progress_stats_gpa": "GPA hiện tại",
                "project_section_title": "Dự án",
                "proj_flight_title": "Hệ thống đặt vé máy bay",
                "proj_flight_desc": "Hệ thống đặt vé máy bay được phát triển bằng ASP.NET C#, cung cấp giao diện thân thiện và quản lý đặt chỗ hiệu quả.",
                "proj_computer_store_title": "Website cửa hàng máy tính",
                "proj_computer_store_desc": "Website bán máy tính với tính năng quản lý sản phẩm, giỏ hàng và thanh toán, được xây dựng bằng ASP.NET C#.",
                "proj_linux_server_manager_title": "Trình quản lý máy chủ Linux",
                "proj_linux_server_manager_desc": "Ứng dụng quản lý máy chủ Linux dành cho máy tính để bàn (WPF C#), hoạt động như một SSH client mạnh mẽ sử dụng thư viện SSH.NET.",
                "proj_ereader_title": "EReader",
                "proj_ereader_desc": "Một ứng dụng đọc sách điện tử giàu tính năng với giao diện tùy chỉnh, đánh dấu và theo dõi tiến trình đọc.",
                "status_completed": "Đã hoàn thành",
                "view_all_projects": "Xem tất cả dự án",
                "back_home": "Trang chủ",
                "projects_page_title": "Dự án - Portfolio Trịnh Hoàng Tú",
                "filter_all": "Tất cả",
                "filter_web": "Web",
                "filter_desktop": "Desktop",
                "filter_mobile": "Mobile",
                "btn_view_details": "Xem chi tiết",
                "btn_close": "Đóng",
                "contact_section_title": "Thông tin liên hệ",
                "contact_linkedin": "LinkedIn",
                "contact_facebook": "Facebook",
                "contact_github": "GitHub",
                "contact_leetcode": "LeetCode", 
                "contact_tiktok": "TikTok",
                "contact_discord": "Discord",
                "cv_title": "CV - Trịnh Hoàng Tú",
                "footer_build_with": "Được xây dựng với ❤️ sử dụng",
                "projects_page_title": "Dự án của tôi",
                "projects_page_subtitle": "Khám phá hành trình phát triển của tôi qua các dự án khác nhau", 
                "stats_projects": "Dự án hoàn thành",
                "stats_languages": "Ngôn ngữ lập trình",
                "stats_years": "Năm kinh nghiệm",
                "filter_all": "Tất cả",
                "filter_web": "Web",
                "filter_desktop": "Desktop", 
                "filter_mobile": "Mobile",
                "proj_portfolio_title": "Website Portfolio",
                "proj_portfolio_desc": "Website portfolio cá nhân được thiết kế với giao diện hiện đại, responsive và hỗ trợ đa ngôn ngữ.",
                "proj_chat_title": "Ứng dụng Chat",
                "proj_chat_desc": "Ứng dụng chat thời gian thực sử dụng WebSocket và Java, hỗ trợ chat nhóm và tin nhắn cá nhân.",
                "proj_english_title": "English Master",
                "proj_english_desc": "Ứng dụng học tiếng Anh trên Android với các bài học tương tác và hệ thống theo dõi tiến trình.",
                "proj_drinkup_title": "Drink Up",
                "proj_drinkup_desc": "Ứng dụng nhắc nhở uống nước hàng ngày với giao diện thân thiện và thống kê chi tiết.",
                "btn_view_details": "Xem chi tiết",
                "btn_close": "Đóng"
            }
        };
        
        let currentLanguage = 'vi'; // Default to Vietnamese
        
        console.log('Setting up language switching...');
        console.log('Embedded translations loaded:', translations);
        
        // Set initial language
        updateLanguage(currentLanguage);
        
        // Language toggle button
        const langToggle = document.getElementById('langToggle');
        const currentLangSpan = document.getElementById('currentLang');
        
        console.log('Language toggle button:', langToggle);
        console.log('Current language span:', currentLangSpan);
        
        if (langToggle) {
            // Set initial display
            if (currentLangSpan) {
                currentLangSpan.textContent = currentLanguage.toUpperCase();
            }
            
            langToggle.addEventListener('click', () => {
                console.log('Language toggle clicked! Current:', currentLanguage);
                currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
                updateLanguage(currentLanguage);
                
                if (currentLangSpan) {
                    currentLangSpan.textContent = currentLanguage.toUpperCase();
                }
                
                // Update document language attribute
                document.documentElement.lang = currentLanguage;
                
                // Dispatch custom event for projects page
                document.dispatchEvent(new CustomEvent('languageChanged', {
                    detail: { language: currentLanguage }
                }));
                
                console.log('Language switched to:', currentLanguage);
            });
        } else {
            console.error('Language toggle button not found!');
        }
        
        // Legacy support for language buttons with data-lang attribute
        const langButtons = document.querySelectorAll('.lang-btn[data-lang]');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                if (lang && lang !== currentLanguage) {
                    currentLanguage = lang;
                    updateLanguage(lang);
                    updateActiveLanguageButton(btn);
                    
                    // Update document language attribute
                    document.documentElement.lang = lang;
                    
                    // Dispatch custom event for projects page
                    document.dispatchEvent(new CustomEvent('languageChanged', {
                        detail: { language: lang }
                    }));
                }
            });
        });
        
        function updateLanguage(lang) {
            console.log('Updating language to:', lang);
            console.log('Available translations:', translations);
            
            if (!translations[lang]) {
                console.error('No translations found for language:', lang);
                return;
            }
            
            const elements = document.querySelectorAll('[data-i18n]');
            console.log('Found elements with data-i18n:', elements.length);
            
            // Add fade-out effect
            elements.forEach(el => {
                el.style.opacity = '0.7';
                el.style.transition = 'opacity 0.3s ease';
            });
            
            // Update text after brief delay for smooth transition
            setTimeout(() => {
                elements.forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang] && translations[lang][key]) {
                        el.textContent = translations[lang][key];
                        // Fade back in
                        el.style.opacity = '1';
                    } else {
                        console.warn('Translation missing for key:', key, 'in language:', lang);
                        el.style.opacity = '1';
                    }
                });
            }, 150);
            
            // Update current language display
            const currentLangSpan = document.getElementById('currentLang');
            if (currentLangSpan) {
                currentLangSpan.textContent = lang.toUpperCase();
            }
        }
        
        // Make updateLanguage available globally
        window.updateLanguage = updateLanguage;
        window.getCurrentLanguage = () => currentLanguage;
        
        function updateActiveLanguageButton(activeBtn) {
            langButtons.forEach(btn => btn.classList.remove('active'));
            activeBtn.classList.add('active');
        }
    }
    
    setupLanguageSwitching();
    
    // Tech carousel functionality
    function setupTechCarousel() {
        const carousel = document.getElementById('techCarousel');
        const leftBtn = document.getElementById('techScrollLeft');
        const rightBtn = document.getElementById('techScrollRight');
        
        if (!carousel || !leftBtn || !rightBtn) return;
        
        let scrollAmount = 0;
        const itemWidth = 160; // Approximate width of tech item + gap
        
        leftBtn.addEventListener('click', () => {
            scrollAmount = Math.max(scrollAmount - itemWidth * 3, 0);
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        });
        
        rightBtn.addEventListener('click', () => {
            const maxScroll = carousel.scrollWidth / 2; // Since we have duplicated items
            scrollAmount = Math.min(scrollAmount + itemWidth * 3, maxScroll);
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        });
    }
    
    setupTechCarousel();
    
    // CV overlay functionality
    function setupCVOverlay() {
        const viewCVBtn = document.getElementById('viewCV');
        const cvOverlay = document.getElementById('cvOverlay');
        const closeCVBtn = document.getElementById('closeCV');
        
        if (viewCVBtn && cvOverlay) {
            viewCVBtn.addEventListener('click', () => {
                cvOverlay.style.display = 'flex';
            });
        }
        
        if (closeCVBtn && cvOverlay) {
            closeCVBtn.addEventListener('click', () => {
                cvOverlay.style.display = 'none';
            });
            
            // Close on overlay click
            cvOverlay.addEventListener('click', (e) => {
                if (e.target === cvOverlay) {
                    cvOverlay.style.display = 'none';
                }
            });
        }
    }
    
    setupCVOverlay();
    
    // Back to top functionality
    function setupBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Show/hide back to top button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.style.opacity = '1';
                } else {
                    backToTopBtn.style.opacity = '0.7';
                }
            });
        }
    }
    
    setupBackToTop();
    
    // Theme toggle functionality
    function setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        if (themeToggle) {
            // Load saved theme or default to light
            const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
            body.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
            
            themeToggle.addEventListener('click', () => {
                const currentTheme = body.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                body.setAttribute('data-theme', newTheme);
                localStorage.setItem('portfolio-theme', newTheme);
                updateThemeIcon(newTheme);
            });
        }
        
        function updateThemeIcon(theme) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    }
    
    setupThemeToggle();
    
    // Splash screen functionality
    function setupSplashScreen() {
        const splashScreen = document.getElementById('splashScreen');
        
        if (splashScreen) {
            // Check if it's the first visit
            const hasVisited = localStorage.getItem('portfolio-visited');
            
            if (!hasVisited) {
                // First visit - show splash screen
                setTimeout(() => {
                    splashScreen.classList.add('fade-out');
                    setTimeout(() => {
                        splashScreen.style.display = 'none';
                    }, 500);
                }, 2000);
                
                // Mark as visited
                localStorage.setItem('portfolio-visited', 'true');
            } else {
                // Not first visit - hide immediately
                splashScreen.style.display = 'none';
            }
        }
    }
    
    setupSplashScreen();
});

// Projects data - migrated from data/projects.json
export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'ai' | 'web' | 'extension' | 'system' | 'desktop' | 'mobile';
    technologies: string[];
    github?: string;
    demo?: string;
    image: string;
    featured: boolean;
    highlights?: string[];
}

export const projects: Project[] = [
    {
        id: "lingfilm",
        title: "LingFilm - Language Learning Platform",
        description: "Full-stack movie streaming platform for language learning with subtitle support. Features dual subtitles, instant dictionary, and vocab tracking.",
        category: "web",
        technologies: [".NET 8", "PostgreSQL", "React", "TypeScript", "Docker", "TailwindCSS"],
        github: "",
        demo: "",
        image: "/images/preview/preview_lingfilm.png",
        featured: true,
        highlights: [
            "Dual-subtitle system for language learning",
            "Instant dictionary lookup & save vocabulary",
            "JWT Authentication & Role-based Access",
            "Microservices-ready architecture with Docker",
            "AI Integration (Gemini/Groq) for content analysis"
        ]
    },
    {
        id: "ct-smartcam",
        title: "CT-SmartCam - Smart Security System",
        description: "AI-powered camera management system for Can Tho City with real-time monitoring, license plate recognition, face detection, and microservices architecture.",
        category: "ai",
        technologies: ["ASP.NET Core 9", "React", "YOLOv11", "Docker", "PostgreSQL", "SignalR"],
        github: "",
        demo: "",
        image: "/images/preview/preview_ctsmartcam.png",
        featured: true,
        highlights: [
            "Real-time AI detection (People, Vehicles, LPR)",
            "Microservices architecture with Docker",
            "Live streaming via HLS (H.265 support)",
            "Security honeypot & intrusion detection",
            "SignalR real-time alerts & monitoring"
        ]
    },
    {
        id: "ai-lms",
        title: "AI-Powered LMS - toanvotruongtoan.com",
        description: "Production-ready Learning Management System with Gemini AI integration for automated exam generation and intelligent tutoring, serving hundreds of students.",
        category: "web",
        technologies: ["React", "Supabase", "Vercel", "Gemini AI", "TypeScript"],
        github: "",
        demo: "https://toanvotruongtoan.com",
        image: "/images/preview/preview_toanvotruongtoan.png",
        featured: true,
        highlights: [
            "Integrated Gemini AI for automated exam generation",
            "Server-side Rate Limiting (30 req/min)",
            "Strict Supabase Row-Level Security (RLS)",
            "Serverless architecture with <100ms response times",
            "SSL A+ rating"
        ]
    },
    {
        id: "chaincampus",
        title: "ChainCampus - Blockchain Event Ticketing",
        description: "Anti-fraud event ticketing system using Ethereum blockchain. NFT tickets with QR verification, Metamask SIWE authentication, and real-time updates.",
        category: "web",
        technologies: ["Django", "PostgreSQL", "Ethereum", "Solidity", "Hardhat", "Web3.py"],
        github: "",
        demo: "",
        image: "/images/preview/preview_chaincampus.png",
        featured: false,
        highlights: [
            "NFT tickets on Ethereum Sepolia testnet",
            "Smart Contract with Solidity + Hardhat",
            "QR Scanner with webcam integration",
            "Sign-In with Ethereum (SIWE) authentication",
            "Real-time SSE updates"
        ]
    },
    {
        id: "ai-sentinel",
        title: "AI Sentinel - Fall Detection",
        description: "Privacy-first fall detection system for elderly that runs 100% on edge devices. Zero cloud costs, instant Telegram alerts, with optional Snowflake analytics.",
        category: "ai",
        technologies: ["Python", "OpenCV", "Docker", "Telegram Bot", "Snowflake"],
        github: "https://github.com/thtcsec/AI-Sentinel",
        demo: "",
        image: "/images/preview/preview_ai_sentinel.jpg",
        featured: true,
        highlights: [
            "100% edge processing - no cloud required",
            "Frame-differencing AI for fall detection",
            "Instant Telegram alerts with snapshot",
            "Docker-ready deployment",
            "Snowflake analytics integration"
        ]
    },
    {
        id: "face-recognition",
        title: "Face Recognition System",
        description: "Network programming project with Java Swing client/server and Python Flask + OpenCV for face detection, embedding generation, and real-time recognition.",
        category: "ai",
        technologies: ["Java", "Python", "OpenCV", "Flask", "Gradle", "Swing"],
        github: "",
        demo: "",
        image: "/images/preview/preview_face_recognition.png",
        featured: true,
        highlights: [
            "Multi-threaded Java server architecture",
            "Python Flask API with face embedding",
            "SSL/TLS secure communication",
            "Real-time webcam integration"
        ]
    },
    {
        id: "yodobashi",
        title: "Yodobashi Ultimate Sniper",
        description: "Advanced automation system for Yodobashi with stealth anti-detection, real-time monitoring, and hybrid speed/safe mode attack strategies.",
        category: "extension",
        technologies: ["Playwright", "Node.js", "JavaScript", "Stealth Tech"],
        github: "",
        demo: "",
        image: "/images/preview/preview_yodobashi.jpg",
        featured: true,
        highlights: [
            "Persistent session with one-time login",
            "Intercept & Fulfill stealth resource blocking",
            "Promise.race for uncertainty handling",
            "50ms real-time availability watcher"
        ]
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "Modern responsive portfolio with React, TypeScript, and TailwindCSS. Features dark/light theme, animations, and SEO optimization.",
        category: "web",
        technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
        github: "https://github.com/thtcsec/thtcsec.github.io",
        demo: "https://thtcsec.github.io",
        image: "/images/preview/preview_portfolio.png",
        featured: true
    },
    {
        id: "flight",
        title: "Flight Reservation System",
        description: "Comprehensive flight booking system with admin panel, user management, and real-time booking capabilities.",
        category: "web",
        technologies: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
        github: "",
        demo: "",
        image: "/images/preview/preview_flight_reservation.png",
        featured: false
    },
    {
        id: "linux-manager",
        title: "Linux Server Manager",
        description: "Desktop application for Linux server management with SSH client integration and system monitoring capabilities.",
        category: "desktop",
        technologies: ["WPF", "C#", "SSH.NET"],
        github: "",
        demo: "",
        image: "/images/preview/preview_linux_server_manager.png",
        featured: false
    },
    {
        id: "ereader",
        title: "EReader",
        description: "Digital book reader application with customizable reading experience and modern UI.",
        category: "mobile",
        technologies: ["Android", "Java", "SQLite"],
        github: "",
        demo: "",
        image: "/images/preview/preview_ereader.jpg",
        featured: false
    },
    {
        id: "english",
        title: "English Master",
        description: "Interactive English learning application for Android with lesson management and progress tracking.",
        category: "mobile",
        technologies: ["Android", "Java", "SQLite"],
        github: "",
        demo: "",
        image: "/images/preview/preview_english_master.jpg",
        featured: false
    }
];

// Limit to 6 featured projects on homepage
export const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
export const allProjects = projects;

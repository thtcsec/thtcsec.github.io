// Projects data - migrated from data/projects.json
export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'ai' | 'web' | 'extension' | 'system' | 'desktop' | 'mobile';
    technologies: string[];
    github?: string;
    githubLinks?: { url: string; label: string }[];
    demo?: string;
    image: string;
    images?: string[];
    videos?: string[];
    featured: boolean;
    highlights?: string[];
    isPrivate?: boolean;
}

export const projects: Project[] = [
    {
        id: "orangecloud-insights",
        title: "OrangeCloud Insights — AI-Powered Tech Intelligence Platform",
        description: "Serverless tech intelligence and RSS crawling platform. Automatically crawls RSS feeds, parses content, uses OpenAI models to summarize and rewrite tech articles in neutral, professional Vietnamese, generates embeddings with Workers AI, and saves semantic vectors into Cloudflare Vectorize.",
        category: "web",
        technologies: ["Next.js 15", "Cloudflare Workflows", "Cloudflare D1", "Cloudflare R2", "Cloudflare Vectorize", "Workers AI", "OpenAI API", "Drizzle ORM", "TypeScript"],
        github: "",
        demo: "https://blog.orangecloud.vn",
        image: "/images/preview/preview_orangecloud_insights.png",
        images: [
            "/images/preview/preview_orangecloud_insights.png",
            "/images/project_image/orangecloud-insights/article_detail.png",
            "/images/project_image/orangecloud-insights/search_results.png"
        ],
        featured: true,
        highlights: [
            "Serverless Cloudflare-Native architecture using Next.js 15 deployed on Cloudflare Pages (@cloudflare/next-on-pages)",
            "Automated multi-stage processing pipeline orchestrated by Cloudflare Workflows (Beta) with built-in checkpointing and retries",
            "Split-storage design: relational data on Cloudflare D1 SQL database and raw/cleaned content on Cloudflare R2 object storage",
            "Semantic search and similar articles suggestions powered by Workers AI (@cf/baai/bge-small-en-v1.5) and Cloudflare Vectorize",
            "OpenAI Model Router with auto-fallback that dynamically queries OpenAI API capabilities and handles fallback models gracefully",
            "Rich interactive admin control panel with RSS source CRUD, manual/batch AI review and re-processing flow, auto-publish rules, and custom Telegram daily digests"
        ],
        isPrivate: true
    },
    {
        id: "driftskills-ai",
        title: "DriftSkills AI - Career Recommendation Engine",
        description: "AI-powered career recommendation engine. Detects skill gaps and career drift, providing personalized learning paths using MongoDB Atlas Vector Search and Aggregation Pipelines.",
        category: "ai",
        technologies: ["Next.js 14", "FastAPI", "MongoDB Atlas", "Vector Search", "Python", "D3.js", "Docker", "TailwindCSS"],
        github: "https://github.com/thtcsec/driftskills-ai",
        demo: "",
        image: "/images/preview/preview_driftskills.png",
        images: [
            "/images/project_image/driftskills-ai/01.png",
            "/images/project_image/driftskills-ai/02.png",
            "/images/project_image/driftskills-ai/03.png",
            "/images/project_image/driftskills-ai/04.png",
            "/images/project_image/driftskills-ai/05.png",
            "/images/project_image/driftskills-ai/06.png"
        ],
        featured: true,
        highlights: [
            "Hackathon Project: MUGVN × MongoDB Mini Hackathon 2026 (Ranked 2nd / Team Vector404)",
            "Semantic Job Matching via $vectorSearch on 384-dim embeddings",
            "Collaborative Filtering & Career Drift Score using complex multi-stage aggregation pipelines",
            "Skill Gap Detection & Learning Path Generation with explainable AI (XAI)",
            "MongoDB Live Engine Inspector (X-Ray) for real-time pipeline tracing and execution stats",
            "Interactive Visualizations: Skill Galaxy (D3 force-directed graph) and Market Analytics ($facet)"
        ],
        isPrivate: false
    },
    {
        id: "multi-cloud-soar",
        title: "Multi-Cloud Serverless SOAR Platform (AWS & GCP)",
        description: "Designed and implemented a multi-cloud Security Orchestration, Automation, and Response (SOAR) platform across AWS and GCP. Built event-driven incident response pipelines using GuardDuty / Security Command Center, EventBridge / Eventarc, and SQS / Pub/Sub.",
        category: "system",
        technologies: ["GCP", "AWS", "Terraform", "Python", "Serverless", "Eventarc", "Pub/Sub", "Step Functions", "Cloud Workflows", "Cloud Run", "ECS Fargate"],
        github: "",
        githubLinks: [
            { url: "https://github.com/thtcsec/AWS-Serverless-SOAR", label: "AWS" },
            { url: "https://github.com/thtcsec/GCP-Serverless-SOAR", label: "GCP" }
        ],
        demo: "",
        image: "https://raw.githubusercontent.com/thtcsec/GCP-Serverless-SOAR/main/images/gcp_soar.png",
        images: [
            "https://raw.githubusercontent.com/thtcsec/GCP-Serverless-SOAR/main/images/gcp_soar.png",
            "https://raw.githubusercontent.com/thtcsec/AWS-Serverless-SOAR/main/images/aws_soar.png"
        ],
        featured: true,
        highlights: [
            "Built event-driven incident response pipelines using GuardDuty / Security Command Center, EventBridge / Eventarc, and SQS / Pub/Sub",
            "Implemented workflow orchestration using AWS Step Functions and GCP Cloud Workflows for automated containment and forensics",
            "Developed container-based worker services (ECS Fargate / Cloud Run) for long-running malware analysis and incident processing",
            "Designed a unified event normalization and correlation layer to standardize cross-cloud security events",
            "Automated response actions including resource isolation, IAM privilege revocation, SSH blocking, and disk snapshot for forensic analysis",
            "Integrated threat intelligence (VirusTotal, AbuseIPDB) and SIEM/Slack/Jira for real-time alerting",
            "Built anomaly detection and risk scoring modules (Isolation Forest + rule-based fallback) for adaptive incident prioritization",
            "Implemented audit logging, secret rotation, and compliance-ready monitoring across cloud environments",
            "Provisioned full infrastructure using Terraform with modular multi-environment deployment (dev/staging/prod)"
        ]
    },
    {
        id: "pentest-lab",
        title: "Realistic Pentest Home Lab Series",
        description: "Realistic Penetration Testing lab environment spanning from Web and Active Directory to Cloud. Includes One-Click Setup via Docker and focuses on the mindset: Root Cause ➜ Attack Path ➜ Mitigation ➜ Detection.",
        category: "system",
        technologies: ["Docker", "Python", "Node.js", "PHP", "Active Directory"],
        github: "https://github.com/thtcsec/PentestLab",
        demo: "https://hoangtu.dev/pentestlab",
        image: "/images/preview/pentest_lab_minimalist.png",
        featured: true,
        highlights: [
            "100% Reproducible & One-Click Install",
            "Segregated environments based on Phases (Web, AD, Cloud...)",
            "Real-world vulnerabilities over dry CTF exercises",
            "Focus on Mitigation and Detection, not just Exploitation"
        ]
    },
    {
        id: "lingfilm",
        title: "LingFilm - AI Language Learning",
        description: "Learn languages through movies with AI-powered dual subtitles, instant vocabulary tracking, and SRS-based spaced repetition review.",
        category: "ai",
        technologies: ["React 18", "TypeScript", ".NET 8", "PostgreSQL", "Python", "FastAPI", "Whisper", "spaCy", "Supabase", "Redis", "Hangfire", "TailwindCSS"],
        github: "",
        demo: "",
        image: "/images/preview/preview_lingfilm.png",
        images: [
            "/images/project_image/lingfilm/01_frontend.png",
            "/images/project_image/lingfilm/02_login.png",
            "/images/project_image/lingfilm/03_admin_systemhealth.png",
            "/images/project_image/lingfilm/04_studio.png",
            "/images/project_image/lingfilm/05_transcribe.png"
        ],
        featured: true,
        highlights: [
            "AI-powered auto-transcription for YouTube/URLs using Whisper",
            "Dual-language subtitles with IPA phonetic transcription",
            "Click-to-lookup dictionary with context-aware transcripts",
            "SRS vocabulary review using SM-2 spaced repetition algorithm",
            "Smart Clipper for creating and downloading video clips",
            "Full admin dashboard for monitoring video processing pipelines",
            "Multi-language support: English, Vietnamese, Japanese, Korean, Chinese"
        ],
        isPrivate: true
    },
    {
        id: "ctsmartcam",
        title: "CTSmartCam - Intelligent Surveillance Ecosystem",
        description: "An intelligent surveillance ecosystem for Cần Thơ City, utilizing an event-driven AI pipeline for real-time monitoring and security.",
        category: "ai",
        technologies: ["ASP.NET Core 9", "SignalR", "Python", "Redis Streams", "YOLOv11", "PostgreSQL", "pgvector", "Nginx", "Docker"],
        github: "",
        demo: "",
        image: "/images/preview/preview_ctsmartcam.png",
        images: [
            "/images/project_image/ctsmartcam/01_overview.png",
            "/images/project_image/ctsmartcam/02_dashboard.png",
            "/images/project_image/ctsmartcam/03_detection.png",
            "/images/project_image/ctsmartcam/04_alerts.png",
            "/images/project_image/ctsmartcam/05_settings.png",
            "/images/project_image/ctsmartcam/06_stats.png",
        ],
        videos: [
            "https://github.com/user-attachments/assets/35d2d595-7d66-4df0-8c1b-4a855888d564",
            "https://github.com/user-attachments/assets/e254fcf1-9cdf-4b40-8fcd-9dfd05e8aebc"
        ],
        featured: true,
        highlights: [
            "Event-driven architecture optimizing hardware resources for multi-camera processing",
            "Integrated Identity Fusion linking vehicle license plates with driver facial recognition",
            "Advanced LPR system with Super Resolution support for low-quality captures",
            "Multi-layer security featuring application honeypots and real-time security logging",
            "Interactive CMS dashboard for centralized camera management and analytics"
        ],
        isPrivate: true
    },
    {
        id: "ai-lms",
        title: "toanvotruongtoan.com - AI-Powered LMS",
        description: "Production-ready Learning Management System with Gemini AI integration for automated exam generation and intelligent tutoring, serving hundreds of students.",
        category: "web",
        technologies: ["React", "Supabase", "Vercel", "Gemini AI", "TypeScript"],
        github: "",
        demo: "https://toanvotruongtoan.com",
        image: "/images/preview/preview_toanvotruongtoan.png",
        featured: true,
        highlights: [
            "Integrated Gemini for automated exam generation",
            "Server-side Rate Limiting (30 req/min)",
            "Strict Supabase Row-Level Security (RLS)",
            "Serverless architecture with <100ms response times",
            "SSL A+ rating"
        ],
        isPrivate: true
    },
    {
        id: "silentpipe",
        title: "SilentPipe - Android Media Player",
        description: "Anonymous & powerful Android media player for YouTube/TikTok with no ads, background playback, custom equalizer, and offline download support.",
        category: "mobile",
        technologies: ["Java", "Kotlin", "Android Media3", "Chaquopy", "NewPipeExtractor", "OkHttp"],
        github: "https://github.com/thtcsec/SilentPipe",
        demo: "https://thtcsec.github.io/silentpipe",
        image: "/images/silentpipe/equalizer-cropped.jpg",
        featured: true,
        highlights: [
            "Share-to-Play from YouTube/TikTok",
            "Spotify link support with auto YouTube search",
            "Custom 10-band equalizer with presets",
            "Offline download & background playback",
            "No ads, no tracking, privacy-first",
            "Python-powered yt-dlp integration"
        ],
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
        ],
        isPrivate: true
    },
    {
        id: "ai-sentinel",
        title: "Lumisight Core",
        description: "Spatial & anomaly detection system running 100% on edge devices. Features zero-shot anomaly detection, real-time Telegram alerts, and Snowflake data lake integration.",
        category: "ai",
        technologies: ["Python", "OpenCV", "Docker", "MediaPipe", "YOLOv8", "Snowflake"],
        github: "https://github.com/thtcsec/Lumisight-Core",
        demo: "",
        image: "/images/preview/preview_ai_sentinel.jpg",
        featured: true,
        highlights: [
            "100% Privacy-First edge processing",
            "Zero-shot frame-differencing & Hybrid AI engines",
            "Multi-Camera RTSP streams support",
            "Instant Telegram alerts with context",
            "Snowflake Data Cloud telemetry export"
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
        ],
        isPrivate: true
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
        ],
        isPrivate: true
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "Modern responsive portfolio with React, TypeScript, and TailwindCSS. Features dark/light theme, animations, and SEO optimization.",
        category: "web",
        technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
        demo: "https://thtcsec.github.io",
        image: "/images/preview/preview_portfolio.png",
        featured: true,
        isPrivate: true
    }
];

// Explicitly select and order the 3 top featured projects for the homepage
const featuredOrder = ["orangecloud-insights", "ctsmartcam", "multi-cloud-soar"];
export const featuredProjects = featuredOrder
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

export const allProjects = projects;

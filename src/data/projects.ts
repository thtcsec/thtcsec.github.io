// Projects data - migrated from data/projects.json
export type ProjectCategory = 'ai-cv' | 'cloud-systems' | 'cybersecurity' | 'saas';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: ProjectCategory;
    isMobileApp?: boolean;
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
    awardBadge?: string;
}

export const categoryLabels: Record<string, string> = {
    all: "All Systems",
    "ai-cv": "AI & Computer Vision",
    "cloud-systems": "Cloud & Distributed",
    "cybersecurity": "Cybersecurity & Infra",
    "saas": "Production SaaS",
};

export const projectCategoryOrder: (ProjectCategory | 'all')[] = [
    'all',
    'ai-cv',
    'cloud-systems',
    'cybersecurity',
    'saas',
];

export const projects: Project[] = [
    {
        id: "baoan-auto-zalo-mini-app",
        title: "Bảo An Auto — Zalo Mini App Garage Management & Multi-Branch SaaS",
        description: "Enterprise Zalo Mini App SaaS for automotive garage chain operation. Features 5-tier RBAC (Super Admin, Owner, Manager, Technician, Customer), dynamic invoice & quote PDF printing engine, Supabase PostgreSQL sync with local in-memory mock DB fallback, and Vercel serverless deployment.",
        category: "saas",
        isMobileApp: true,
        technologies: ["Zalo Mini App", "React", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Supabase", "Express.js", "Vercel", "Recharts"],
        image: "/images/project_image/baoan-auto/baoan_auto_1.jpg",
        images: [
            "/images/project_image/baoan-auto/baoan_auto_1.jpg",
            "/images/project_image/baoan-auto/baoan_auto_2.jpg",
            "/images/project_image/baoan-auto/baoan_auto_3.jpg",
            "/images/project_image/baoan-auto/baoan_auto_4.jpg",
            "/images/project_image/baoan-auto/baoan_auto_5.jpg"
        ],
        featured: true,
        highlights: [
            "Mobile-first Zalo Mini App SaaS built with React, TypeScript, Vite & Zustand",
            "5-Tier Role-Based Access Control (Super Admin, Garage Owner, Manager, Technician, Customer)",
            "Dual-mode Architecture: Supabase PostgreSQL cloud sync + zero-config local mock DB fallback",
            "Dynamic PDF printing engine for vehicle inspection tickets, estimates, and tax invoices"
        ],
        isPrivate: true
    },
    {
        id: "sdn-its-resilience-ai",
        title: "AI-Assisted Resilience for SDN-Enabled ITS",
        description: "Lightweight research framework for V2X network reliability, edge telemetry, and safety-aware SDN mitigation featuring Hybrid TCN-GRU anomaly detection (97.33% accuracy, 0.174MB INT8 quantization, 9.9ms latency) with automated contain-and-rollback mitigation.",
        category: "ai-cv",
        technologies: ["PyTorch", "Python", "Ryu", "ONOS", "Mininet-WiFi", "SUMO", "Scapy", "Flask", "Docker"],
        github: "",
        demo: "",
        image: "/images/project_image/sdn_its/sdn_its-1.webp",
        images: [
            "/images/project_image/sdn_its/sdn_its.webp",
            "/images/project_image/sdn_its/sdn_its-1.webp",
            "/images/project_image/sdn_its/sdn_its-2.webp",
            "/images/project_image/sdn_its/sdn_its-3.webp",
            "/images/project_image/sdn_its/sdn_its-4.webp",
            "/images/project_image/sdn_its/sdn_its-5.webp",
            "/images/project_image/sdn_its/sdn_its-6.webp",
            "/images/project_image/sdn_its/sdn_its-7.webp"
        ],
        featured: true,
        highlights: [
            "Academic Research Proposal & Framework for Tsinghua University Global Innovation Program under academic supervision of Prof. Kris Singh",
            "Flow-level telemetry (non-DPI counters) paired with Hybrid TCN-GRU anomaly detection",
            "Model INT8 quantization reducing size by 82% (0.174 MB) with 97.33% accuracy and 9.9ms response time",
            "Automated Detect -> Contain -> Rollback safety-aware mitigation pipeline with cooldown policy",
            "Canonical InSDN real dataset evaluation harness, ONNX export pipeline, and interactive command center UI"
        ],
        isPrivate: true,
        awardBadge: "Tsinghua University Research"
    },
    {
        id: "securecoating-vision",
        title: "SecureCoating-Vision — Evidence-Gated Electrode Inspection",
        description: "Track 4 (AI + Materials Testing): electrode coating defects become scrap or untraceable cell risk. Ranking anomalies is not enough — a line needs to know when a detection is safe to act on. SecureCoating-Vision is a fail-closed inspection pipeline: RGB YOLO-seg localization, then an evidence gate that may only PASS/REJECT when sensors, calibration, traceability, and PLC ACK agree; otherwise HOLD. Thermal and laser channels are simulated adapters; the industrial claim is the decision contract, not another detector.",
        category: "ai-cv",
        technologies: ["Python", "FastAPI", "PyTorch", "ONNX Runtime", "Streamlit", "OpenCV", "Docker"],
        github: "",
        demo: "",
        image: "/images/project_image/securecoating/securecoating-1.webp",
        images: [
            "/images/project_image/securecoating/securecoating-1.webp",
            "/images/project_image/securecoating/securecoating-2.webp",
            "/images/project_image/securecoating/securecoating-3.webp",
            "/images/project_image/securecoating/securecoating-4.webp",
            "/images/project_image/securecoating/securecoating-5.webp",
            "/images/project_image/securecoating/securecoating-6.webp",
            "/images/project_image/securecoating/securecoating-7.webp",
            "/images/project_image/securecoating/securecoating-8.webp"
        ],
        featured: true,
        highlights: [
            "Competition: 2026 Global AI + Materials (Tsinghua MSE), Track 4 — AI + Materials Testing and Characterization. Advisor: Prof. Kris Singh.",
            "Novelty is the evidence gate, not another YOLO: detection cannot self-release the line. Modality disagreement, stale sensors, invalid calibration, or missing PLC ACK become HOLD — a controlled industrial state, not a hidden false-positive rate. LIBAD/DA-Core stay attributed to Sui et al.",
            "Held-out CoatingVision optical test-split (seed 71, Figshare DOI 10.6084/m9.figshare.29260121.v1): mAP50 0.63 / precision 0.64 / recall 0.64. Live mean pipeline latency ~312 ms on CPU. Sui et al. report LIBAD FPR95 54.3% even at F1-max 90.6% — we measure how much of that risk converts to HOLD (Automatic Decision Coverage, HOLD Rate, Escape Rate, Selective Risk), not a claim that FPR vanished.",
            "Materials, not generic CV: acquired coating-surface frames on a roll/batch identity, SHA-256 verified samples, SPC on the coating process. Thermal and profilometry are simulated interface adapters in this prototype; the target real multimodal lane is LIBAD VIS + inline-compatible X-rayL.",
            "Industrial contract: fail-closed production console, confirm-audit E-stop/reset, OPC UA / Modbus command+ACK, HMAC roll certificates. Prototype is not production-qualified — no vendor PLC HIL, no plant safety approval, no factory yield claim.",
            "Operator story in one History view: acquired frame → letterboxed model input → blister/scratch overlay → PASS / REJECT / HOLD. Dataset, Diagnose, and Traceability show provenance, readiness blockers, and the signed certificate.",
            "Reproducibility: Docker API + dashboard, 171 software tests, pinned weights path, hash-verified dataset library. Limitations stated: official LIBAD 4.84 GB run pending; thermal/profiler not plant instruments; tracked YOLO split is research evidence, not a factory qualification."
        ],
        isPrivate: true,
        awardBadge: "Tsinghua MSE Track 4 (AI+Materials)"
    },
    {
        id: "foundry-platform",
        title: "Foundry — AI Engineering Intelligence Platform",
        description: "AI-Powered Engineering Review & Code Intelligence Platform acting as an experienced Staff Engineer that understands entire codebases, delivering architectural insights, security reviews, FinOps metrics, and dependency upgrade maps.",
        category: "cloud-systems",
        technologies: ["ASP.NET Core 10", "Next.js 15", "C# 13", "TypeScript", "PostgreSQL", "pgvector", "Redis", "Docker", "Terraform"],
        github: "",
        demo: "",
        image: "/images/project_image/foundry/foundry-1.png",
        images: [
            "/images/project_image/foundry/foundry-1.png",
            "/images/project_image/foundry/foundry-2.png",
            "/images/project_image/foundry/foundry-3.png",
            "/images/project_image/foundry/foundry-4.png",
            "/images/project_image/foundry/foundry-5.png"
        ],
        featured: true,
        highlights: [
            "Microservices architecture split into API Gateway (ASP.NET Core 10), Background AST Worker, and LLM Model Gateway",
            "Vector DB (pgvector) RAG indexing with Redis semantic response caching (>97% cosine similarity prompt shortcut)",
            "Multi-tenant isolation using EF Core Global Query Filters and per-tenant encryption",
            "Parallel static scanner audits for Security, Dependencies, FinOps, and Infrastructure",
            "Extensible C# 13 & .NET 10 solution with Next.js App Router frontend and Terraform AWS infra"
        ],
        isPrivate: true
    },
    {
        id: "quasar-quantum-routing",
        title: "QUASAR — Classical-Quantum Hybrid Logistics Engine",
        description: "Classical-quantum hybrid logistics orchestration system for Traveling Salesperson Problem (TSP) optimization, combining Google OR-Tools guided local search with 127-qubit IBM Quantum Qiskit QAOA execution.",
        category: "cloud-systems",
        technologies: ["FastAPI", "Python", "Qiskit", "IBM Quantum Runtime", "Google OR-Tools", "OSMnx", "SQLAlchemy", "Docker"],
        github: "https://github.com/Muhammad-Rafif-Irfan/QUASAR",
        demo: "",
        image: "/images/project_image/quasar/quasar-1.png",
        images: [
            "/images/project_image/quasar/quasar-1.png",
            "/images/project_image/quasar/quasar-2.png",
            "/images/project_image/quasar/quasar-3.png",
            "/images/project_image/quasar/quasar-4.png",
            "/images/project_image/quasar/quasar-5.png",
            "/images/project_image/quasar/quasar-6.png"
        ],
        featured: true,
        highlights: [
            "Hackathon Project: International Quantum Computing Hackathon (QC4SG 2026 Finalist / Team 23)",
            "Asynchronous hybrid computation pipeline pairing classical warm-starts (Google OR-Tools) with 127-qubit IBM QPU QAOA algorithms",
            "Dynamic geospatial routing engine using OSMnx to snap coordinate JSON inputs to real road networks with Haversine fallback",
            "Deterministic tour validation layer verifying depot start/end constraints and node uniqueness",
            "Layered defense-in-depth security middleware (OWASP headers, rate limiting, request tracing)"
        ],
        isPrivate: false,
        awardBadge: "QC4SG 2026 International Finalist"
    },
    {
        id: "enterpriserag",
        title: "EnterpriseRAG — Hybrid Retrieval-Augmented Generation Platform",
        description: "Production hybrid RAG platform combining Qdrant dense vector search, OpenSearch BM25, and CrossEncoder reranking with document-level ACL access control and multi-format ingest (PDF OCR routing via LightOnOCR-2 & Docling).",
        category: "cloud-systems",
        technologies: ["FastAPI", "Python", "Qdrant", "OpenSearch", "Redis", "CrossEncoder", "LightOnOCR-2", "Docling", "Docker"],
        github: "",
        demo: "",
        image: "/images/project_image/enterpriserag/enterpriserag-1.png",
        images: [
            "/images/project_image/enterpriserag/enterpriserag-1.png",
            "/images/project_image/enterpriserag/enterpriserag-2.png",
            "/images/project_image/enterpriserag/enterpriserag-3.png",
            "/images/project_image/enterpriserag/enterpriserag-4.png"
        ],
        featured: true,
        highlights: [
            "Built MVP for Next Step Technology Solutions",
            "Hybrid retrieval pipeline: Qdrant dense + OpenSearch BM25 -> Reciprocal Rank Fusion (RRF) -> CrossEncoder reranker",
            "Multi-format ingestion supporting PDF (pypdf text-layer), LightOnOCR-2 for scans/tables, and Docling for structured layouts",
            "Document-level ACL authorization with API key scope mapping and Qdrant/OpenSearch payload filtering",
            "LLM-as-judge citation verification on streaming and non-streaming answers",
            "Redis semantic caching, Prometheus metrics, and automated IR Golden-set eval harness (Recall@K, MRR, nDCG)"
        ],
        isPrivate: true
    },
    {
        id: "driftskills-ai",
        title: "DriftSkills AI - Career Recommendation Engine",
        description: "AI-powered career recommendation engine. Detects skill gaps and career drift, providing personalized learning paths using MongoDB Atlas Vector Search and Aggregation Pipelines.",
        category: "cloud-systems",
        technologies: ["Next.js 14", "FastAPI", "MongoDB Atlas", "Vector Search", "Python", "D3.js", "Docker", "TailwindCSS"],
        github: "",
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
        isPrivate: true,
        awardBadge: "MongoDB Hackathon 2026 (2nd Place)"
    },
    {
        id: "orangecloud-insights",
        title: "OrangeCloud Insights — AI-Powered Tech Intelligence Platform",
        description: "Serverless tech intelligence and RSS crawling platform. Automatically crawls RSS feeds, parses content, uses OpenAI models to summarize and rewrite tech articles in neutral, professional Vietnamese, generates embeddings with Workers AI, and saves semantic vectors into Cloudflare Vectorize.",
        category: "cloud-systems",
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
        id: "ctsmartcam",
        title: "CTSmartCam - Intelligent Surveillance Ecosystem",
        description: "An intelligent surveillance ecosystem for Cần Thơ City, utilizing an event-driven AI pipeline for real-time monitoring and security.",
        category: "ai-cv",
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
        id: "multi-cloud-soar",
        title: "Multi-Cloud Serverless SOAR Platform (AWS & GCP)",
        description: "Designed and implemented a multi-cloud Security Orchestration, Automation, and Response (SOAR) platform across AWS and GCP. Built event-driven incident response pipelines using GuardDuty / Security Command Center, EventBridge / Eventarc, and SQS / Pub/Sub.",
        category: "cybersecurity",
        technologies: ["GCP", "AWS", "Terraform", "Python", "Serverless", "Eventarc", "Pub/Sub", "Step Functions", "Cloud Workflows", "Cloud Run", "ECS Fargate"],
        github: "",
        githubLinks: [
            { url: "https://github.com/thtcsec/AWS-Serverless-SOAR", label: "AWS" },
            { url: "https://github.com/thtcsec/GCP-Serverless-SOAR", label: "GCP" }
        ],
        demo: "",
        image: "/images/preview/soar_logo.png",
        images: [
            "/images/preview/soar_logo.png",
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
        category: "cybersecurity",
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
        category: "ai-cv",
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
        id: "ai-lms",
        title: "toanvotruongtoan.com - AI-Powered LMS",
        description: "Production-ready Learning Management System with Gemini AI integration for automated exam generation and intelligent tutoring, serving hundreds of students.",
        category: "saas",
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
        category: "cybersecurity",
        isMobileApp: true,
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
        ]
    },
    {
        id: "ai-sentinel",
        title: "Lumisight Core",
        description: "Spatial & anomaly detection system running 100% on edge devices. Features zero-shot anomaly detection, real-time Telegram alerts, and Snowflake data lake integration.",
        category: "ai-cv",
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
        category: "ai-cv",
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
        category: "cybersecurity",
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
        category: "saas",
        technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
        demo: "https://thtcsec.github.io",
        image: "/images/preview/preview_portfolio.png",
        featured: true,
        isPrivate: true
    }
];

// Explicitly select and order the top featured projects for the homepage
const featuredOrder = ["baoan-auto-zalo-mini-app", "quasar-quantum-routing", "sdn-its-resilience-ai", "securecoating-vision", "orangecloud-insights"];
export const featuredProjects = featuredOrder
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

export const allProjects = projects;

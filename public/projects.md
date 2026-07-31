# Technical Projects - Trịnh Hoàng Tú (Hoang Tu)

A collection of featured engineering projects in web architectures, serverless systems, artificial intelligence, security pipelines, and automation tools.

---

## 🚀 Featured Projects

### 1. AI-Assisted Resilience for SDN-Enabled ITS (`sdn-its-resilience-ai`)
*   **Domain:** Artificial Intelligence & Software-Defined Networking (SDN)
*   **Technologies:** PyTorch, Python, Ryu, ONOS, Mininet-WiFi, SUMO, Scapy, Flask, Docker
*   **Access:** Private Research Repository
*   **Highlights:**
    *   *Academic Context:* Research Proposal Project at Tsinghua University IEDE under academic supervision of Prof. Kris Singh.
    *   Flow-level telemetry paired with Hybrid TCN-GRU anomaly detection achieving 97.33% accuracy.
    *   Model INT8 quantization reducing model size by 82% (0.174 MB) with 9.9ms response time.
    *   Automated Detect → Contain → Rollback safety-aware mitigation pipeline with cooldown policy.

### 2. OrangeCloud Insights — AI-Powered Tech Intelligence Platform
*   **Domain:** Web & AI / Serverless Integration
*   **Technologies:** Next.js 15, Cloudflare Workflows, Cloudflare D1, Cloudflare R2, Cloudflare Vectorize, Workers AI, OpenAI API, Drizzle ORM, TypeScript
*   **Live Demo:** [blog.orangecloud.vn](https://blog.orangecloud.vn)
*   **Highlights:**
    *   Serverless Cloudflare-Native architecture using Next.js 15 deployed on Cloudflare Pages (`@cloudflare/next-on-pages`).
    *   Automated multi-stage processing pipeline orchestrated by Cloudflare Workflows (Beta) with built-in checkpointing and retries.
    *   Split-storage design: relational data on Cloudflare D1 SQL database and raw/cleaned content on Cloudflare R2 object storage.
    *   Semantic search and similar articles suggestions powered by Workers AI (`@cf/baai/bge-small-en-v1.5`) and Cloudflare Vectorize.
    *   OpenAI Model Router with auto-fallback that dynamically queries OpenAI API capabilities and handles fallback models gracefully.
    *   Rich interactive admin control panel with RSS source CRUD, manual/batch AI review and re-processing flow, auto-publish rules, and custom Telegram daily digests.

### 2. CTSmartCam - Intelligent Surveillance Ecosystem
*   **Domain:** Artificial Intelligence & IoT Infrastructure
*   **Technologies:** ASP.NET Core 9, SignalR, Python, Redis Streams, YOLOv11, PostgreSQL, pgvector, Nginx, Docker
*   **Highlights:**
    *   An intelligent surveillance ecosystem utilizing an event-driven AI pipeline for real-time monitoring and security.
    *   Event-driven architecture optimizing hardware resources for multi-camera processing.
    *   Integrated Identity Fusion linking vehicle license plates with driver facial recognition.
    *   Advanced LPR (License Plate Recognition) system with Super Resolution support for low-quality captures.
    *   Multi-layer security featuring application honeypots and real-time security logging.
    *   Interactive CMS dashboard for centralized camera management and analytics.

### 3. Multi-Cloud Serverless SOAR Platform (AWS & GCP)
*   **Domain:** System Engineering & SecOps Automation
*   **Technologies:** GCP, AWS, Terraform, Python, Serverless, Eventarc, Pub/Sub, Step Functions, Cloud Workflows, Cloud Run, ECS Fargate
*   **Source Code:** [AWS SOAR Repo](https://github.com/thtcsec/AWS-Serverless-SOAR) | [GCP SOAR Repo](https://github.com/thtcsec/GCP-Serverless-SOAR)
*   **Highlights:**
    *   Designed and implemented a multi-cloud Security Orchestration, Automation, and Response (SOAR) platform across AWS and GCP.
    *   Built event-driven incident response pipelines using GuardDuty / Security Command Center, EventBridge / Eventarc, and SQS / Pub/Sub.
    *   Implemented workflow orchestration using AWS Step Functions and GCP Cloud Workflows for automated containment and forensics.
    *   Developed container-based worker services (ECS Fargate / Cloud Run) for malware analysis and incident processing.
    *   Automated response actions including resource isolation, IAM privilege revocation, SSH blocking, and disk snapshot for forensic analysis.
### 4. EnterpriseRAG — Hybrid Retrieval-Augmented Generation Platform
*   **Domain:** Artificial Intelligence & Information Retrieval
*   **Technologies:** FastAPI, Python, Qdrant, OpenSearch, Redis, CrossEncoder, LightOnOCR-2, Docling, Docker
*   **Access:** Private MVP Repository
*   **Highlights:**
    *   Built MVP for Next Step Technology Solutions.
    *   Hybrid retrieval pipeline: Qdrant dense vector search + OpenSearch BM25 → Reciprocal Rank Fusion (RRF) → CrossEncoder reranker.
    *   Multi-format ingestion supporting PDF (`pypdf` text-layer), LightOnOCR-2 for scans/tables, and Docling for structured layout awareness.
    *   Document-level ACL authorization with API key scope mapping and Qdrant/OpenSearch payload filtering.
    *   LLM-as-judge citation verification on streaming and non-streaming answers.

### 5. QUASAR — Classical-Quantum Hybrid Logistics Engine
*   **Domain:** Quantum Computing & Operations Research
*   **Technologies:** FastAPI, Python, Qiskit, IBM Quantum Runtime, Google OR-Tools, OSMnx, SQLAlchemy, Docker
*   **Source Code:** [github.com/Muhammad-Rafif-Irfan/QUASAR](https://github.com/Muhammad-Rafif-Irfan/QUASAR)
*   **Highlights:**
    *   *Award:* Finalist (Team 23) at International Quantum Computing Hackathon (QC4SG 2026).
    *   Asynchronous hybrid computation pipeline pairing classical warm-starts (Google OR-Tools) with 127-qubit IBM QPU QAOA algorithms.
    *   Dynamic geospatial routing engine using OSMnx to snap coordinate JSON inputs to real road networks with Haversine fallback.
    *   Deterministic tour validation layer verifying depot start/end constraints and node uniqueness.

### 6. SecureCoating-Vision — Multi-Source Fusion Vision System
*   **Domain:** Computer Vision & AI for Materials Science
*   **Technologies:** Python, FastAPI, PyTorch, ONNX Runtime, TensorRT, Streamlit, OpenCV, Docker
*   **Access:** Private Competition Repository
*   **Highlights:**
    *   *Competition:* 2026 Global AI + Materials Competition (Tsinghua University School of Materials Science & Engineering), supervised by Prof. Kris Singh (SRII / Tsinghua).
    *   Multi-modal sensor fusion combining 2D High-Res Optical RGB, LWIR Thermal, and 3D Laser Profilometer data.
    *   Dual-stage inference pipeline accelerated via TensorRT FP16/INT8 for $\le 35\text{ms}$ inspection zone latency.
    *   Fail-safe sensor degradation logic, digital homography correction, and OPC UA / Modbus TCP industrial PLC signaling.

### 7. Foundry — AI Engineering Intelligence Platform
*   **Domain:** System Engineering & AI Code Intelligence
*   **Technologies:** ASP.NET Core 10, Next.js 15, C# 13, TypeScript, PostgreSQL, pgvector, Redis, Docker, Terraform
*   **Access:** Private Project Repository
*   **Highlights:**
    *   Microservices architecture split into API Gateway (ASP.NET Core 10), Background AST Worker, and LLM Model Gateway.
    *   Vector DB (`pgvector`) RAG indexing with Redis semantic response caching (`>97%` cosine similarity prompt shortcut).
    *   Multi-tenant isolation using EF Core Global Query Filters and per-tenant encryption.
    *   Parallel static scanner audits for Security, Dependencies, FinOps, and Infrastructure.

---

## 🛠️ Other Notable Projects

### 4. DriftSkills AI - Career Recommendation Engine
*   **Domain:** AI / Career Path Planning
*   **Technologies:** Next.js 14, FastAPI, MongoDB Atlas, Vector Search, Python, D3.js, Docker, TailwindCSS
*   **Access:** Private Hackathon Repository
*   **Highlights:**
    *   *Award:* Ranked 2nd (Team Vector404) at MUGVN × MongoDB Mini Hackathon 2026.
    *   Semantic Job Matching via `$vectorSearch` on 384-dimensional embeddings.
    *   Collaborative Filtering & Career Drift Score using complex multi-stage aggregation pipelines.
    *   Interactive Visualizations: Skill Galaxy (D3 force-directed graph) and Market Analytics (`$facet`).

### 5. toanvotruongtoan.com - AI-Powered LMS
*   **Domain:** Web Application / Production LMS
*   **Technologies:** React, Supabase, Vercel, Gemini AI, TypeScript
*   **Live Demo:** [toanvotruongtoan.com](https://toanvotruongtoan.com)
*   **Highlights:**
    *   Production-ready Learning Management System with Gemini AI integration for automated exam generation.
    *   Strict Supabase Row-Level Security (RLS) and server-side rate limiting.
    *   Serverless architecture with under 100ms response times. Serves hundreds of active students.

### 6. SilentPipe - Android Media Player
*   **Domain:** Mobile Development / Privacy Tools
*   **Technologies:** Java, Kotlin, Android Media3, Chaquopy, NewPipeExtractor, OkHttp, yt-dlp
*   **Source Code:** [github.com/thtcsec/SilentPipe](https://github.com/thtcsec/SilentPipe)
*   **Highlights:**
    *   Anonymous & ad-free Android media player for YouTube/TikTok.
    *   Background playback, offline download, and custom 10-band equalizer presets.
    *   Python-powered `yt-dlp` integration running locally on Android using Chaquopy.

### 7. Realistic Pentest Home Lab Series
*   **Domain:** Security Lab / Infrastructure
*   **Technologies:** Docker, Python, Node.js, PHP, Active Directory
*   **Source Code:** [github.com/thtcsec/PentestLab](https://github.com/thtcsec/PentestLab)
*   **Highlights:**
    *   Segregated environments based on Phases (Web, Active Directory, Cloud).
    *   100% reproducible with One-Click Docker installation.
    *   Focuses on: Root Cause ➜ Attack Path ➜ Mitigation ➜ Detection.

### 8. Lumisight Core (AI Sentinel)
*   **Domain:** Edge AI / Vision
*   **Technologies:** Python, OpenCV, Docker, MediaPipe, YOLOv8, Snowflake
*   **Source Code:** [github.com/thtcsec/Lumisight-Core](https://github.com/thtcsec/Lumisight-Core)
*   **Highlights:**
    *   Spatial & anomaly detection system running 100% on edge devices.
    *   Zero-shot frame-differencing & Hybrid AI engines with instant Telegram alerts.

### 9. Face Recognition System
*   **Domain:** AI & Distributed Systems
*   **Technologies:** Java, Python, OpenCV, Flask, Gradle, Swing
*   **Highlights:**
    *   Multi-threaded Java socket server architecture.
    *   Python Flask API generating face embeddings for real-time recognition.

### 10. Yodobashi Ultimate Sniper
*   **Domain:** Web Automation / Browser Automation
*   **Technologies:** Playwright, Node.js, JavaScript, Stealth Tech
*   **Highlights:**
    *   Stealth resource blocking & anti-detection mechanisms.
    *   50ms real-time availability watcher for rapid order execution.

### 11. ChainCampus - Blockchain Event Ticketing
*   **Domain:** Web3 / Smart Contracts
*   **Technologies:** Django, PostgreSQL, Ethereum, Solidity, Hardhat, Web3.py
*   **Highlights:**
    *   NFT ticket distribution on Ethereum Sepolia testnet with Metamask SIWE authentication.

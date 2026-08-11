export interface Publication {
  id: string;
  title: string;
  conference: string;
  abbreviation: string;
  track: string;
  year: number;
  authors: string[];
  affiliation: string;
  abstract: string;
  pdfUrl?: string;
  githubUrl?: string;
  officialUrl?: string;
  conferenceLogo?: string;
  conferenceLogos?: string[];
  doi?: string;
  status: "Under Review" | "Accepted" | "Published" | "Camera Ready";
  indexing?: string;
  tags: string[];
}

export const publicationsData: Publication[] = [
  {
    id: "csonet-2026",
    title: "Network-Aware Event Sequence Modeling for User-Behavior and System Log Anomaly Detection",
    conference: "The 15th International Conference on Computational Social Networks (CSONET 2026)",
    abbreviation: "CSONET 2026",
    track: "Network Security, Log Intelligence & Deep Learning",
    year: 2026,
    authors: ["ThS. Cao Tien Thanh", "Trinh Hoang Tu", "PGS. TS. Tran Manh Ha"],
    affiliation: "Industrial University of Ho Chi Minh City & Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper presents a network-aware system log anomaly detection framework based on Drain3 log parsing and event sequence analysis. By modeling system log sequences as directed transition networks and client-service interaction graphs, we benchmark sequence modeling architectures against established baselines across large-scale log datasets.",
    officialUrl: "https://csonet-conf.github.io/csonet26/index.html",
    conferenceLogos: ["/images/hcmut.png"],
    status: "Under Review",
    indexing: "Springer LNCS / Scopus Indexed",
    tags: ["Log Anomaly Detection", "TCN", "Transformer", "Drain3", "AIOps", "Event Sequence Modeling"],
  },
  {
    id: "icai-fai-2026",
    title: "Decoupled AI-Native Security Architecture: Closed-Loop Threat Containment for Campus Networks",
    conference: "The 2nd International Conference on AI: AI-Native for University and Industry (ICAI-2026 / ICAI-FAI 2026)",
    abbreviation: "ICAI-FAI 2026",
    track: "Track 1: Information and Communications Technology (ICT)",
    year: 2026,
    authors: ["Trinh Hoang Tu", "ThS. Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper investigates an AI-native event-driven security platform for campus and enterprise network environments. The proposed architecture decouples high-frequency edge telemetry ingestion from cloud policy control to achieve rapid, closed-loop threat containment under heterogeneous device constraints.",
    officialUrl: "https://icai.cmcu.edu.vn",
    conferenceLogos: ["/images/cmc.png", "/images/steinbeis.png", "/images/tsinghua_shenzhen.png"],
    status: "Under Review",
    indexing: "Peer-Reviewed Intl Conf (CMC x Tsinghua x Steinbeis)",
    tags: ["AI-Native Security", "Edge AI", "Quantization INT8", "Deep Q-Network", "SDN", "SOAR"],
  },
  {
    id: "vnict-2026",
    title: "Application of TCN and Transformer Networks for Log Anomaly Detection in Large-Scale Enterprise and Industrial Networks",
    conference: "The 29th National Conference on Information and Communications Technology (VNICT 2026)",
    abbreviation: "VNICT 2026",
    track: "Information & Network Security, AIOps & Deep Learning",
    year: 2026,
    authors: ["Trinh Hoang Tu", "ThS. Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper presents a large-scale system log anomaly detection pipeline based on Drain3 and event sequence analysis, comparing Temporal Convolutional Networks (TCN) and Transformers against traditional baselines on HDFS and BGL datasets.",
    officialUrl: "https://hoithaoquocgiacntt.ac.vn/",
    conferenceLogos: ["/images/hanu.jpg"],
    status: "Accepted",
    indexing: "National Proceedings (VAIP / VNICT)",
    tags: ["Log Anomaly Detection", "TCN", "Transformer", "Drain3", "AIOps", "Camera-Ready"],
  },
  {
    id: "soict-2026",
    title: "LLM-Augmented Log Anomaly Detection: Automated Root Cause Narration for AIOps using Lightweight Foundation Models on Real-World Campus Infrastructure",
    conference: "The 15th International Symposium on Information and Communication Technology (SOICT 2026)",
    abbreviation: "SOICT 2026",
    track: "AI Foundations, Foundation Models, and Generative AI",
    year: 2026,
    authors: ["Trinh Hoang Tu", "ThS. Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper proposes an end-to-end LLM-augmented AIOps framework combining streaming Drain3 log template parsing, a hybrid TCN-Transformer autoencoder, and a lightweight INT4-quantized Foundation Model (Phi-3 / Mistral) for real-time automated Root Cause Analysis (RCA). Evaluated on 5GB production campus network logs from HUFLIT alongside BGL and HDFS, the framework achieves F1 = 0.9520 and reduces incident triage time by >88%.",
    officialUrl: "https://soict.org",
    conferenceLogos: ["/images/soict-hust.png", "/images/hcmus.png"],
    status: "Under Review",
    indexing: "Springer CCIS / Scopus Indexed (HUST x HCMUS)",
    tags: ["LLM", "Foundation Models", "Log Anomaly Detection", "AIOps", "Root Cause Analysis", "Drain3", "TCN-Transformer"],
  },
  {
    id: "rivf-2026",
    title: "Federated Edge-Cloud Resilience Architecture for Distributed Campus Networks",
    conference: "The 20th IEEE RIVF International Conference on Computing and Communication Technologies (IEEE RIVF 2026)",
    abbreviation: "IEEE RIVF 2026",
    track: "Communications, Networking, IoT, Cloud Computing",
    year: 2026,
    authors: ["Trinh Hoang Tu", "ThS. Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper proposes a privacy-preserving federated edge-cloud resilience architecture for multi-campus university environments. By deploying quantized sequence autoencoders at edge gateways and executing decentralized weight aggregation, the framework achieves real-time threat containment without streaming raw telemetry to central servers.",
    officialUrl: "https://rivf2026.org/#content",
    conferenceLogos: ["/images/vinuni.png"],
    status: "Under Review",
    indexing: "IEEE Xplore / Scopus Indexed",
    tags: ["Federated Learning", "Edge AI", "SDN", "Zero-Trust", "TCN-GRU", "Redis Stream"],
  },
  {
    id: "sr-icyreb-2026",
    title: "Regression Analysis of AI-Native Security Adoption and Operational Feasibility in Vietnamese Higher Education Institutions",
    conference: "The 12th International Conference for Young Researchers in Economics and Business (SR-ICYREB 2026)",
    abbreviation: "SR-ICYREB 2026",
    track: "Digital Transformation & Cyber Economics",
    year: 2026,
    authors: ["Trinh Hoang Tu"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This study conducts an empirical investigation into the economic feasibility, compliance factors, and institutional readiness for adopting AI-native security and automated threat orchestration across higher education institutions in Vietnam.",
    conferenceLogos: ["/images/ueh.png"],
    status: "Under Review",
    indexing: "National Proceedings (UEH / SR-ICYREB)",
    tags: ["Cyber Economics", "EdTech Security", "Empirical Research", "AI Adoption"],
  },
  {
    id: "gigs-2026",
    title: "AI-Driven EdTech Risk & Cybersecurity Economics: Analyzing Student Data Governance and Financial Vulnerability in Emerging Markets",
    conference: "The 2nd International Conference on Green Innovation and Sustainable Growth (GIGS 2026)",
    abbreviation: "GIGS 2026",
    track: "Green Innovation, Digital Transformation & Risk Management",
    year: 2026,
    authors: ["Trinh Hoang Tu", "ThS. Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper presents an empirical cybersecurity economics framework analyzing data leak likelihood, compliance penalties under Decree 13/2023/ND-CP, and operational loss modeling using Monte Carlo simulations for EdTech platforms in emerging Asian markets.",
    officialUrl: "https://gigs2026.ftu.edu.vn",
    conferenceLogos: ["/images/ftu.png", "/images/curtin.jpg"],
    status: "Under Review",
    indexing: "Peer-Reviewed Intl Conf (FTU x Curtin)",
    tags: ["Cyber Economics", "EdTech Risk", "Data Governance", "Decree 13/2023/ND-CP", "Monte Carlo"],
  },
];

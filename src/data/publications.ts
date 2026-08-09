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
    id: "sr-icyreb-2026",
    title: "Regression Analysis of AI-Native Security Adoption and Operational Feasibility in Vietnamese Higher Education Institutions",
    conference: "The 12th International Conference for Young Researchers in Economics and Business (SR-ICYREB 2026)",
    abbreviation: "SR-ICYREB 2026",
    track: "Digital Transformation & Cyber Economics",
    year: 2026,
    authors: ["Trinh Hoang Tu"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "An empirical econometric evaluation of cybersecurity automation adoption rates and operational feasibility across Higher Education Institutions (HEIs) in Vietnam, examining the operational trade-offs of edge AI security deployment.",
    officialUrl: "https://submit.ueh.edu.vn/index.php/icyref2026/index",
    conferenceLogos: ["/images/ueh.png"],
    status: "Under Review",
    indexing: "Peer-Reviewed Intl Conf (UEH)",
    tags: ["Econometric Analysis", "Cybersecurity Governance", "EdTech Resilience"],
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
    id: "gigs-2026",
    title: "AI-Driven Cyber Resilience and Smart Governance for Sustainable Digital Transformation in Higher Education Institutions",
    conference: "International Conference on Governance, Innovation, Glocalization and Sustainability (GIGS 2026)",
    abbreviation: "GIGS 2026",
    track: "Governance, Policy and Societal Transformation / Digital Transformation",
    year: 2026,
    authors: ["Trinh Hoang Tu", "ThS. Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This study examines the interplay between AI-native cybersecurity governance, operational feasibility, and institutional sustainability across emerging higher education networks, proposing a smart governance framework integrating automated security telemetry.",
    officialUrl: "https://gigs.ftu.edu.vn",
    conferenceLogos: ["/images/ftu.png", "/images/curtin.jpg"],
    status: "Under Review",
    indexing: "Peer-Reviewed Intl Conf (FTU x Curtin)",
    tags: ["AI Governance", "Digital Transformation", "Cyber Resilience", "ESG & Sustainability"],
  },
];

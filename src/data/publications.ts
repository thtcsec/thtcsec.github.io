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
    authors: ["Trinh Hoang Tu", "Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "Modern university networks face escalating cybersecurity threats driven by unmanaged BYOD devices and heterogeneous IoT endpoints. Traditional Security Operations Center (SOC) workflows rely on manual alert triage, yielding Mean Time to Respond (MTTR) latencies exceeding 1500 seconds. This paper proposes an AI-native event-driven edge-cloud security platform enabling sub-10 ms closed-loop threat containment. We decouple high-frequency edge telemetry ingestion from cloud policy control.",
    pdfUrl: "/cv/icaifai.pdf",
    githubUrl: "https://github.com/thtcsec/icai-fai2026",
    officialUrl: "https://icai.cmcu.edu.vn",
    conferenceLogos: ["/images/cmc.png", "/images/steinbeis.png", "/images/tsinghua_shenzhen.png"],
    status: "Under Review",
    tags: ["AI-Native Security", "Edge AI", "Quantization INT8", "Deep Q-Network", "SDN", "SOAR"],
  },
  {
    id: "csonet-2026",
    title: "Network-Aware Event Sequence Modeling for User-Behavior and System Log Anomaly Detection",
    conference: "The 15th International Conference on Computational Social Networks (CSONET 2026)",
    abbreviation: "CSONET 2026",
    track: "Network Security, Log Intelligence & Deep Learning",
    year: 2026,
    authors: ["Cao Tien Thanh", "Trinh Hoang Tu", "Tran Manh Ha"],
    affiliation: "Industrial University of Ho Chi Minh City & Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper presents a network-aware system log anomaly detection pipeline based on Drain3 and event sequence analysis, modeling log sequences as walks on directed event-transition networks and client-service interaction graphs. We evaluate Temporal Convolutional Networks (TCN) and Transformers against traditional baselines on three large-scale log datasets (HDFS, BGL, and HUFLIT-Career). On BGL (500k lines, 198 templates), TCN leads with an F1-score of 0.9826, demonstrating notable classification advantage and competitive inference latency.",
    pdfUrl: "/cv/csonet2026.pdf",
    githubUrl: "https://github.com/thtcsec/log-anomaly-tcn-transformer",
    officialUrl: "https://csonet-conf.github.io/csonet26/index.html",
    conferenceLogos: ["/images/hcmut.png"],
    status: "Under Review",
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
      "Empirical econometric evaluation of security automation adoption rates across 45 Higher Education Institutions (HEIs) in Vietnam, demonstrating statistical significance of edge AI deployment in reducing incident containment costs.",
    pdfUrl: "/cv/ueh_conf.pdf",
    officialUrl: "https://submit.ueh.edu.vn/index.php/icyref2026/index",
    conferenceLogos: ["/images/ueh.png"],
    status: "Under Review",
    tags: ["Econometric Analysis", "Cybersecurity Governance", "EdTech Resilience"],
  },
  {
    id: "vnict-2026",
    title: "Application of TCN and Transformer Networks for Log Anomaly Detection in Large-Scale Enterprise and Industrial Networks",
    conference: "The 29th National Conference on Information and Communications Technology (VNICT 2026)",
    abbreviation: "VNICT 2026",
    track: "Information & Network Security, AIOps & Deep Learning",
    year: 2026,
    authors: ["Trinh Hoang Tu", "Cao Tien Thanh"],
    affiliation: "Faculty of Information Technology, HUFLIT",
    abstract:
      "This paper presents a large-scale system log anomaly detection pipeline based on Drain3 and event sequence analysis, comparing Temporal Convolutional Networks (TCN) and Transformers against traditional baselines (PCA, SVD, Isolation Forest, DeepLog) on HDFS and BGL datasets. (Accepted as Camera-Ready paper #6979; the research team subsequently upgraded and expanded this work into CSoneT 2026).",
    pdfUrl: "/cv/vnict2026.pdf",
    githubUrl: "https://github.com/thtcsec/vnict2026-log-anomaly",
    officialUrl: "https://hoithaoquocgiacntt.ac.vn/",
    conferenceLogos: ["/images/hanu.jpg"],
    status: "Accepted",
    tags: ["Log Anomaly Detection", "TCN", "Transformer", "Drain3", "AIOps", "Camera-Ready"],
  },
];

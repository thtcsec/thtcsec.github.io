// Certificates and Achievements data - from certificates.html
export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    image: string;
    type: 'certificate' | 'achievement';
    description?: string;
}

export const certificates: Certificate[] = [
    // Google Certificates (first)
    {
        id: "cybersecurity",
        title: "Foundations of Cybersecurity",
        issuer: "Google",
        image: "/images/certificates/foundations_of_cybersecurity.jpg",
        type: "certificate"
    },
    {
        id: "project-management",
        title: "Foundations of Project Management",
        issuer: "Google",
        image: "/images/certificates/foundations_of_project_management.jpg",
        type: "certificate"
    },
    {
        id: "ai-essentials",
        title: "Google AI Essentials",
        issuer: "Google",
        image: "/images/certificates/google_ai_essentials.jpg",
        type: "certificate"
    },
    {
        id: "technical-support",
        title: "Technical Support Fundamentals",
        issuer: "Google",
        image: "/images/certificates/technical_support_fundamentals.jpg",
        type: "certificate"
    },
    {
        id: "prompting-essentials",
        title: "Google Prompting Essentials",
        issuer: "Google",
        image: "/images/certificates/google_prompting_essentials.jpg",
        type: "certificate"
    },
    {
        id: "network-architecture",
        title: "Network Architecture",
        issuer: "Google",
        image: "/images/certificates/network_architecture.jpg",
        type: "certificate"
    },
    {
        id: "aws-security-fundamentals",
        title: "AWS Security Fundamentals",
        issuer: "Amazon Web Services",
        image: "/images/certificates/aws_security_fundamentals.jpg",
        type: "certificate"
    },
    // Professional Certifications
    {
        id: "ccep-certified",
        title: "Certified Cybersecurity Educator Professional (CCEP)",
        issuer: "Red Team Leaders",
        image: "/images/certificates/ccep_certified_certificate.jpg",
        type: "certificate"
    },
    {
        id: "threat-intelligence-governance",
        title: "Certified Threat Intelligence Governance Analyst (CTIGA)",
        issuer: "Red Team Leaders",
        image: "/images/certificates/certified_threat_intelligence_governace_analyst.jpg",
        type: "certificate"
    },
    {
        id: "intro-to-cip",
        title: "Introduction to Critical Infrastructure Protection (ICIP)",
        issuer: "OPSWAT Academy",
        image: "/images/certificates/introduction_to_cip.png",
        type: "certificate"
    },
    // Hack2skill Certifications
    {
        id: "hack2skill-data",
        title: "Data Learning",
        issuer: "Hack2skill",
        image: "/images/certificates/hack2skill_data_learning.png",
        type: "certificate"
    },
    {
        id: "hack2skill-devops",
        title: "DevOps",
        issuer: "Hack2skill",
        image: "/images/certificates/hack2skill_devops.png",
        type: "certificate"
    },
    {
        id: "hack2skill-network",
        title: "Network Learning",
        issuer: "Hack2skill",
        image: "/images/certificates/hack2skill_network_learning.png",
        type: "certificate"
    },
    {
        id: "hack2skill-serverless",
        title: "Serverless Learning",
        issuer: "Hack2skill",
        image: "/images/certificates/hack2skill_serverless_learning.png",
        type: "certificate"
    },
    {
        id: "hack2skill-ai-ml",
        title: "AI and ML Learning",
        issuer: "Hack2skill",
        image: "/images/certificates/hack2skill_ai_ml_learning.png",
        type: "certificate"
    },
    // Hackathon Participation (last)
    {
        id: "vpbank-hackathon",
        title: "VPBank Hackathon",
        issuer: "Certificate of Participation",
        image: "/images/certificates/vpbank_hackathon_participation.png",
        type: "certificate"
    },
    {
        id: "vng-code-tour",
        title: "VNG Code Tour",
        issuer: "Certificate of Participation",
        image: "/images/certificates/vng_code_tour.jpg",
        type: "certificate"
    }
];

export const achievements: Certificate[] = [
    {
        id: "google-student-ambassador",
        title: "Google Student Ambassador (GSA) - HUFLIT Representative",
        issuer: "#TeamGoogle Vietnam",
        image: "/images/forums/gsa.png",
        type: "achievement",
        description: "Selected to represent HUFLIT in the national Google Student Ambassador program, leading Google AI initiatives and connecting the student community with Google's technologies."
    },
    {
        id: "outstanding-student-2023",
        title: "Outstanding Student of the Year 2023",
        issuer: "Bu Dang District, Binh Phuoc Province",
        image: "/images/achievements/outstanding_student_2023.jpg",
        type: "achievement",
        description: "Awarded for exceptional academic performance and contributions to the community."
    },
    {
        id: "digital-talent-scholarship",
        title: "Google Digital Talent Scholarship",
        issuer: "Google",
        image: "/images/achievements/digital_talent_scholarship.jpg",
        type: "achievement",
        description: "Recipient of the prestigious Google Digital Talent Scholarship, recognizing excellence in technology and innovation."
    },
    {
        id: "hsu-vibe-coding",
        title: "Winner - HSU Vibe Coding Talents",
        issuer: "HSU University",
        image: "/images/achievements/hsu_vibe_coding_talents_winner.jpg",
        type: "achievement",
        description: "Winner with a prize valued at ~15 million VND, demonstrating exceptional coding skills."
    },
    {
        id: "excellent-student-2023-2024",
        title: "Excellent Student Award 2023-2024",
        issuer: "Academic Recognition",
        image: "/images/achievements/excellent_student_2023-2024.jpg",
        type: "achievement",
        description: "Recognized for outstanding academic achievements and dedication to learning excellence."
    },
    {
        id: "excellent-student-2024-2025",
        title: "Excellent Student Award 2024-2025",
        issuer: "Academic Recognition",
        image: "/images/achievements/excellent_student_2024-2025.jpg",
        type: "achievement",
        description: "Recognized for outstanding academic achievements and dedication to learning excellence."
    }
];

export const featuredCertificates = [
    certificates[0],
    certificates.find(c => c.id === "hack2skill-devops")!,
    certificates.find(c => c.id === "aws-security-fundamentals")!
];
export const featuredAchievements = [
    achievements.find(a => a.id === "google-student-ambassador")!,
    achievements.find(a => a.id === "hsu-vibe-coding")!
];

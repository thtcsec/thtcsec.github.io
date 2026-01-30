// Site configuration - migrated from data/config.json
export const siteConfig = {
    name: "Trinh Hoang Tu Portfolio",
    domain: "https://thtcsec.github.io",
    author: "Trịnh Hoàng Tú",
    authorEn: "Trinh Hoang Tu",
    email: "tht.csec2005@gmail.com",
    location: "Ho Chi Minh City, Vietnam",
    university: "HUFLIT",
    major: "Cybersecurity",
    bio: "IT Specialist focused on Cybersecurity and Software Development. Currently pursuing Information Technology at HUFLIT.",

    social: {
        linkedin: "https://www.linkedin.com/in/thtcsec",
        github: "https://github.com/thtcsec",
        facebook: "https://www.facebook.com/thtcsec",
        threads: "https://www.threads.net/@tht._csec",
        instagram: "https://www.instagram.com/tht._csec",
        leetcode: "https://leetcode.com/thtcsec",
        tiktok: "https://www.tiktok.com/@tuhocleetcode",
        discord: "https://discord.com/users/815074234241646592",
        gdg: "https://g.dev/thtcsec",
    },

    academic: {
        startDate: "2023-09-01",
        endDate: "2027-07-31",
        currentSemester: 7,
        totalSemesters: 9,
        gpa: 3.44,
        creditsCompleted: 109,
        totalCredits: 135,
        expectedGraduation: 2027,
    },

    stats: {
        projectsBuilt: 11,
        technologiesUsed: 30,
        gdgEvents: 15,
        gdgConnections: 200,
    },
} as const;

// Calculate academic progress dynamically based on dates
// Calculate academic progress dynamically based on credits
export const getAcademicProgress = (): number => {
    const completed = siteConfig.academic.creditsCompleted;
    const total = siteConfig.academic.totalCredits;

    // Fallback to time-based if credits are missing
    if (!completed || !total) {
        const start = new Date(siteConfig.academic.startDate).getTime();
        const end = new Date(siteConfig.academic.endDate).getTime();
        const now = Date.now();
        const totalTime = end - start;
        const elapsed = now - start;
        return Math.min(Math.max((elapsed / totalTime) * 100, 0), 100);
    }

    const progress = Math.min(Math.max((completed / total) * 100, 0), 100);
    return Math.round(progress * 10) / 10;
};

// Calculate days remaining until graduation
export const getDaysRemaining = (): number => {
    const end = new Date(siteConfig.academic.endDate).getTime();
    const now = Date.now();
    const remaining = end - now;
    return Math.max(Math.ceil(remaining / (1000 * 60 * 60 * 24)), 0);
};

export type SiteConfig = typeof siteConfig;

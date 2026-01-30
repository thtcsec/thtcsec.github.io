// Skills data - migrated from data/skills.json
// Using Iconify icons for professional appearance: https://icon-sets.iconify.design/
export interface Skill {
    name: string;
    icon: string; // Iconify icon identifier (e.g., "logos:react" or "devicon:python")
}

export interface SkillCategory {
    id: string;
    name: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: "languages",
        name: "Programming Languages",
        skills: [
            { name: "C#", icon: "devicon:csharp" },
            { name: "Java", icon: "logos:java" },
            { name: "Python", icon: "logos:python" },
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "HTML5", icon: "logos:html-5" },
            { name: "CSS3", icon: "logos:css-3" },
        ]
    },
    {
        id: "frameworks",
        name: "Frameworks & Libraries",
        skills: [
            { name: "React", icon: "logos:react" },
            { name: "Vite", icon: "logos:vitejs" },
            { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
            { name: "ASP.NET Core", icon: "devicon:dotnetcore" },
            { name: "Entity Framework", icon: "devicon:dotnetcore" },
            { name: "SignalR", icon: "simple-icons:signalr" },
            { name: "Android", icon: "logos:android-icon" },
        ]
    },
    {
        id: "tools",
        name: "Tools & Platforms",
        skills: [
            // Cloud & Infrastructure
            { name: "AWS", icon: "logos:aws" },
            { name: "Google Antigravity", icon: "logos:google-icon" },
            { name: "Firebase", icon: "logos:firebase" },
            { name: "Nginx", icon: "logos:nginx" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "VMware", icon: "logos:vmware" },
            { name: "Git", icon: "logos:git-icon" },
            { name: "GitHub", icon: "logos:github-icon" },

            // Databases
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
            { name: "Redis", icon: "logos:redis" },

            // IDEs & Editors
            { name: "Windsurf", icon: "mdi:weather-windy" }, // AI Editor
            { name: "Cursor", icon: "mdi:cursor-default" },   // AI Editor
            { name: "VS Code", icon: "logos:visual-studio-code" },
            { name: "Visual Studio", icon: "devicon:visualstudio" },
            { name: "IntelliJ IDEA", icon: "logos:intellij-idea" },
            { name: "PyCharm", icon: "logos:pycharm" },
            { name: "Kiro", icon: "mdi:pencil-ruler" },     // Assumed: Tool
        ]
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity",
        skills: [
            { name: "Kali Linux", icon: "devicon:linux" },
            { name: "Burp Suite", icon: "simple-icons:burpsuite" },
            { name: "Nmap", icon: "mdi:lan-connect" },
            { name: "Wireshark", icon: "devicon:networkx" },
            { name: "Suricata IDS", icon: "mdi:shield-alert" },
            { name: "Honeypot", icon: "mdi:pot" },
            { name: "Postman", icon: "logos:postman-icon" },
            { name: "VMware", icon: "simple-icons:vmware" },
            { name: "Volatility", icon: "mdi:memory" },
            { name: "dnSpy", icon: "mdi:code-braces" },
            { name: "x64dbg", icon: "mdi:bug-outline" },
            { name: "FFmpeg", icon: "logos:ffmpeg-icon" },
        ]
    },
    {
        id: "ai",
        name: "AI Tools",
        skills: [
            { name: "ChatGPT", icon: "simple-icons:openai" },
            { name: "Claude", icon: "simple-icons:anthropic" },
            { name: "Gemini", icon: "logos:google-bard-icon" },
            { name: "DeepSeek", icon: "mdi:chart-bubble" },
            { name: "Perplexity", icon: "simple-icons:perplexity" },
            { name: "GitHub Copilot", icon: "logos:github-octocat" },
        ]
    }
];

// Flat list of all skills for the carousel
export const allSkills = skillCategories.flatMap(cat => cat.skills);

// Skills data - migrated from data/skills.json
export interface Skill {
    name: string;
    icon: string;
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
            { name: "C#", icon: "/images/technologies/csharp.png" },
            { name: "Java", icon: "/images/technologies/java.png" },
            { name: "Python", icon: "/images/technologies/python.png" },
            { name: "JavaScript", icon: "/images/technologies/javascript.png" },
            { name: "HTML5", icon: "/images/technologies/html5.png" },
            { name: "CSS3", icon: "/images/technologies/css3.png" },
        ]
    },
    {
        id: "frameworks",
        name: "Frameworks & Tools",
        skills: [
            { name: "ASP.NET", icon: "/images/technologies/aspnet.png" },
            { name: "Android", icon: "/images/technologies/android.png" },
            { name: "Firebase", icon: "/images/technologies/firebase.png" },
            { name: "Docker", icon: "/images/technologies/docker.png" },
            { name: "Git", icon: "/images/technologies/git.png" },
            { name: "GitHub", icon: "/images/technologies/github.png" },
            { name: "VS Code", icon: "/images/technologies/vscode.png" },
            { name: "Visual Studio", icon: "/images/technologies/visual_studio.png" },
            { name: "IntelliJ IDEA", icon: "/images/technologies/intellij.png" },
            { name: "PyCharm", icon: "/images/technologies/pycharm.png" },
            { name: "SQL Server", icon: "/images/technologies/sqlserver.png" },
        ]
    },
    {
        id: "cybersecurity",
        name: "Cybersecurity",
        skills: [
            { name: "Kali Linux", icon: "/images/technologies/kali.png" },
            { name: "Nmap", icon: "/images/technologies/nmap.png" },
            { name: "Wireshark", icon: "/images/technologies/wireshark.png" },
            { name: "VMware", icon: "/images/technologies/vmware.png" },
            { name: "Volatility", icon: "/images/technologies/volatility.png" },
            { name: "dnSpy", icon: "/images/technologies/dnspy.png" },
            { name: "x64dbg", icon: "/images/technologies/x64dbg.png" },
        ]
    },
    {
        id: "ai",
        name: "AI Tools",
        skills: [
            { name: "ChatGPT", icon: "/images/technologies/chatgpt.png" },
            { name: "Claude", icon: "/images/technologies/claude.png" },
            { name: "Gemini", icon: "/images/technologies/gemini.png" },
            { name: "DeepSeek", icon: "/images/technologies/deepseek.png" },
            { name: "Perplexity", icon: "/images/technologies/perplexity.png" },
            { name: "GitHub Copilot", icon: "/images/technologies/github_copilot.png" },
        ]
    }
];

// Flat list of all skills for the carousel
export const allSkills = skillCategories.flatMap(cat => cat.skills);

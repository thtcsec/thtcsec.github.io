// Community/Forums data
export interface Community {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
}

export const communities: Community[] = [
    {
        id: "gdg-hcmc",
        title: "Google Developer Group HCMC",
        description: "Active member of GDG Ho Chi Minh City, participating in tech talks, workshops, and networking events focused on Google technologies and modern development practices.",
        image: "/images/forums/gdg-hcmc.png",
        tags: ["GDG", "Google Cloud", "Android", "Web Development", "Firebase"],
        link: "https://gdg.community.dev/u/tu44/"
    },
    {
        id: "aws-fcaj",
        title: "AWS First Cloud AI Journey",
        description: "Participant in AWS First Cloud AI Journey program, gaining hands-on experience with AWS cloud services, AI/ML solutions, and cloud architecture best practices.",
        image: "/images/forums/aws-fcaj.png",
        tags: ["AWS", "Cloud Computing", "AI/ML"],
        link: ""
    }
];

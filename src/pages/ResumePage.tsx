import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Github, Linkedin, MapPin, Printer, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const ResumePage = () => {
    useEffect(() => {
        document.body.classList.add("print-mode");
        return () => {
            document.body.classList.remove("print-mode");
        };
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 py-10 print:p-0 print:bg-white font-sans text-neutral-900 dark:text-neutral-100">
            {/* Navigation - Hidden in Print */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-3 print:hidden shadow-sm">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <div className="flex items-center gap-3">
                        <Button variant="default" size="sm" onClick={handlePrint} className="gap-2 shadow-md">
                            <Printer size={16} />
                            Save as PDF
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Resume Container */}
            <div className="container max-w-[240mm] mx-auto mt-16 bg-white dark:bg-neutral-900 shadow-2xl rounded-lg print:shadow-none print:m-0 print:max-w-full print:rounded-none print:bg-white print:text-black overflow-hidden">
                <div className="p-8 md:p-12 lg:p-16 print:p-[15mm] min-h-[297mm]">

                    {/* Header */}
                    <header className="text-center mb-6 border-b border-neutral-300 dark:border-neutral-700 pb-5 print:border-black/20">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wider mb-2 text-neutral-900 dark:text-white print:text-black">Trịnh Hoàng Tú</h1>

                        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600 font-medium">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={13} className="print:text-black" />
                                <span>Ho Chi Minh City</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Phone size={13} className="print:text-black" />
                                <span>0983967098</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Mail size={13} className="print:text-black" />
                                <a href="mailto:tht.csec2005@gmail.com" className="hover:text-primary transition-colors print:text-black print:no-underline">tht.csec2005@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-2 text-sm font-medium">
                            <a href="https://github.com/thtcsec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors print:text-black">
                                <Github size={13} />
                                <span>github.com/thtcsec</span>
                            </a>
                            <a href="https://linkedin.com/in/thtcsec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors print:text-black">
                                <Linkedin size={13} />
                                <span>linkedin.com/in/thtcsec</span>
                            </a>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="space-y-6 print:space-y-4 text-sm font-serif">

                        {/* Summary */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Summary</h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed print:text-neutral-800 font-sans text-[14px] md:text-[15px] text-justify">
                                Third-year Cybersecurity student interested in exploring Full-stack development, with a focus on building secure backend systems using <strong className="text-neutral-900 dark:text-white print:text-black">ASP.NET Core</strong>. Passionate about understanding how real-world systems are built and operated with practical trade-offs between performance and resource constraints.
                            </p>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Education</h2>
                            <div className="font-sans">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Bachelor of Cybersecurity</h3>
                                    <span className="text-neutral-600 dark:text-neutral-400 text-xs font-semibold print:text-neutral-600">Nov 2023 – Jul 2027 (Expected)</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="italic text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Ho Chi Minh City University of Foreign Languages and Information Technology</span>
                                    <span className="italic text-neutral-600 dark:text-neutral-400 text-xs print:text-neutral-600">Ho Chi Minh City</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                    <li>GPA: 3.46/4.0</li>
                                    <li>Relevant Courses: Network Security, C#, Java, Web & Mobile Development, ASP.NET</li>
                                </ul>
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Experience</h2>
                            <div className="font-sans">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Contract-Based Full-Stack Engineer</h3>
                                    <span className="text-neutral-600 dark:text-neutral-400 text-xs font-semibold print:text-neutral-600">Dec 2025 – Apr 2026</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="italic text-neutral-700 dark:text-neutral-300 print:text-neutral-800">MVV Telecom Joint Stock Company (Subsidiary of MobiFone)</span>
                                    <span className="italic text-neutral-600 dark:text-neutral-400 text-xs print:text-neutral-600">Ho Chi Minh City</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 space-y-1.5 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                    <li>Delivered real-time event monitoring features for multi-camera systems, improving system observability and responsiveness.</li>
                                    <li>Integrated AI inference services into the system to support automated detection and event generation workflows.</li>
                                    <li>Configured system processing pipelines with controlled frame rates to balance detection accuracy and infrastructure resource usage.</li>
                                    <li>Monitored system resource usage (CPU, GPU, memory) and adjusted processing configurations to optimize stability.</li>
                                    <li>Deployed containerized services in a production-like environment using <strong className="text-neutral-900 dark:text-white print:text-black">Docker</strong> and <strong className="text-neutral-900 dark:text-white print:text-black">Nginx</strong> reverse proxy architecture.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Projects</h2>
                            <div className="space-y-4 font-sans">
                                {/* CTSmartCam */}
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black mb-0.5">CTSmartCam – Smart Camera Surveillance System <span className="font-normal text-neutral-500">(Fullstack Developer)</span></h3>
                                    <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> React, TypeScript, ASP.NET Core (C#), Python, Docker, Nginx, Suricata, Wazuh</li>
                                        <li>Built an AI-powered Camera Management System with <strong>event-driven microservices</strong> and Redis Streams.</li>
                                        <li>Designed a pipeline that performs <strong>detection once</strong> and reuses metadata across downstream services.</li>
                                        <li>Controlled processing via <strong>configurable frame rates and batching</strong> to balance latency and resource usage.</li>
                                        <li>Orchestrated <strong>~10+ containerized services</strong> including AI inference (FRS, LPR), media, and event streaming.</li>
                                        <li>Supports concurrent monitoring of <strong>1–6 camera streams</strong> with real-time event visualization.</li>
                                    </ul>
                                </div>

                                {/* LMS */}
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black mb-0.5">toanvotruongtoan.com – AI-Powered LMS <span className="font-normal text-neutral-500">(Fullstack & DevOps)</span></h3>
                                    <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> React, Vite, TypeScript, Supabase, PostgreSQL, Vercel</li>
                                        <li>Architected and deployed a production-ready LMS supporting <strong>classroom-scale concurrent usage (~20–30 users)</strong>.</li>
                                        <li>Built frontend UI using React and implemented backend logic using Supabase Edge Functions and Gemini AI.</li>
                                        <li>Implemented secure access control using Supabase Row-Level Security (RLS) and server-side rate limiting.</li>
                                        <li>Optimized performance with serverless deployment achieving sub-100ms response times.</li>
                                    </ul>
                                </div>

                                {/* Yodobashi */}
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black mb-0.5">Yodobashi Sniper V2 <span className="font-normal text-neutral-500">(Browser Extension – Manifest V3)</span></h3>
                                    <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> JavaScript (ES6+), Node.js, Chrome Extension APIs</li>
                                        <li>Developed automation logic for online purchasing workflows using modern JavaScript and browser APIs.</li>
                                        <li>Implemented asynchronous control flow, DOM automation, and cross-origin messaging.</li>
                                        <li>Used Node.js and Playwright for dependency management and automated testing.</li>
                                    </ul>
                                </div>

                                {/* Face Recognition */}
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black mb-0.5">Face / Object Recognition <span className="font-normal text-neutral-500">(Java Client and Server)</span></h3>
                                    <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> Java (Socket Programming), Python, REST API, Gemini AI</li>
                                        <li>Built a multi-threaded Java server communicating with Python AI inference services via REST APIs.</li>
                                        <li>Implemented encrypted socket communication between Java clients and server components.</li>
                                        <li>Integrated Gemini AI to perform face and object recognition tasks.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Technical Skills */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Technical Skills</h2>
                            <div className="grid grid-cols-[110px_1fr] gap-y-2 gap-x-4 text-[14px] md:text-[15px] font-sans">
                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Backend</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">ASP.NET Core, Node.js, REST APIs, SignalR, Java</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Frontend</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">React, TypeScript, Vite, Tailwind CSS</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Cloud / DevOps</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Docker, Nginx, AWS, GCP, Terraform</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Databases</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">MSSQL Server, PostgreSQL, Firebase, Supabase</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Security</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Suricata IDS, Wazuh, SOC/SOAR workflows, JWT</div>
                            </div>
                        </section>

                        {/* Awards */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Awards</h2>
                            <ul className="list-disc list-outside ml-5 space-y-1.5 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] font-sans leading-relaxed">
                                <li>Top 10 Finalist – VinUniversity Datathon "The Gridbreaker" 2026 <strong className="text-neutral-900 dark:text-white print:text-black">(Team: GenCore)</strong></li>
                                <li>2nd Runner Up – GenAI Express Demo Day <strong className="text-neutral-900 dark:text-white print:text-black">Google Developer Group On Campus SGU 2026</strong></li>
                                <li>Winner – <strong className="text-neutral-900 dark:text-white print:text-black">HSU Vibe Coding Talents 2025</strong></li>
                                <li>Awarded "Outstanding Student of the Year 2023" by Bu Dang District, Binh Phuoc Province</li>
                            </ul>
                        </section>

                        {/* Leadership */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Leadership & Activities</h2>
                            <ul className="list-disc list-outside ml-5 space-y-1.5 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] font-sans leading-relaxed">
                                <li>Agora Developer Ambassador, 2026</li>
                                <li>Google Student Ambassador, 2026 – HUFLIT</li>
                            </ul>
                        </section>

                        {/* Certificates */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Certificates</h2>
                            <ul className="list-disc list-outside ml-5 space-y-1.5 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] font-sans leading-relaxed">
                                <li className="flex flex-wrap justify-between gap-x-4">
                                    <span>Google Cloud Computing Foundations – <span className="italic">Google Cloud</span> <a href="https://www.credly.com/badges/ad399ad3-8827-4b99-8221-8fd248047d4a/linked_in?t=tarma7" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600 shrink-0">Feb 2026</span>
                                </li>
                                <li className="flex flex-wrap justify-between gap-x-4">
                                    <span>DevOps Track – <span className="italic">Google Cloud x Hack2Skill</span> <a href="https://certificate.hack2skill.com/user/academy2devops/2025H2S10GENAI-DE300881" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600 shrink-0">Jan 2026</span>
                                </li>
                                <li className="flex flex-wrap justify-between gap-x-4">
                                    <span>Networking Track – <span className="italic">Google Cloud x Hack2Skill</span> <a href="https://certificate.hack2skill.com/user/academy2networking/2025H2S10GENAI-NE300623" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600 shrink-0">Jan 2026</span>
                                </li>
                                <li className="flex flex-wrap justify-between gap-x-4">
                                    <span>Foundations of Cybersecurity – <span className="italic">Google x Coursera</span> <a href="https://www.coursera.org/verify/XP102V7M0CQC" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600 shrink-0">May 2025</span>
                                </li>
                                <li className="flex flex-wrap justify-between gap-x-4">
                                    <span>Google AI – <span className="italic">Google</span> <a href="https://coursera.org/share/c7724fa55611f8ebb8c0340ddb9664aa" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600 shrink-0">Feb 2026</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <div className="container max-w-[240mm] mx-auto mt-4 text-center pb-8 print:hidden">
                <p className="text-neutral-400 text-xs">
                    This version is optimized for printing. Click "Save as PDF" to download a clean copy.
                </p>
            </div>
        </div>
    );
};

export default ResumePage;

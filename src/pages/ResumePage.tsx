import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Github, Linkedin, MapPin, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const ResumePage = () => {
    useEffect(() => {
        // Add print class to body when mounting
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
                {/* A4 Aspect Ratio Container / Print Sheet */}
                <div className="p-8 md:p-12 lg:p-16 print:p-0 min-h-[297mm]">

                    {/* Header */}
                    <header className="text-center mb-6 border-b border-neutral-300 dark:border-neutral-700 pb-6 print:border-black/20">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-wider mb-2 text-neutral-900 dark:text-white print:text-black">Trinh Hoang Tu</h1>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-600 font-medium">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={14} className="print:text-black" />
                                <span>Ho Chi Minh City</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Mail size={14} className="print:text-black" />
                                <a href="mailto:tht.csec2005@gmail.com" className="hover:text-primary transition-colors print:text-black print:no-underline">tht.csec2005@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-2 text-sm font-medium">
                            <a href="https://github.com/thtcsec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors print:text-black">
                                <Github size={14} />
                                <span>github.com/thtcsec</span>
                            </a>
                            <a href="https://linkedin.com/in/thtcsec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors print:text-black">
                                <Linkedin size={14} />
                                <span>linkedin.com/in/thtcsec</span>
                            </a>
                        </div>
                    </header>

                    {/* Content Grid */}
                    <div className="space-y-8 print:space-y-4 text-sm font-serif">

                        {/* Summary */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Summary</h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed print:text-neutral-800 font-sans text-[15px] md:text-base">
                                Third-year Cybersecurity student aspiring to work in DevSecOps and secure backend engineering. Hands-on experience in designing, deploying, and securing fullstack and cloud-based systems using ASP.NET Core, Docker, and modern cloud platforms. Strong foundation in application security, threat detection, and security monitoring within real-world projects.
                            </p>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Education</h2>
                            <div className="font-sans">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Bachelor of Cybersecurity</h3>
                                    <span className="text-neutral-600 dark:text-neutral-400 text-xs font-semibold print:text-neutral-600">Nov 2023 -- Jul 2027 (Expected)</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="italic text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Ho Chi Minh City University of Foreign Languages and Information Technology</span>
                                    <span className="italic text-neutral-600 dark:text-neutral-400 text-xs print:text-neutral-600">Ho Chi Minh City</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                    <li>GPA: 3.44/4.0</li>
                                    <li>Relevant Courses: Network Security, C#, Java, Web & Mobile Development, ASP.NET.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Experience</h2>
                            <div className="font-sans">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Project-Based Software Engineer (Security Focused)</h3>
                                    <span className="text-neutral-600 dark:text-neutral-400 text-xs font-semibold print:text-neutral-600">2026</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="italic text-neutral-700 dark:text-neutral-300 print:text-neutral-800">MVV Telecom Joint Stock Company (Subsidiary of MobiFone)</span>
                                    <span className="italic text-neutral-600 dark:text-neutral-400 text-xs print:text-neutral-600">Ho Chi Minh City</span>
                                </div>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                    <li>Designed and developed an AI-powered Camera Management System (CMS) for enterprise surveillance use cases.</li>
                                    <li>Built secure backend services using ASP.NET Core (C#) with JWT authentication and internal service authorization.</li>
                                    <li>Implemented real-time monitoring and security event logging via SignalR.</li>
                                    <li>Integrated Python-based AI services for face recognition, license plate recognition, and object detection.</li>
                                    <li>Applied defense-in-depth security including honeypot endpoints, rate limiting, IP attack detection, and IDS integration (Suricata).</li>
                                    <li>Containerized the system using Docker and deployed with Nginx as a reverse proxy.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Projects</h2>
                            <div className="space-y-3 font-sans">
                                {/* CMS */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Smart Camera Surveillance System (AI-Powered CMS & Security Platform)</h3>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> React, Vite, TypeScript, Nginx, ASP.NET Core (C#), Python, Docker, Suricata</li>
                                        <li>Designed and implemented an AI-powered Camera Management System using a microservices architecture.</li>
                                        <li>Developed backend services with ASP.NET Core Web API, JWT authentication, and internal secret-based service handshake.</li>
                                        <li>Implemented real-time security logging and monitoring via SignalR.</li>
                                        <li>Integrated Python-based AI services for face recognition, license plate recognition, and object detection.</li>
                                        <li>Applied application-layer security controls including honeypot endpoints, IP attack detection, and IDS integration (Suricata).</li>
                                    </ul>
                                </div>

                                {/* LMS */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">AI-Powered LMS <span className="font-normal text-neutral-500">– toanvotruongtoan.com (Fullstack & DevSecOps)</span></h3>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> React, Vite, TypeScript, Supabase, PostgreSQL, Vercel</li>
                                        <li>Architected and deployed a production-ready Learning Management System serving hundreds of students.</li>
                                        <li>Integrated Gemini AI for automated exam generation and intelligent tutoring.</li>
                                        <li>Applied defense-in-depth security including server-side rate limiting, input validation, and strict Supabase Row-Level Security (RLS).</li>
                                        <li>Optimized performance with serverless deployment achieving sub-100ms response times.</li>
                                    </ul>
                                </div>

                                {/* Extension */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Yodobashi Sniper V2 <span className="font-normal text-neutral-500">(Browser Extension – Manifest V3)</span></h3>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> JavaScript (ES6+), Node.js, Chrome Extension APIs</li>
                                        <li>Automated product purchase workflow using modern JavaScript and Chrome APIs.</li>
                                        <li>Implemented asynchronous control flow, cross-origin messaging, and robust DOM manipulation.</li>
                                        <li>Used Node.js and Playwright for dependency management and end-to-end testing.</li>
                                    </ul>
                                </div>

                                {/* Face/Object */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Face / Object Recognition (Java Client and Server)</h3>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> Java (Socket Programming), Python, REST API, Gemini AI</li>
                                        <li>Engineered a multi-threaded Java server using TCP sockets with encrypted communication.</li>
                                        <li>Developed a Python microservice exposing REST APIs for AI inference.</li>
                                        <li>Integrated Gemini AI for face and object recognition, returning inference results to Java clients.</li>
                                    </ul>
                                </div>

                                {/* Mini SOC */}
                                <div>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-neutral-900 dark:text-white print:text-black">Mini SOC Environment <span className="font-normal text-neutral-500">(ELK Stack)</span></h3>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] leading-relaxed">
                                        <li><strong className="text-neutral-900 dark:text-white print:text-black">Tech Stack:</strong> Linux, Elasticsearch, Logstash, Kibana (ELK Stack)</li>
                                        <li>Built a miniature Security Operations Center to collect, process, and visualize security events.</li>
                                        <li>Configured dashboards for detecting brute-force attacks, anomalies, and network threats.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Technical Skills */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Technical Skills</h2>
                            <div className="grid grid-cols-[120px_1fr] gap-y-3 gap-x-6 text-[14px] md:text-[15px] font-sans">
                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Security</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Kali Linux, Wireshark, Nmap, Burp Suite, Metasploit</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Analysis</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Postman, Hex Editor, Process Monitor, Elastic Stack (Kibana, Winlogbeat)</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Languages</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">C#, Java, Python</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Framework</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">ASP.NET MVC</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Databases</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">MSSQL Server, PostgreSQL, Firebase, Supabase</div>

                                <div className="font-bold text-neutral-900 dark:text-white print:text-black">Tools</div>
                                <div className="text-neutral-700 dark:text-neutral-300 print:text-neutral-800">Git, Docker</div>
                            </div>
                        </section>

                        {/* Awards */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Awards</h2>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] font-sans leading-relaxed">
                                <li>Winner – <strong className="text-neutral-900 dark:text-white print:text-black">HSU Vibe Coding Talents 2025</strong></li>
                                <li>Awarded "Outstanding Student of the Year 2023" by Bu Dang District, Binh Phuoc Province.</li>
                            </ul>
                        </section>

                        {/* Certificates */}
                        <section>
                            <h2 className="text-base font-bold uppercase border-b border-neutral-900 dark:border-neutral-100 mb-2 pb-0.5 print:border-black text-neutral-900 dark:text-white print:text-black">Certificates</h2>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 dark:text-neutral-300 print:text-neutral-800 text-[14px] md:text-[15px] font-sans leading-relaxed">
                                <li className="flex justify-between">
                                    <span>Certified Cybersecurity Educator Professional (CCEP) – <span className="italic">Red Team Leaders</span></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">Dec 2025</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Networking Track – <span className="italic">Google Cloud x Hack2Skill</span> <a href="https://certificate.hack2skill.com/user/academy2networking/2025H2S10GENAI-NE300623" target="_blank" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">Jan 2026</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>DevOps Track – <span className="italic">Google Cloud x Hack2Skill</span> <a href="https://certificate.hack2skill.com/user/academy2devops/2025H2S10GENAI-DE300881" target="_blank" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">Jan 2026</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Foundations of Cybersecurity – <span className="italic">Google x Coursera</span> <a href="https://www.coursera.org/verify/XP102V7M0CQC" target="_blank" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">May 2025</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Google AI Essentials – <span className="italic">Google x Coursera</span> <a href="https://www.coursera.org/verify/3POERGGPKMMG" target="_blank" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">Jun 2025</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Google Prompting Essentials – <span className="italic">Google x Coursera</span> <a href="https://www.coursera.org/account/verify/YLTMV5PBILR1" target="_blank" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">Jan 2026</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Network Architecture – <span className="italic">Google x Coursera</span> <a href="https://www.coursera.org/verify/8V8QIIML1RAX" target="_blank" className="ml-1 text-primary hover:underline font-medium text-xs print:hidden">(Verify)</a></span>
                                    <span className="text-neutral-500 dark:text-neutral-400 italic text-xs print:text-neutral-600">Dec 2025</span>
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

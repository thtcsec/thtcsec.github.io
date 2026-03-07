import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ShieldCheck,
    Cloud,
    Server,
    Network,
    Cpu,
    Lock,
    Eye,
    Zap,
    AlertTriangle,
    CheckCircle,
    Activity,
    Database,
    Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import { Mermaid } from "@/components/ui/mermaid";

const gcpSequenceChart = `
sequenceDiagram
    participant Attacker
    participant GCE as GCP Compute Engine
    participant SCC as Security Command Center
    participant PS as Pub/Sub Topic
    participant CW as Cloud Workflows
    participant CR as Cloud Run Workers
    participant Sec as Security Admin

    Attacker->>GCE: Exploits RCE vulnerability
    Attacker->>GCE: Downloads Crypto Miner
    GCE->>Internet: Makes unauthorized DNS queries (Mining Pool)
    
    rect rgba(255, 100, 100, 0.1)
        Note over SCC,GCE: Detection Phase
        SCC->>GCE: Analyzes Network Logs
        SCC-->>PS: Generates High Severity Finding
    end
    
    rect rgba(100, 150, 255, 0.1)
        Note over PS,CW: Orchestration Phase
        PS-->>CW: Triggers Incident Response
        CW->>CW: Validates Finding
    end
    
    rect rgba(255, 200, 100, 0.1)
        Note over CW,CR: Automated Response Phase
        CW->>GCE: Isolates VM Network
        CW->>GCE: Blocks SSH Keys
        CW->>IAM: Detaches Service Account
        CW->>GCE: Snapshots Disk
        CW->>GCE: Stops Instance
    end
    
    rect rgba(100, 255, 100, 0.1)
        Note over CW,Sec: Forensics Phase
        CW->>CR: Dispatches Forensics Worker
        CR->>CR: Mounts Snapshot
        CR-->>CW: Forensic Report
        CW->>Sec: Alert w/ Report
    end
`;

const awsSequenceChart = `
sequenceDiagram
    participant Attacker
    participant EC2 as AWS EC2
    participant GD as GuardDuty
    participant SQS as AWS SQS
    participant SFN as Step Functions
    participant ECS as Fargate Workers
    participant Sec as Security Team

    Attacker->>EC2: Exploits RCE vulnerability
    Attacker->>EC2: Downloads Crypto Miner
    EC2->>Internet: Makes unauthorized DNS queries (Mining Pool)
    
    rect rgba(255, 100, 100, 0.1)
        Note over GD,EC2: Detection Phase
        GD->>EC2: Analyzes VPC Flow Logs
        GD-->>SQS: Generates High Severity Finding
    end
    
    rect rgba(100, 150, 255, 0.1)
        Note over SQS,SFN: Orchestration Phase
        SQS-->>SFN: Triggers Incident Response
        SFN->>SFN: Validates Finding
    end
    
    rect rgba(255, 200, 100, 0.1)
        Note over SFN,ECS: Automated Response Phase
        SFN->>EC2: Isolates Security Group
        SFN->>EC2: Enforces IMDSv2
        SFN->>IAM: Detaches IAM Roles
        SFN->>EC2: Snapshots EBS Volume
        SFN->>EC2: Stops Instances
    end
    
    rect rgba(100, 255, 100, 0.1)
        Note over SFN,Sec: Forensics Phase
        SFN->>ECS: Dispatches Forensics Worker
        ECS->>ECS: Mounts Snapshot
        ECS-->>SFN: Forensic Report
        SFN->>Sec: Alert w/ Report
    end
`;

const CloudComputingPage = () => {
    const [activeTab, setActiveTab] = useState("gcp");

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-16">
            <ProjectHeader />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                <div className="container mx-auto px-4 pt-20 pb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-6 gap-4 flex-wrap">
                            <img src="https://img.shields.io/badge/Serverless-%23FD5750.svg?style=for-the-badge&logo=serverless&logoColor=white" alt="Serverless" />
                            <img src="https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
                            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Cloud Security
                            </span>{" "}
                            Orchestration
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Automated Serverless Incident Response architectures natively built on <span className="font-semibold text-blue-400">GCP</span> and <span className="font-semibold text-orange-400">AWS</span>.
                        </p>

                        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto font-medium bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            Detects malicious activity natively and automatically isolates compromised resources while preserving state for forensic investigation.
                            Features advanced playbooks for <span className="text-red-400">Crypto Mining</span>, <span className="text-yellow-400">Data Exfiltration</span>, and <span className="text-green-400">IAM Compromise</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
            </section>

            {/* Main Content - Tabs for AWS and GCP */}
            <section className="py-12 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <Tabs defaultValue="gcp" onValueChange={setActiveTab} className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-800/80 p-1 rounded-xl">
                                <TabsTrigger value="gcp" className="rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all text-sm sm:text-base py-3 font-medium">
                                    <Cloud className="w-5 h-5 mr-2" />
                                    Google Cloud (GCP)
                                </TabsTrigger>
                                <TabsTrigger value="aws" className="rounded-lg data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all text-sm sm:text-base py-3 font-medium">
                                    <Server className="w-5 h-5 mr-2" />
                                    Amazon Web Services (AWS)
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* GCP SOAR CONTENT */}
                        <TabsContent value="gcp" className="space-y-12 animate-in fade-in zoom-in-95 duration-500">

                            {/* Architecture Diagram */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-gray-400 font-mono text-sm">gcp_soar_architecture.png</span>
                                </div>
                                <div className="p-6 md:p-10 flex justify-center bg-white/5">
                                    <img src="https://raw.githubusercontent.com/thtcsec/GCP-Serverless-SOAR/main/images/gcp_soar.png" alt="GCP SOAR Architecture" className="max-w-full h-auto rounded-lg shadow-lg border border-gray-600/50" />
                                </div>
                            </motion.div>

                            {/* Workflow Detailed Sequence Diagram */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl mb-8"
                            >
                                <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center justify-between">
                                    <h4 className="text-gray-300 font-semibold flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-blue-400" />
                                        Logical Data Flow (Mermaid Sequence Diagram)
                                    </h4>
                                </div>
                                <div className="p-6 md:p-8 flex justify-center bg-gray-900/60 w-full overflow-hidden">
                                    <Mermaid chart={gcpSequenceChart} />
                                </div>
                            </motion.div>

                            {/* Workflow & Threat Scenario */}
                            <div className="grid lg:grid-cols-2 gap-8">
                                <Card className="bg-slate-800/50 border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center gap-2">
                                            <Activity className="w-5 h-5 text-blue-400" />
                                            Workflow Process
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 pt-2">
                                        {[
                                            { step: "Detection", desc: "SCC detects threats (severity >= 7.0)" },
                                            { step: "Event Routing", desc: "Eventarc routes to Pub/Sub queue" },
                                            { step: "Orchestration", desc: "Cloud Workflows manages response logic" },
                                            { step: "Container Workers", desc: "Cloud Run for long-running forensics" },
                                            { step: "Human Approval", desc: "Manual checkpoints for critical actions" },
                                            { step: "Integrations", desc: "Slack, Jira, SIEM automated notifications" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{i + 1}</div>
                                                <div>
                                                    <h4 className="text-gray-200 text-sm font-semibold">{item.step}</h4>
                                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>

                                <Card className="bg-slate-800/50 border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-red-400" />
                                            Automated Response Flow
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg mb-6">
                                            <p className="text-sm text-gray-300">
                                                <span className="text-red-400 font-bold">Scenario:</span> Attacker exploits RCE, installs Crypto Miner, and queries mining pools.
                                                SCC flags High-Severity anomaly.
                                            </p>
                                        </div>
                                        <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                                            {[
                                                { action: "Isolate Network Tags", icon: Network, color: "text-red-400" },
                                                { action: "Revoke Service Account", icon: Shield, color: "text-purple-400" },
                                                { action: "Block SSH Keys", icon: Lock, color: "text-orange-400" },
                                                { action: "Snapshot Disk for Forensics", icon: Database, color: "text-blue-400" },
                                                { action: "Halt Local Execution", icon: Zap, color: "text-yellow-400" },
                                            ].map((item, i) => (
                                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-slate-700 bg-slate-800 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                        <item.icon className={`w-3 h-3 ${item.color}`} />
                                                    </div>
                                                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg bg-slate-800/80 border border-slate-700 shadow-sm">
                                                        <p className="text-sm text-slate-300">{item.action}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Playbooks Grid */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-blue-400 w-8 h-8" />
                                    GCP Security Playbooks
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Playbook 1 */}
                                    <Card className="bg-slate-800/80 border-gray-700 hover:border-blue-500/50 transition-colors">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                                <Cpu className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <CardTitle className="text-white text-xl">GCE Compromise</CardTitle>
                                            <CardDescription className="text-gray-400">Detects Crypto Mining & C&C</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex gap-2 text-sm text-gray-300"><Network className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Isolate Network (Tag)</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Shield className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Revoke Service Account</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Lock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Block Project SSH Keys</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Database className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Snapshot Disk for Forensics</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> Stop VM Instance</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* Playbook 2 */}
                                    <Card className="bg-slate-800/80 border-gray-700 hover:border-blue-500/50 transition-colors">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                                                <Database className="w-6 h-6 text-green-400" />
                                            </div>
                                            <CardTitle className="text-white text-xl">Data Exfiltration</CardTitle>
                                            <CardDescription className="text-gray-400">Cloud Storage Protection</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex gap-2 text-sm text-gray-300"><Activity className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Monitor Audit Logs ({'>'}10GB)</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Lock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Block IAM Access</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><ShieldCheck className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Enable Versioning</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Database className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Set Retention Policy</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Eye className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> Snapshot Bucket Metadata</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* Playbook 3 */}
                                    <Card className="bg-slate-800/80 border-gray-700 hover:border-blue-500/50 transition-colors">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                                <Lock className="w-6 h-6 text-purple-400" />
                                            </div>
                                            <CardTitle className="text-white text-xl">SA Compromise</CardTitle>
                                            <CardDescription className="text-gray-400">Service Account Hardening</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex gap-2 text-sm text-gray-300"><Activity className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Monitor IAM Audit Events</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Disable All SA Keys</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Lock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Remove from IAM Roles</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Database className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Forensic Audit Logging</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> Send Pub/Sub Security Alert</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="flex justify-center mt-8">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0" asChild>
                                    <a href="https://github.com/thtcsec/GCP-Serverless-SOAR" target="_blank" rel="noopener noreferrer">View GCP Project on GitHub</a>
                                </Button>
                            </div>
                        </TabsContent>

                        {/* AWS SOAR CONTENT */}
                        <TabsContent value="aws" className="space-y-12 animate-in fade-in zoom-in-95 duration-500">

                            {/* Architecture Diagram */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-gray-400 font-mono text-sm">aws_soar_architecture.png</span>
                                </div>
                                <div className="p-6 md:p-10 flex justify-center bg-white/5">
                                    <img src="https://raw.githubusercontent.com/thtcsec/AWS-Serverless-SOAR/main/images/aws_soar.png" alt="AWS SOAR Architecture" className="max-w-full h-auto rounded-lg shadow-lg border border-gray-600/50" />
                                </div>
                            </motion.div>

                            {/* Workflow Detailed Sequence Diagram */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl mb-8"
                            >
                                <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center justify-between">
                                    <h4 className="text-gray-300 font-semibold flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-orange-400" />
                                        Logical Data Flow (Mermaid Sequence Diagram)
                                    </h4>
                                </div>
                                <div className="p-6 md:p-8 flex justify-center bg-gray-900/60 w-full overflow-hidden">
                                    <Mermaid chart={awsSequenceChart} />
                                </div>
                            </motion.div>

                            {/* Workflow & Threat Scenario */}
                            <div className="grid lg:grid-cols-2 gap-8">
                                <Card className="bg-slate-800/50 border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center gap-2">
                                            <Activity className="w-5 h-5 text-orange-400" />
                                            Workflow Process
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 pt-2">
                                        {[
                                            { step: "Detection", desc: "GuardDuty detects threats (severity >= 7.0)" },
                                            { step: "Event Routing", desc: "EventBridge routes to SQS queue" },
                                            { step: "Orchestration", desc: "Step Functions manages response logic" },
                                            { step: "Container Workers", desc: "ECS Fargate for long-running forensics" },
                                            { step: "Human Approval", desc: "Manual checkpoints for critical actions" },
                                            { step: "Integrations", desc: "Slack, Jira, SIEM automated notifications" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{i + 1}</div>
                                                <div>
                                                    <h4 className="text-gray-200 text-sm font-semibold">{item.step}</h4>
                                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>

                                <Card className="bg-slate-800/50 border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-red-400" />
                                            Automated Response Flow
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg mb-6">
                                            <p className="text-sm text-gray-300">
                                                <span className="text-red-400 font-bold">Scenario:</span> Attacker exploits RCE, installs Crypto Miner, and queries mining pools.
                                                GuardDuty generates High-Severity finding.
                                            </p>
                                        </div>
                                        <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                                            {[
                                                { action: "Isolate Security Group", icon: Network, color: "text-red-400" },
                                                { action: "Enforce IMDSv2", icon: Shield, color: "text-purple-400" },
                                                { action: "Detach IAM Roles", icon: Lock, color: "text-orange-400" },
                                                { action: "EBS Snapshot for Forensics", icon: Database, color: "text-blue-400" },
                                                { action: "Halt Local Execution", icon: Zap, color: "text-yellow-400" },
                                            ].map((item, i) => (
                                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-slate-700 bg-slate-800 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                        <item.icon className={`w-3 h-3 ${item.color}`} />
                                                    </div>
                                                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg bg-slate-800/80 border border-slate-700 shadow-sm">
                                                        <p className="text-sm text-slate-300">{item.action}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Playbooks Grid */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-orange-400 w-8 h-8" />
                                    AWS Security Playbooks
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Playbook 1 */}
                                    <Card className="bg-slate-800/80 border-gray-700 hover:border-orange-500/50 transition-colors">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                                <Server className="w-6 h-6 text-orange-400" />
                                            </div>
                                            <CardTitle className="text-white text-xl">EC2 Compromise</CardTitle>
                                            <CardDescription className="text-gray-400">GuardDuty Detection Response</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex gap-2 text-sm text-gray-300"><Network className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Isolate Security Group</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Shield className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Enforce IMDSv2 (Blocks SSRF)</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Lock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Detach IAM Role</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Revoke Cached Sessions</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Database className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> EBS Snapshot for Forensics</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* Playbook 2 */}
                                    <Card className="bg-slate-800/80 border-gray-700 hover:border-orange-500/50 transition-colors">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                                <Database className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <CardTitle className="text-white text-xl">S3 Exfiltration</CardTitle>
                                            <CardDescription className="text-gray-400">CloudTrail Anomaly Response</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex gap-2 text-sm text-gray-300"><Activity className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Detect Large Volume DL</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Lock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Block Bucket Policy Access</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><ShieldCheck className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Enable MFA Delete</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Database className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> Engage S3 Object Lock</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Eye className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> Forensic Metadata Snapshot</li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* Playbook 3 */}
                                    <Card className="bg-slate-800/80 border-gray-700 hover:border-orange-500/50 transition-colors">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                                <Lock className="w-6 h-6 text-purple-400" />
                                            </div>
                                            <CardTitle className="text-white text-xl">IAM Compromise</CardTitle>
                                            <CardDescription className="text-gray-400">Identity Protection</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex gap-2 text-sm text-gray-300"><Activity className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> Analyze Privilege Escalation</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> Disable Compromised Keys</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Lock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Remove from IAM Groups</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Shield className="w-4 h-4 text-green-400 shrink-0 mt-0.5" /> Enforce MFA for User</li>
                                                <li className="flex gap-2 text-sm text-gray-300"><Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> SNS Security Alert Dispatch</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="flex justify-center mt-8">
                                <Button className="bg-orange-600 hover:bg-orange-700 text-white border-0" asChild>
                                    <a href="https://github.com/thtcsec/AWS-Serverless-SOAR" target="_blank" rel="noopener noreferrer">View AWS Project on GitHub</a>
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

export default CloudComputingPage;

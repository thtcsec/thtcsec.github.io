import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  FileText,
  Check,
  Award,
  Building2,
  Tag,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  ArrowLeft,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import { publicationsData, Publication } from "@/data/publications";

export const PublicationsPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const handleCopyBibtex = (pub: Publication, e: React.MouseEvent) => {
    e.stopPropagation();
    const bibtex = `@inproceedings{${pub.id},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  booktitle={${pub.conference}},
  year={${pub.year}},
  organization={${pub.affiliation}}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isAllExpanded = publicationsData.every((pub) => expandedIds[pub.id]);

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      setExpandedIds({});
    } else {
      const all: Record<string, boolean> = {};
      publicationsData.forEach((pub) => (all[pub.id] = true));
      setExpandedIds(all);
    }
  };

  const filteredPublications = publicationsData.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Back to Home button */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm hover:shadow-md group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <Home className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Personal Academic Profile Sidebar */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
            
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <img
                src="/images/avatar.png"
                alt="Trịnh Hoàng Tú"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/portrait.jpg";
                }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-700 shadow-md"
              />

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Trịnh Hoàng Tú
                </h1>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mt-0.5">
                  Research Artifacts & Scientific Publications
                </p>
              </div>
            </div>

            {/* Affiliations & Partners Logos (HUFLIT Lab removed) */}
            <div className="space-y-3.5 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <img src="/images/huflit.png" alt="HUFLIT" className="w-6 h-6 object-contain" />
                <span>
                  Faculty of Information Technology, <strong className="text-slate-900 dark:text-white">HUFLIT</strong>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/tsinghua.png" alt="Tsinghua University" className="w-6 h-6 object-contain" />
                <span>
                  Global Innovation Program Certified, <strong className="text-slate-900 dark:text-white">Tsinghua University</strong>
                </span>
              </div>
            </div>

            {/* Research Focus Tags */}
            <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-500" /> Key Research Areas
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "AI-Native Security",
                  "CSONET Log Intelligence",
                  "Drain3 Parsing",
                  "TCN-GRU Autoencoder",
                  "INT8 Quantization",
                  "Deep Q-Networks (DQN)",
                  "SDN OpenFlow",
                  "SOAR Automation",
                ].map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Scientific Publications List (Expandable Chips) */}
        <main className="lg:col-span-8 space-y-6">
          {/* Header Bar & Search & Expand All Button */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" /> Peer-Reviewed Publications & Proceedings
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
                  Research Papers & Proceedings
                </h2>
              </div>

              <button
                onClick={toggleExpandAll}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all border border-slate-300 dark:border-slate-700 shrink-0 self-start sm:self-auto"
              >
                <ChevronsUpDown className="w-4 h-4 text-cyan-500" />
                {isAllExpanded ? "Collapse All" : "Expand All"}
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Filter by title, venue (ICAI-FAI, CSONET, UEH), or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* List of Publications (Interactive Chips + Expanded Card) */}
          <div className="space-y-4">
            {filteredPublications.map((pub) => {
              const isExpanded = !!expandedIds[pub.id];

              return (
                <div
                  key={pub.id}
                  onClick={() => toggleExpand(pub.id)}
                  style={{ animationDelay: `${filteredPublications.indexOf(pub) * 80}ms` }}
                  className="pub-card rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:scale-[1.01] hover:shadow-lg transition-all duration-300 shadow-md cursor-pointer overflow-hidden group"
                >
                  {/* CONDITIONAL LAYOUT:
                       - Multiple logos (>1): 2-row — logos strip on top, title/meta below
                       - Single logo: classic side-by-side — logo left, title right */}
                  {pub.conferenceLogos && pub.conferenceLogos.length > 1 ? (
                    /* ── MULTI-LOGO: 2-row layout ── */
                    <div className="p-4 sm:p-5">
                      {/* Row 1: all logos + status badge + arrow */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5 flex-wrap flex-1 min-w-0">
                          {pub.conferenceLogos.map((logo, logoIdx) => (
                            <div
                              key={logoIdx}
                              className="h-14 sm:h-16 w-24 sm:w-32 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center overflow-hidden shrink-0"
                            >
                              <img src={logo} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: 'scale(1.35)' }} />
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 whitespace-nowrap">
                            {pub.status}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </div>
                      </div>
                      {/* Row 2: title/meta */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                            {pub.abbreviation}
                          </span>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{pub.year}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          {pub.authors.join(", ")}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* ── SINGLE LOGO: classic left-logo / right-title layout ── */
                    <div className="p-4 sm:p-5 flex items-center gap-4 justify-between">
                      {/* Left: single logo */}
                      <div className="flex items-center gap-4 min-w-0 flex-1">
                        {(pub.conferenceLogos && pub.conferenceLogos.length === 1) ? (
                          <div className="h-16 sm:h-20 w-24 sm:w-28 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center overflow-hidden shrink-0">
                            <img src={pub.conferenceLogos[0]} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: 'scale(1.1)' }} />
                          </div>
                        ) : pub.conferenceLogo ? (
                          <div className="h-16 sm:h-20 w-24 sm:w-28 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center overflow-hidden shrink-0">
                            <img src={pub.conferenceLogo} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: 'scale(1.1)' }} />
                          </div>
                        ) : null}
                        {/* Title & meta to the right of logo */}
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                              {pub.abbreviation}
                            </span>
                            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{pub.year}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                            {pub.authors.join(", ")}
                          </p>
                        </div>
                      </div>
                      {/* Status badge + arrow */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 whitespace-nowrap">
                          {pub.status}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* EXPANDED DETAILS — smooth CSS height animation */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    style={{ transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-5 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-4 bg-slate-50/50 dark:bg-slate-950/40 cursor-default">
                      {/* Conference Full Title & Track */}
                      <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium space-y-1">
                        <p className="text-cyan-700 dark:text-cyan-400 font-semibold">{pub.conference}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          <strong className="text-slate-700 dark:text-slate-300">Track:</strong> {pub.track}
                        </p>
                      </div>

                      {/* Authors & Affiliations */}
                      <div className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                        <div><span className="font-bold text-slate-900 dark:text-white">Authors:</span> {pub.authors.join(", ")}</div>
                        <div><span className="text-slate-500 dark:text-slate-400">Affiliation:</span> {pub.affiliation}</div>
                      </div>

                      {/* Abstract */}
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Abstract Overview</span>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                          {pub.abstract}
                        </p>
                      </div>

                      {/* Footer Buttons & Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-wrap gap-1.5">
                          {pub.tags.map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">#{tag}</span>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {pub.officialUrl && (
                            <a href={pub.officialUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm">
                              <ExternalLink className="w-3.5 h-3.5" /> Official Conf Site
                            </a>
                          )}
                          {pub.pdfUrl && (
                            <a href={pub.pdfUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-sm">
                              <FileText className="w-3.5 h-3.5" /> PDF Paper
                            </a>
                          )}
                          {pub.githubUrl && (
                            <a href={pub.githubUrl} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all border border-slate-300 dark:border-slate-700">
                              <Github className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Artifact
                            </a>
                          )}
                          <button
                            onClick={(e) => handleCopyBibtex(pub, e)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all border border-slate-300 dark:border-slate-700">
                            {copiedId === pub.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <ExternalLink className="w-3.5 h-3.5" />}
                            {copiedId === pub.id ? "Copied" : "BibTeX"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublicationsPage;

import React, { useState, useRef } from "react";
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
  LayoutList,
  Grid,
} from "lucide-react";
import { Link } from "react-router-dom";
import { publicationsData, Publication } from "@/data/publications";
import ThemeToggle from "@/components/ThemeToggle";

export const PublicationsPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSearchHighlighted, setIsSearchHighlighted] = useState<boolean>(false);
  const [isCompactView, setIsCompactView] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleToggleSearch = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      setIsSearchHighlighted(true);

      setTimeout(() => {
        if (searchInputRef.current) {
          const rect = searchInputRef.current.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - 120;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          searchInputRef.current.focus();
        }
      }, 150);

      setTimeout(() => {
        setIsSearchHighlighted(false);
      }, 1400);
    } else {
      setIsSearchOpen(false);
      setSearchTerm("");
    }
  };

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

  // Helper to render logos (Special inverted-triangle/pyramid layout for 3 logos: 2 on top, 1 centered below)
  const renderLogos = (pub: Publication, isCompact: boolean) => {
    const logos = pub.conferenceLogos || (pub.conferenceLogo ? [pub.conferenceLogo] : []);
    if (!logos || logos.length === 0) return null;

    // 3 Logos: Triangle layout (2 on top, 1 centered below)
    if (logos.length === 3) {
      const cardClass = isCompact
        ? "h-11 sm:h-12 w-16 sm:w-20 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden shrink-0"
        : "h-14 sm:h-16 w-24 sm:w-28 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center overflow-hidden shrink-0";

      return (
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          {/* Top Row: 2 Logos side by side */}
          <div className="flex items-center gap-1.5">
            <div className={cardClass}>
              <img src={logos[0]} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: isCompact ? 'scale(1.15)' : 'scale(1.35)' }} />
            </div>
            <div className={cardClass}>
              <img src={logos[1]} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: isCompact ? 'scale(1.15)' : 'scale(1.35)' }} />
            </div>
          </div>
          {/* Bottom Row: 1 Logo centered below */}
          <div className="flex items-center justify-center">
            <div className={cardClass}>
              <img src={logos[2]} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: isCompact ? 'scale(1.15)' : 'scale(1.35)' }} />
            </div>
          </div>
        </div>
      );
    }

    // Default Row layout for 1, 2, or 4+ logos
    return (
      <div className="flex items-center gap-1.5 shrink-0">
        {logos.map((logo, logoIdx) => {
          const cardClass = isCompact
            ? "h-12 sm:h-14 w-20 sm:w-24 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden shrink-0"
            : "h-16 sm:h-20 w-24 sm:w-28 p-1 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center overflow-hidden shrink-0";

          return (
            <div key={logoIdx} className={cardClass}>
              <img src={logo} alt={pub.abbreviation} className="w-full h-full object-contain" style={{ transform: isCompact ? 'scale(1.15)' : 'scale(1.1)' }} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Top Controls Header Bar */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm hover:shadow-md group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <Home className="w-3.5 h-3.5" />
          Back to Home
        </Link>

        {/* Right side: Search Chip + View Mode Toggle + Synchronized ThemeToggle */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => setIsCompactView(!isCompactView)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
            title={isCompactView ? "Switch to Detailed Card View" : "Switch to Compact Summary View"}
          >
            {isCompactView ? <Grid className="w-3.5 h-3.5 text-cyan-500" /> : <LayoutList className="w-3.5 h-3.5 text-cyan-500" />}
            <span>{isCompactView ? "Detailed Cards" : "Compact Summary"}</span>
          </button>

          <button
            onClick={handleToggleSearch}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all shadow-sm group ${
              isSearchOpen
                ? "bg-cyan-500 text-white border-cyan-500 shadow-cyan-500/20"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400"
            }`}
            title="Toggle search bar"
          >
            <Search className={`w-3.5 h-3.5 ${isSearchOpen ? "text-white" : "text-cyan-500"} group-hover:scale-110 transition-transform`} />
            <span>{isSearchOpen ? "Close Search" : "Search Papers"}</span>
          </button>

          <div className="p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Personal Academic Profile Sidebar */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
            
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <img
                src="/images/academic_portrait.jpg"
                alt="Trịnh Hoàng Tú"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/avatar.png";
                }}
                className="w-40 h-40 sm:w-48 sm:h-48 aspect-square rounded-2xl object-cover object-top border border-slate-200 dark:border-slate-800 shadow-md select-none"
              />

              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Trịnh Hoàng Tú
                </h1>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mt-0.5">
                  Research Artifacts & Scientific Publications
                </p>
              </div>
            </div>

            {/* Affiliations & Partners Logos */}
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
            <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-500" /> Key Research Areas
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "AI-Native Security",
                  "Log Anomaly Detection",
                  "Drain3 & Sequence Modeling",
                  "TCN & Transformer Networks",
                  "INT8 Edge AI Quantization",
                  "Deep Q-Networks (DQN)",
                  "SDN OpenFlow Resilience",
                  "SOAR Incident Automation",
                  "Cyber Economics & EdTech Risk"
                ].map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Scientific Publications List */}
        <main className="lg:col-span-8 space-y-6">
          {/* Header Bar & Search & Expand All Button */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Research & Publications
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                  Total {filteredPublications.length} Peer-Reviewed Scientific Publications & Artifacts
                </p>
              </div>

              {!isCompactView && (
                <button
                  onClick={toggleExpandAll}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all border border-slate-300 dark:border-slate-700 shrink-0 self-start sm:self-auto"
                >
                  <ChevronsUpDown className="w-4 h-4 text-cyan-500" />
                  {isAllExpanded ? "Collapse All" : "Expand All"}
                </button>
              )}
            </div>

            {/* Collapsible Search Input */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isSearchOpen ? "max-h-24 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0 pointer-events-none"
              }`}
            >
              <div className={`relative transition-all duration-500 rounded-xl ${
                isSearchHighlighted
                  ? "ring-2 ring-cyan-500/80 scale-[1.015] shadow-[0_0_30px_rgba(6,182,212,0.35)]"
                  : ""
              }`}>
                <Search className={`w-4 h-4 absolute left-3.5 top-3 transition-colors ${
                  isSearchHighlighted ? "text-cyan-500" : "text-slate-400"
                }`} />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Filter by title, venue (CSONET, ICAI-FAI, VNICT, RIVF), or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* COMPACT SUMMARY VIEW (Triangle Pyramid Layout for 3 Logos) */}
          {isCompactView ? (
            <div className="rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-3.5 sm:p-5 space-y-3.5">
              {filteredPublications.map((pub, idx) => (
                <div
                  key={pub.id}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md"
                >
                  {/* Left Column: Triangle / Grid Logo Container */}
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <span className="text-xs font-mono font-bold text-slate-400 shrink-0">#{idx + 1}</span>
                    
                    {/* Rendered Logos (2-on-top + 1-centered-below if 3 logos!) */}
                    {renderLogos(pub, true)}

                    {/* Middle Column: Badges, Title & Authors */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded text-xs font-extrabold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                          {pub.abbreviation}
                        </span>
                        {pub.indexing && (
                          <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                            {pub.indexing}
                          </span>
                        )}
                        {!pub.abbreviation.includes(pub.year.toString()) && (
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{pub.year}</span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <strong className="text-slate-700 dark:text-slate-300">Authors:</strong> {pub.authors.join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Status Badge */}
                  <div className="shrink-0 self-end sm:self-auto">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${
                      pub.status === "Accepted" || pub.status === "Camera Ready" || pub.status === "Published"
                        ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60"
                        : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800/60"
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* STANDARD CARD VIEW */
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
                    {pub.conferenceLogos && pub.conferenceLogos.length > 1 ? (
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2.5 flex-wrap flex-1 min-w-0">
                            {renderLogos(pub, false)}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${
                              pub.status === "Accepted" || pub.status === "Camera Ready" || pub.status === "Published"
                                ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60"
                                : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800/60"
                            }`}>
                              {pub.status}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                              {pub.abbreviation}
                            </span>
                            {pub.indexing && (
                              <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                                {pub.indexing}
                              </span>
                            )}
                            {!pub.abbreviation.includes(pub.year.toString()) && (
                              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{pub.year}</span>
                            )}
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
                      <div className="p-4 sm:p-5 flex items-center gap-4 justify-between">
                        <div className="flex items-center gap-4 min-w-0 flex-1">
                          {renderLogos(pub, false)}
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                                {pub.abbreviation}
                              </span>
                              {pub.indexing && (
                                <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                                  {pub.indexing}
                                </span>
                              )}
                              {!pub.abbreviation.includes(pub.year.toString()) && (
                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{pub.year}</span>
                              )}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                              {pub.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                              {pub.authors.join(", ")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${
                            pub.status === "Accepted" || pub.status === "Camera Ready" || pub.status === "Published"
                              ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60"
                              : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800/60"
                          }`}>
                            {pub.status}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className={`overflow-hidden transition-all duration-400 ease-in-out ${
                        isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                      style={{ transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="px-5 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-4 bg-slate-50/50 dark:bg-slate-950/40 cursor-default">
                        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium space-y-1">
                          <p className="text-cyan-700 dark:text-cyan-400 font-semibold">{pub.conference}</p>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">
                            <strong className="text-slate-700 dark:text-slate-300">Track:</strong> {pub.track}
                          </p>
                        </div>

                        <div className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                          <div><span className="font-bold text-slate-900 dark:text-white">Authors:</span> {pub.authors.join(", ")}</div>
                          <div><span className="text-slate-500 dark:text-slate-400">Affiliation:</span> {pub.affiliation}</div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Abstract Overview</span>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                            {pub.abstract}
                          </p>
                        </div>

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

                            {pub.status === "Under Review" ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-semibold" title="Peer-review draft is protected against unauthorized distribution. Reviewers & professors can request private copy.">
                                🔒 Protected Draft (Available Upon Request)
                              </span>
                            ) : (
                              <>
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
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PublicationsPage;

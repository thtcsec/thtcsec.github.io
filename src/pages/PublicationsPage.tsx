import React, { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Check,
  Building2,
  Search,
  ArrowLeft,
  Copy,
  BookOpen,
  Filter,
  X,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { publicationsData, Publication } from "@/data/publications";
import ThemeToggle from "@/components/ThemeToggle";

// Helper: highlight "Trinh Hoang Tu" in author list
function renderAuthors(authors: string[]) {
  return authors.map((author, i) => {
    const isMainAuthor =
      author === "Trinh Hoang Tu" || author.includes("Hoang Tu");
    return (
      <span key={i}>
        {i > 0 && <span className="text-slate-400 dark:text-slate-600">, </span>}
        <span
          className={
            isMainAuthor
              ? "font-semibold text-slate-900 dark:text-white underline decoration-amber-400 underline-offset-2 decoration-[1.5px]"
              : "text-slate-600 dark:text-slate-300"
          }
        >
          {author}
        </span>
      </span>
    );
  });
}

const STATUS_COLORS: Record<string, string> = {
  Accepted:
    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-700/70",
  "Camera Ready":
    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-700/70",
  Published:
    "bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:ring-blue-700/70",
  "Under Review":
    "bg-amber-50 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-700/70",
};

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Accepted", value: "Accepted" },
  { label: "Under Review", value: "Under Review" },
  { label: "Springer", value: "Springer" },
  { label: "IEEE", value: "IEEE" },
  { label: "Scopus", value: "Scopus" },
];

type FilterVal = (typeof FILTER_OPTIONS)[number]["value"];

export const PublicationsPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterVal>("all");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

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

  const handleCopyAllBibtex = () => {
    const all = publicationsData
      .map(
        (pub) => `@inproceedings{${pub.id},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  booktitle={${pub.conference}},
  year={${pub.year}},
  organization={${pub.affiliation}}
}`
      )
      .join("\n\n");
    navigator.clipboard.writeText(all);
    setCopiedId("all");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPublications = publicationsData.filter((pub) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      pub.title.toLowerCase().includes(term) ||
      pub.abbreviation.toLowerCase().includes(term) ||
      pub.tags.some((t) => t.toLowerCase().includes(term)) ||
      pub.authors.some((a) => a.toLowerCase().includes(term));

    const matchesFilter =
      activeFilter === "all" ||
      pub.status === activeFilter ||
      (pub.indexing && pub.indexing.includes(activeFilter));

    return matchesSearch && matchesFilter;
  });

  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-[#0b0e14] text-slate-900 dark:text-slate-100 transition-colors duration-300"
      style={{ fontFamily: "'Figtree', 'Segoe UI', system-ui, sans-serif" }}
    >
      {/* Google Font: Figtree + Chivo Mono */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&family=Chivo+Mono:wght@400;500&display=swap');
        .pub-font { font-family: 'Figtree', system-ui, sans-serif; }
        .pub-mono { font-family: 'Chivo Mono', monospace; }

        .pub-entry {
          position: relative;
        }
        .pub-entry::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, oklch(0.55 0.12 250 / 0.35) 20%, oklch(0.55 0.12 250 / 0.35) 80%, transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .pub-entry:hover::before {
          opacity: 1;
        }

        .abstract-grid {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .abstract-grid.open {
          grid-template-rows: 1fr;
        }
        .abstract-inner {
          overflow: hidden;
        }

        .filter-chip {
          transition: all 0.15s ease;
        }
        .filter-chip.active {
          background: oklch(0.2 0.02 250);
          color: white;
          border-color: oklch(0.35 0.03 250);
        }
        .dark .filter-chip.active {
          background: oklch(0.88 0.02 250);
          color: oklch(0.12 0.02 250);
          border-color: oklch(0.88 0.02 250);
        }

        @media (prefers-reduced-motion: reduce) {
          .abstract-grid { transition: none; }
          .pub-entry::before { display: none; }
        }
      `}</style>

      {/* ── Top Nav Bar ── */}
      <nav className="fixed top-0 inset-x-0 z-40 border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/90 dark:bg-[#0b0e14]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            hoangtu.dev
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSearchOpen((v) => !v);
                if (searchOpen) setSearchTerm("");
              }}
              aria-label="Toggle search"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all"
            >
              {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-24">

        {/* ── Page Header ── */}
        <header className="mb-12 md:mb-16">
          <div className="pub-mono text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
            Research & Hobby Projects · 2026
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-none"
            style={{ fontFamily: "'Figtree', system-ui, sans-serif", letterSpacing: "-0.03em" }}
          >
            Publications
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Exploratory research and conference preprints in AI-native security, log anomaly detection, and distributed systems.{" "}
            <span className="font-medium text-slate-800 dark:text-slate-100">Trịnh Hoàng Tú</span> ·{" "}
            <span className="pub-mono text-sm">HUFLIT · 2026</span>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">

          {/* ── LEFT: Author Profile Sidebar ── */}
          <aside className="lg:sticky lg:top-20 space-y-8">

            {/* Portrait */}
            <div>
              <picture>
                <source srcSet="/images/academic_portrait.webp" type="image/webp" />
                <img
                  src="/images/academic_portrait.jpg"
                  alt="Trịnh Hoàng Tú at Gia Lai Quantum Year 2026"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/avatar.png";
                  }}
                  className="w-full aspect-square object-cover object-top rounded-xl shadow-sm select-none"
                  style={{ maxHeight: "300px" }}
                />
              </picture>
            </div>

            {/* Identity */}
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}>
                Trịnh Hoàng Tú
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Backend engineer tinkering with AI systems. Exploring log intelligence, AI security, and edge models as a fun research hobby and technical playground.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { n: publicationsData.length.toString(), label: "Papers" },
                { n: publicationsData.filter((p) => p.indexing?.includes("Scopus")).length.toString(), label: "Scopus" },
                { n: publicationsData.filter((p) => p.status === "Accepted" || p.status === "Published").length.toString(), label: "Accepted" },
              ].map(({ n, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-3 px-1 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800"
                >
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: "'Figtree', system-ui, sans-serif", letterSpacing: "-0.04em" }}>
                    {n}
                  </span>
                  <span className="pub-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Affiliations */}
            <div className="space-y-3">
              <div className="pub-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
                <Building2 className="w-3 h-3" /> Affiliations
              </div>
              {[
                { logo: "/images/huflit.png", name: "HUFLIT", desc: "Faculty of IT" },
                { logo: "/images/tsinghua.png", name: "Tsinghua Univ.", desc: "GIP Certified" },
              ].map(({ logo, name, desc }) => (
                <div key={name} className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 dark:border-slate-700/80 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
                    <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{name}</div>
                    <div className="pub-mono text-xs text-slate-500 dark:text-slate-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research keywords */}
            <div className="space-y-2.5">
              <div className="pub-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                Key Topics
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Log Anomaly Detection",
                  "AIOps",
                  "AI-Native Security",
                  "Edge AI",
                  "Federated Learning",
                  "TCN · Transformer",
                  "SOAR Automation",
                  "Cyber Economics",
                ].map((kw) => (
                  <span
                    key={kw}
                    className="inline-block px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-default"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Export button */}
            <button
              onClick={handleCopyAllBibtex}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors shadow-xs"
            >
              {copiedId === "all" ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied all BibTeX
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Export all BibTeX
                </>
              )}
            </button>
          </aside>

          {/* ── RIGHT: Publications Feed ── */}
          <main className="min-w-0 space-y-0">

            {/* Controls row: filter chips + search */}
            <div className="mb-8 space-y-4">
              {/* Search bar (collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  searchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-400" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search title, venue, tag, author…"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 transition-all"
                    style={{ fontFamily: "'Figtree', system-ui, sans-serif" }}
                  />
                </div>
              </div>

              {/* Filter chips */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400 shrink-0" />
                {FILTER_OPTIONS.map((opt) => {
                  const isActive = activeFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setActiveFilter(isActive ? "all" : opt.value)}
                      className={`filter-chip pub-mono text-[11px] px-2.5 py-1 rounded-md border transition-all ${
                        isActive
                          ? "active"
                          : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500"
                      }`}
                    >
                      {opt.label}
                      {opt.value !== "all" && (
                        <span className="ml-1 text-slate-400 dark:text-slate-400">
                          (
                          {
                            publicationsData.filter(
                              (p) =>
                                p.status === opt.value ||
                                (p.indexing && p.indexing.includes(opt.value))
                            ).length
                          }
                          )
                        </span>
                      )}
                    </button>
                  );
                })}
                {(searchTerm || activeFilter !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveFilter("all");
                    }}
                    className="pub-mono text-[11px] px-2.5 py-1 rounded-md text-rose-500 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Count line */}
              <div className="pub-mono text-[11px] text-slate-500 dark:text-slate-400">
                Showing {filteredPublications.length} of {publicationsData.length} publications
              </div>
            </div>

            {/* Publication entries */}
            <div className="divide-y divide-slate-200 dark:divide-slate-800/60">
              {filteredPublications.length === 0 && (
                <div className="py-16 text-center space-y-2">
                  <BookOpen className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    No publications match your filter.
                  </p>
                </div>
              )}

              {filteredPublications.map((pub, idx) => {
                const isOpen = expandedId === pub.id;
                const logos =
                  pub.conferenceLogos ||
                  (pub.conferenceLogo ? [pub.conferenceLogo] : []);

                return (
                  <article
                    key={pub.id}
                    className="pub-entry pl-6 py-7 group"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    {/* Entry header row */}
                    <div
                      className="flex items-start gap-4 cursor-pointer"
                      onClick={() => setExpandedId(isOpen ? null : pub.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setExpandedId(isOpen ? null : pub.id)
                      }
                    >
                      {/* Index number */}
                      <span
                        className="pub-mono text-4xl font-bold leading-none text-slate-200 dark:text-slate-700/80 select-none shrink-0 mt-1 group-hover:text-slate-300 dark:group-hover:text-slate-500 transition-colors"
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Main content */}
                      <div className="flex-1 min-w-0 space-y-2">
                        {/* Venue + Status row */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="pub-mono text-[11px] font-semibold text-slate-600 dark:text-slate-300 tracking-wide">
                            {pub.abbreviation}
                          </span>
                          {pub.indexing && (
                            <span className="pub-mono text-[10px] text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                              {pub.indexing}
                            </span>
                          )}
                          <span
                            className={`inline-block pub-mono text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              STATUS_COLORS[pub.status] || STATUS_COLORS["Under Review"]
                            }`}
                          >
                            {pub.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-base sm:text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors"
                          style={{ fontFamily: "'Figtree', system-ui, sans-serif", letterSpacing: "-0.015em" }}
                        >
                          {pub.title}
                        </h3>

                        {/* Authors */}
                        <div className="text-sm leading-relaxed">
                          {renderAuthors(pub.authors)}
                        </div>

                        {/* Track */}
                        <div className="pub-mono text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          {pub.track}
                        </div>

                        {/* Prominent Organizing / Host Institution Logos */}
                        {logos.length > 0 && (
                          <div className="pt-2.5 flex items-center gap-3 flex-wrap">
                            <span className="pub-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-300 font-semibold shrink-0">
                              Host / Organizers:
                            </span>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              {logos.map((logo, li) => (
                                <div
                                  key={li}
                                  className="h-14 sm:h-16 min-w-[7.5rem] sm:min-w-[9rem] max-w-[12rem] px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-xs flex items-center justify-center overflow-hidden shrink-0 hover:shadow-md hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200"
                                  title={`Organizing Institution: ${pub.abbreviation}`}
                                >
                                  <img
                                    src={logo}
                                    alt={pub.abbreviation}
                                    className="max-h-full max-w-full object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Expand toggle */}
                      <div className="shrink-0 mt-1">
                        <div
                          className={`w-6 h-6 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* ── Expanded Abstract & Actions ── */}
                    <div className={`abstract-grid sm:pl-[calc(2.5rem+1rem)] ${isOpen ? "open" : ""}`}>
                      <div className="abstract-inner">
                        <div className="pt-5 space-y-4">
                          {/* Conference full name */}
                          <p className="pub-mono text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                            {pub.conference}
                          </p>

                          {/* Abstract */}
                          <div className="space-y-1.5">
                            <div className="pub-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                              Abstract
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed max-w-prose">
                              {pub.abstract}
                            </p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {pub.tags.map((tag) => (
                              <span
                                key={tag}
                                className="pub-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          {/* Action buttons */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {pub.officialUrl && (
                              <a
                                href={pub.officialUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors shadow-xs"
                              >
                                <Globe className="w-3 h-3" />
                                Conference Site
                              </a>
                            )}
                            {pub.githubUrl && pub.status !== "Under Review" && (
                              <a
                                href={pub.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors shadow-2xs"
                              >
                                <Github className="w-3 h-3" />
                                Artifact
                              </a>
                            )}
                            {pub.status === "Under Review" && (
                              <span
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/60"
                                title="Draft protected during peer review"
                              >
                                🔒 Draft Available on Request
                              </span>
                            )}
                            <button
                              onClick={(e) => handleCopyBibtex(pub, e)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors shadow-2xs"
                            >
                              {copiedId === pub.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-500" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  BibTeX
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;

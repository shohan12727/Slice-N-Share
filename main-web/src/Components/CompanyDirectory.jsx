import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  {
    id: 1,
    name: "HyperGear Electronics",
    industry: "Gaming Peripherals",
    offers: ["Sponsorship", "Brand Deal"],
    activeDeals: 12,
    budgetRange: "$5K - $50K",
    website: true,
    contact: true,
  },
  {
    id: 2,
    name: "NexaStream",
    industry: "Streaming Platform",
    offers: ["Sponsorship", "Funding"],
    activeDeals: 8,
    budgetRange: "$2K - $20K",
    website: false,
    contact: true,
  },
  {
    id: 3,
    name: "VoltDrink Energy",
    industry: "Energy Drinks",
    offers: ["Sponsorship", "Brand Deal"],
    activeDeals: 25,
    budgetRange: "$10K - $100K",
    website: true,
    contact: true,
  },
  {
    id: 4,
    name: "CloudForge Studios",
    industry: "Game Development",
    offers: ["Brand Deal"],
    activeDeals: 5,
    budgetRange: "$1K - $10K",
    website: false,
    contact: true,
  },
  {
    id: 5,
    name: "ArenaVault",
    industry: "Tournament Organizer",
    offers: ["Sponsorship", "Funding", "Brand Deal"],
    activeDeals: 18,
    budgetRange: "$20K - $200K",
    website: true,
    contact: true,
  },
  {
    id: 6,
    name: "NovaTech Hardware",
    industry: "PC Components",
    offers: ["Sponsorship", "Brand Deal"],
    activeDeals: 9,
    budgetRange: "$3K - $30K",
    website: true,
    contact: true,
  },
];



const offerColors = {
  Sponsorship: "from-cyan-500/10 border-cyan-400/40 text-cyan-400",
  "Brand Deal": "from-blue-500/10 border-blue-400/40 text-blue-400",
  Funding: "from-emerald-500/10 border-emerald-400/40 text-emerald-400",
};

const CompanyAvatar = ({ name }) => {
  const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-black text-xl select-none shrink-0">
      {initials}
    </div>
  );
};

const CompanyCard = ({ company, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.45, delay: index * 0.07 }}
    className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/[0.03] transition-all duration-400 overflow-hidden"
  >
    {/* Top shimmer line */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

    <div className="p-6 flex flex-col gap-5 flex-1">

      {/* Header */}
      <div className="flex items-start gap-4">
        <CompanyAvatar name={company.name} />
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-extrabold text-lg tracking-wide leading-tight">{company.name}</h3>
          <p className="text-gray-500 text-sm mt-0.5">{company.industry}</p>
        </div>
      </div>

      {/* Offer Tags */}
      <div className="flex flex-wrap gap-2">
        {company.offers.map((offer) => (
          <span
            key={offer}
            className={`px-3 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r border ${offerColors[offer] || "from-gray-500/10 border-gray-400/40 text-gray-400"}`}
          >
            {offer}
          </span>
        ))}
      </div>

      {/* Active Deals + Budget */}
      <div className="flex items-center justify-between text-sm border-t border-white/5 pt-4">
        <span className="flex items-center gap-2 text-gray-400">
          <svg className="w-4 h-4 text-cyan-400/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {company.activeDeals} active deals
        </span>
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {company.budgetRange}
        </span>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5 mt-auto">
        {company.website && (
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Website
          </button>
        )}
        {company.contact && (
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

const CompanyDirectory = () => {
  const [search, setSearch] = useState("");

  const filtered = companies.filter((c) => {
    const q = search.toLowerCase();
    return (
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.industry.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen pt-5F md:pt-15 bg-black text-white">

      {/* ── Page Header ── */}
      <div className="relative px-6 md:px-10 pt-20 md:pt-15  pb-4  border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,255,255,0.05),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="text-white">Company </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Directory
              </span>
            </h1>
          </div>
          <span className="text-gray-500 text-sm font-medium">
            {filtered.length} compan{filtered.length !== 1 ? "ies" : "y"}
          </span>
        </div>
      </div>

      {/* ── Search & Filters ── */}
      <div className="px-6 md:px-10 py-6 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search companies by name or industry..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all duration-300"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            )}
          </div>


        </div>
      </div>

      {/* ── Company Grid ── */}
      <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            >
              {filtered.map((company, i) => (
                <CompanyCard key={company.id} company={company} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-3xl">
                🏢
              </div>
              <p className="text-white font-bold text-xl mb-2">No companies found</p>
              <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CompanyDirectory;
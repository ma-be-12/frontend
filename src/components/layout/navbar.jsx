"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, User } from "lucide-react";
import BrainLogo from "./brain-logo";

const deptLabels = {
  "/mayor": "Executive Command",
  "/finance": "Finance Department",
  "/health": "Health Department",
  "/education": "Education Sector",
  "/infrastructure": "Infrastructure & Zoning",
  "/urban-planning": "Infrastructure Department",
  "/water-energy": "Water & Energy",
  "/citizen": "Citizen Portal",
  "/emergency": "Emergency Command",
  "/ai-chat": "AI Neural Core",
};

function getDeptLabel(pathname) {
  const entry = Object.entries(deptLabels).find(([path]) =>
    pathname === path || pathname.startsWith(path + "/")
  );
  return entry ? entry[1] : "Municipal Control";
}

export default function Navbar({ onOpenMenu }) {
  const pathname = usePathname();
  const dept = getDeptLabel(pathname);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0F19] border-b border-white/10">
      {/* —— Mobile header (Stitch) —— */}
      <nav className="lg:hidden px-4 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-2">
        <button
          type="button"
          onClick={onOpenMenu}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-white/10 text-gray-400 hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={18} />
          <span className="text-[9px] font-bold uppercase tracking-wider">Menu</span>
        </button>

        <Link href="/mayor" className="flex flex-col items-center min-w-0">
          <div className="flex items-center gap-2">
            <BrainLogo size="sm" />
            <span className="text-[#D4A017] font-black text-[10px] sm:text-[11px] tracking-[0.2em] uppercase truncate">
              Adama City Brain
            </span>
          </div>
          <span className="text-gray-600 text-[8px] uppercase tracking-[0.15em] mt-0.5 truncate max-w-[200px]">
            {dept}
          </span>
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-1.5 shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-[#D4A017]/40 flex items-center justify-center">
            <User size={14} className="text-[#D4A017]" />
          </div>
          <span className="text-white text-[10px] font-bold uppercase hidden sm:inline">
            Mayor
          </span>
        </Link>
      </nav>

      {/* —— Desktop header —— */}
      <nav className="hidden lg:flex min-h-14 px-8 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/mayor" className="flex items-center gap-3">
            <BrainLogo />
            <div>
              <span className="text-[#D4A017] font-black text-xs tracking-[0.2em] uppercase">
                Adama City Brain
              </span>
              <p className="text-gray-600 text-[9px] uppercase tracking-widest">{dept}</p>
            </div>
          </Link>
          <div className="flex items-center gap-2 text-[#10B981] text-[10px] font-bold tracking-widest bg-green-500/5 px-3 py-1.5 rounded-full border border-green-500/20 ml-4">
            <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
            LIVE UPTIME: 99.97%
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end border-r border-white/10 pr-4">
            <span className="text-gray-500 text-[9px] font-bold uppercase">Access</span>
            <span className="text-white text-[10px] font-black uppercase">Mayor</span>
          </div>
          <button
            type="button"
            className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#D4A017] relative"
          >
            <Bell size={18} className="text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0B0F19]" />
          </button>
          <Link
            href="/login"
            className="w-9 h-9 rounded-full bg-gray-800 border border-[#D4A017]/40 flex items-center justify-center"
          >
            <User size={16} className="text-[#D4A017]" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

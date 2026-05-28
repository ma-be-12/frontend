"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PieChart,
  Heart,
  GraduationCap,
  Construction,
  Droplets,
  Shield,
  Map,
  Settings,
  LogOut,
  Zap,
  Users,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Dashboard", href: "/mayor", icon: LayoutDashboard },
  { name: "Finance", href: "/finance", icon: PieChart },
  { name: "Health", href: "/health", icon: Heart },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Infrastructure", href: "/infrastructure", icon: Construction },
  { name: "Water & Energy", href: "/water-energy", icon: Droplets },
  { name: "Public Safety", href: "/emergency", icon: Shield },
  { name: "Urban Planning", href: "/urban-planning", icon: Map },
  { name: "Complaints", href: "/citizen", icon: Users },
  { name: "AI Brain", href: "/ai-chat", icon: Zap },
];

function SidebarContent({ onNavigate }) {
  const pathname = usePathname();

  return (
    <>
      <div className="p-6 border-b border-white/5 flex justify-between items-start">
        <div>
          <h2 className="text-[#D4A017] font-black tracking-[0.25em] text-[11px] uppercase italic">
            Adama City Brain
          </h2>
          <p className="text-gray-600 text-[8px] uppercase tracking-widest mt-1">
            Executive Command
          </p>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="glass-card p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center font-black text-black text-sm">
            AB
          </div>
          <div>
            <p className="text-white text-[11px] font-bold uppercase">Abebe Bikila</p>
            <p className="text-[#D4A017] text-[9px] font-bold uppercase tracking-wider">
              City Mayor
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-grow px-3 space-y-0.5 overflow-y-auto">
        {navLinks.map((link) => {
          const active =
            pathname === link.href ||
            (link.href !== "#" && pathname.startsWith(link.href));
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all group ${
                active
                  ? "bg-[#D4A017]/15 text-[#D4A017] border border-[#D4A017]/20"
                  : "text-gray-500 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon
                size={17}
                className={active ? "text-[#D4A017]" : "group-hover:text-[#D4A017]"}
              />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 space-y-1">
        <Link
          href="#"
          onClick={onNavigate}
          className="flex items-center gap-3 px-4 py-2.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"
        >
          <Settings size={17} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Settings</span>
        </Link>
        <Link
          href="/login"
          onClick={onNavigate}
          className="flex items-center gap-3 px-4 py-2.5 text-red-500/70 hover:text-red-400 hover:bg-red-500/5 rounded-xl transition-all"
        >
          <LogOut size={17} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Logout</span>
        </Link>
      </div>
    </>
  );
}

export default function Sidebar({ mobileOpen = false, onClose }) {
  return (
    <>
      <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col h-screen sticky top-0 bg-[#0B0F19] border-r border-white/5 z-50">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close menu"
          />
          <aside className="absolute left-0 top-0 bottom-0 w-[min(85vw,280px)] bg-[#0B0F19] border-r border-white/10 flex flex-col shadow-2xl">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <SidebarContent onNavigate={onClose} />
          </aside>
        </div>
      )}
    </>
  );
}

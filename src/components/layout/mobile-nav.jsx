"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Heart,
  GraduationCap,
  MapPin,
  Building2,
  Droplets,
  ShieldAlert,
  BarChart3,
} from "lucide-react";

const sectorTabs = [
  { prefix: "/health", name: "Health", href: "/health", icon: Heart },
  { prefix: "/education", name: "Edu", href: "/education", icon: GraduationCap },
  { prefix: "/infrastructure", name: "Zones", href: "/infrastructure", icon: MapPin },
  { prefix: "/urban-planning", name: "Build", href: "/urban-planning", icon: Building2 },
  { prefix: "/water-energy", name: "Water", href: "/water-energy", icon: Droplets },
  { prefix: "/finance", name: "Finance", href: "/finance", icon: BarChart3 },
];

function getSectorTab(pathname) {
  return (
    sectorTabs.find((t) => pathname === t.prefix || pathname.startsWith(t.prefix + "/")) ||
    sectorTabs[0]
  );
}

function NavItem({ href, label, icon: Icon, active, onClick }) {
  const inner = (
    <>
      <div
        className={`p-2 rounded-xl transition-all ${
          active
            ? "bg-[#D4A017] text-black shadow-[0_0_16px_rgba(212,160,23,0.45)]"
            : "text-gray-500"
        }`}
      >
        <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      </div>
      <span
        className={`text-[8px] font-bold uppercase tracking-wide mt-1 ${
          active ? "text-[#D4A017]" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex flex-col items-center justify-center min-w-[56px] py-1"
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center min-w-[56px] py-1"
    >
      {inner}
    </Link>
  );
}

export default function MobileNav() {
  const pathname = usePathname();
  const sector = getSectorTab(pathname);

  const isHome = pathname === "/mayor" || pathname === "/";
  const isSector =
    pathname === sector.href || pathname.startsWith(sector.href + "/");
  const isEmergency = pathname.startsWith("/emergency");
  const isStats = pathname.startsWith("/ai-chat") || pathname.startsWith("/finance");

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050810]/98 backdrop-blur-xl border-t border-white/10 safe-area-pb"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-[4.25rem] max-w-lg mx-auto px-1">
        <NavItem href="/mayor" label="Home" icon={Home} active={isHome} />
        <NavItem
          href={sector.href}
          label={sector.name}
          icon={sector.icon}
          active={isSector}
        />
        <NavItem
          href="/emergency"
          label="Alert"
          icon={ShieldAlert}
          active={isEmergency}
        />
        <NavItem
          href="/ai-chat"
          label="Stats"
          icon={BarChart3}
          active={isStats}
        />
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const protocols = [
  {
    role: "Citizen Portal",
    desc: "Submit complaints & track municipal services",
    href: "/citizen",
  },
  {
    role: "City Council",
    desc: "Executive oversight & policy directives",
    href: "/mayor",
    active: true,
  },
  {
    role: "Staff",
    desc: "Department operations & field services",
    href: "/mayor",
  },
];

export default function LoginPage() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-[#0B0F19]">
      <div className="w-full max-w-4xl glass-card overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <div className="flex-grow p-6 sm:p-10 border-b md:border-b-0 md:border-r border-white/5">
          <h2 className="text-[#D4A017] text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-8">
            Select Access Protocol
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {protocols.map((p, i) => (
              <button
                key={p.role}
                type="button"
                onClick={() => setSelected(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selected === i
                    ? "bg-[#D4A017]/10 border-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.1)]"
                    : "bg-white/5 border-white/10 hover:border-white/30"
                }`}
              >
                <p
                  className={`text-sm font-bold ${
                    selected === i ? "text-white" : "text-gray-400"
                  }`}
                >
                  {p.role}
                </p>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">
                  {p.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[400px] p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-white text-xl sm:text-2xl font-black tracking-widest italic">
              ADAMA CITY BRAIN
            </h1>
            <p className="text-gray-500 text-[10px] uppercase mt-1">
              Unified Municipal Control Ecosystem
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                Username / Email
              </label>
              <input
                type="text"
                placeholder="Official ID or email"
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              />
            </div>
            <Link
              href={protocols[selected].href}
              className="block w-full py-4 sm:py-5 bg-[#D4A017] text-black font-black text-xs uppercase tracking-[0.15em] rounded-xl text-center shadow-[0_10px_30px_rgba(212,160,23,0.3)] hover:bg-yellow-500 transition-colors"
            >
              Log In to Platform
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 justify-between text-[9px] text-gray-600 uppercase font-bold">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full" /> AES-256 Secured
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full" /> MAI Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

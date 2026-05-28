"use client";

import { useState } from "react";
import {
  Radio,
  Zap,
  MapPin,
  Car,
  Hospital,
  Flame,
  Ambulance,
  Shield,
} from "lucide-react";

const severityLevels = ["Standard", "Critical", "Catastrophic"];

const liveEvents = [
  { title: "Grid Failure — Sector 7", time: "2m ago", level: "critical" },
  { title: "Medical Assist — Geda Market", time: "8m ago", level: "high" },
  { title: "Traffic Block — Main Road B", time: "14m ago", level: "medium" },
];

const deptLogs = [
  { name: "Fire", status: "Deployed", icon: Flame, color: "text-orange-400" },
  { name: "EMS", status: "En Route", icon: Ambulance, color: "text-red-400" },
  { name: "Police", status: "Standby", icon: Shield, color: "text-blue-400" },
];

export default function EmergencyPage() {
  const [severity, setSeverity] = useState("Catastrophic");

  return (
    <div className="p-6 lg:p-8 pb-8 space-y-6">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <h1 className="text-white font-black text-lg uppercase tracking-[0.2em] italic">
            Emergency Command Center
          </h1>
          <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
            <Radio size={12} className="animate-pulse" />
            System Health: 91.4% — Stay Critical
          </p>
        </div>
        <span className="glass-card px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-[#10B981] border-green-500/20">
          Channel Active
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 lg:p-8">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Broadcast Command
            </h3>

            <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest mb-3">
              Severity Level
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {severityLevels.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSeverity(lvl)}
                  className={`py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    severity === lvl
                      ? lvl === "Catastrophic"
                        ? "bg-red-600 border-red-500 text-white shadow-[0_0_25px_rgba(220,38,38,0.5)]"
                        : lvl === "Critical"
                          ? "bg-orange-600/80 border-orange-500 text-white"
                          : "bg-white/10 border-[#D4A017] text-[#D4A017]"
                      : "border-white/10 text-gray-500 bg-white/5 hover:border-white/20"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="glass-card-gold p-8 relative overflow-hidden mb-8 min-h-[220px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-48 h-48 rounded-full border border-[#D4A017]/40" />
                <div className="absolute w-32 h-32 rounded-full border border-[#D4A017]/60" />
                <div className="absolute w-16 h-16 rounded-full bg-[#D4A017]/20" />
              </div>
              <MapPin className="text-[#D4A017] mb-3 relative z-10" size={28} />
              <p className="text-white font-black text-sm uppercase tracking-widest relative z-10">
                Zone 4: Main Market District
              </p>
              <p className="text-gray-500 text-[9px] uppercase mt-1 relative z-10">
                Coordinates locked • Live GIS feed
              </p>
            </div>

            <button
              type="button"
              className="w-full py-5 bg-red-600 text-white font-black text-sm uppercase tracking-[0.25em] rounded-xl shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:bg-red-500 transition-all animate-pulse hover:animate-none"
            >
              Execute Broadcast
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card border-blue-500/20 p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} /> AI Strategy Engine
              </h3>
              <span className="text-[8px] font-bold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Optimizing
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Car size={14} className="text-[#D4A017]" />
                  <p className="text-white text-[11px] font-bold uppercase">Traffic Rerouting</p>
                </div>
                <p className="text-gray-500 text-[10px] leading-relaxed">
                  3 alternate corridors activated. ETA congestion relief: 12 min.
                </p>
              </div>
              <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Hospital size={14} className="text-[#10B981]" />
                  <p className="text-white text-[11px] font-bold uppercase">Hospital Readiness</p>
                </div>
                <p className="text-gray-500 text-[10px] leading-relaxed">
                  Adama General on standby. Trauma bays 2 & 4 prepped.
                </p>
              </div>
            </div>

            <h4 className="text-gray-500 text-[9px] uppercase font-bold tracking-widest mb-3">
              Live Events
            </h4>
            <div className="space-y-2 mb-6">
              {liveEvents.map((ev) => (
                <div
                  key={ev.title}
                  className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/5 border border-white/5"
                >
                  <p className="text-white text-[10px] font-semibold">{ev.title}</p>
                  <span className="text-gray-600 text-[8px] uppercase">{ev.time}</span>
                </div>
              ))}
            </div>

            <h4 className="text-gray-500 text-[9px] uppercase font-bold tracking-widest mb-3">
              Dept. Logs
            </h4>
            <div className="space-y-2">
              {deptLogs.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.name}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={14} className={d.color} />
                      <span className="text-white text-[11px] font-bold">{d.name}</span>
                    </div>
                    <span className={`text-[9px] font-bold uppercase ${d.color}`}>
                      {d.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Send, Sparkles, TrendingUp, AlertCircle, Zap } from "lucide-react";

const efficiencyStats = [
  { label: "Grid Stability", value: 90.4, color: "bg-[#D4A017]" },
  { label: "Resource Allocation", value: 82, color: "bg-blue-500" },
  { label: "Response Time", value: 89, color: "bg-[#10B981]" },
];

const anomalies = [
  { title: "Power Grid Leak", sector: "Sector 7", severity: "high" },
  { title: "Traffic Congestion", sector: "Main Road B", severity: "medium" },
  { title: "Water Pressure Drop", sector: "Sector 4", severity: "medium" },
];

export default function AIChatPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 lg:p-8 pb-8 flex flex-col min-h-[calc(100vh-8rem)]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#D4A017] flex items-center justify-center shadow-[0_0_25px_rgba(212,160,23,0.35)]">
          <Sparkles size={24} className="text-black" />
        </div>
        <div>
          <h1 className="text-white font-black text-lg uppercase tracking-[0.2em]">
            Adama City Brain
          </h1>
          <p className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 mt-0.5">
            <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
            Neural Core Online
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-grow">
        <div className="xl:col-span-2 flex flex-col gap-6 min-h-0">
          <div className="glass-card-gold p-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Good morning, Mayor. I&apos;ve completed overnight data synthesis across all
              municipal sectors. Grid stability remains within tolerance.{" "}
              <span className="text-[#D4A017] font-semibold">
                3 anomalies require your attention
              </span>{" "}
              — detailed below. How would you like to proceed?
            </p>
          </div>

          <div className="flex-grow glass-card p-6 flex flex-col min-h-[280px] overflow-hidden">
            <div className="flex-grow overflow-y-auto space-y-5 pr-2 mb-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-bold text-gray-500 shrink-0">
                  AI
                </div>
                <div className="glass-card p-4 rounded-2xl rounded-tl-none max-w-[90%]">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Retrieving status for Geda Sector… 2 emergency units deployed. 14
                    pending citizen complaints (street lighting). Recommend prioritizing
                    Sector 4 water pressure alert.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-lg bg-[#D4A017] flex items-center justify-center text-[9px] font-bold text-black shrink-0">
                  M
                </div>
                <div className="bg-[#D4A017]/10 border border-[#D4A017]/20 p-4 rounded-2xl rounded-tr-none max-w-[90%]">
                  <p className="text-white text-sm">
                    Show emergency response status and Geda sector complaints.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex-shrink-0">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Command City Brain..."
                className="w-full bg-black/40 border border-white/10 p-4 pr-14 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#D4A017] rounded-lg flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Real-Time Efficiency Stats
            </h3>
            <div className="space-y-5">
              {efficiencyStats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-white">{stat.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${stat.color}`}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <AlertCircle size={14} className="text-red-400" />
              Active Anomalies
            </h3>
            <div className="space-y-3">
              {anomalies.map((a) => (
                <div
                  key={a.title}
                  className="p-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <p className="text-white text-[11px] font-semibold">{a.title}</p>
                  <p className="text-gray-600 text-[9px] uppercase mt-0.5">{a.sector}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-gold p-6 text-center">
            <Zap size={20} className="text-[#D4A017] mx-auto mb-2" />
            <p className="text-[#10B981] text-3xl font-black">STABLE</p>
            <p className="text-[#D4A017] text-sm font-bold mt-1 flex items-center justify-center gap-1">
              <TrendingUp size={14} /> +4.2%
            </p>
            <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-2">
              City-wide operational index
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

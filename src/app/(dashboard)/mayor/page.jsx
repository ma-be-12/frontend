import Link from "next/link";
import { Zap, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Population", val: "542,801", grow: "+2.4% Annual Growth" },
  { label: "Annual Budget", val: "ETB 4.2B", grow: "84% Utilized" },
  { label: "Active Projects", val: "1,248", grow: "-12% This Week" },
  { label: "Infrastructure Index", val: "42", grow: "12 Near Completion" },
];

const departments = [
  { name: "Public Infrastructure", pct: 92 },
  { name: "Health & Sanitation", pct: 88 },
  { name: "Education Services", pct: 85 },
  { name: "Water & Energy", pct: 79 },
];

const recentActivity = [
  { title: "Budget approval for Sector 4 roads", time: "2h ago", tag: "Finance" },
  { title: "EMS dispatched to flood zone B", time: "4h ago", tag: "Emergency" },
  { title: "1,240 citizen complaints triaged by AI", time: "6h ago", tag: "Citizen" },
  { title: "Q3 audit report submitted", time: "Yesterday", tag: "Audit" },
];

export default function MayorDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-6 pb-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-white font-black text-lg uppercase tracking-[0.2em] italic">
            Mayor Dashboard
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">
            Municipal Executive Command Center
          </p>
        </div>
        <span className="text-[9px] text-gray-600 uppercase tracking-widest">
          Last sync: Live
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest">
              {stat.label}
            </p>
            <p className="text-white text-2xl font-black mt-2">{stat.val}</p>
            <p className="text-[#10B981] text-[9px] font-bold mt-2 uppercase">
              {stat.grow}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 lg:p-8">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase italic">
                Municipal Budget Utilization
              </h3>
              <div className="flex gap-4 text-[9px] font-bold uppercase text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4A017] rounded-sm" /> Actual
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-sm" /> Projected
                </span>
              </div>
            </div>
            <div className="flex items-end justify-between h-56 lg:h-64 gap-2 px-2">
              {[40, 60, 45, 90, 65, 80, 50, 75, 85, 40, 60, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                  <div
                    className="bg-blue-500/30 rounded-t-sm w-full"
                    style={{ height: `${h * 0.7}%` }}
                  />
                  <div
                    className="bg-[#D4A017] rounded-t-sm w-full group-hover:bg-white transition-colors"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 lg:p-8">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Departmental Performance
            </h3>
            <div className="space-y-5">
              {departments.map((d) => (
                <div key={d.name} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase">
                    <span className="text-gray-400">{d.name}</span>
                    <span className="text-white">{d.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#10B981] rounded-full shadow-[0_0_10px_#10B981]"
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest">
                Recent Activity
              </h3>
              <button
                type="button"
                className="text-[#D4A017] text-[9px] font-bold uppercase flex items-center gap-1"
              >
                View All <ArrowUpRight size={12} />
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {recentActivity.map((item) => (
                <div
                  key={item.title}
                  className="py-3 flex justify-between items-center gap-4"
                >
                  <div>
                    <p className="text-white text-[11px] font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-[9px] mt-0.5">{item.time}</p>
                  </div>
                  <span className="text-[8px] font-bold uppercase px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card-gold p-6 relative">
            <Zap size={16} className="absolute top-4 right-4 text-[#D4A017]" />
            <h4 className="text-[#D4A017] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              AI Daily Briefing
            </h4>
            <ul className="text-gray-300 text-[11px] space-y-3 leading-relaxed">
              <li className="flex gap-2">
                <span className="w-1 h-1 bg-[#D4A017] rounded-full mt-2 shrink-0" />
                Revenue collection is ahead of schedule by ETB 14M.
              </li>
              <li className="flex gap-2">
                <span className="w-1 h-1 bg-[#D4A017] rounded-full mt-2 shrink-0" />
                Abnormal water pressure detected in Sector 4.
              </li>
              <li className="flex gap-2">
                <span className="w-1 h-1 bg-[#D4A017] rounded-full mt-2 shrink-0" />
                3 infrastructure projects nearing completion this month.
              </li>
            </ul>
            <Link
              href="/ai-chat"
              className="mt-6 block w-full py-3 text-center border border-[#D4A017]/50 text-[#D4A017] font-bold text-[10px] uppercase rounded-xl hover:bg-[#D4A017] hover:text-black transition-all"
            >
              View Full Analysis
            </Link>
          </div>

          <div className="glass-card border-red-500/30 bg-red-950/30 p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="text-red-400 text-[9px] font-black uppercase tracking-widest">
                Emergency Command
              </span>
              <span className="bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold animate-pulse">
                LIVE
              </span>
            </div>
            <p className="text-white text-xs font-bold uppercase">
              Flood Warning — Rift Valley Basin
            </p>
            <p className="text-red-400/90 text-[10px] mt-2 mb-5 leading-relaxed">
              Flash flood probability in low-land districts increased to 65%.
            </p>
            <Link
              href="/emergency"
              className="block w-full py-3 text-center bg-red-600 text-white font-black text-[10px] uppercase rounded-xl hover:bg-red-500 transition-colors"
            >
              Dispatch EMS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

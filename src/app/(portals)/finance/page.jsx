import { FileText, Activity, PieChart, TrendingUp } from "lucide-react";

const metrics = [
  { label: "Infrastructure Spend", val: "42.8M ETB", grow: "+8.2%", icon: TrendingUp },
  { label: "Revenue Ratio", val: "18.4%", grow: "Stable", icon: PieChart },
  { label: "Audit Status", val: "Q3 Compliant", grow: "Verified", icon: FileText },
];

const reports = [
  {
    title: "Infrastructure Fund Q3",
    meta: "PDF • 4.2 MB • Oct 12",
    status: "In Review",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Municipal Tax Audit",
    meta: "XLS • 1.8 MB • Oct 10",
    status: "Processed",
    statusColor: "text-[#10B981] bg-green-500/10 border-green-500/20",
  },
  {
    title: "Sector 4 Water Allocation",
    meta: "PDF • 2.1 MB • Oct 08",
    status: "In Review",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function FinancePortal() {
  return (
    <div className="p-6 lg:p-8 space-y-6 pb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/30">
          <PieChart size={20} />
        </div>
        <div>
          <h1 className="text-white font-black text-lg uppercase tracking-[0.15em] italic">
            Finance Portal
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            Fiscal Performance Overview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="relative w-44 h-44 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  className="text-gray-800"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * 87) / 100}
                  className="text-[#D4A017] stroke-linecap-round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white text-4xl font-black">87%</span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                  Fiscal Performance
                </span>
              </div>
            </div>
            <div className="flex-grow w-full space-y-4">
              <p className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest">
                Above Target (+4.2%)
              </p>
              <p className="text-gray-400 text-xs leading-relaxed max-w-md">
                Municipal revenue and expenditure alignment remains within approved
                fiscal parameters for Q3.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="py-3 bg-[#D4A017] text-black font-bold text-[10px] rounded-xl uppercase tracking-widest hover:bg-yellow-500 transition-colors"
                >
                  Submit Report
                </button>
                <button
                  type="button"
                  className="py-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold text-[10px] rounded-xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600/30"
                >
                  <Activity size={14} /> AI Analysis
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="glass-card p-5">
                  <Icon size={18} className="text-[#D4A017] mb-3" />
                  <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                    {m.label}
                  </p>
                  <p className="text-white text-lg font-black mt-1">{m.val}</p>
                  <p className="text-[#10B981] text-[9px] font-bold mt-2 uppercase">
                    {m.grow}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="glass-card overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest">
                Recent Financial Reports
              </h3>
              <button
                type="button"
                className="text-[#D4A017] text-[9px] font-bold uppercase"
              >
                View All
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {reports.map((r) => (
                <div
                  key={r.title}
                  className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="text-gray-500 shrink-0" size={18} />
                    <div>
                      <p className="text-white text-sm font-semibold">{r.title}</p>
                      <p className="text-[9px] text-gray-500 uppercase mt-0.5">
                        {r.meta}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[8px] font-bold uppercase px-2 py-1 rounded border shrink-0 ${r.statusColor}`}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card-gold p-6 h-fit">
          <p className="text-[#D4A017] text-[10px] font-black uppercase tracking-widest mb-4">
            Mayor&apos;s Office
          </p>
          <div className="space-y-4">
            <div className="bg-black/20 rounded-xl p-4 border border-white/5">
              <p className="text-gray-400 text-[10px]">
                &quot;Please expedite Q3 infrastructure fund review for Sector 4.&quot;
              </p>
              <p className="text-[#D4A017] text-[9px] font-bold mt-2 uppercase">
                — Office of the Mayor
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-4 border border-white/5">
              <p className="text-gray-400 text-[10px]">
                AI flagged 12% variance in water allocation vs. budget line 4.2.
              </p>
              <p className="text-blue-400 text-[9px] font-bold mt-2 uppercase">
                — AI Fiscal Monitor
              </p>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 w-full py-3 border border-[#D4A017]/40 text-[#D4A017] text-[10px] font-bold uppercase rounded-xl hover:bg-[#D4A017]/10 transition-colors"
          >
            Open Secure Channel
          </button>
        </div>
      </div>
    </div>
  );
}

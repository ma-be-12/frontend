import { FileText, Sparkles, Download, AlertTriangle } from "lucide-react";

export function Gauge({ percent, label, sublabel }) {
  const offset = 440 - (440 * percent) / 100;
  return (
    <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-800" />
        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={440} strokeDashoffset={offset} className="text-[#D4A017] stroke-linecap-round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white text-2xl sm:text-3xl font-black">{percent}%</span>
        <span className="text-gray-500 text-[8px] sm:text-[9px] uppercase tracking-widest text-center px-2">{label}</span>
        {sublabel && <span className="text-[#D4A017] text-[8px] uppercase mt-0.5">{sublabel}</span>}
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-white font-black text-base sm:text-lg uppercase tracking-[0.12em] italic">{title}</h1>
      <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{subtitle}</p>
    </div>
  );
}

export function AiInsight({ title = "AI Strategic Insight", children }) {
  return (
    <div className="glass-card-gold p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={16} className="text-[#D4A017]" />
        <h3 className="text-[#D4A017] text-[10px] font-black uppercase tracking-widest">{title}</h3>
      </div>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function AlertBox({ title, count, message }) {
  return (
    <div className="glass-card border-red-500/30 bg-red-950/25 p-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-red-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <AlertTriangle size={14} /> {title}
        </h3>
        <span className="bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded">{count} Active</span>
      </div>
      <p className="text-gray-400 text-[11px] leading-relaxed">{message}</p>
    </div>
  );
}

export function MayorQuote({ quote, buttonText = "Read Full Statement" }) {
  return (
    <div className="glass-card p-5 sm:p-6">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center font-black text-black shrink-0">AB</div>
        <div className="min-w-0">
          <p className="text-gray-400 text-[11px] italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
          <p className="text-[#D4A017] text-[9px] font-bold uppercase mt-3">Abebe Bikila — City Mayor</p>
        </div>
      </div>
      <button type="button" className="mt-5 w-full py-3 bg-[#D4A017] text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-yellow-500 transition-colors">
        {buttonText}
      </button>
    </div>
  );
}

export function ReportsList({ reports }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="px-5 py-4 border-b border-white/5">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest">Recent Reports</h3>
      </div>
      <div className="divide-y divide-white/5">
        {reports.map((r) => (
          <div key={r.title} className="px-5 py-4 flex items-center justify-between gap-3 hover:bg-white/5 cursor-pointer">
            <div className="flex items-center gap-3 min-w-0">
              <FileText size={16} className="text-gray-500 shrink-0" />
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold truncate">{r.title}</p>
                {r.meta && <p className="text-gray-600 text-[9px] uppercase mt-0.5">{r.meta}</p>}
              </div>
            </div>
            <Download size={14} className="text-[#D4A017] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatCard({ label, value, sub, highlight }) {
  return (
    <div className="glass-card p-4 sm:p-5">
      <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">{label}</p>
      <p className="text-white text-xl sm:text-2xl font-black mt-2">{value}</p>
      {sub && (
        <p className={`text-[9px] font-bold mt-1 uppercase ${highlight === "green" ? "text-[#10B981]" : highlight === "red" ? "text-red-400" : "text-[#D4A017]"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function BriefingCards({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.title} className="bg-black/20 border border-white/5 rounded-xl p-4">
          <p className="text-[#D4A017] text-[9px] font-black uppercase tracking-widest">{item.title}</p>
          <p className="text-white text-lg font-black mt-1">{item.value}</p>
          <p className="text-gray-500 text-[10px] mt-2 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

import {
  PageHeader,
  Gauge,
  StatCard,
  AiInsight,
  MayorQuote,
} from "../../../components/portals/sector-portal";

const insights = [
  {
    title: "Road Construction Analysis",
    text: "Sector 4 road works proceeding at 94% efficiency. Lane closures optimized for minimal traffic disruption.",
  },
  {
    title: "Predictive Maintenance",
    text: "Main Road B overpass flagged for structural review within 14 days. AI recommends night-window inspection crew.",
  },
];

export default function UrbanPlanningPortal() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-8 max-w-6xl mx-auto space-y-6">
      <PageHeader title="Urban Development Engine" subtitle="Project Management & Structural Intelligence" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Gauge percent={65} label="Operational" sublabel="Health Score" />
            <Gauge percent={82} label="Project" sublabel="Completion Rate" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard label="Project Completion" value="82.4%" sub="On Track" highlight="green" />
            <StatCard label="Budget vs Actual" value="-4.2%" sub="Under Budget" highlight="green" />
            <StatCard label="Maintenance Queue" value="127" sub="Open Tickets" />
          </div>

          <div className="glass-card p-6 space-y-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">AI Structural Insights</h3>
            {insights.map((item) => (
              <div key={item.title} className="bg-black/20 border border-white/5 rounded-xl p-4">
                <p className="text-[#D4A017] text-[10px] font-black uppercase tracking-widest">{item.title}</p>
                <p className="text-gray-400 text-[11px] mt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="glass-card-gold p-5 border-[#D4A017]/30">
            <p className="text-[#D4A017] text-[9px] font-black uppercase tracking-widest mb-2">Mayor&apos;s Directive</p>
            <p className="text-white text-sm font-semibold">Accelerate Adama Cross-Bridge completion by Q3.</p>
            <p className="text-gray-500 text-[10px] mt-2">Priority infrastructure — all departments aligned.</p>
          </div>
        </div>

        <MayorQuote quote="Build with vision. Our urban engine must serve generations, not just seasons." buttonText="View Directive Log" />
      </div>
    </div>
  );
}

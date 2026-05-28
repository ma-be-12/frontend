import {
  PageHeader,
  Gauge,
  StatCard,
  AlertBox,
  AiInsight,
} from "../../../components/portals/sector-portal";

const logs = [
  { text: "Pump Station Alpha — Restored", color: "border-[#10B981]" },
  { text: "Solar Array 04 — Online", color: "border-[#D4A017]" },
  { text: "Grid Sector 7 — Maintenance Scheduled", color: "border-blue-500" },
  { text: "Reservoir B — Level Normalized", color: "border-[#10B981]" },
];

export default function WaterEnergyPortal() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-8 max-w-6xl mx-auto space-y-6">
      <PageHeader title="Water & Energy" subtitle="Utilities, Grid & Renewable Operations" />

      <AlertBox
        title="AI Active Alert"
        count="1"
        message="Water pressure fluctuations detected in Sector 4. Automated rerouting engaged. Field team dispatched."
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6">
            <Gauge percent={42} label="System Health" sublabel="Utilities" />
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <StatCard label="Reservoir Levels" value="68.2%" sub="Seasonal Norm" />
              <StatCard label="Grid Stability" value="98.4%" sub="Operational" highlight="green" />
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex justify-between text-[10px] font-bold uppercase mb-3">
              <span className="text-gray-400">Renewable Mix</span>
              <span className="text-[#D4A017]">74% Clean Energy</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden flex">
              <div className="h-full w-[45%] bg-blue-500" title="Hydro" />
              <div className="h-full w-[29%] bg-[#D4A017]" title="Solar" />
              <div className="h-full flex-grow bg-gray-600" title="Other" />
            </div>
            <div className="flex gap-4 mt-3 text-[8px] uppercase text-gray-500 font-bold">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-sm" /> Hydro</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#D4A017] rounded-sm" /> Solar</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-600 rounded-sm" /> Other</span>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Recent Utility Logs</h3>
            <div className="space-y-3">
              {logs.map((log) => (
                <p key={log.text} className={`text-gray-400 text-[11px] border-l-2 pl-3 ${log.color}`}>
                  {log.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <AiInsight>
          Pump Station Alpha restored overnight. Monitor Sector 4 pressure anomalies through 18:00. Clean energy mix trending positive — solar contribution up 3.2% this month.
        </AiInsight>
      </div>
    </div>
  );
}

import {
  PageHeader,
  Gauge,
  StatCard,
  AiInsight,
} from "../../../components/portals/sector-portal";

const devPlans = [
  { name: "Tech-Hub Extension Phase II", zone: "North-East Corridor" },
  { name: "Riverfront Sustainability Zone", zone: "Geda Sector" },
];

export default function InfrastructurePortal() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-8 max-w-6xl mx-auto space-y-6">
      <PageHeader title="Zoning & Development" subtitle="Urban Planning & Land Allocation Control" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <Gauge percent={68} label="Zoning Performance" sublabel="Index" />
            </div>
            <AiInsight title="AI Strategic Briefing">
              Land allocation in the North-East Corridor is at 92% capacity. Three commercial permits pending expedited review for Q4 economic zone expansion.
            </AiInsight>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button type="button" className="py-3 bg-[#D4A017] text-black font-black text-[10px] uppercase tracking-widest rounded-xl">
                Review Zoning
              </button>
              <button type="button" className="py-3 border border-white/20 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:border-[#D4A017]">
                View Alerts
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard label="Permit Approval Time" value="12.4 Days" sub="Below Target" highlight="green" />
            <StatCard label="Green Space Ratio" value="24.2%" sub="+1.1% Quarter" highlight="green" />
          </div>

          <StatCard label="Planned Developments" value="342" sub="Active Sites" />

          <div className="glass-card p-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Active Development Plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devPlans.map((plan) => (
                <div key={plan.name} className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a2332] to-[#0B0F19]">
                  <div className="aspect-[4/3] flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="text-[#D4A017] text-[10px] font-black uppercase tracking-widest">{plan.name}</p>
                      <p className="text-gray-600 text-[9px] mt-2 uppercase">{plan.zone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AiInsight>
          Sector 7 commercial corridor zoning review scheduled. Green space targets on track for annual municipal sustainability goals.
        </AiInsight>
      </div>
    </div>
  );
}

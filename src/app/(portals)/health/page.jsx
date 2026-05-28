import {
  PageHeader,
  Gauge,
  BriefingCards,
  StatCard,
  AlertBox,
  ReportsList,
  MayorQuote,
  AiInsight,
} from "../../../components/portals/sector-portal";

export default function HealthPortal() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-8 max-w-6xl mx-auto space-y-6">
      <PageHeader
        title="Health Department"
        subtitle="Real-Time City-Wide Wellness Monitoring"
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6">
            <Gauge percent={72} label="Health Index" sublabel="Department" />
            <div className="flex-grow w-full space-y-4">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest">AI Daily Briefing</h3>
              <BriefingCards
                items={[
                  { title: "Immunization Coverage", value: "87%", desc: "Coverage reached 89% in Kebele 04 this week." },
                  { title: "Hospital Readiness", value: "15%", desc: "Adama General reports 15% surge capacity available." },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Active Clinic Count" value="124" />
            <StatCard label="Emergency Beds" value="42" sub="Staffing Optimized" highlight="green" />
          </div>

          <AlertBox
            title="Public Health Alerts"
            count="3"
            message="Seasonal flu advisory issued for low-land districts. Mobile clinics deploying to Kebele 04 and Geda Sector 2."
          />

          <ReportsList
            reports={[
              { title: "Weekly Mortality Audit", meta: "PDF • 2.1 MB" },
              { title: "Water Quality Analysis", meta: "PDF • 1.4 MB" },
            ]}
          />
        </div>

        <div className="space-y-6">
          <AiInsight>
            Clinic utilization in Sector 4 is 18% above forecast. Recommend reallocating 6 emergency beds and scheduling preventive outreach for Q4.
          </AiInsight>
          <MayorQuote quote="The health of our citizens is the foundation of Adama's future. Every clinic, every bed, every outreach program strengthens our City Brain." />
        </div>
      </div>
    </div>
  );
}

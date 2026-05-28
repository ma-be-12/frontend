import {
  PageHeader,
  Gauge,
  StatCard,
  ReportsList,
  MayorQuote,
  AiInsight,
} from "../../../components/portals/sector-portal";
import { TrendingUp } from "lucide-react";

export default function EducationPortal() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-8 max-w-6xl mx-auto space-y-6">
      <PageHeader title="Education Sector" subtitle="Schools & Learning Outcomes Command" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6">
            <Gauge percent={91} label="Efficiency" sublabel="System Health" />
            <AiInsight title="AI Strategic Insight">
              Literacy rates in the East District surged by 12% following the digital classroom initiative. Infrastructure monitoring shows 98.2% teacher allocation across all zones.
            </AiInsight>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard label="Student Enrollment" value="142,500" sub="+4.2%" highlight="green" />
            <StatCard label="Teacher Allocation" value="98.2%" sub="Optimal" highlight="green" />
            <div className="glass-card p-4 sm:p-5">
              <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">Graduation Rate</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-white text-2xl font-black">89.4%</span>
                <TrendingUp size={18} className="text-[#10B981]" />
              </div>
              <div className="h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
                <div className="h-full w-[89.4%] bg-[#D4A017] rounded-full" />
              </div>
            </div>
          </div>

          <ReportsList
            reports={[
              { title: "Annual Literacy Review Q4", meta: "PDF • 3.8 MB" },
              { title: "Teacher Performance Index", meta: "XLS • 1.2 MB" },
            ]}
          />
        </div>

        <MayorQuote quote="Education is the pulse of our City Brain. When our students rise, Adama rises with them." />
      </div>
    </div>
  );
}

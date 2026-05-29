"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap, ArrowUpRight, ShieldAlert, Sparkles, RefreshCw, Languages } from "lucide-react";

export default function MayorDashboard() {
  const [stats, setStats] = useState([
    { label: "Total Population", val: "542,801", grow: "+2.4% Annual Growth" },
    { label: "Annual Budget", val: "ETB 4.2B", grow: "84% Utilized" },
    { label: "Active Projects", val: "1,248", grow: "-12% This Week" },
    { label: "Infrastructure Index", val: "42", grow: "12 Near Completion" },
  ]);

  const [departments, setDepartments] = useState([
    { name: "Public Infrastructure", pct: 78, status: "warning" },
    { name: "Health & Sanitation", pct: 88, status: "optimal" },
    { name: "Education Services", pct: 96, status: "stable" },
    { name: "Water & Energy", pct: 79, status: "stable" },
    { name: "Finance & Budget", pct: 84, status: "optimal" },
  ]);

  const [anomalies, setAnomalies] = useState([
    { title: "Asphalt delivery delays near Bole", sector: "Sector 4", severity: "medium" },
    { title: "Water main pressure drop Kebele 04", sector: "Kebele 04", severity: "medium" },
    { title: "Delayed school renovation Melka Adama", sector: "Melka Adama", severity: "low" },
  ]);

  const [briefing, setBriefing] = useState({
    content_en: "Loading overnight data synthesis across all municipal sectors...",
    content_am: "የአዳማ ከተማ አእምሮ ዕለታዊ ትንተና በመጫን ላይ ነው...",
    briefing_date: "2026-05-29"
  });

  const [language, setLanguage] = useState("en"); // "en" or "am"
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const recentActivity = [
    { title: "Budget approval for Sector 4 roads", time: "2h ago", tag: "Finance" },
    { title: "EMS dispatched to flood zone B", time: "4h ago", tag: "Emergency" },
    { title: "1,240 citizen complaints triaged by AI", time: "6h ago", tag: "Citizen" },
    { title: "Q3 audit report submitted", time: "Yesterday", tag: "Audit" },
  ];

  // Fetch data from the Python API backend
  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // 1. Fetch latest AI briefing
      const briefingRes = await fetch("http://localhost:8000/api/briefing/latest");
      if (briefingRes.ok) {
        const briefingData = await briefingRes.json();
        setBriefing(briefingData);
      }

      // 2. Fetch live department stats
      const deptRes = await fetch("http://localhost:8000/api/departments");
      if (deptRes.ok) {
        const deptData = await deptRes.json();
        // Map the backend structure to frontend structure
        const mappedDepts = deptData.map(d => ({
          name: d.name,
          pct: parseInt(d.key_metric_value) || 80,
          status: d.status
        }));
        setDepartments(mappedDepts);
      }

      // 3. Fetch anomalies
      const anomalyRes = await fetch("http://localhost:8000/api/anomalies");
      if (anomalyRes.ok) {
        const anomalyData = await anomalyRes.json();
        setAnomalies(anomalyData);
      }

      // 4. Fetch general stats
      const statsRes = await fetch("http://localhost:8000/api/stats");
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats([
          { label: "Total Population", val: statsData.population, grow: "+2.4% Annual Growth" },
          { label: "Annual Budget", val: statsData.budget, grow: "84% Utilized" },
          { label: "Active Projects", val: statsData.active_projects, grow: "-12% This Week" },
          { label: "Infrastructure Index", val: statsData.infrastructure_index, grow: "12 Near Completion" },
        ]);
      }
    } catch (error) {
      print("Error fetching backend API data, using local seeds:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateBriefing = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("http://localhost:8000/briefing/generate", { method: "POST" });
      if (res.ok) {
        alert("Gemini AI has completed a new briefing analysis!");
        fetchDashboardData();
      }
    } catch (err) {
      alert("Failed to connect to Python backend server.");
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 lg:p-8 space-y-6 pb-8">
      {/* Dashboard Title */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-white font-black text-lg uppercase tracking-[0.2em] italic">
            Mayor Dashboard
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">
            Municipal Executive Command Center (Integrated with Gemini Core)
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={fetchDashboardData}
            className="p-2 border border-white/10 hover:border-white/30 rounded-lg text-gray-400 hover:text-white transition-colors"
            title="Refresh Live Data"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </button>
          
          <button
            onClick={handleGenerateBriefing}
            disabled={isGenerating}
            className="px-4 py-2 border border-[#D4A017]/40 text-[#D4A017] hover:bg-[#D4A017] hover:text-black font-bold text-[9px] uppercase tracking-widest rounded-lg flex items-center gap-1.5 transition-all"
          >
            <Sparkles size={12} />
            {isGenerating ? "Gemini Synthesizing..." : "Trigger AI Analysis"}
          </button>

          <span className="text-[9px] text-gray-600 uppercase tracking-widest hidden sm:inline">
            Last sync: {briefing.briefing_date || "Live"}
          </span>
        </div>
      </div>

      {/* Numerical Stats Grid */}
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

      {/* Main Multi-Column Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          
          {/* Charts/Visualization Panel */}
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

          {/* Live Department Metrics */}
          <div className="glass-card p-6 lg:p-8">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Departmental Performance & Health Indicators
            </h3>
            <div className="space-y-5">
              {departments.map((d) => (
                <div key={d.name} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase">
                    <span className="text-gray-400">{d.name}</span>
                    <span className="flex gap-2 items-center">
                      <span className={`w-1.5 h-1.5 rounded-full ${d.status === 'warning' ? 'bg-yellow-500' : 'bg-[#10B981]'}`} />
                      <span className="text-white">{d.pct}%</span>
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full shadow-[0_0_10px_#10B981] ${d.status === 'warning' ? 'bg-yellow-500' : 'bg-[#10B981]'}`}
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities List */}
          <div className="glass-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest">
                Recent Logged Operations
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

        {/* AI Briefing Panel (Right Column) */}
        <div className="space-y-6">
          <div className="glass-card-gold p-6 relative" style={{ borderLeft: '3px solid #D4A017' }}>
            <Zap size={16} className="absolute top-4 right-4 text-[#D4A017]" />
            
            <div className="flex justify-between items-center mb-4 pr-6">
              <h4 className="text-[#D4A017] text-[10px] font-black uppercase tracking-[0.2em]">
                AI Daily Briefing
              </h4>
              
              <button
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className="px-2 py-0.5 border border-white/10 hover:border-white/30 text-white hover:text-[#D4A017] text-[8px] rounded transition-all flex items-center gap-1"
              >
                <Languages size={10} />
                {language === "en" ? "አማርኛ" : "English"}
              </button>
            </div>

            <div className="text-gray-300 text-[11px] leading-relaxed whitespace-pre-line p-3 bg-black/30 rounded-lg border border-white/5 max-h-[350px] overflow-y-auto">
              {language === "en" ? briefing.content_en : briefing.content_am}
            </div>

            <Link
              href="/ai-chat"
              className="mt-6 block w-full py-3 text-center border border-[#D4A017]/50 text-[#D4A017] font-bold text-[10px] uppercase rounded-xl hover:bg-[#D4A017] hover:text-black transition-all"
            >
              Consult AI Assistant
            </Link>
          </div>

          {/* Active Incident Warning Alert */}
          <div className="glass-card border-red-500/30 bg-red-950/30 p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="text-red-400 text-[9px] font-black uppercase tracking-widest">
                Active Incidents (Anomalies)
              </span>
              <span className="bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold animate-pulse">
                LIVE
              </span>
            </div>
            
            <div className="space-y-3 mt-4">
              {anomalies.map((a, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-red-950/20 border border-red-500/10">
                  <p className="text-white text-[11px] font-bold">{a.title}</p>
                  <p className="text-red-400/70 text-[9px] uppercase mt-0.5">{a.sector}</p>
                </div>
              ))}
            </div>

            <Link
              href="/emergency"
              className="block w-full py-3 mt-6 text-center bg-red-600 text-white font-black text-[10px] uppercase rounded-xl hover:bg-red-500 transition-colors"
            >
              Access Emergency Command
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

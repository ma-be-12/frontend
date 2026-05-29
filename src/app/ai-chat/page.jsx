"use client";

import { useEffect, useState } from "react";
import { Send, Sparkles, TrendingUp, AlertCircle, Zap, RefreshCw, Languages } from "lucide-react";

export default function AIChatPage() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      sender: "AI",
      text: "Good morning, Mayor. I've finished scanning the municipal sectors. Review the briefing summary in the card above or consult with me below."
    }
  ]);
  
  const [efficiencyStats, setEfficiencyStats] = useState([
    { label: "Grid Stability", value: 90.4, color: "bg-[#D4A017]" },
    { label: "Resource Allocation", value: 82, color: "bg-blue-500" },
    { label: "Response Time", value: 89, color: "bg-[#10B981]" },
  ]);

  const [anomalies, setAnomalies] = useState([
    { title: "Power Grid Leak", sector: "Sector 7", severity: "high" },
    { title: "Traffic Congestion", sector: "Main Road B", severity: "medium" },
    { title: "Water Pressure Drop", sector: "Sector 4", severity: "medium" },
  ]);

  const [briefing, setBriefing] = useState({
    content_en: "Analyzing live municipal database status...",
    content_am: "የከተማዋን መረጃ በቅርብ እያጠናሁ ነው...",
    briefing_date: "2026-05-29"
  });

  const [language, setLanguage] = useState("en"); // "en" or "am"
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  // Fetch live metrics
  const fetchAIData = async () => {
    setLoading(true);
    try {
      const briefingRes = await fetch("http://localhost:8000/api/briefing/latest");
      if (briefingRes.ok) {
        const data = await briefingRes.json();
        setBriefing(data);
      }

      const anomalyRes = await fetch("http://localhost:8000/api/anomalies");
      if (anomalyRes.ok) {
        const anomalyData = await anomalyRes.json();
        setAnomalies(anomalyData);
      }

      const deptsRes = await fetch("http://localhost:8000/api/departments");
      if (deptsRes.ok) {
        const deptData = await deptsRes.json();
        // Calculate dynamic stats
        let healthVal = 85;
        let flowVal = 80;
        let budgetVal = 75;
        deptData.forEach(d => {
          const val = parseInt(d.key_metric_value) || 80;
          if (d.id === 'health') healthVal = val;
          else if (d.id === 'water') flowVal = val;
          else if (d.id === 'finance') budgetVal = val;
        });

        setEfficiencyStats([
          { label: "Sector Flow Stability", value: flowVal, color: "bg-[#D4A017]" },
          { label: "Budget Utilization", value: budgetVal, color: "bg-blue-500" },
          { label: "Health Efficiency Index", value: healthVal, color: "bg-[#10B981]" },
        ]);
      }
    } catch (err) {
      console.log("Failed to fetch live AI data, using local mock fallbacks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAIData();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = message;
    setChatLog((prev) => [...prev, { sender: "Mayor", text: userMsg }]);
    setMessage("");
    setIsSending(true);

    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMsg })
      });
      
      if (res.ok) {
        const data = await res.json();
        setChatLog((prev) => [...prev, { sender: "AI", text: data.response }]);
      } else {
        setChatLog((prev) => [...prev, { sender: "AI", text: "Neural core timeout. Please check Python console logs." }]);
      }
    } catch (err) {
      setChatLog((prev) => [...prev, { sender: "AI", text: "Failed to connect to the Adama City Brain Python server." }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 pb-8 flex flex-col min-h-[calc(100vh-8rem)] animate-slide-in">
      {/* Page Title */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-4">
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

        <button
          onClick={() => setLanguage(language === "en" ? "am" : "en")}
          className="px-3 py-1 border border-white/10 hover:border-white/30 text-white hover:text-[#D4A017] text-[10px] font-bold uppercase rounded-lg transition-all flex items-center gap-1.5"
        >
          <Languages size={12} />
          {language === "en" ? "አማርኛ (Amharic)" : "English"}
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-grow">
        
        {/* Chat Column */}
        <div className="xl:col-span-2 flex flex-col gap-6 min-h-0">
          
          {/* Daily Briefing Summary Card */}
          <div className="glass-card-gold p-6 relative border-l-4 border-[#D4A017] bg-[#D4A017]/5">
            <Zap size={14} className="absolute top-4 right-4 text-[#D4A017]" />
            <h4 className="text-[#D4A017] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              Gemini Synthesized Executive Summary
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">
              {language === "en" ? briefing.content_en : briefing.content_am}
            </p>
          </div>

          {/* Interactive Chat Console */}
          <div className="flex-grow glass-card p-6 flex flex-col min-h-[300px] overflow-hidden">
            <div className="flex-grow overflow-y-auto space-y-5 pr-2 mb-4 max-h-[300px]">
              {chatLog.map((chat, idx) => (
                <div key={idx} className={`flex gap-3 ${chat.sender === "Mayor" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-bold shrink-0 ${
                    chat.sender === "Mayor" 
                      ? "bg-[#D4A017] text-black" 
                      : "bg-white/5 border border-white/10 text-gray-500"
                  }`}>
                    {chat.sender === "Mayor" ? "M" : "AI"}
                  </div>
                  <div className={`p-4 rounded-2xl max-w-[85%] ${
                    chat.sender === "Mayor" 
                      ? "bg-[#D4A017]/10 border border-[#D4A017]/20 rounded-tr-none text-white" 
                      : "glass-card rounded-tl-none text-gray-300"
                  }`}>
                    <p className="text-sm leading-relaxed">{chat.text}</p>
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-bold text-gray-500 shrink-0">
                    AI
                  </div>
                  <div className="glass-card p-4 rounded-2xl rounded-tl-none text-gray-500 text-xs italic animate-pulse">
                    Analyzing sectors...
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="relative flex-shrink-0 mt-auto">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Command City Brain (e.g. 'Show water pressure', 'Verify budget')..."
                className="w-full bg-black/40 border border-white/10 p-4 pr-14 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#D4A017] rounded-lg flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Stats Column */}
        <div className="space-y-6">
          
          {/* Efficiency Stats Card */}
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
                      className={`h-full rounded-full transition-all duration-1000 ${stat.color}`}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Anomalies List */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <AlertCircle size={14} className="text-red-400" />
              Active Anomalies
            </h3>
            <div className="space-y-3">
              {anomalies.map((a, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <p className="text-white text-[11px] font-semibold">{a.title}</p>
                  <p className="text-gray-600 text-[9px] uppercase mt-0.5">{a.sector}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Index Card */}
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

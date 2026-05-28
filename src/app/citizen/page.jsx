"use client";

import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  Activity,
  Upload,
  Users,
  MapPin,
} from "lucide-react";

const lifecycleSteps = [
  { label: "Submitted", done: true, icon: FileText },
  { label: "AI Triage & Categorization", done: true, active: true, icon: Activity },
  { label: "Department Assignment", done: false, icon: Users },
  { label: "Field Verification", done: false, icon: MapPin },
  { label: "Resolution & Feedback", done: false, icon: CheckCircle2 },
];

export default function ComplaintPage() {
  return (
    <div className="p-6 lg:p-8 pb-8">
      <div className="mb-6">
        <h1 className="text-white font-black text-lg uppercase tracking-[0.2em] italic">
          Citizen Complaint Portal
        </h1>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 max-w-xl">
          Submit governance or infrastructure issues for AI triage and municipal routing • Ref:{" "}
          <span className="text-[#D4A017]">ADM-4921X</span>
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <form
          className="xl:col-span-2 glass-card p-6 lg:p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Abebe Bikila"
                className="w-full bg-black/40 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue="+251 912 345 678"
                className="w-full bg-black/40 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                Location / Ward
              </label>
              <select className="w-full bg-black/40 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]">
                <option>Bole Sub-city, Adama</option>
                <option>Geda Sector 4</option>
                <option>Central Adama</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
                Complaint Category
              </label>
              <select
                defaultValue="Infrastructure / Roads"
                className="w-full bg-black/40 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#D4A017]"
              >
                <option>Infrastructure / Roads</option>
                <option>Water Leakage / Supply</option>
                <option>Electrical Outage</option>
                <option>Waste Disposal</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
              Detailed Description
            </label>
            <textarea
              rows={5}
              placeholder="Describe the issue in detail..."
              className="w-full bg-black/40 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#D4A017] resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">
              Supporting Evidence (Photos / Video)
            </label>
            <div className="border border-dashed border-white/15 rounded-xl p-10 flex flex-col items-center justify-center text-gray-500 hover:border-[#D4A017]/40 transition-colors cursor-pointer bg-black/20">
              <Upload size={28} className="mb-3 text-gray-600" />
              <p className="text-[10px] uppercase font-bold tracking-widest">
                Drag & drop or click to upload
              </p>
              <p className="text-[9px] mt-1">PNG, JPG, MP4 up to 25MB</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              className="py-4 border border-white/20 text-gray-400 font-bold text-xs uppercase tracking-widest rounded-xl hover:border-white/40 hover:text-white transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="py-4 bg-[#D4A017] text-black font-black text-xs uppercase tracking-[0.15em] rounded-xl hover:bg-yellow-500 transition-colors shadow-[0_10px_30px_rgba(212,160,23,0.3)]"
            >
              Submit to Brain
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Complaint Lifecycle
            </h3>
            <div className="space-y-1">
              {lifecycleSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex gap-4 py-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border ${
                        step.active
                          ? "bg-[#D4A017] border-[#D4A017] text-black shadow-[0_0_15px_rgba(212,160,23,0.4)]"
                          : step.done
                            ? "bg-[#D4A017]/30 border-[#D4A017]/50 text-[#D4A017]"
                            : "bg-[#0B0F19] border-white/10 text-gray-600"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="pt-1.5">
                      <p
                        className={`text-[10px] font-bold uppercase leading-tight ${
                          step.active ? "text-[#D4A017]" : step.done ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card border-red-500/25 bg-red-950/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-red-400" />
              <h3 className="text-red-400 text-[10px] font-black uppercase tracking-widest">
                AI Priority Matrix
              </h3>
            </div>
            <div className="text-center py-3">
              <p className="text-white text-5xl font-black">88</p>
              <p className="text-gray-500 text-[9px] uppercase tracking-widest mt-1">
                Priority Score / 100
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-gray-500 text-[9px] uppercase">Priority Level</p>
                <p className="text-red-400 font-black text-lg uppercase">High</p>
              </div>
              <div>
                <p className="text-gray-500 text-[9px] uppercase">Status</p>
                <p className="text-[#D4A017] font-black text-lg">Tier 2</p>
              </div>
            </div>
            <p className="text-gray-400 text-[10px] mt-4 leading-relaxed">
              AI recommends expedited routing to Infrastructure & Roads department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

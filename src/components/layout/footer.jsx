"use client";

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full bg-black/50 backdrop-blur-md border-t border-white/5">
      <div className="h-10 px-8 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.15em] text-gray-600">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full shadow-[0_0_6px_#D4A017]" />
            Digital Equity Act
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Green Corridor Initiative
          </span>
        </div>
        <div className="flex gap-8 items-center">
          <span>
            Sync: <span className="text-[#10B981]">Active</span>
          </span>
          <span>
            Data: <span className="text-white">Encrypted AES-256</span>
          </span>
          <span className="text-[#D4A017] border border-[#D4A017]/25 px-3 py-1 rounded bg-[#D4A017]/5">
            SESSION ID: ADM-EX-88120
          </span>
        </div>
      </div>
    </footer>
  );
}

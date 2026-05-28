export default function BrainLogo({ size = "md" }) {
  const box = size === "sm" ? "w-8 h-8 text-xs" : "w-9 h-9 text-sm";
  return (
    <div
      className={`${box} rounded-lg border border-[#D4A017]/60 bg-[#D4A017]/10 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(212,160,23,0.15)]`}
    >
      <span className="text-[#D4A017] font-black">A</span>
    </div>
  );
}

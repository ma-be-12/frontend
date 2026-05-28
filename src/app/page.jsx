import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-10">
      <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] bg-[#D4A017]/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,160,23,0.2)]">
        <span className="text-[#D4A017] font-black text-2xl">A</span>
      </div>
      <h1 className="text-4xl lg:text-5xl font-black text-white tracking-[0.2em] mb-4 uppercase italic">
        Adama City Brain
      </h1>
      <p className="text-gray-500 max-w-lg uppercase text-xs tracking-widest leading-loose">
        Municipal Executive Command Center. Select a secure portal to begin.
      </p>

      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        <Link
          href="/mayor"
          className="px-8 py-3 bg-[#D4A017] text-black font-bold rounded-xl hover:bg-yellow-500 transition-all uppercase text-xs tracking-widest"
        >
          Mayor Dashboard
        </Link>
        <Link
          href="/finance"
          className="px-8 py-3 border border-white/20 text-white font-bold rounded-xl hover:border-[#D4A017] transition-all uppercase text-xs tracking-widest"
        >
          Finance Portal
        </Link>
        <Link
          href="/citizen"
          className="px-8 py-3 border border-white/20 text-white font-bold rounded-xl hover:border-[#D4A017] transition-all uppercase text-xs tracking-widest"
        >
          Submit Complaint
        </Link>
        <Link
          href="/login"
          className="px-8 py-3 border border-white/20 text-gray-400 font-bold rounded-xl hover:border-[#D4A017] hover:text-white transition-all uppercase text-xs tracking-widest"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

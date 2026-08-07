import type { Color } from "@/config/colors";

export default function ResultCard({ color }: { color: Color }) {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-3xl border border-slate-200 bg-white px-8 py-6 text-center shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
      <p className="text-sm font-semibold uppercase text-slate-400">
        Tu color es
      </p>
      <span className="flex items-center gap-3">
        <span
          className="inline-block h-7 w-7 rounded-full shadow-sm ring-4 ring-slate-100"
          style={{ backgroundColor: color.hex }}
        />
        <span
          className="font-nacelle text-4xl font-semibold uppercase"
          style={{ color: color.hex }}
        >
          {color.name}
        </span>
      </span>
    </div>
  );
}

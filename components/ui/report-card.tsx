import { motion } from "framer-motion";

const toneMap: Record<string, string> = {
  sky: "bg-sky-500/80",
  emerald: "bg-emerald-500/80",
  violet: "bg-violet-500/80",
  amber: "bg-amber-500/80",
  slate: "bg-slate-500/80",
};

export function ReportCard({
  title,
  value,
  delta,
  tone,
}: {
  title: string;
  value: string;
  delta: string;
  tone: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[1.75rem] border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-900/5"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
          {title}
        </p>
        <div
          className={`h-2.5 w-2.5 rounded-full ${toneMap[tone] ?? toneMap.slate}`}
        />
      </div>
      <p className="mt-4 text-3xl font-semibold text-slate-950">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-500">
        {delta} vs last period
      </p>
    </motion.div>
  );
}

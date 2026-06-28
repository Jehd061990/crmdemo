"use client";

import { motion } from "framer-motion";
import { PriorityBadge } from "@/components/ui/priority-badge";

export function PipelineCard({
  company,
  contact,
  value,
  priority,
}: {
  company: string;
  contact: string;
  value: string;
  priority: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-[1.75rem] border border-slate-200/90 bg-white px-5 py-4 shadow-sm shadow-slate-900/5"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-900">{company}</p>
        <PriorityBadge priority={priority} />
      </div>
      <p className="text-sm text-slate-600">{contact}</p>
      <div className="mt-4 flex items-center justify-between gap-4 text-sm text-slate-500">
        <span>{value}</span>
        <span className="uppercase tracking-[0.2em] text-slate-400">Deal</span>
      </div>
    </motion.div>
  );
}

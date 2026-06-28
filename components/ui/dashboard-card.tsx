"use client";

import { motion } from "framer-motion";

export function DashboardCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`rounded-[2rem] border border-slate-200/90 bg-white shadow-sm shadow-slate-900/5 p-6 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Won"
      ? "bg-emerald-100 text-emerald-700"
      : status === "Negotiation"
        ? "bg-amber-100 text-amber-700"
        : status === "Proposal"
          ? "bg-violet-100 text-violet-700"
          : status === "Qualified"
            ? "bg-sky-100 text-sky-700"
            : "bg-slate-100 text-slate-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${tone}`}
    >
      {status}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: string }) {
  const tone =
    priority === "High"
      ? "bg-rose-100 text-rose-700"
      : priority === "Medium"
        ? "bg-amber-100 text-amber-700"
        : "bg-slate-100 text-slate-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${tone}`}
    >
      {priority}
    </span>
  );
}

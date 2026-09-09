import { AlertTriangle, CheckCircle2, Info, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  info: {
    Icon: Info,
    label: "Note",
    border: "border-sky-500/40",
    chip: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  },
  warn: {
    Icon: AlertTriangle,
    label: "Heads up",
    border: "border-amber-500/40",
    chip: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  tip: {
    Icon: Lightbulb,
    label: "Pro tip",
    border: "border-violet-500/40",
    chip: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
  },
  success: {
    Icon: CheckCircle2,
    label: "Success",
    border: "border-emerald-500/40",
    chip: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
} as const;

export type CalloutType = keyof typeof variants;

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const { Icon, label, border, chip } = variants[type] ?? variants.info;
  return (
    <aside className={`my-6 rounded-xl border ${border} bg-card p-4 sm:p-5`}>
      <div className="flex gap-3">
        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${chip}`}>
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0 text-sm leading-6">
          <p className="font-semibold">{title ?? label}</p>
          <div className="mt-1 text-muted [&_code]:rounded [&_code]:bg-foreground/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-foreground">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

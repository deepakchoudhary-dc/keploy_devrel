import type { ReactNode } from "react";

export default function StepCard({
  n,
  title,
  children,
}: {
  n: string | number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="my-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white">
          {n}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-foreground/90 [&_code]:rounded [&_code]:bg-foreground/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_a]:text-violet-600 [&_a]:underline [&_a]:decoration-violet-400/50 [&_a]:underline-offset-4 [&_a:hover]:decoration-violet-500 dark:[&_a]:text-violet-400">
        {children}
      </div>
    </section>
  );
}

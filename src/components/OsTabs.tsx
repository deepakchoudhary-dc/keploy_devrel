"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type OsTab = { label: string; content: ReactNode };

export default function OsTabs({ tabs }: { tabs: OsTab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-card">
      <div role="tablist" className="flex border-b border-border text-sm">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 font-medium transition-colors ${
              i === active
                ? "border-b-2 border-violet-500 text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="p-4 sm:p-5 [&>div]:my-0">{tabs[active]?.content}</div>
    </div>
  );
}

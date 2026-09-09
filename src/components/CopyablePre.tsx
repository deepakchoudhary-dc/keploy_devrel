"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import type { ReactNode } from "react";

export default function CopyablePre({
  children,
  code,
}: {
  children?: ReactNode;
  code?: string;
}) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  async function onCopy() {
    const text = code ?? ref.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  const button = (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy to clipboard"
      className="absolute right-3 top-3 rounded-md border border-white/10 bg-white/10 p-1.5 text-zinc-300 opacity-0 backdrop-blur transition group-hover:opacity-100 focus:opacity-100"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );

  if (code !== undefined) {
    return (
      <div className="group relative my-5">
        <pre className="overflow-x-auto rounded-xl bg-[#0d1117] p-4 font-mono text-[0.8125rem] leading-7 text-zinc-100">
          <code>{code}</code>
        </pre>
        {button}
      </div>
    );
  }

  return (
    <div ref={ref} className="group relative my-5">
      {children}
      {button}
    </div>
  );
}

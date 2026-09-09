export default function TerminalWindow({
  title = "terminal",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-lg">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-zinc-400">{title}</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[0.78rem] leading-6 text-zinc-200">
        {children}
      </pre>
    </div>
  );
}

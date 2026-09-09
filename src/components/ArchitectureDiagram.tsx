import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Database,
  FileCode2,
  FlaskConical,
  Play,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import type { ReactNode } from "react";

function Chip({
  icon,
  title,
  sub,
  accent = false,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${
        accent
          ? "border-violet-500/50 bg-violet-500/10"
          : "border-border bg-background"
      }`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-violet-600 dark:text-violet-400">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-[13px] font-semibold">{title}</span>
        <span className="block text-[11px] text-muted">{sub}</span>
      </span>
    </div>
  );
}

function Arrow() {
  return <ArrowRight className="h-4 w-4 shrink-0 text-muted" />;
}

export default function ArchitectureDiagram() {
  return (
    <div className="my-8 space-y-4 rounded-2xl border border-border bg-card p-5">
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
          <CircleDot className="h-3.5 w-3.5 text-sky-500" />
          Record mode — watch real traffic, save everything
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Chip icon={<Terminal className="h-4 w-4" />} title="curl / Postman" sub="your real API calls" />
          <Arrow />
          <Chip icon={<FlaskConical className="h-4 w-4" />} title="Keploy (eBPF)" sub="hooks the network layer" accent />
          <Arrow />
          <Chip icon={<Play className="h-4 w-4" />} title="Gin app :8080" sub="handles the request" />
          <Arrow />
          <Chip icon={<Database className="h-4 w-4" />} title="MongoDB" sub="answers the query" />
        </div>
        <p className="mt-3 flex items-center gap-2 text-xs text-muted">
          <FileCode2 className="h-3.5 w-3.5" />
          Artifacts written to your repo: <code className="rounded bg-foreground/10 px-1 font-mono">keploy/test-set-0/tests/</code>
          (test cases) + <code className="rounded bg-foreground/10 px-1 font-mono">keploy/test-set-0/mocks.yaml</code> (dependency mocks)
        </p>
      </div>
      <div className="border-t border-dashed border-border" />
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
          <CircleDot className="h-3.5 w-3.5 text-emerald-500" />
          Test mode — replay with zero infrastructure
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Chip icon={<FlaskConical className="h-4 w-4" />} title="keploy test" sub="replays saved calls" accent />
          <Arrow />
          <Chip icon={<Play className="h-4 w-4" />} title="Gin app :8080" sub="starts fresh, talks to mocks" />
          <Arrow />
          <Chip icon={<ShieldCheck className="h-4 w-4" />} title="Mocked Mongo" sub="replays recorded responses" />
          <Arrow />
          <Chip icon={<CheckCircle2 className="h-4 w-4" />} title="Assertions" sub="diff actual vs. expected" />
        </div>
      </div>
    </div>
  );
}

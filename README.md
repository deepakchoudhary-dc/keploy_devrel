# Zero Handwritten Mocks — Keploy × Gin + MongoDB Tutorial

A single-page, documentation-style tutorial built with **Next.js (App Router) + MDX + Tailwind CSS**, written from a **real, end-to-end Keploy run** — not from the existing docs.

## What's inside

- **`src/app/tutorial.mdx`** — the entire tutorial is authored in MDX, mixing Markdown with custom React components:
  - `<Callout>` — info / warn / tip / success boxes
  - `<StepCard>` — numbered step containers
  - `<OsTabs>` — interactive OS tabs (Windows WSL2 / Linux / macOS)
  - `<ArchitectureDiagram>` — visual record-vs-test mode diagram
  - `<TerminalWindow>` — real terminal output from the actual run
  - `<CopyablePre>` — copy-to-clipboard code blocks
- **Syntax highlighting** via `rehype-pretty-code` (Shiki)
- **Dark/light mode** with no-flash theme script + toggle
- **`evidence/`** — the *actual* Keploy artifacts from the run:
  - `post-url-1.yaml`, `post-url-2.yaml`, `get-lhr4bwai-1.yaml` — captured test cases
  - `test-set-0-report.yaml` — official report: `status: PASSED`, `total: 3`, `failure: 0`
- **`screenshots/`** — visual proof from the same run:
  - `term-record.png` / `term-test.png` — real terminal captures of `keploy record` and `keploy test`
  - `full-light.png` / `full-dark.png` — full-page renders of this site, both themes

## The real run behind the tutorial

| Milestone | Result |
| --- | --- |
| `keploy record` | 3 test cases captured (`post-url-1`, `post-url-2`, `get-lhr4bwai-1`) + Mongo wire mocks |
| `keploy test` | **3/3 passed, 0 failed, 10.24s** — zero infrastructure (no Mongo container) |

> **"No Mongo container"** means the test replay talks to Keploy's *recorded*
> mocks of the database at the wire-protocol level — the app genuinely believes
> it's talking to MongoDB, but nothing real is running. The mocks themselves
> are real: captured from live traffic during `keploy record`.

Environment: Ubuntu 24.04 on WSL2 (kernel 6.18), Docker Engine 29.1.3, Keploy v3.6.52.

## Local development

```bash
npm install
npm run dev
```

Production build verified with:

```bash
npm run build
```

---

Built for the Keploy DevRel assessment. All results, logs, and artifacts in this repo are from a genuine local run.

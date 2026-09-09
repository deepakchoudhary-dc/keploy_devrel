import Callout from "@/components/Callout";
import OsTabs from "@/components/OsTabs";
import CopyablePre from "@/components/CopyablePre";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import StepCard from "@/components/StepCard";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    OsTabs,
    ArchitectureDiagram,
    StepCard,
    pre: CopyablePre,
  };
}

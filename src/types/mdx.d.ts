declare module "*.mdx" {
  import type { ReactElement } from "react";
  import type { MDXProps } from "mdx/types";

  const MDXContent: (props: MDXProps) => ReactElement;
  export default MDXContent;
}

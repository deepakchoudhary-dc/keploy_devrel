import type { NextConfig } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const rehypePrettyCodeOptions = {
  theme: "github-dark-default",
  keepBackground: false,
};

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  webpack: (config) => {
    config.module?.rules?.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypePrettyCode, rehypePrettyCodeOptions],
            ],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;

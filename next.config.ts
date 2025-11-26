import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "deifkwefumgah.cloudfront.net",
				port: "",
				pathname: "/shadcnblocks/**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "html.tailus.io",
				port: "",
				pathname: "/blocks/customers/**",
				search: "",
			},
		],
	},
};

export default nextConfig;

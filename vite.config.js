import { defineConfig } from "vite";
import * as path from "path";
import * as dns from "dns";

dns.setDefaultResultOrder("verbatim");

/** @type {import('vite').UserConfig} */
export default defineConfig({
	server: {
		port: 5650,
		strictPort: true,
		open: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

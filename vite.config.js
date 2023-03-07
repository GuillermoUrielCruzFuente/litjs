import { defineConfig } from "vite";
import * as dns from "dns";
import { resolve } from "path";

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
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				rick: resolve(__dirname, "./pages/rick.html"),
			},
		},
	},
});

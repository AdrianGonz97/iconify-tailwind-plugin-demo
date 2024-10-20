import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},

	plugins: [iconsPlugin({ collections: getIconCollections(["lucide"]) })],
} as Config;

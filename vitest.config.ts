import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true, // This allows you to use global functions like describe, it, beforeEach, etc.
		environment: "jsdom", // If you're testing React components
		reporters: [["default"]],
	},
});

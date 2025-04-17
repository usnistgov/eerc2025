import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navigation from "../components/Navigation";

describe("Navigation Component", () => {
	beforeEach(() => {
		render(<Navigation />);
	});

	it.skip("renders left menu items", () => {
		expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /blcc/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /handbook 135/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /annual supplement/i })).toBeInTheDocument();
	});

	it.skip("renders right menu items", () => {
		// Check for the main User Guide submenu link
		expect(screen.getByText(/user guide/i)).toBeInTheDocument();

		// Check for the children links within the User Guide submenu
		// expect(screen.getByRole("link", { name: /html/i })).toBeInTheDocument();
		// expect(screen.getByRole("link", { name: /pdf/i })).toBeInTheDocument();
		// expect(screen.getByText(/html/i)).toBeInTheDocument(); // Change here
		// expect(
		// 	screen.getByText((content, element) => {
		// 		return element?.tagName.toLowerCase() === "a" && content.match(/html/i);
		// 	}),
		// ).toBeInTheDocument();
		// expect(screen.getByText(/pdf/i)).toBeInTheDocument(); // Change here
	});

	it.skip("checks the correct URLs for left menu links", () => {
		expect(screen.getByRole("link", { name: /blcc/i })).toHaveAttribute("href", "https://blcc.nist.gov");
		expect(screen.getByRole("link", { name: /handbook 135/i })).toHaveAttribute(
			"href",
			"https://nvlpubs.nist.gov/nistpubs/hb/2022/NIST.HB.135e2022-upd1.pdf",
		);
		expect(screen.getByRole("link", { name: /annual supplement/i })).toHaveAttribute(
			"href",
			"https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.85-3273-39.pdf",
		);
	});

	it.skip("checks the correct URLs for right menu links", () => {
		expect(screen.getByRole("link", { name: /html/i })).toHaveAttribute(
			"href",
			"https://pages.nist.gov/eerc2025//EERC%20User%20Guide%20-%202025.htm",
		);
		expect(screen.getByRole("link", { name: /pdf/i })).toHaveAttribute(
			"href",
			"https://pages.nist.gov/eerc2025//EERC%20User%20Guide%20-%202025.pdf",
		);
	});
});

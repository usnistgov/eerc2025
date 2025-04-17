// YourComponent.test.tsx
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "../components/Form";

import { BehaviorSubject, combineLatest, map } from "rxjs";
import { DataYearType, SectorType, StateType } from "../data/Formats";

describe("Form Component", () => {
	beforeEach(() => {
		render(<Form />);
	});

	it.skip("renders the NIST EERC title", () => {
		expect(
			screen.getByRole("heading", { level: 2, name: /NIST Energy Escalation Rate Calculator/i }),
		).toBeInTheDocument();
	});

	it.skip("renders the instructions", () => {
		expect(
			screen.getByRole("heading", {
				level: 4,
				name: /To use, complete all form fields. Computed results are shown immedately at the bottom of the page./i,
			}),
		).toBeInTheDocument();
	});

	it("renders the with default values", () => {
		// const oilInput = screen.getByTestId("oil");
		// const electricityInput = screen.getByTestId("electricity");
		// const gasInput = screen.getByTestId("naturalGas");
		// const residualInput = screen.getByTestId("residualOil");
		// const totalInput = screen.getByTestId("total");
		// console.log(totalInput);
		expect(mockOilChange$.getValue()).toBe(0);
		expect(mockElectricityChange$.getValue()).toBe(0);
		expect(mockGasChange$.getValue()).toBe(0);
		expect(mockResidualChange$.getValue()).toBe(0);
		expect(mockCoalChange$.getValue()).toBe(0);
	});

	it.skip("updates inflation rate when changed", () => {
		// screen.debug();
		// screen.logTestingPlaygroundURL();
		// const inflationInput = screen.getByTestId("spinbutton", { name: "/inflationRate/i" });
		// console.log(inflationInput);
		// fireEvent.change(inflationInput, { target: { value: "3.5" } });
		// expect(inflationInput).toHaveValue(3.5);
	});

	it("updates oil input value correctly", async () => {
		const oilInput = screen.getByTestId("oil");
		fireEvent.change(oilInput, { target: { value: 30 } });
		console.log(oilInput.nodeValue);

		// Verify that the observable reflects the new value
		expect(mockOilChange$.getValue()).toBe("30");
	});

	// it("should display the default value for data release year", () => {
	// 	// Check if the default value is rendered correctly
	// 	let d = screen.getByText("Data Release Year");
	// 	console.log(d);
	// 	// expect(screen.getAllByText("2024")).map((m) => m.toBeInTheDocument());
	// });
	it.skip("calculates total energy savings correctly", () => {
		mockCoalChange$.next(30);
		mockOilChange$.next(20);
		mockElectricityChange$.next(25);
		mockGasChange$.next(15);
		mockResidualChange$.next(10);

		const totalSum$ = combineLatest([
			mockCoalChange$,
			mockOilChange$,
			mockElectricityChange$,
			mockGasChange$,
			mockResidualChange$,
		]).pipe(
			map((arr) => arr.reduce((acc, sum) => acc + (sum || 0), 0)), // Ensure sum defaults to 0
		);
		totalSum$.subscribe((total) => {
			// Assumed that the total is displayed in the component
			expect(total).toBe(100); // Ensure the total is correctly calculated
		});
	});
});

// Adjust the import path as necessary

// it("renders the form with initial values", () => {
// 	expect(screen.getByText(/NIST Energy Escalation Rate Calculator/i)).toBeInTheDocument();
// 	expect(screen.getByLabelText(/Data Release Year/i)).toHaveValue(DataYearType.CURRENT);
// 	expect(screen.getByLabelText(/Sector/i)).toHaveValue(SectorType.NONE);
// 	expect(screen.getByLabelText(/State/i)).toHaveValue(StateType.State);
// });

// it("generates a PDF when the button is clicked", () => {
// 	const pdfButton = screen.getByRole("button", { name: /Generate PDF/i });
// 	fireEvent.click(pdfButton);

// 	// Add assertions to check if the PDF generation logic is triggered
// 	// This could involve checking if the respective subjects emit the expected values
// 	expect(mockRealRate$.value).toBeGreaterThan(0); // Example assertion
// });

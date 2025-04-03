// YourComponent.test.tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "../components/Form";

// import { BehaviorSubject } from "rxjs";
// import { DataYearType, SectorType, StateType } from "../data/Formats";

// const mockDataYearChange$ = new BehaviorSubject<number>(DataYearType.CURRENT);
// const mockSectorChange$ = new BehaviorSubject<SectorType>(SectorType.NONE);
// const mockStateChange$ = new BehaviorSubject<StateType>(StateType.State);
// const mockZipCodeChange$ = new BehaviorSubject<string>("");
// const mockCoalChange$ = new BehaviorSubject(0);
// const mockOilChange$ = new BehaviorSubject(0);
// const mockElectricityChange$ = new BehaviorSubject(0);
// const mockGasChange$ = new BehaviorSubject(0);
// const mockResidualChange$ = new BehaviorSubject(0);
// const mockContractTermChange$ = new BehaviorSubject<number>(10);
// const mockContractStartDateChange$ = new BehaviorSubject<number>(2024);
// const mockInflationRateChange$ = new BehaviorSubject(2.9);
// const mockRealRate$ = new BehaviorSubject<number>(0);
// const mockNominalRate$ = new BehaviorSubject<number>(0);

describe("Form Component", () => {
	beforeEach(() => {
		render(<Form />);
	});

	it("renders the NIST EERC title", () => {
		expect(
			screen.getByRole("heading", { level: 2, name: /NIST Energy Escalation Rate Calculator/i }),
		).toBeInTheDocument();
	});

	it("renders the instructions", () => {
		expect(
			screen.getByRole("heading", {
				level: 4,
				name: /To use, complete all form fields. Computed results are shown immedately at the bottom of the page./i,
			}),
		).toBeInTheDocument();
	});
});

// Adjust the import path as necessary

// it("renders the form with initial values", () => {
// 	expect(screen.getByText(/NIST Energy Escalation Rate Calculator/i)).toBeInTheDocument();
// 	expect(screen.getByLabelText(/Data Release Year/i)).toHaveValue(DataYearType.CURRENT);
// 	expect(screen.getByLabelText(/Sector/i)).toHaveValue(SectorType.NONE);
// 	expect(screen.getByLabelText(/State/i)).toHaveValue(StateType.State);
// });

// it("updates inflation rate when changed", () => {
// 	const inflationInput = screen.getByLabelText(/Annual Inflation Rate/i);
// 	fireEvent.change(inflationInput, { target: { value: "3.5" } });
// 	expect(inflationInput).toHaveValue(3.5);
// });

// it("generates a PDF when the button is clicked", () => {
// 	const pdfButton = screen.getByRole("button", { name: /Generate PDF/i });
// 	fireEvent.click(pdfButton);

// 	// Add assertions to check if the PDF generation logic is triggered
// 	// This could involve checking if the respective subjects emit the expected values
// 	expect(mockRealRate$.value).toBeGreaterThan(0); // Example assertion
// });

// it("calculates total energy savings correctly", () => {
// 	mockCoalChange$.next(30);
// 	mockOilChange$.next(20);
// 	mockElectricityChange$.next(25);
// 	mockGasChange$.next(15);
// 	mockResidualChange$.next(10);

// 	// Assuming that totalSum$ reflects the sum of these values
// 	expect(screen.getByText(/Total Energy Cost Savings/i)).toBeInTheDocument();
// 	// Check if the displayed total matches the expected value
// 	expect(screen.getByText(/Total: 100%/i)).toBeInTheDocument(); // Adjust this based on your UI
// });

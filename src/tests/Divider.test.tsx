import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Divider from "../components/Divider";

describe("DividerComp Tooltip Tests", () => {
	beforeEach(() => {
		render(
			<>
				<Divider
					heading="Data & Fuel Rate Information"
					title="User must provide the Data Release Year (year of Annual Supplement data), Sector (customer type), and State (location)."
				/>
				<Divider
					heading="Percent of Energy Cost Savings"
					title="Percentage of energy cost savings in dollars that is attributable to one or more of the fuel types used in the project. These inputs are used to weight the escalation rate."
				/>
				<Divider
					heading="Contract Term"
					title="Contract terms include (1) Year of contract award or signing and (2) Number of years of the contract term"
				/>
				<Divider
					heading="Annual Inflation Rate"
					title="The general rate of inflation for the nominal discount rate calculation. The default rate of inflation is the long-term inflation rate calculated annually by DOE/FEMP using data from CEA and the method described in 10 CFR 436 without consideration of the 3.0 % floor for the real discount rate."
				/>
				<Divider
					heading="Annual Energy Escalation Rate"
					title="The calculated average escalation rate, stated both in real terms (excluding the rate of inflation) and in nominal terms (including the rate of inflation)."
				/>
			</>,
		);
	});

	it("renders Data & Fuel Rate divider", () => {
		expect(screen.getByText(/Data & Fuel Rate Information/i)).toBeInTheDocument();
	});
	it("renders Percent divider", () => {
		expect(screen.getByText(/Percent of Energy Cost Savings/i)).toBeInTheDocument();
	});

	it("renders Contract divider", () => {
		expect(screen.getByText(/Contract Term/i)).toBeInTheDocument();
	});
	it("renders Inflation Rate divider", () => {
		expect(screen.getByText(/Annual Inflation Rate/i)).toBeInTheDocument();
	});
	it("renders Escalation Rates divider", () => {
		expect(screen.getByText(/Annual Energy Escalation Rate/i)).toBeInTheDocument();
	});
	it("renders the tooltip for Data Release", async () => {
		const infoIcons = screen.getAllByRole("img");
		fireEvent.mouseOver(infoIcons[0]); // Hover over the third icon

		expect(
			await screen.findByText(
				/User must provide the Data Release Year \(year of Annual Supplement data\), Sector \(customer type\), and State \(location\)./i,
			),
		).toBeInTheDocument();
	});
	it("renders the tooltip for Energy Savings", async () => {
		const infoIcons = screen.getAllByRole("img");
		fireEvent.mouseOver(infoIcons[1]); // Hover over the second icon

		expect(
			await screen.findByText(
				/Percentage of energy cost savings in dollars that is attributable to one or more of the fuel types used in the project. These inputs are used to weight the escalation rate./i,
			),
		).toBeInTheDocument();
	});

	it("renders the tooltip for Contract Term", async () => {
		const infoIcons = screen.getAllByRole("img");
		fireEvent.mouseOver(infoIcons[2]); // Hover over the first icon

		expect(
			await screen.findByText(
				/Contract terms include \(1\) Year of contract award or signing and \(2\) Number of years of the contract term/i,
			),
		).toBeInTheDocument();
	});

	it("renders the tooltip for Inflation Rate", async () => {
		const infoIcons = screen.getAllByRole("img");
		fireEvent.mouseOver(infoIcons[3]); // Hover over the fourth icon

		expect(
			await screen.findByText(
				/The general rate of inflation for the nominal discount rate calculation. The default rate of inflation is the long-term inflation rate calculated annually by DOE\/FEMP using data from CEA and the method described in 10 CFR 436 without consideration of the 3.0 % floor for the real discount rate/i,
			),
		).toBeInTheDocument();
	});

	it("renders the tooltip for Escalation Rate", async () => {
		const infoIcons = screen.getAllByRole("img");
		fireEvent.mouseOver(infoIcons[4]); // Hover over the fifth icon

		expect(
			await screen.findByText(
				/The calculated average escalation rate, stated both in real terms \(excluding the rate of inflation\) and in nominal terms \(including the rate of inflation\)./i,
			),
		).toBeInTheDocument();
	});
});

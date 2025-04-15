import { ContractStartDateType, DataYearType, SectorType, StateType, inflationRates } from "../../../src/data/Formats";

describe("Form", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173");
	});

	it("should display the correct page title", () => {
		cy.title().should("eq", "EERC");
	});

	describe("has an app bar that", () => {
		it("has the home button to download user guide pdf", () => {
			cy.contains("Home").should("have.attr", "href");
		});
		it("has the BLCC button to navigate to BLCC", () => {
			cy.contains("BLCC").should("have.attr", "href");
		});
		it("has the Handbook 135 button to navigate to the handbook", () => {
			cy.contains("Handbook 135").should("have.attr", "href");
		});
		it("has the Annual Supplement button to navigate to the annual supplement", () => {
			cy.contains("Annual Supplement").should("have.attr", "href");
		});
		it("has the user guide button to download user guide pdf", () => {
			cy.contains("User Guide").trigger("mouseover").get("ul").should("be.visible");

			cy.contains("HTML").should("have.prop", "href").and("not.be.empty");
			cy.get("ul").contains("PDF").should("have.prop", "href").and("not.be.empty");
		});
	});

	describe("has a drop down with default values for ", () => {
		it("data release year", () => {
			cy.get("div[data-test-id='data-release-year']").should("exist").contains(DataYearType.CURRENT);
		});

		it("sector", () => {
			cy.get("div[data-test-id='sector']").should("exist").contains(SectorType.NONE);
		});

		it("state", () => {
			cy.get("div[data-test-id='state']").should("exist").contains(StateType.State);
		});

		it("start date", () => {
			cy.get("div[data-test-id='start-date']").should("exist").contains(ContractStartDateType.CURRENT);
		});
	});

	describe("has a number input field with defaulat values for", () => {
		it("fuel oil", () => {
			cy.get("input[data-test-id='oil']").should("exist").and("have.value", 0);
		});
		it("electricity", () => {
			cy.get("input[data-test-id='electricity']").should("exist").and("have.value", 0);
		});
		it("natural gas", () => {
			cy.get("input[data-test-id='natural-gas']").should("exist").and("have.value", 0);
		});
		it("residual oil", () => {
			cy.get("input[data-test-id='residual-oil']").should("exist").and("have.value", 0);
		});
		it("contract term", () => {
			cy.get("input[data-test-id='contract-term']").should("exist").and("have.value", 10);
		});
		it("inflation rate", () => {
			cy.get("input[data-test-id='inflation-rate']")
				.should("exist")
				.and("have.value", inflationRates[DataYearType.CURRENT]);
		});
	});

	describe("has the escalation rates set to 0 & pdf button disabled", () => {
		it("real rate should have a default value of 0.00", () => {
			cy.get("div[data-test-id='real-rate']").should("exist").should("contain.text", "0.00");
		});
		it("nominal rate should have a default value of 0.00", () => {
			cy.get("div[data-test-id='nominal-rate']").should("exist").should("contain.text", "0.00");
		});
		it("pdf button disabled", () => {
			cy.get("button[data-test-id='pdf-btn']").should("exist").and("be.disabled");
		});
	});

	describe("has the correct text in the info icons of", () => {
		it("should display the correct tooltip text on hover for each info icon", () => {
			// Array of expected texts corresponding to each info icon
			const expectedTexts = [
				"User must provide the Data Release Year (year of Annual Supplement data), Sector (customer type), and State (location).",
				"Percentage of energy cost savings in dollars that is attributable to one or more of the fuel types used in the project. These inputs are used to weight the escalation rate.",
				"Contract terms include (1) Year of contract award or signing and (2) Number of years of the contract term",
				"The general rate of inflation for the nominal discount rate calculation. The default rate of inflation is the long-term inflation rate calculated annually by DOE/FEMP using data from CEA and the method described in 10 CFR 436 without consideration of the 3.0 % floor for the real discount rate.",
				"The calculated average escalation rate, stated both in real terms (excluding the rate of inflation) and in nominal terms (including the rate of inflation).",
			];

			// Select all info icons
			cy.get("span[role='img'][aria-label='info-circle']").each((icon, index) => {
				cy.wrap(icon)
					.trigger("mouseover") // simulate hover
					.get(".ant-tooltip-inner")
					.should("exist")
					.and("be.visible") // Ensure tooltip is visible
					.and("contain.text", expectedTexts?.[index]); // Check the tooltip text
			});
		});
	});

	describe("annual inflation rate should change based on data release year", () => {
		it(`should display the correct inflation rate of ${inflationRates[DataYearType.PREVIOUS]} on selecting ${
			DataYearType.PREVIOUS
		} as the data release year`, () => {
			cy.get("div[data-test-id='data-release-year']").should("exist").click();
			cy.get(".ant-select-item").contains(DataYearType.PREVIOUS.toString()).click();
			cy.get("input[data-test-id='inflation-rate']")
				.should("exist")
				.and("have.value", inflationRates[DataYearType.PREVIOUS]);
		});
	});

	describe("coal should be displayed based on sector", () => {
		it("should NOT display the coal number input on selecting commercial as the sector", () => {
			cy.get("div[data-test-id='sector']").should("exist").click();
			cy.get(".ant-select-item").contains(SectorType.COMMERCIAL).click();
			cy.get("input[data-test-id='coal']").should("not.exist");
		});

		it("should display the coal number input on selecting industrial as the sector", () => {
			cy.get("div[data-test-id='sector']").should("exist").click();
			cy.get(".ant-select-item").contains(SectorType.INDUSTRIAL).click();
			cy.get("input[data-test-id='coal']").should("exist").and("be.visible").and("have.value", 0);
		});
	});
});

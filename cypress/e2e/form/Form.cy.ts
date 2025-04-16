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
					.and("be.visible")
					.and("contain.text", expectedTexts?.[index]);
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

	describe("reset button should reset the inflation rate based on data release year", () => {
		it("should increment the inflation rate value by 0.2 and reset to 2.9", () => {
			// Click the increase button
			cy.get("input[data-test-id='inflation-rate']")
				.should("exist")
				.click()
				.trigger("wheel", { deltaY: -100 })
				.trigger("wheel")
				.trigger("wheel", { deltaY: -100 });

			// Verify the updated value
			cy.get("input[data-test-id='inflation-rate']").should("exist").and("have.value", "3.0"); // Check if the value is now 3.0

			cy.get("button[data-test-id='reset-inflation']").should("exist").click();
			cy.get("input[data-test-id='inflation-rate']")
				.should("exist")
				.and("have.value", inflationRates[DataYearType.CURRENT]); // Check if the value is now reset to 2.9
		});

		it("should increment the inflation rate value by 0.2 and reset to 2.3", () => {
			cy.get("div[data-test-id='data-release-year']").should("exist").click();
			cy.get(".ant-select-item").contains(DataYearType.PREVIOUS.toString()).click();
			cy.get("input[data-test-id='inflation-rate']").should("exist").and("have.value", "2.3");

			// Change the inflation rate
			cy.get("input[data-test-id='inflation-rate']")
				.should("exist")
				.click()
				.trigger("wheel", { deltaY: -100 })
				.trigger("wheel")
				.trigger("wheel", { deltaY: -100 });

			// Verify the updated value
			cy.get("input[data-test-id='inflation-rate']").should("exist").and("have.value", "2.4"); // Check if the value is now 2.4

			cy.get("button[data-test-id='reset-inflation']").should("exist").click();
			cy.get("input[data-test-id='inflation-rate']").should("exist").and("have.value", "2.3"); // Check if the value is now reset to 2.3
		});
	});

	describe("total should add upto 100 without coal", () => {
		it("should set the percentage savings value to 25 each", () => {
			// Click the increase button
			cy.get("input[data-test-id='oil']").should("exist").clear().type("25").should("have.value", "25");
			cy.get("input[data-test-id='electricity']").should("exist").clear().type("25").should("have.value", "25");
			cy.get("input[data-test-id='natural-gas']").should("exist").clear().type("25").should("have.value", "25");
			cy.get("input[data-test-id='residual-oil']").should("exist").clear().type("25").should("have.value", "25");

			// Verify the total to be 100
			cy.get("input[data-test-id='total']").should("exist").and("be.disabled").and("have.value", 100);
		});
	});

	describe("total should add upto 100 with coal", () => {
		it("should set the percentage savings value to 20 each", () => {
			// Coal is visible
			cy.get("div[data-test-id='sector']").should("exist").click();
			cy.get(".ant-select-item").contains(SectorType.INDUSTRIAL).click();
			cy.get("input[data-test-id='coal']").should("exist").and("be.visible").and("have.value", 0);

			// Set the percentage savings for each fuel type
			cy.get("input[data-test-id='coal']").should("exist").clear().type("20").should("have.value", "20");
			cy.get("input[data-test-id='oil']").should("exist").clear().type("20").should("have.value", "20");
			cy.get("input[data-test-id='electricity']").should("exist").clear().type("20").should("have.value", "20");
			cy.get("input[data-test-id='natural-gas']").should("exist").clear().type("20").should("have.value", "20");
			cy.get("input[data-test-id='residual-oil']").should("exist").clear().type("20").should("have.value", "20");

			// Verify the total to be 100
			cy.get("input[data-test-id='total']").should("exist").and("be.disabled").and("have.value", 100);
		});
	});

	describe("escalation rates should be calculated correctly based on user inputs with coal", () => {
		it("should set the percentage savings value to for each source", () => {
			// select sector
			cy.get("div[data-test-id='sector']").should("exist").click();
			cy.get(".ant-select-item").contains(SectorType.INDUSTRIAL).click();
			cy.get("input[data-test-id='coal']").should("exist").and("be.visible").and("have.value", 0);

			// select state
			cy.get("div[data-test-id='state']").should("exist").click();
			cy.get(".ant-select-item").contains(StateType.CA).click();

			// Set the percentage savings for each fuel type
			cy.get("input[data-test-id='coal']").should("exist").clear().type("12").should("have.value", "12");
			cy.get("input[data-test-id='oil']").should("exist").clear().type("27").should("have.value", "27");
			cy.get("input[data-test-id='electricity']").should("exist").clear().type("33").should("have.value", "33");
			cy.get("input[data-test-id='natural-gas']").should("exist").clear().type("18").should("have.value", "18");
			cy.get("input[data-test-id='residual-oil']").should("exist").clear().type("10").should("have.value", "10");

			// Verify the total to be 100
			cy.get("input[data-test-id='total']").should("exist").and("be.disabled").and("have.value", 100);

			// verify the correct calculation of the escalation rates
			cy.get("div[data-test-id='real-rate']").should("exist").should("contain.text", "-2.20");
			cy.get("div[data-test-id='nominal-rate']").should("exist").should("contain.text", "0.64");
		});
	});

	describe("escalation rates should be calculated correctly based on user inputs without coal & pdf downloaded", () => {
		it("should set the percentage savings value to for each source", () => {
			// change data release year
			cy.get("div[data-test-id='data-release-year']").should("exist").click();
			cy.get(".ant-select-item").contains(DataYearType.PREVIOUS.toString()).click();
			cy.get("input[data-test-id='inflation-rate']").should("exist").and("have.value", "2.3");

			// select sector
			cy.get("div[data-test-id='sector']").should("exist").click();
			cy.get(".ant-select-item").contains(SectorType.COMMERCIAL).click();
			cy.get("input[data-test-id='coal']").should("not.exist");

			// select state
			cy.get("div[data-test-id='state']").should("exist").click().type("WY").type("{enter}");

			// change contract term
			cy.get("input[data-test-id='contract-term']")
				.should("exist")
				.clear({ force: true })
				.type("25")
				.should("have.value", "25");

			// Set the percentage savings for each fuel type
			cy.get("input[data-test-id='oil']").should("exist").clear().type("24").should("have.value", "24");
			cy.get("input[data-test-id='electricity']").should("exist").clear().type("37").should("have.value", "37");
			cy.get("input[data-test-id='natural-gas']").should("exist").clear().type("13").should("have.value", "13");
			cy.get("input[data-test-id='residual-oil']").should("exist").clear().type("26").should("have.value", "26");

			// Verify the total to be 100
			cy.get("input[data-test-id='total']").should("exist").and("be.disabled").and("have.value", 100);

			// change contract start date
			cy.get("div[data-test-id='start-date']").should("exist").click();
			cy.get(".ant-select-item").contains(ContractStartDateType.CURRENT3.toString()).click();

			// verify the correct calculation of the escalation rates
			cy.get("div[data-test-id='real-rate']").should("exist").should("contain.text", "0.30");
			cy.get("div[data-test-id='nominal-rate']").should("exist").should("contain.text", "2.60");

			// Click the button to generate the PDF
			cy.get("button[data-test-id='pdf-btn']").should("exist").and("not.be.disabled").click();

			// Wait for a moment to ensure the PDF has time to generate
			cy.wait(2000);

			// Check for the presence of the PDF file in the downloads folder
			cy.readFile("cypress/downloads/EERC Report.pdf").should("exist");
		});
	});
});

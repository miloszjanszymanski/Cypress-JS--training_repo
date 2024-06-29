/// <reference types="Cypress" />

describe("Test Contact Us for via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form",  ()=> {
//cypress code
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name="first_name"]').type("testing")

    });

    it("Should be able to submit a successful submission via contact us form",  ()=> {
//cypress code
    });
})
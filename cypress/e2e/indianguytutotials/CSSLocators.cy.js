
describe('CSSLocators', () => {

it("csslocators", () => {

    cy.visit("https://automationexercise.com/products")

    //cy.get("#search_product").type("T-shirt") //id tag is optional
    cy.get(".form-control.input-lg").type("T-shirt") //id tag is optional

    cy.get("#submit_search").click()

    cy.get(".title.text-center").contains("Searched Products") //Assertion



})


})
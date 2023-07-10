describe('Cypress Tags - Skip TEST SUITE', () => {


    it('Cypress TC1', () => {
        // Test Steps/Commands for TC1
        cy.log("I am in TC1");
    })

    it('Cypress TC2', () => {
        // Test Steps/Commands for TC2
        cy.log("I am in TC2");
    })

    it('Cypress TC3', () => {
        // Test Steps/Commands for TC3
        cy.log("I am only in TC3");
    })

    it.skip('Cypress TC4', () => {
        // Test Steps/Commands for TC4
        cy.log("I am in Skip TC4");
    })



})
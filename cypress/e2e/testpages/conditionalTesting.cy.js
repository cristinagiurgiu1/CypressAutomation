/// <reference types="cypress" />
const { baseUrl, envTag } = Cypress.config();
describe('Conditional Testing', () => {
    it('Should visit the homepage', () => {
        cy.visit('')
        cy.url().should('eq',baseUrl);
        
        switch (true) {
            case envTag === "cypressQA": {
                cy.get('.navbar').contains('GitHub').should('be.visible')
                cy.get('.navbar').contains('Cypress API').should('be.visible')
                break;
            }
            case envTag === "cypressPROD": {

                cy.get('[data-cy="main"]').should('be.visible')
                cy.get('[data-cy="header-login"]').should('be.visible')
                cy.get('[data-cy="header-install"]').should('be.visible')
                break;
            }
        }
    })
})
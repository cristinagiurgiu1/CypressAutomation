describe('VisitSiteMakeSomeActions', () => {

    it('Visit_HomePage', () => {

        cy.visit("https://phptravels.com/demo")
        cy.url().should('include', '/demo')
        cy.get('.mb-0').should('be.visible')
        cy.get('.mb-0').contains('Demonstration')

        cy.get('.first_name').should('be.visible')
        cy.get('.first_name').type('aaaaaaaa', {force: true}) //fingers crossed for everything except this line

   
    
    })

    

})

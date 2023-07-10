describe('My First Test', () => {

    it('IDKwhatthisdoes1st-titlepositive', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })

    it('IDKwhatthisdoes1st-title-negative', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })

})


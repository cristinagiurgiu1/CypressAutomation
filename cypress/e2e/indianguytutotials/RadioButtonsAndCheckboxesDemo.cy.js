describe("CHeck UI Elements", () => {

    it("Check Radio Buttons", () => {

        //visibility of radio buttons
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
        cy.get("input#other").should('be.visible')

        //selecting female radio button
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
        cy.get("input#other").should('not.be.checked')

        //selecting male radio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
        cy.get("input#other").should('not.be.checked')

    })
    it("Checking Check Boxes", () => {

        //visibility of radio buttons
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#monday").should('be.visible')
        cy.get("input#tuesday").should('be.visible')
        cy.get("input#wednesday").should('be.visible')
        cy.get("input#thursday").should('be.visible')
        cy.get("input#friday").should('be.visible')
        cy.get("input#saturday").should('be.visible')
        cy.get("input#sunday").should('be.visible')

        //selecting check boxes 
        cy.get("input#monday").check().should('be.checked')
        cy.get("input#tuesday").should('not.be.checked')
        cy.get("input#wednesday").should('not.be.checked')
        cy.get("input#thursday").should('not.be.checked')
        cy.get("input#friday").should('not.be.checked')
        cy.get("input#saturday").should('not.be.checked')
        cy.get("input#sunday").should('not.be.checked')

        //unselecting checkboxes
        cy.get("input#monday").uncheck().should('not.be.checked')

        //selecting/unselected all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select/unselect first/last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().uncheck().should('not.be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().uncheck().should('not.be.checked')


    })

})
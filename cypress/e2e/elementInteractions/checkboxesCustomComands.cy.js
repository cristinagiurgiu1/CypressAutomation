
describe('Checkboxes', ()=>{

    beforeEach(()=>{
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })


    it('Checks/Unchecks 1st checkbox', ()=> {

        cy.getInputByValue("option-1").should('be.visible').check().should('be.checked')
        cy.log("**** Checked ****")
        cy.getInputByValue("option-1").uncheck().should('not.be.checked')
        cy.log("**** UnChecked ****")

    })

    it('Checks/UnchecksOption 2 checkbox', ()=> {

        cy.getInputByValue("option-2").should('be.visible').check().should('be.checked')
        cy.log("**** Checked ****")
        cy.getInputByValue("option-2").uncheck().should('not.be.checked')
        cy.log("**** UnChecked ****") 

    })

    it('Checks/Unchecks Option 3 checkbox', ()=> {

        cy.getInputByValue("option-3").should('be.visible').should('be.checked')
        cy.log("**** Checked by default ****")
        //cy.wait(2000) //I just wanted to verify how it works
        cy.getInputByValue("option-3").uncheck().should('not.be.checked')
        //cy.wait(2000) //I just wanted to verify how it works
        cy.getInputByValue("option-3").check().should('be.checked')
        cy.log("**** Checked ****") 

    })

    it('Checks/Unchecks Option 4 checkbox', ()=> {

        cy.getInputByValue("option-4").should('be.visible').check().should('be.checked')
        cy.log("**** Checked ****")
        cy.getInputByValue("option-4").uncheck().should('not.be.checked')
        cy.log("**** UnChecked ****") 

})
})
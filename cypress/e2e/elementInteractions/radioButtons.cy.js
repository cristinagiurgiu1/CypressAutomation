
describe('Checkboxes', ()=>{


    it('Marks each radio button', ()=> {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        cy.get("input[value='green']").should('be.visible').should('not.be.checked')
        cy.get("input[value='blue']").should('be.visible').should('not.be.checked')
        cy.get("input[value='yellow']").should('be.visible').should('not.be.checked') // this is a comment for updating files in github 
        cy.get("input[value='orange']").should('be.visible').should('not.be.checked')
        cy.get("input[value='purple']").should('be.visible').should('not.be.checked')

        cy.get("input[value='green']").should('be.visible').check().should('be.checked')

        cy.get("input[value='blue']").should('be.visible').check().should('be.checked')
        cy.get("input[value='green']").should('be.visible').should('not.be.checked')

        cy.get("input[value='yellow']").should('be.visible').check().should('be.checked')
        cy.get("input[value='blue']").should('be.visible').should('not.be.checked')

        cy.get("input[value='orange']").should('be.visible').check().should('be.checked')
        cy.get("input[value='yellow']").should('be.visible').should('not.be.checked')

        cy.get("input[value='purple']").should('be.visible').check().should('be.checked')
        cy.get("input[value='orange']").should('be.visible').should('not.be.checked')

    })

    it('Verifies state of radio buttons', ()=> {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

        cy.get("input[value='lettuce']").should('be.visible').should('not.be.checked')
        cy.get("input[value='cabbage']").should('be.disabled')
        cy.get("input[value='pumpkin']").should('be.visible').should('be.checked')

        cy.get("input[value='lettuce']").check().should('be.checked')
        cy.get("input[value='cabbage']").should('be.disabled')
        cy.get("input[value='pumpkin']").should('not.be.checked')

    })



})
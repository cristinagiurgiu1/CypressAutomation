
describe('handle dropdowns',()=> {

    it.skip('Dropdown with select', ()=> {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Romania').should('have.value','Romania') //have.value works with classic dropdowns

    })

    it.skip('Dropdown without select', ()=> {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Romania').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Romania') //have.text works with these type of dropdowns

    })

    it.skip('Dropdown with autosugestion', ()=> {

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('moon')
        cy.get('.suggestion-title').contains('Moon landing').click()
        

    })

    it('Dinamic Dropdown ', ()=> {

        cy.visit("https://www.google.com/")
        cy.get('#L2AGLb').click()

        cy.get('#APjFqb').type('cypress automation')

        cy.wait(2000)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if($el.text()=='cypress automation tool') 
            {
                cy.wrap($el).click()
            }
        
    })

        cy.get('#APjFqb').should('have.value','cypress automation tool')
        
    })
})
describe('Contact Us', () => {

    beforeEach(()=>{ cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html") })

       it('Sends form with invalid email address',() => {
    
        cy.get("input[placeholder='First Name']").type('Cristina')
        cy.get("input[placeholder='Last Name']").type('Giurgiu')
        cy.get("input[placeholder='Email Address']").type('invalid@')
        cy.get("textarea[placeholder='Comments']").type('somecomment')
        cy.get("input[value='SUBMIT']").click()
        cy.xpath('//body').contains('Error: Invalid email address').should('be.visible') //visible
    
       })
    
       it('Sends form without required fields',() => {
    
        cy.get("input[placeholder='Email Address']").type('valid@example.com')
        cy.get("input[value='SUBMIT']").click()
        cy.xpath('//body').contains('Error: all fields are required').should('be.visible') //visible
    })
    
       it('Successfully sends form with valid data',() => {
    
        cy.get("input[placeholder='First Name']").type('vaaalid')
        cy.get("input[placeholder='Last Name']").type('valiiid')
        cy.get("input[placeholder='Email Address']").type('valid@example.com')
        cy.get("textarea[placeholder='Comments']").type('somecomment')
        cy.get("input[value='SUBMIT']").click()
        cy.url().should('be.equal', 'https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html') 
        cy.get("div[id='contact_reply'] h1").should('have.text', "Thank You for your Message!").should('be.visible') //visible
    })
      
    
    })
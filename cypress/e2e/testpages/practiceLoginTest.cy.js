describe('Fixture Files', () => {

        it('Fixture Files Practice Login Test', () => {

            cy.fixture('practiceLoginDataSet').then((data) => {
            
                cy.visit('https://practicetestautomation.com/practice-test-login/')

                data.forEach((userdata)=>{
                    cy.get("#username").type(userdata.username);
                    cy.get("#password").type(userdata.password);
                    cy.get("#submit").click();

                    if(userdata.username == "student" && userdata.password == "Password123")
                    {
                        cy.get(".post-title").should('have.text', userdata.expected);
                        cy.url().should('include', '/logged-in-successfully/');
                        cy.get('.wp-block-button__link').click();
                    }
                    else
                    {
                        cy.get("#error").should('have.text', userdata.Error)
                    }
            })
         })
     })
 })
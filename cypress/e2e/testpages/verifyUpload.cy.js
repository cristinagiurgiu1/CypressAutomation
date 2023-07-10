describe('Fixture Files2', () => {

        it('Fixture Files Images', () => {
            cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html')
            cy.get("#fileinput").selectFile('cypress/fixtures/imageFile.jpg')
            cy.get('.styled-click-button').click()
            cy.url().should('contain',"fileprocessor")
            cy.get('h2').contains("You uploaded this image:")
            cy.get('#uploadedfilename').contains("imageFile.jpg")
        
        })
    })
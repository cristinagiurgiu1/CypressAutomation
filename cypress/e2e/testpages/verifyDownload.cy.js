describe('Verify download', () => {
        it('Verify download txt file', () => {

            cy.visit('https://testpages.herokuapp.com/styled/download/download.html')
            cy.get("#direct-download").should('be.visible').click()
            cy.verifyDownload('textfile.txt')
        })
    })
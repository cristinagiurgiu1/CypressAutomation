describe('Intercept & Validate', () => {

    //this test might be useless because we verify the same things in the second one + the sucess message
    it('Test 1 - validate status code for the Post Comment request', () => {

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({ method: 'POST', url:  '/comments' }).as('postComment')

        cy.get('.network-post.btn.btn-success').contains('Post Comment').click() 

        cy.wait('@postComment').its('response.statusCode').should('eq',201)

    })

    it('Test 2 - validate comment visibility on the page', () => {

        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({ method: 'POST', url:  '/comments' }).as('postComment')

        cy.get('.network-post.btn.btn-success').contains('Post Comment').click()

        cy.wait('@postComment').its('response.statusCode').should('eq',201)

        cy.get('.network-post-comment').contains('POST successful!') 

        })

})
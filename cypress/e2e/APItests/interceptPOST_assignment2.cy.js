const dataJson = require('../../fixtures/POSTcomment')
describe('Intercept & Validate2', () => {

    beforeEach(()=>{
        cy.visit("https://example.cypress.io/commands/network-requests")
    })

    it('Test 1 - Makes assertions on the response body', () => {

        cy.intercept({ method: 'POST', url:  '/comments' }).as('postComment') 
        cy.get('.network-post.btn.btn-success').contains('Post Comment').click() 
        cy.wait('@postComment').its('response.statusCode').should('eq',201)
        cy.get('.network-post-comment').contains('POST successful!') 
        cy.get('@postComment').should(({ response }) => {
            expect(response.body).to.have.property('id', 501)
            expect(response.body).to.have.property('name','Using POST in cy.intercept()')
            expect(response.body).to.have.property('email','hello@cypress.io')
            expect(response.body).to.have.property('body','You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE')
        })

    })

    it('Test 2 - Makes assertions on the response body - stubbed response', () => {

        cy.intercept('POST', '/comments',{fixture :'POSTcomment'} ).as('postComment')
        cy.get('.network-post.btn.btn-success').contains('Post Comment').click()
        cy.wait('@postComment').its('response.statusCode').should('eq',200)
        cy.get('.network-post-comment').contains('POST successful!') 
        cy.get('@postComment').should(({ response }) => {
            expect(response.body).to.have.property('id', dataJson.id)
            expect(response.body).to.have.property('name',dataJson.name)
            expect(response.body).to.have.property('email',dataJson.email)
            expect(response.body).to.have.property('body',dataJson.body)
        })

        })

})
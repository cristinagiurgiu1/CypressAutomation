const sizes = ['iphone-8', 'iphone-x', 'iphone-xr']

describe('Viewports Practice', () => {

    sizes.forEach((size) => {

        it(`Should Display header/button on ${size} screen`, () => { 

            cy.viewport(size)
            cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
            cy.get('.navbar-header').should('be.visible')
            cy.get('.navbar-header > .btn').should('be.visible').click()
            cy.get('.navbar-collapse.navbar-ex1-collapse.collapse.in').should('be.visible')
            cy.get('.navbar-header > .btn').should('be.visible').click()

        })
    })
})
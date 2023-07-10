// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@cypress/xpath')

Cypress.Commands.add("getInputByValue", (selector) => {
    return cy.get(`input[value=${selector}]`)
})

Cypress.Commands.add('loginUser',(email, password) => {
    cy.session([email, password], () =>{
        cy.visit("https://tutorialsninja.com/demo/")
        cy.get("a[title='My Account']").click()
        cy.get("a[href='https://tutorialsninja.com/demo/index.php?route=account/login']").click()
        cy.get('#input-email').type(email)
        cy.get('#input-password').type(password)
        cy.get("input[value='Login']").click() 
    })
   


})
/// <reference types="Cypress" /> // for Cypress idk ce-i cu astea le-am pus aici
/// <reference types="cypress-xpath" /> // for xpath idk ce-i cu astea le-am pus aici, am instalat pluginul but.... nu pot sa pun 3 slashes
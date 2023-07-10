// Hooks: before, after, beforeEach, afterEach

//const { beforeEach } = require("mocha") idk why this is here

// TAGS: skip , only 

describe('MyTestSuite', ()=>{

    before(()=>{
        cy.log("**** Launch app ****");
    })

    after(()=>{
        cy.log("**** Close app ****");
    })

    beforeEach(()=>{
        cy.log("**** Login ****");
    })

    afterEach(()=>{
        cy.log("**** Logout ****");
    })

    it('search', ()=> {

        cy.log("**** searching ****");

    })

    it.skip('advanced search', ()=> {

        cy.log("**** advanced searching ****");
  
    })

    it.only('listing Products', ()=> {

        cy.log("**** Listing Products ****");
  
    })



})
import { email, password } from '../../fixtures/tutorialsNinjaUser'
describe('VisitSiteMakeSomeActions', () => {

  beforeEach(() => {
    cy.loginUser(email, password)
  })

  it('Access edit info page', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account') // why is this cy.visit necessary? Arent we in theory already on this page after the login? In practice, we are redirected to a blank page
    cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click()
    cy.url().should('contain', 'index.php?route=account/edit')

  })

  it('1st TC Delete User Name validation', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account') 
    cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click()
    cy.get('#input-firstname').clear()
    cy.get("input[value='Continue']").click()
    cy.get('.text-danger').contains('First Name must be between 1 and 32 characters!')


  })

  it('2nd TC Changing the UserName', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account') 
    cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click() 
    cy.get('#input-firstname').clear()
    cy.get('#input-firstname').type('updatedName')
    cy.get("input[value='Continue']").click()
    cy.url().should('contain', 'index.php?route=account/account')
    cy.get('.alert').contains('Success: Your account has been successfully updated.')
  })

  it('3rd TC Logout', () => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account')
    cy.get("a[title='My Account']").click()
    cy.get("body > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)").click()
    cy.url().should('contain', 'https://tutorialsninja.com/demo/index.php?route=account/logout')

  })

})

// after the first run (successful), if I try to run these TCs again, it fails...and i dont know why....If I run another file first(ex homepage.cy.js) and run this file again, everithing is ok....
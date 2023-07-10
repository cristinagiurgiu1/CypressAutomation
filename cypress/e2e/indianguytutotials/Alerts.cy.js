
describe('Alerts', () => {
//1) Javascript Alert: It will have some text and an 'OK' button
   it('Js alert',() => {


    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsAlert()']").click()
    cy.on('window:alert',(aaa)=>{
        expect(aaa).to.contain('I am a JS Alert')
    })

    //alert window authomatically closed by cypress

    cy.get('#result').should('have.text','You successfully clicked an alert')

   })

//2a) Javascript Confirm Alert: It will have some text with "OK" and "Cancel" buttons, closed by clicking OK button
   it('JS Confirm alert',() => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm',(aaa)=>{
        expect(aaa).to.contain('I am a JS Confirm')
    })

    //alert window authomatically closed by cypress

    cy.get('#result').should('have.text','You clicked: Ok')
})

//2) Javascript Confirm Alert: It will have some text with "OK" and "Cancel" buttons, close by clicking Cancel button
   it('JS Confirm alert',() => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm',(aaa)=>{
        expect(aaa).to.contain('I am a JS Confirm')
    })

    cy.on('window:confirm',() => false) //cypress closes alert window using calcel button

    cy.get('#result').should('have.text','You clicked: Cancel')
})

//3) Javascript Prompt Alert: It will have some text with a text box for user input along with "OK"
    it('JS Prompt alert',() => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   
    cy.window().then((promptwindooow)=>{

        cy.stub(promptwindooow,'prompt').returns('cefain')

    })
    cy.get("button[onclick='jsPrompt()']").click()

   // cy.on('window:prompt',() => false) //cypress closes alert window using calcel button not working :(

    cy.get('#result').should('have.text','You entered: cefain')
})
//4) Authenticated Alert

    it.only('JS Auth alert',() => {

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
   
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
})

})
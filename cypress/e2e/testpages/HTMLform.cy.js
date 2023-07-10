describe('HTML Form Example', ()=>{

    beforeEach(()=>{

         cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html") 
         cy.get("table[border='1']").should('be.visible')
         cy.get("input[name='username']").type('Name').should('have.value', 'Name') 
         cy.get("input[name='password']").type('Pass').should('have.value', 'Pass') 
         cy.get("textarea[name='comments']").should('have.value', 'Comments...')
         cy.get("input[value='cb3']").should('be.checked').uncheck().should('be.not.checked')
         cy.get("input[value='cb1']").check().should('be.checked')
         cy.get("input[value='rd2']").should('be.checked') 
         cy.get("input[value='rd1']").check().should('be.checked') 
         cy.get("select[name='multipleselect[]']").select("Selection Item 1")
         cy.get("option[value='ms1']").should('be.selected')
         cy.get("select[name='dropdown']").select("Drop Down Item 1").should('have.value', 'dd1') 

        })



    it('Fill in and successfully reach the confirmation screen', ()=> {
        cy.get("input[value='submit']").should('be.visible').click() 
        cy.url().should('eq','https://testpages.herokuapp.com/styled/the_form_processor.php') 
        cy.get("#_valueusername").contains('Name') 
        cy.get("#_valuepassword").contains('Pass') 
        cy.get("#_valuecomments").contains('Comments...') 
        cy.get("#_checkboxes").contains('cb1') 
        cy.get("#_valueradioval").contains('rd1') 
        cy.get("#_valuemultipleselect0").contains('ms1') 
        cy.get("#_valuedropdown").contains('dd1') 
        cy.get("#back_to_form").click() 
        cy.url().should('eq','https://testpages.herokuapp.com/styled/basic-html-form-test.html') 
        
    })

    it('Clears filled in data from the form when choosing to Cancel', ()=> {
        cy.get("input[value='cancel']").click() 
        cy.get("input[name='username']").should('have.value', '')
        cy.get("input[name='password']").should('have.value', '')
        cy.get("textarea[name='comments']").should('have.value', 'Comments...')
        cy.get("input[value='cb3']").should('be.checked')
        cy.get("input[value='rd2']").should('be.checked')
        cy.get("select[name='multipleselect[]']").should('be.visible')
        cy.get("option[value='ms4']").should('be.selected')
        cy.get("option[value='ms3']").should('not.be.selected')
        cy.get("select[name='dropdown']").should('have.value', 'dd3')
    
   
    })




})

describe('Dropdowns with select', ()=>{

    beforeEach(()=>{
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('#dropdowm-menu-1').should('be.visible')

        cy.log("**** Step 1&2 ****");
    })


    it('Selects SQL from the first Dropdown"', ()=> {

        cy.get('#dropdowm-menu-1').select('SQL').should('be.visible').should('have.value','sql') 

    })

    it('Selects JAVA from the first Dropdown"', ()=> {

        cy.get('#dropdowm-menu-1').select('JAVA').should('be.visible').should('have.value','java') 

    })

    it('Selects C# from the first Dropdown"', ()=> {

        cy.get('#dropdowm-menu-1').select('C#').should('be.visible').should('have.value','c#') 

    })

    it('Selects Python from the first Dropdown"', ()=> {

        cy.get('#dropdowm-menu-1').select('Python').should('be.visible').should('have.value','python') 

    })

})
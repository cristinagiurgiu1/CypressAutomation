
describe('XpathLocators', () => {

    it("find no of products", () => {
    
        cy.visit("https://automationexercise.com/products")
    
        cy.xpath("//div[@class='features_items']/div").should('have.length',35) 
        cy.xpath("//div[@class='features_items']").xpath("./div").should('have.length',35) 
       
    
    
    
    })
    
    
    })
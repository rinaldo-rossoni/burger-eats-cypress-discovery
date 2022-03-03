

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://burger-eats-qa.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Burger Eats')
    })
})
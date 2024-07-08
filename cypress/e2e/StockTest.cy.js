describe("Ensemble de test sur le stock", ()=>{
    it('Get list stock', () =>{
        cy.request('GET', '/stock/')
        .its('status')
        .should('equal', 200)
    } )
})
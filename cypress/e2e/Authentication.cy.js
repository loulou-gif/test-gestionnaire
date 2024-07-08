describe('Tests connexion', () =>{
    it('Connexion with good credential', () =>{
        cy.request('POST','/auth/login/', 
            {
                username:'test',
                password:"test1234"
            }
        )
        .its('status')
        .should('equal', 200)
    })
})
describe("Ensemble de test sur le stock", () => {
    let authToken;

    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: '/auth/login/',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                username: 'test',
                password: 'test1234'
            }
        }).then((response) => {
            authToken = response.body.key;
            console.log(response);
        });
    });

    it('Get list directions', () => {
        cy.request({
            method: 'GET',
            url: '/direction/',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
        .its('status')
        .should('equal', 200);
    });

    it('POST new product', () => {
        cy.request({
            method: 'POST',
            url: '/direction/',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: {
                direction: "Département de test",
                manager: "Julius KONAN",
            }
        })
        .its('status')
        .should('equal', 201); // Status 201 for successful POST request
    });
});

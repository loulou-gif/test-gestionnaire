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

    it('Get list stock', () => {
        cy.request({
            method: 'GET',
            url: '/stock/',
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
                category: "Electro menagé",
                name: "Fer à répasser",
                serial_number: "prod2023112894945",
                location: "Entrepot 5",
                quantity: 200,
                price: 15000,
                status: "En stock",
                details: "Produit de marque LOL couleur bleu-vert",
                image: "http://127.0.0.1:8000/media/stock/fer.jpg"
            }
        })
        .its('status')
        .should('equal', 201); // Status 201 for successful POST request
    });
});

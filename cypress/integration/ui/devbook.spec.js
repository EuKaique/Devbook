describe('Devbook app', () => {
    it('Visits Devbook', () => {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('Olá, mundo!');
    })
})
import { api } from "../../../src/services/api";

describe('Devbook app', () => {
    /* eslint-disable */
    before(() => {
        return api.delete('books?_cleanup=true').catch((err) => err)
    })

    beforeEach(() => {
       const books = [
           {'name': 'Livro 1', 'id': 1},
           {'name': 'Livro 2', 'id': 2},
           {'name': 'Livro 3', 'id': 3}
       ]

       return books.map(item => api.post('books', item, {
        headers: {'Content-Type': 'application/json'}
      }))
    })

    afterEach(() => {
        return api.delete('books?_cleanup=true').catch((err) => err)
    })

    it('Visits Devbook', () => {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('Olá, mundo!');
    })

    it('Shows a book list', () => {
        cy.visit('http://localhost:3000/');
        cy.get('div[data-test="book-list"]').should('exist');
        cy.get('div.book-item').should((books) => {
            expect(books).to.have.length(3);
            const titles = [...books].map(book => book.querySelector('h5').innerHTML)
            expect(titles).to.deep.equal(['Livro 1', 'Livro 2', 'Livro 3']);
        });
    })
})
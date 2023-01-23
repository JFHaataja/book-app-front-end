describe('Add, edit and delete books', () => {
    it('user can first add a new book, then edit and finally delete it', () => {
        cy.visit('http://localhost:3000/');

        // ADD NEW BOOK
        // search for book to verify that there isn't one already saved
        cy.findByRole('searchbox').type('A Game of Thrones');
        cy.findByText('A Game of Thrones').should('not.exist');
        cy.findByRole('searchbox').clear();
        // click Add New Book button
        cy.findByRole('button', { name: /add new book/i }).click();
        // fill in book details, click confirm and save to submit form
        cy.findByLabelText(/book title/i).type('A Game of Thrones');
        cy.findByLabelText(/author/i).type('George R.R. Martin');
        cy.findByLabelText(/description/i).type('This is a book description.');
        cy.findByRole('button', { name: /save/i }).click();
        cy.wait(2000);
        // verify that the new book was added to the list
        cy.findByText('George R.R. Martin: A Game of Thrones').should(
            'be.visible'
        );

        // EDIT BOOK
        // click edit button to open the edit mode
        cy.get('[data-cy="A Game of Thrones_edit"]').click();
        // make changes, click confirm and save
        cy.findByRole('textbox', { name: /book title/i }).clear();
        cy.findByRole('textbox', { name: /book title/i }).type('GOT');
        cy.findByRole('button', { name: /save/i }).click();
        cy.wait(3000);
        // verify that the changes were saved on the book
        cy.findByText('George R.R. Martin: GOT').should('be.visible');

        // DELETE BOOK
        // click delete button of the book called GOT
        cy.get('[data-cy="GOT_delete"]').click();
        // confirm that the book was deleted
        cy.wait(3000);
        cy.findByRole('searchbox').type('George R.R. Martin: GOT');
        cy.findByText('George R.R. Martin: GOT').should('not.exist');
    });
});

 describe('Error handling', () => {
    it('should be directed to 404 page if they type something into the browser that is not correct', () => {
      cy.visit('http://localhost:3000/incorrectroute')
      cy.get('.error-container')
        .should('exist')
        .contains('Error 404: Page Not Found')
    });

    it('should take user back to home page if they click on button', () => {
      cy.get('.recipes-btn')
        .click()
        .url()
        .should('include', 'http://localhost:3000/')
    });
  })
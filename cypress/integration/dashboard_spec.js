describe('Page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should be able to see header and description of app', () => {
    cy.get('header').first().contains('COOK THIS')
    cy.get('header').last().contains('Quick Recipes for Busy People')
  })

  it('should see a link to new page with ideas for recipes', () => {
    cy.get('.nav-ideas').contains('IDEAS').click().url().should('include', '/ideas')
  });

  it('should be able to see dropdown container and choose up to three ingredients', () => {
    cy.get('.dropdown-container').contains('Choose up to 3 ingredients')
    cy.get('.dropdown-container > :nth-child(2)')
      .select('tomatoes').should('have.value', 'tomatoes')
    cy.get('.dropdown-container > :nth-child(3)')
      .select('feta').should('have.value', 'feta')
    cy.get('.dropdown-container > :nth-child(4)')
      .select('kalamata olives').should('have.value', 'kalamata olives')
  });

  // it('should be able to search recipes after ingredients are chosen', () => {
    
  // });
})
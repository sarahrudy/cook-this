describe('Cook This user flow', () => {
  it('should be able to see header and description of app', () => {
    cy.visit('http://localhost:3000')
    cy.get('header').first().contains('COOK THIS')
    cy.get('header').last().contains('Quick Recipes for Busy People')
  })

  it('should see a link to new page with ideas for recipes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-ideas').contains('IDEAS')
  })

  it('should take user to an ideas page with images when user clicks on IDEAS', () => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-ideas').contains('IDEAS')
      .should('exist')
      .click()
      .url()
      .should('include', '/ideas')
  });

  it('should allow user to click on one of the images to take user to a recipe page with that category of recipes', () => {
    cy.get(':nth-child(1) > .ideas-img')
      .click()
      .url()
      .should('include', '/recipes')
  });

  it('should take user back to home page if they click on the home button at bottom of page', () => {
    cy.get('.recipes-btn')
      .click()
      .url()
      .should('include', 'http://localhost:3000')
  })

  it('should display a dropdown menu and allow user to choose 3 ingredients', () => {
    cy.get('.dropdown-container').contains('Choose up to 3 ingredients')
    cy.get('.dropdown-container > :nth-child(2)')
      .select('tomatoes').should('have.value', 'tomatoes')
    cy.get('.dropdown-container > :nth-child(3)')
      .select('feta').should('have.value', 'feta')
    cy.get('.dropdown-container > :nth-child(4)')
      .select('kalamata olives').should('have.value', 'kalamata olives')
    cy.get('.dropdown-btn')
      .should('exist')
      .contains('SEARCH RECIPES')
      .click()
      .url()
      .should('include', '/recipes')
  });

  it('should navigate user to recipes on click of search button', () => {
    cy.visit('http://localhost:3000')
    cy.fixture('userIngredientsData.json').as('data').then(data => {
      cy.intercept('GET', 'http://localhost:3000/recipes', {body: data});
    })
      cy.get('.dropdown-container').contains('Choose up to 3 ingredients')
      cy.get('.dropdown-container > :nth-child(2)')
        .select('tomatoes').should('have.value', 'tomatoes')
      cy.get('.dropdown-container > :nth-child(3)')
        .select('feta').should('have.value', 'feta')
      cy.get('.dropdown-container > :nth-child(4)')
        .select('kalamata olives').should('have.value', 'kalamata olives')
      cy.get('.dropdown-btn')
        .should('exist')
        .contains('SEARCH RECIPES')
        .click()
        .url()
        .should('include', '/recipes')
    })

    it('should take user to recipe url if they click on the recipe card', () => {
      cy.get(':nth-child(1) > .recipe-card > a > .recipe-card-container > .recipe-card-image')
        .click()
        .url()
        .should('include', '/recipes')
    })

    it('should navigate back home if user clicks on title of page or back button at bottom of page', () => {
      cy.get('.nav-h1')
        .contains('COOK THIS')
        .click()
        .url()
        .should('include', '/')
    })
  })

  

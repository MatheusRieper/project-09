describe('Shopping', function () {

  beforeEach(function () {
    cy.openPage()
    cy.login(
      Cypress.env('ADMIN_USER'),
      Cypress.env('ADMIN_PASS')
    )
    cy.url().should('include', '/')
  })

  it('Shoping', () => {

    cy.get('#add-to-cart-sauce-labs-backpack')
      .click()

    cy.get('#add-to-cart-sauce-labs-bike-light')
      .click()

    cy.get('[data-test="shopping-cart-link"]')
      .should('be.visible')
      .click()

    cy.get('#checkout')
      .should('be.visible')
      .click()

    cy.get('#first-name').type('test')
    cy.get('#last-name').type('testing')
    cy.get('#postal-code').type('code')

    cy.get('#continue')
      .should('be.visible')
      .click()

    cy.get('#finish')
      .should('be.visible')
      .click()

  })
})
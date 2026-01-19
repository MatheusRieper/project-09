describe('Shopping', function () {

  beforeEach(function () {
    cy.openPage()
    cy.login(
      Cypress.env('ADMIN_USER'),
      Cypress.env('ADMIN_PASS')
    )
  })

  context('when the user adds products to the cart', () => {

    it('should complete the purchase successfully', () => {

      cy.addProductToCart('sauce-labs-backpack')
      cy.addProductToCart('sauce-labs-bike-light')
      cy.addProductToCart('sauce-labs-bolt-t-shirt')
      cy.addProductToCart('sauce-labs-fleece-jacket')

      cy.goToCheckout()

      cy.fillCheckoutForm(
        Cypress.env('ADMIN_FIRSTNAME'),
        Cypress.env('ADMIN_LASTNAME'),
        Cypress.env('ADMIN_CODE')
      )
    
      cy.finishCheckout()
      cy.validatePurchaseSuccess()
    })
  })
})
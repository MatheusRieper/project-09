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

      cy.addProductToCart([
        'sauce-labs-backpack',
        'sauce-labs-bike-light',
        'sauce-labs-bolt-t-shirt',
        'sauce-labs-fleece-jacket'
      ])

      cy.removeProductToCart([
        'sauce-labs-bolt-t-shirt',
        'sauce-labs-bike-light'
      ])

      cy.goToCheckout()

      /cy.fillCheckoutForm(
        Cypress.env('ADMIN_FIRSTNAME'),
        Cypress.env('ADMIN_LASTNAME'),
        Cypress.env('ADMIN_CODE')
      )

      cy.finishCheckout()
      cy.validatePurchaseSuccess()
    })
  })
})
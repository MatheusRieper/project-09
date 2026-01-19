// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openPage', () => {

    cy.viewport(1440, 900)
    cy.visit('https://www.saucedemo.com/')
})

Cypress.Commands.add('login', (email, password) => {

    cy.get('#user-name')
        .should('be.visible')
        .clear()
        .type(email)

    cy.get('#password')
        .should('be.visible')
        .clear()
        .type(password)

    cy.get('[data-test="login-button"]')
        .should('be.visible')
        .and('be.enabled')
        .click()
})

Cypress.Commands.add('addProductToCart', (productId) => {

    cy.get(`#add-to-cart-${productId}`)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, postalCode) => {

    cy.get('#first-name')
        .clear()
        .type(firstName)

    cy.get('#last-name')
        .clear()
        .type(lastName)

    cy.get('#postal-code')
        .clear()
        .type(postalCode)
})

Cypress.Commands.add('goToCheckout', () => {

    cy.get('[data-test="shopping-cart-link"]')
        .should('be.visible')
        .click()

    cy.get('#checkout')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('finishCheckout', () => {
    cy.get('#continue')
        .should('be.visible')
        .click()

    cy.get('#finish')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('validatePurchaseSuccess', () => {

    cy.contains('Thank you for your order!')
    .should('be.visible')
}) 

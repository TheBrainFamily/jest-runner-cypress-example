describe('Kitchen Sink', function () {
  it('passes a test', function () {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Kitchen Sink')
  })
  it('passes a different test', function () {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Kitchen Sink')
  })
  it('passes an even different test', function () {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Kitchen Sink')
  })
})

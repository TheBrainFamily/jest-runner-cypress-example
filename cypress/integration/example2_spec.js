describe('Kitchen Sink', function () {
  it('passes a test', function () {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Kitchen Sink')
  })

})

const plugin = require('../plugins/index')
// above line is not needed here, but see what happens when you change that file (plugins/index)
// this test will reload in watch mode - the other one won't
describe('Broken Kitchen Sink', function () {
  it('fails a test', function () {
    cy.visit('http://google.com')
    cy.title().should('include', 'Kitchen Sink abc')
  })
  it('but other one passes', function () {
    cy.visit('http://google.com')
    cy.title().should('include', 'google')
  })
})

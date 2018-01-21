//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Kitchen Sink', function () {
  it('.should() - assert that <title> is correct abc', function () {
    // https://on.cypress.io/visit
    cy.visit('https://example.cypress.io')

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', 'Kitchen Sink')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })

  // context('Querying', function () {
  //   beforeEach(function () {
  //     // Visiting our app before each test removes any state build up from
  //     // previous tests. Visiting acts as if we closed a tab and opened a fresh one
  //     cy.visit('https://example.cypress.io/commands/querying')
  //   })
  //
  //   // Let's query for some DOM elements and make assertions
  //   // The most commonly used query is 'cy.get()', you can
  //   // think of this like the '$' in jQuery
  //
  //   it('cy.get() - query DOM elements', function () {
  //     // https://on.cypress.io/get
  //
  //     // Get DOM elements by id
  //     cy.get('#query-btn').should('contain', 'Button')
  //
  //     // Get DOM elements by class
  //     cy.get('.query-btn').should('contain', 'Button')
  //
  //     cy.get('#querying .well>button:first').should('contain', 'Button')
  //     //              ↲
  //     // Use CSS selectors just like jQuery
  //   })
  //
  //   it('cy.contains() - query DOM elements with matching content', function () {
  //     // https://on.cypress.io/contains
  //     cy.get('.query-list')
  //       .contains('bananas').should('have.class', 'third')
  //
  //     // we can pass a regexp to `.contains()`
  //     cy.get('.query-list')
  //       .contains(/^b\w+/).should('have.class', 'third')
  //
  //     cy.get('.query-list')
  //       .contains('apples').should('have.class', 'first')
  //
  //     // passing a selector to contains will yield the selector containing the text
  //     cy.get('#querying')
  //       .contains('ul', 'oranges').should('have.class', 'query-list')
  //
  //     // `.contains()` will favor input[type='submit'],
  //     // button, a, and label over deeper elements inside them
  //     // this will not yield the <span> inside the button,
  //     // but the <button> itself
  //     cy.get('.query-button')
  //       .contains('Save Form').should('have.class', 'btn')
  //   })
  //
  //   it('.within() - query DOM elements within a specific element', function () {
  //     // https://on.cypress.io/within
  //     cy.get('.query-form').within(function () {
  //       cy.get('input:first').should('have.attr', 'placeholder', 'Email')
  //       cy.get('input:last').should('have.attr', 'placeholder', 'Password')
  //     })
  //   })
  //
  //   it('cy.root() - query the root DOM element', function () {
  //     // https://on.cypress.io/root
  //     // By default, root is the document
  //     cy.root().should('match', 'html')
  //
  //     cy.get('.query-ul').within(function () {
  //       // In this within, the root is now the ul DOM element
  //       cy.root().should('have.class', 'query-ul')
  //     })
  //   })
  // })

})

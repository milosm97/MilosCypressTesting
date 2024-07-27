import 'cypress-xpath';

/// <reference types="cypress" /> 

describe('Google Test', () => {
  it('Clicks on "Prijať všetko" button', () => {
    
  cy.visit('https://www.google.com/')
  cy.wait(2000) 
  cy.xpath('//div[text()="Prijať všetko"]').click()
  cy.get('#APjFqb', {timeout: 6000}).type('test{enter}')
  cy.contains('Videá').click()
  })
})



import 'cypress-xpath';

/// <reference types="cypress" /> 

describe('Google Test', () => {
  it('Clicks on "Prijať všetko" button', () => {
    
  cy.visit('https://www.google.com/')
  cy.wait(2000) 
  cy.xpath('//div[text()="Prijať všetko"]').click()
  cy.get('#APjFqb', {timeout: 6000}).type('test{enter}')

  cy.get(':nth-child(1) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
  })
})



import 'cypress-xpath';

/// <reference types="cypress" /> 

describe('login', () => {
  it('login test', () => {
    
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  cy.get('.oxd-sheet > :nth-child(1)').invoke('text').then((username) => {
    const getUsername = username
    const correctUsername = getUsername.split(':')[1].trim();
    cy.log(`The text is: ${correctUsername}`)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(correctUsername)
  })

  cy.get('.oxd-sheet > :nth-child(2)').invoke('text').then((password) => {
    const getPassword = password
    const correctPassword = getPassword.split(':')[1].trim();
    cy.log(`The text is: ${correctPassword}`)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(correctPassword)
  })

  cy.get('.oxd-button').click()
  cy.get(':nth-child(1) > .oxd-main-menu-item').click()

  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  cy.get('.oxd-select-dropdown > :nth-child(2)').click()
  cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  cy.wait(2000)

  /*  
  cy.get('.oxd-table-card > .oxd-table-row').each(($row) => {
    // Pre každý riadok získaj obsah buniek na konkrétnych pozíciách
    cy.wrap($row).find(':nth-child(3) > div').should('contain.text', 'Admin');
  })
  */
  cy.get('.oxd-table-card > .oxd-table-row').then(($rows) => {
    // Získaj počet riadkov
    const count = $rows.length;
    cy.log(`Number of rows: ${count}`)
    cy.wrap($rows).each(($row) => {
    cy.wrap($row).find(':nth-child(3) > div').should('contain.text', 'Admin');
      })
    })
  })
})




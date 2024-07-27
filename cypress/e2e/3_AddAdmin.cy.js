import 'cypress-xpath';

/// <reference types="cypress" /> 

describe('pridanie admina', () => {
  it('pridanie admina', () => {
    
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
  //získanie mena a vloženie do username
  cy.get('.oxd-sheet > :nth-child(1)').invoke('text').then((username) => {
    const getUsername = username
    const correctUsername = getUsername.split(':')[1].trim();
    cy.log(`The text is: ${correctUsername}`)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(correctUsername)
  })

  //získanie hesla a vloženie do password
  cy.get('.oxd-sheet > :nth-child(2)').invoke('text').then((password) => {
    const getPassword = password
    const correctPassword = getPassword.split(':')[1].trim();
    cy.log(`The text is: ${correctPassword}`)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(correctPassword)
  })

  //potvrdenie loginu a zobrazenie Adminov
  cy.get('.oxd-button').click()
  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
  //potvrdenie a userRole
  cy.get('.orangehrm-header-container > .oxd-button').click()
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
  //Status
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
  //EmployeeName
  cy.get('.oxd-autocomplete-text-input > input').type('test')
  cy.wait(2000)
  cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

  //Username
  cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("testikMM1")
  //password
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("testikMM1")
  //passwordConfirm
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("testikMM1")
  //Save
  cy.get('.oxd-button--secondary').click()
  })
})




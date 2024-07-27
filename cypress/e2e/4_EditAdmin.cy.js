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

  cy.get('.oxd-table-card > .oxd-table-row').then(($rows) => {
    // Získaj počet riadkov
    const count = $rows.length;
    cy.log(`Number of rows: ${count}`);

    // Premenná na sledovanie, či bol text nájdený v riadku po prvom
    let foundInLaterRow = false;

    cy.wrap($rows).each(($row, index) => {
      // Skontroluj, či tento riadok obsahuje text 'testikMM1'
      cy.wrap($row).find(':nth-child(2) > div').then(($cell) => {
        // Skontroluj, či text 'testikMM1' je prítomný
        if ($cell.text().includes('testikMM1')) {
          if (index > 0) { // Skontroluj, či riadok nie je prvý
            foundInLaterRow = true;
            cy.log(`Found "testikMM1" in row ${index + 1}`);
            // Klikni na tlačidlo v tomto riadku
            cy.wrap($row).find('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
            return false; // Ukončí cyklus
          }
        }
      });
    });

    // Ak text nebol nájdený v žiadnom riadku po prvom, zaloguj správu
    if (!foundInLaterRow) {
      cy.log('Text "testikMM1" was not found in any row after the first one.');
    }
  });

  cy.wait(3000)
  //zaškrtnutie checkboxu
  cy.get('.oxd-checkbox-input').click()
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('testikMM2')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('testikMM2')
  cy.get('.oxd-button--secondary').click()
  cy.get('.oxd-text--toast-message').should('be.visible').should('contain.text', 'Successfully Updated')
  })
})




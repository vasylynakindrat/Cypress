/// <reference types="cypress" />

describe ('login', () => {
    before('open login page', () => {
        cy.visit('http://localhost:1667/#/login');
    })
    
    it('log in', () => {
        cy.get(':nth-child(1) > .form-control').type('wrong.matilda@mail.com');
        cy.get(':nth-child(2) > .form-control').type('Vv19981802');
        cy.get('.btn').click();
        
        cy.get('.navbar').contains('Matilda').should('exist');

    });
});
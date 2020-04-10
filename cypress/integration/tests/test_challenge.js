/// <reference types="cypress" />




describe('TU-01', function() {
  it('Verify the homepage opens and has the correct title', function() {
    //Open the homepage
    cy.visit(Cypress.env('baseUrl'));
    
    //Gets the title of the page once it loads and calls it "title"
    cy.title().should('eq', 'Labor - Controle de Horas');
  });
});

describe('TU-02', function() {
    it('Check Initial pricing on the homepage', function() {
      //Open the homepage
      cy.visit(Cypress.env('baseUrl'));
      
      //Assert that has initial pricing details on the homepage
      cy.get('.css-31mgl0 > .css-1njitdr').should('have.value', 'R$ 249,00/ano');
    });
});

describe('TU-03', function() {
    it('Check functionality of the "planos" menu', function() {
      //Open the homepage
      cy.visit(Cypress.env('baseUrl'));
      
      //Click on the Pricing tab
      cy.get('.css-17rqx3h > [href="/planos"]').click();

      //Assert
      cy.get('.css-bn4p1g').should('have.text', 'Planos');
    });
});

describe('TU-04', function(){
    it('Check signup fields when submitted as empty',function(){
    //Open the homepage
    cy.visit(Cypress.env('baseUrl'));

    //Click on "Entrar"
    cy.get('.css-ympbks > [href="https://app.getlabor.com.br/entrar"]').click();

    //Click on "Comece agora"
    cy.get('.css-1u1jkkz').click();

    //Click on "Cadastrar" without fill any field
    cy.get('.css-1s8t1jb').click();

    //Assert that every field is mandatory to fill
    cy.get(':nth-child(2) > .css-rmt2c8').should('have.text', 'Campo obrigatório');
    cy.get('.e1nk4wcv1 > .css-rmt2c8').should('have.text', 'Campo obrigatório');
    cy.get(':nth-child(4) > .css-rmt2c8').should('have.text', 'Campo obrigatório');
    cy.get('.css-79elbk > .css-135rwlj > .css-rmt2c8').should('have.text', 'Campo obrigatório');
    });
});

describe('TU-05', function(){
    it('Check signup of existent user "email@test.com"',function(){
    //Open the homepage
    cy.visit(Cypress.env('baseUrl'));

    //Click on "Entrar"
    cy.get('.css-ympbks > [href="https://app.getlabor.com.br/entrar"]').click();

    //Click on "Comece agora"
    cy.get('.css-1u1jkkz').click();

    //Sign up with an existent user
    cy.get(':nth-child(2) > .css-pjp27w').type('Rafael Costa');
    cy.get('.e1nk4wcv1 > .css-pjp27w').select('Desenvolvimento de Software');
    cy.get(':nth-child(4) > .css-pjp27w').type('email@test.com');
    cy.get('.css-79elbk > .css-135rwlj > .css-pjp27w').type('1234')

    //Click on "Cadastrar" button
    cy.get('.css-1s8t1jb').click();

    //Assert that the e-mail "email@test.com" already exists
    cy.get('.e1w0gikl6').should('have.text', 'Already registered!');
    });
});

describe('TU-06', function(){

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testemail = `testemail${id}`

    it('Check a valid sign up', function(){
    //Open the homepage
    cy.visit(Cypress.env('baseUrl'));

    //Click on "Entrar"
    cy.get('.css-ympbks > [href="https://app.getlabor.com.br/entrar"]').click();

    //Click on "Comece agora"
    cy.get('.css-1u1jkkz').click();

    //Sign up with an existent user
    cy.get(':nth-child(2) > .css-pjp27w').type('Rafael Costa');
    cy.get('.e1nk4wcv1 > .css-pjp27w').select('Desenvolvimento de Software');
    cy.get(':nth-child(4) > .css-pjp27w').type(testemail + '@gmail.com');
    cy.get('.css-79elbk > .css-135rwlj > .css-pjp27w').type('1234')

    //Click on "Cadastrar" button
    cy.contains('Cadastrar').click();

    //Assert that the Sign Up process was successful
    cy.url().should('not.eq', 'https://app.getlabor.com.br/cadastrar');
    });
});

describe('TU-07', function(){
    it('Check a valid login redirection', function(){
    
    //Open the homepage
    cy.visit(Cypress.env('baseUrl'));
    
    //Click on "Entrar in the Home Page"
    cy.get('.css-ympbks > [href="https://app.getlabor.com.br/entrar"]').click();
    
    //Login
    cy.get(':nth-child(2) > .css-pjp27w').type('email@test.com');
    cy.get('.css-79elbk > .css-135rwlj > .css-pjp27w').type('1234');

    //Click on Entrar in the Login area
    cy.get('.css-1s8t1jb').click();

    //Assert that the Login was made successfully
    cy.url().should('not.eq', 'https://app.getlabor.com.br/entrar');
    });
});
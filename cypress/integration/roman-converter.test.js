
describe.only('Given Roman converter app', () => {
    //arrange
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should renders an input and a submit button', () => {
        //expect
        cy.contains('Roman Converter');
        cy.get('input.converter-input').should('exist');
        cy.get('button.converter-submit-btn').should('exist');
    });

    it('when the form is submitted with no value, should show an error msg', () => {
        //act
        cy.contains('Convertir').click();

        //assert
        cy.get('.error-msg')
            .invoke('text')
            .should('match', /debes ingresar un número válido/i);
    });

    it('when the form is submitted with the value "5200", should show an error msg', () => {
        //act
        cy.get('input')
            .type('5200')
            .should('have.value', '5200');
        cy.contains('Convertir').click();

        //assert
        cy.get('.error-msg')
            .should('have.text', 'El número ingresado es mayor que 3999, intenta con otro número');
    });

    it('when the form is submitted with the value "52", should show a msg "LII" ', () => {
        //arrange
        cy.get('input')
            .type('52')
            .should('have.value', '52');
        cy.contains('Convertir')
            .click();

        //assert
        cy.get('.result-msg')
            .invoke('text')
            .should('match', /lii/i);
    });

});
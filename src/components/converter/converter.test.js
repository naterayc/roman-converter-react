import React from 'react';
import { render, screen } from '@testing-library/react';
import Converter from './converter';

describe('given the form component, when its mounted', () => {
    //arrange
    beforeEach(() => render(<Converter />));
    it('should render an introductory heading', () => {
        //act
        const heading = screen.getByRole('heading', { name: /convierte cualquier número entero entre 1 y 3999 en romano/i });
        //assert
        expect(heading).toBeInTheDocument();
    });

    it('should render a form', () => {
        //act
        const form = screen.getByTestId('form');
        //assert
        expect(form).toBeInTheDocument();
    });

});
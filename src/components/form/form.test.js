import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './form';

describe('given the form component, when its mounted', () => {
    it('should exits an input', () => {
        //arrange
        render(<Form />);
        //act
        const input = screen.getByPlaceholderText(/número/i);
        //assert
        expect(input).toBeInTheDocument();
    });

    it('should exits a submit button', () => {
        //arrange
        render(<Form />);
        //act
        const btn = screen.getByRole('button', { name: /convertir/i });
        //assert
        expect(btn).toBeInTheDocument();
    });
});

describe('given the form component, when the user submit the form', () => {
    it('if the input is empty it should renders an error message', () => {
        //arrange
        render(<Form />);

        ////// compruebo que el mensaje no exista antes del evento ////
        expect(screen.queryByText(/debes ingresar un número válido/i)).not.toBeInTheDocument();
        ////// compruebo que el mensaje no exista antes del evento ////

        //act
        const btn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.click(btn);
        const errorMsg = screen.queryByText(/debes ingresar un número válido/i);
        //assert
        expect(errorMsg).toBeInTheDocument();
    });

    it('for the entry 6 it should renders a span VI', () => {
        //arrange
        render(<Form />);

        ////// compruebo que el mensaje no exista antes del evento ////
        expect(screen.queryByText(/vi/i)).not.toBeInTheDocument();
        ////// compruebo que el mensaje no exista antes del evento ////

        //act
        const input = screen.getByPlaceholderText(/número/i);
        const btn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: 6 } })
        fireEvent.click(btn);
        const output = screen.queryByText(/vi/i);
        //assert
        expect(input.value).toBe('6');
        expect(output).toBeInTheDocument();
    });

    it('for the entry 25 it should renders a span XXV', () => {
        //arrange
        render(<Form />);

        ////// compruebo que el mensaje no exista antes del evento ////
        expect(screen.queryByText(/xxv/i)).not.toBeInTheDocument();
        ////// compruebo que el mensaje no exista antes del evento ////

        //act
        const input = screen.getByPlaceholderText(/número/i);
        const btn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: 25 } })
        fireEvent.click(btn);
        const output = screen.queryByText(/xxv/i);
        //assert
        expect(input.value).toBe('25');
        expect(output).toBeInTheDocument();
    });

    it('for the entry 4200 it should renders an error message', () => {
        //arrange
        render(<Form />);

        ////// compruebo que el mensaje no exista antes del evento ////
        expect(screen.queryByText(/el número ingresado es mayor que 3999, intenta con otro número/i)).not.toBeInTheDocument();
        ////// compruebo que el mensaje no exista antes del evento ////

        //act
        const input = screen.getByPlaceholderText(/número/i);
        const btn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: 4200 } })
        fireEvent.click(btn);
        const errorMsg = screen.queryByText(/el número ingresado es mayor que 3999, intenta con otro número/i);
        //assert
        expect(input.value).toBe('4200');
        expect(errorMsg).toBeInTheDocument();
    });

    it('for the entry e it should renders an error message', () => {
        //arrange
        render(<Form />);

        ////// compruebo que el mensaje no exista antes del evento ////
        expect(screen.queryByText(/debes ingresar un número válido/i)).not.toBeInTheDocument();
        ////// compruebo que el mensaje no exista antes del evento ////

        //act
        const input = screen.getByPlaceholderText(/número/i);
        const btn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: 'e2' } })
        fireEvent.click(btn);
        const errorMsg = screen.queryByText(/debes ingresar un número válido/i);
        //assert
        expect(input.value).toBe('');
        expect(errorMsg).toBeInTheDocument();
    });

    it('for the entry e it should renders an error message', () => {
        //arrange
        render(<Form />);

        ////// compruebo que el mensaje no exista antes del evento ////
        expect(screen.queryByText(/debes ingresar un número válido/i)).not.toBeInTheDocument();
        ////// compruebo que el mensaje no exista antes del evento ////

        //act
        const input = screen.getByPlaceholderText(/número/i);
        const btn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: '-55' } })
        fireEvent.click(btn);
        const errorMsg = screen.queryByText(/debes ingresar un número válido/i);
        //assert
        expect(input.value).toBe('-55');
        expect(errorMsg).toBeInTheDocument();
    });
});
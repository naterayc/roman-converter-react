import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ConverterForm from '../components/converterForm/converterForm'

//arrange
beforeEach(() => render(<ConverterForm />));
describe('given the form component, when its mounted', () => {
    it('should render an input', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        //assert
        expect(input).toBeInTheDocument();
    });

    it('should render a submit button', () => {
        //act
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        //assert
        expect(submitBtn).toBeInTheDocument();

    });

    it('shouldnt exists error messages', () => {
        //act and assert
        expect(screen.queryByText(/'debes ingresar un número válido'/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/'el número ingresado es mayor que 3999, intenta con otro número'/i)).not.toBeInTheDocument();
    })
});

describe('given the form component, when the input changes', () => {
    it('the input should only accept digits', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        fireEvent.change(input, { target: { value: 'hgdj' } })
        //assert
        expect(input.value).toBe('');
    });
});

describe('given the form component, when the form is submited', () => {
    it('with the value 6 it should renders a heading with the value "VI" ', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: '6' } });
        fireEvent.click(submitBtn);
        const output = screen.getByRole('result');
        //assert
        expect(output).toBeInTheDocument();
        expect(output.textContent.trim()).toBe('VI');
    });

    it('with the value 510 it should renders a heading with the value "DX" ', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: '510' } });
        fireEvent.click(submitBtn);
        const output = screen.getByRole('result');
        //assert
        expect(output).toBeInTheDocument();
        expect(output.textContent.trim()).toBe('DX');
    });

    it('with the value "" it should renders a error message', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(submitBtn);
        const errorMsg = screen.getByTestId('error');
        //assert
        expect(errorMsg.textContent.trim()).toBe('Debes ingresar un número válido');
    });

    it('with the value "5600" it should renders a error message', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: '5600' } });
        fireEvent.click(submitBtn);
        const errorMsg = screen.getByTestId('error');
        //assert
        expect(errorMsg.textContent.trim()).toBe('El número ingresado es mayor que 3999, intenta con otro número');
    });

    it('with the value "-56" it should renders a error message', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: '-56' } });
        fireEvent.click(submitBtn);
        const errorMsg = screen.getByTestId('error');
        //assert
        expect(errorMsg.textContent.trim()).toBe('Debes ingresar un número válido');
    });

    it('with the value "e25" it should renders a error message', () => {
        //act
        const input = screen.getByPlaceholderText(/número a convertir/i);
        const submitBtn = screen.getByRole('button', { name: /convertir/i });
        fireEvent.change(input, { target: { value: 'e25' } });
        fireEvent.click(submitBtn);
        const errorMsg = screen.getByTestId('error');
        //assert
        expect(errorMsg.textContent.trim()).toBe('Debes ingresar un número válido');
    });
});
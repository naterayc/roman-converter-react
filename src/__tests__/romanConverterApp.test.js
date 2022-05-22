import React from "react";
import { render, screen } from "@testing-library/react";
import RomanConverterApp from '../components/romanConverterApp';

describe('given the romanConverterApp component, when its mounted', () => {

    it('should renders without crashing', () => {
        //arrange
        const component = render(<RomanConverterApp />);
        //act
        const app = component.container.querySelector('.app');
        //assert
        expect(app).toBeInTheDocument();
    });

    it('should render a header', () => {
        //arrange
        const component = render(<RomanConverterApp />);
        //act
        const header = component.container.querySelector('header');
        //act
        expect(header).toBeInTheDocument();
    })

    it('should render a descriptive title', () => {
        //arrange
        render(<RomanConverterApp />);
        //act
        const title = screen.getByRole('heading', { name: /Convierte en romano cualquier número entre 1 y 3999/i })
        //assert
        expect(title).toBeInTheDocument();
    })

    it('should render a form', () => {
        //arrange
        const component = render(<RomanConverterApp />);
        //act
        const form = component.container.querySelector('form');
        //assert
        expect(form).toBeInTheDocument();
    })
});
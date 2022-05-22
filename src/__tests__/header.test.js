import React from "react";
import { render, screen } from "@testing-library/react";
import Header from '../components/header/header';

describe('given the header component,', () => {
    it('should renders', () => {
        //arrange
        render(<Header />);
        //act
        const headerText = screen.getByText(/roman converter/i)
        //assert
        expect(headerText).toBeInTheDocument();
    })
});